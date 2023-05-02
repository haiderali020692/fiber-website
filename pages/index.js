// pages/index.js
import Navbar from './Navbar'
import styles from '../styles/Home.module.scss';


const Index = () => {
  return (
    <div className={styles.bggray}>
      <Navbar />
      <div className={`${styles.mxauto} ${styles.fadeIn} ${styles.slideIn}`}>
        <h1 className={styles.textxl}>Welcome to Fiber Optics Australia</h1>
        <p className={styles.textlg}>
          We provide high-quality fiber optic cables and connectors in Australia. Our products are
          designed to meet the demanding requirements of telecommunications, data communications,
          and cable television industries.
        </p>
      </div>
    </div>
  )
}

export default Index
