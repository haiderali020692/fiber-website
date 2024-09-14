import React from 'react';
import styles from '../../styles/product.module.scss';

const Product = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.productCard}>
        <img
          className={styles.productImage}
          src="../../images/sec.jpg"
          alt="Product"
        />
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>Amazing Product</h1>
          <p className={styles.productDescription}>
            This product is top-notch too! It has everything you need to improve your life.
          </p>
          <span className={styles.productPrice}>$99.99</span>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;







