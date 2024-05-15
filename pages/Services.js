import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Services.module.scss';
import Link from 'next/link';
import Footer from './Footer';
import Image from 'next/image';
import data from "../public/categories.json";

const Services = () => {

  const { responsive } = data.items;

  return (
    <div className={styles.servicesPage}>
      <Navbar />  
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
      <Footer />
    </div>
  );
};

export default Services;
