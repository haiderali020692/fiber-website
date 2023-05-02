// pages/about.js
import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Home.module.scss';

const About = () => {
  return (
    <div className={`${styles.bggray} ${styles.fadeIn}`}>
      <Navbar />
      <div className={`${styles.mxauto} ${styles.maxw4xl} ${styles.p8}`}>
        <h1 className={`${styles.text3xl} ${styles.fontbold} ${styles.mb4}`}>About Fiber Optics Australia</h1>
        <p className={`${styles.textlg} ${styles.textgray600} ${styles.leading7}`}>
          We have been providing fiber optic solutions in Australia for over 10 years. Our team of experts is dedicated to providing the best products and services to our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
