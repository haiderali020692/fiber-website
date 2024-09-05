import React from 'react';
import data from '../public/data/networkingproducts.json';
import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';
import styles from '../styles/Networking.module.scss'; // Import SCSS styles

const Services = () => {
  const { networking } = data.items;

  return (
    <div className={styles.servicesPage}>
      <Navbar />  
      <h1 className={styles.title}>Networking Products</h1>
      <div className={styles.servicesList}>
        <div>
          <ol className={styles.serviceCategory}>
            {networking.map((item) => (
              <li key={item.id} className={styles.post}>
                <img src={item.imageUrl} alt="slides" className={styles.img} />
                <Link href={`/products/${item.route}`}>
                  <h2 className={styles.title}>{item.title}</h2>
                </Link>
                <p className={styles.mb4}>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

