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
import Carousel from './Slider';



const Product = () => {

    const images = [
        { src: "../../../images/ap1.png", alt: "Product 1" },
        { src: "../../../images/sec.jpg", alt: "Product 2" },
        { src: "../../../images/wall.jpg", alt: "Product 3" },
      ];

  return (
    <div className={styles.productPage}>
      <div className={styles.productCard}>
        <Carousel images={images} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>EAP110 TP-Link Wireless-N Ceiling Mount Access Point </h1>
          <p className={styles.productDescription}>
            This product is top-notch! It has everything you need to improve your life.
          </p>
          <span className={styles.productPrice}>$99.99</span>
          <button className={styles.buyButton}>Call Us or Email!</button>
        </div>
      </div>
    </div>
  );
};

export default Product;







