// components/Navbar.js
import Link from 'next/link'
import styles from '../styles/Home.module.scss';

const Navbar = () => {
  return (
    <nav className={`${styles.nav} ${styles.fadeIn} ${styles.smoothEdges}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.baw} ${styles.navLink}`} href="../">
            <button>Home</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.baw} ${styles.navLink}`} href="../About">
        <button>About</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.baw} ${styles.navLink}`} href="../Contact">
            <button>Contact</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.baw} ${styles.navLink}`} href="../Blog">
            <button>Blog</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
