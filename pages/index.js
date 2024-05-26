// pages/index.js
import Navbar from './Navbar'
import styles from '../styles/Home.module.scss';
import ResponsiveCarousel from "./Carousel"
import Footer from './Footer';



const Index = () => {

  const carouselItems = [
    {
      id: 1,
      imageURL: '/images/home-image.jpg',
      caption: 'Caption 1',
    },
    {
      id: 2,
      imageURL: '/images/cctv.jpg',
      caption: 'Caption 2',
    },
    {
      id: 3,
      imageURL: '/images/sec.jpg',
      caption: 'Caption 3'
    }
  ]
  return (
    <div className={styles.bggray}>
      <Navbar />
      <div className={`${styles.mxauto} ${styles.fadeIn} ${styles.slideIn} ${styles.landingPage}`}>
      <div className={styles.back}><ResponsiveCarousel
      /></div>
        <h1 className={styles.textxl}>Welcome to Fiber Optics Australia</h1>
        <p className={styles.textlg}>
          We provide high-quality fiber optic cables and connectors in Australia. Our products are
          designed to meet the demanding requirements of telecommunications, data communications,
          and cable television industries.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Index
