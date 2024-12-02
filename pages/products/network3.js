import React from 'react';
import styles from '../../styles/product.module.scss';
import Link from 'next/link'
import { motion } from 'framer-motion';

const Product = () => {
  return (
    <div className={styles.productPage}>
      
      <h1 style={{color: "white"}}>Access Points</h1>
      <Link href={`/Networking`}><button className={styles.buyButton}>Back to Networking</button></Link>
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
        <img
          className={styles.productImage}
          src="../../images/ap1.png"
          alt="Product"
        />
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>EAP110 TP-Link Wireless-N Ceiling Mount Access Point </h1>
          <p className={styles.productDescription}>
            This product is top-notch! It has everything you need to improve your life.
          </p>
          <span className={styles.productPrice}>$99.99</span>
          <Link href={`/products/product/wireless1`}><button className={styles.buyButton}>Check it out</button></Link>
        </div>
      </div>
      </motion.div>
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
        <img
          className={styles.productImage}
          src="../../images/network.jpg"s
          alt="Product"
        />
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>EAP110 TP-Link Wireless-N Ceiling Mount Access Point </h1>
          <p className={styles.productDescription}>
            This product is top-notch! It has everything you need to improve your life.
          </p>
          <span className={styles.productPrice}>$99.99</span>
          <button className={styles.buyButton}>Call Us or Email!</button>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Product;















