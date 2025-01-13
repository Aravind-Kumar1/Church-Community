'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.css';

const Header = () => {
  const pathname = usePathname();  // Get the current pathname from usePathname hook

  // Function to check if the link is active
  const isActive = (path) => {
    return pathname === path ? styles.active : '';  // Add active class based on current pathname
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="logo.jpg" alt="Church Logo" className={styles.logoImage} />
        </Link>
        <div className={styles.logoTextContainer}>
          <span className={styles.logoText}>ELIM</span>
          <span className={styles.subtitle}>Emmanuel Living Integrity Mission</span>
        </div>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li><Link href="/" className={isActive('/')}>Home</Link></li>
          <li><Link href="/about" className={isActive('/about')}>About Us</Link></li>
          <li><Link href="/prayer" className={isActive('/prayer')}>Prayer Requests</Link></li>
          <li><Link href="/kids-youth" className={isActive('/kids-youth')}>Kids & Youth</Link></li>
          <li><Link href="/contact" className={isActive('/contact')}>Contact</Link></li>
          <li><Link href="/donate" className={isActive('/donate')}>Donate</Link></li>
        </ul>
      </nav>

      {/* New Stylish Gradient Button */}
      <div className={styles.ctaButtonContainer}>
  <Link href="/get-involved">
    <button className={styles.ctaButton}>Get Involved</button>
  </Link>
</div>

    </header>
  );
};

export default Header;
