// components/Navbar.js
import Link from 'next/link'
import styles from '../styles/Home.module.scss';

const Navbar = () => {
  return (
    <nav className={`${styles.nav} ${styles.fadeIn} ${styles.smoothEdges}`}>
      <ul>
        <li>
          <Link className={`${styles.link} ${styles.baw}`} href="../">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${styles.baw}`} href="../About">
        <button>About</button>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${styles.baw}`} href="../Contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
