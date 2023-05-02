import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Home.module.scss';

const Contact = () => {
  return (
    <div className={`${styles.bggray} ${styles.fadeIn}`}>
      <Navbar />
      <div className={`${styles.mxauto} ${styles.maxw4xl} ${styles.p8} ${styles.curvedEdges}`}>
        <h1 className={`${styles.text3xl} ${styles.fontbold} ${styles.mb4}`}>Contact Fiber Optics Australia</h1>
        <p className={`${styles.textlg} ${styles.textgray600} ${styles.leading7}`}>
          You can contact us at{' '}
          <a href="mailto:info@fiber-optics-australia.com" className={`${styles.textblue500} ${styles.hoverunderline}`}>
            info@fiber-optics-australia.com
          </a>
          .
        </p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" id="name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" id="email" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea id="message" className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

