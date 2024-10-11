// components/Footer.js
import styles from '../styles/Footer.module.scss';
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
    initial={{ y: 1000 }}
    animate={{ y: 0 }}
    transition={{
      ease: "backInOut",
      duration: 2,
      x: { duration: 1 }
    }}
    >
    <footer className={styles['site-footer']}>
      <div className={styles.container}>
        <div className={styles['footer-columns']}>
          <div className={styles['footer-column']}>
            <h3>About</h3>
            <p>About your website or company</p>
          </div>
          <div className={styles['footer-column']}>
            <h3>Contact</h3>
            <p>Address, phone, email</p>
          </div>
          <div className={styles['footer-column']}>
            <h3>Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Shop</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">Gallery</Link></li>
            </ul>
          </div>
          <div className={styles['footer-column']}>
            <h3>Follow Us</h3>
            <ul className={styles['social-media-links']}>
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
            </ul>
          </div>
        </div>
        <p className={styles['footer-bottom-text']}>© 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
   </motion.div>
  );
};

export default Footer;
