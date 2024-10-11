// components/Navbar.js
import Link from 'next/link'
import styles from '../styles/Home.module.scss';
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.div
    initial={{ x: 1000 }}
    animate={{ x: 0 }}
    transition={{
      ease: "backInOut",
      duration: 2,
      x: { duration: 1 }
    }}
    >
    <nav className={`${styles.nav} ${styles.fadeIn} ${styles.smoothEdges}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.navLink}`} href="../">
            <button>Home</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.navLink}`} href="../About">
        <button>About</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.navLink}`} href="../Services">
            <button>Services</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.navLink}`} href="../Contact">
            <button>Contact</button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.link} ${styles.navLink}`} href="../Blog">
            <button>Blog</button>
          </Link>
        </li>
      </ul>
    </nav>
    </motion.div>
  )
}

export default Navbar
