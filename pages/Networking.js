import React from 'react';
import data from '../public/data/networkingproducts.json';
import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';
import styles from '../styles/Networking.module.scss'; // Import SCSS styles
import { motion } from 'framer-motion';

const Services = () => {
  const { networking } = data.items;

  return (
    <div className={styles.servicesPage}>
      <Navbar />
      <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{
           type: "tween",
           duration: 2,  // Duration of the animation in seconds
           ease: "easeOut"  // Easing function for smooth animation
         }}
        >  
      <h1 className={styles.title1}>Networking Products</h1>
      <p className={styles.mb4}>We are committed to install high quality
ethernet cables and access points to create
secure and fast internet throughout the house
or office.</p>
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
      </motion.div>
      <Footer />
    </div>
  );
};

export default Services;

