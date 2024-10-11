import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Contact.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formkeep.com/f/f0b0af21656d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        setStatus('Thank you for your message!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };


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
        <form onSubmit={handleSubmit} className={styles.form}>
        <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{
           type: "tween",
           duration: 2,  // Duration of the animation in seconds
           ease: "easeOut"  // Easing function for smooth animation
         }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.input} required/>
          </div>
          </motion.div>
          <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{
           type: "tween",
           duration: 2,  // Duration of the animation in seconds
           ease: "easeOut"  // Easing function for smooth animation
         }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required/>
          </div>
          </motion.div>
          <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{
           type: "tween",
           duration: 2,  // Duration of the animation in seconds
           ease: "easeOut"  // Easing function for smooth animation
         }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea id="message" name="message" className={styles.textarea} value={formData.message} onChange={handleChange} required></textarea>
          </div>
          </motion.div>
          <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{
           type: "tween",
           duration: 2,  // Duration of the animation in seconds
           ease: "easeOut"  // Easing function for smooth animation
         }}
        >
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
            Submit
          </button>
          </motion.div>
          <p>{status}</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

