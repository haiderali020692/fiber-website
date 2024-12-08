// pages/about.js
import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Home.module.scss';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Image from 'next/image'

const About = () => {
  return (
    <div className={`${styles.bggray} ${styles.fadeIn}`}>
      <Navbar />
      <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      >
      <div className={`${styles.mxauto} ${styles.maxw4xl} ${styles.p8}`}>
        
        <h1 className={`${styles.text3xl} ${styles.fontbold} ${styles.mb4}`}>A Little About Us</h1>
        <Image
        className={styles.imageWrapper2}
        src="/images/6015590.jpg" // Path to your image in the public folder
        alt="about1"
        width={600} // Desired width of the image
        height={400} // Desired height of the image
        priority // Ensures this image loads faster
        
        ></Image>
        <p className={`${styles.textlg} ${styles.textgray600} ${styles.leading7}`}>
        Having a Slow or fault with your internet connection?.
We have experienced technicians to resolve any fault and
provide expert solution to boost up the internet speed.
        </p>
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
      <div className={`${styles.mxauto} ${styles.maxw4xl} ${styles.p8}`}>
        <h1 className={`${styles.text3xl} ${styles.fontbold} ${styles.mb4}`}>What do we provide</h1>
        <Image
        className={styles.imageWrapper2}
        src="/images/5200686.jpg" // Path to your image in the public folder
        alt="about3"
        width={600} // Desired width of the image
        height={400} // Desired height of the image
        priority // Ensures this image loads faster
        ></Image>
        <p className={`${styles.textlg} ${styles.textgray600} ${styles.leading7}`}>
        We use High quality CAT 7 ethernet cables for networking
throughout your house or Office with guarantee fast
and reliable internet speed.
        </p>
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
      <div className={`${styles.mxauto} ${styles.maxw4xl} ${styles.p8}`}>
        <h1 className={`${styles.text3xl} ${styles.fontbold} ${styles.mb4}`}>We also have</h1>
        <Image
        className={styles.imageWrapper2}
        src="/images/4117551.jpg" // Path to your image in the public folder
        alt="about3"
        width={600} // Desired width of the image
        height={400} // Desired height of the image
        priority // Ensures this image loads faster
        ></Image>
        <p className={`${styles.textlg} ${styles.textgray600} ${styles.leading7}`}>
        We have fully Licenced Security device installers to install
security camera and alarm system at your home and office.
        </p>
      </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
