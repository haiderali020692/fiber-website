// pages/services.js
import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Services.module.scss';
import Link from 'next/link';
import Footer from './Footer';

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <Navbar />  
      <h1>Our Services</h1>
      <div className={styles.servicesList}>
        <div className={styles.serviceCategory}>
          <h2>Networking</h2>
          <p>We offer professional networking solutions for your home or business.</p>
          <Link href="../Networking">Read More</Link>
        </div>
        <div className={styles.serviceCategory}>
          <h2>Security Cameras</h2>
          <p>Enhance your security with our state-of-the-art security camera systems.</p>
          <Link href="../SecurityCameras">Read More</Link>
        </div>
        <div className={styles.serviceCategory}>
          <h2>Security Alarm Systems</h2>
          <p>Protect your property with our advanced security alarm systems.</p>
          <Link href="../SecuritySystem">Read More</Link>
        </div>
        <div className={styles.serviceCategory}>
          <h2>Wall-Mounting</h2>
          <p>We provide wall-mounting services for TVs, monitors, and more.</p>
          <Link href="../WallMounting">Read More</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
