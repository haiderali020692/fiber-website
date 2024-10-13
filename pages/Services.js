import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Services.module.scss';
import Link from 'next/link';
import Footer from './Footer';
import data from "../public/categories.json";
import { motion } from 'framer-motion';

const Services = () => {

  const { responsive } = data.items;

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
      <h1>Our Services</h1>
      <div className={styles.servicesList}>
        <div>
      <ol className={styles.serviceCategory}>
        {responsive.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt="slides" width="1000" height="600"/>
            <Link href={`../${item.title}`}>
            <h2>{item.title}</h2>
            </Link>
            <p>{item.text}</p>
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
