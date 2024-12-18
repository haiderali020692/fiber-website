/*import styles from '../../styles/ProductCategory.module.scss'; // Import SCSS module
import { useRouter } from 'next/router';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function ProductCategory({ products }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
            />
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const category = params.category;
  const filePath = path.join(process.cwd(), `./public/data/${category}.json`);
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  return {
    props: {
      products,
    },
  };
}

<img
          className={styles.productImage}
          src="../../../images/ap1.png"
          alt="Product"
        />
        
        */

// pages/product.js

import React from 'react';
import styles from '../../../styles/products.module.scss';
import Slider from "react-slick";
import Link from 'next/link'
import { motion } from 'framer-motion';






const Product = () => {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


    const images = [
        { src: "../../../images/ap1.png", alt: "Product 1" },
        { src: "../../../images/sec.jpg", alt: "Product 2" },
        { src: "../../../images/wall.jpg", alt: "Product 3" },
      ];
      

        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          showThumbs: false,
          swipeToSlide: true,
          adaptiveHeight: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        };


  return (
    <div className={styles.productPage}>
      <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      >
      <div className={styles.productCard}>
      <div className="carousel1">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image1" />
          </div>
        ))}
      </Slider>
    </div>
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>EAP110 TP-Link Wireless-N Ceiling Mount Access Point </h1>
          <p className={styles.productDescription}>
            This product is top-notch! It has everything you need to improve your life.
          </p>
          <span className={styles.productPrice}>$99.99</span>
          <Link href={`/Contact`}><button className={styles.buyButton}>Call Us or Email!</button></Link>
          <Link href={`/products/network1`}><button className={styles.buyButton}>Back to Access Points</button></Link>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Product;







