'use client';

import { useState, useEffect, useRef } from 'react'; // Import useRef to reference the menu and useEffect to handle events
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.css';

const Header = () => {
  const pathname = usePathname();  // Get the current pathname from usePathname hook
  const [menuOpen, setMenuOpen] = useState(false);  // State to handle menu toggle
  const menuRef = useRef(null); // Reference for the menu
  const menuIconRef = useRef(null); // Reference for the menu icon

  // Function to check if the link is active
  const isActive = (path) => {
    return pathname === path ? styles.active : '';  // Add active class based on current pathname
  };

  // Toggle the menu on and off
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicking outside the menu or menu icon
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the menu only if the click is outside both the menu and the menu icon
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="logo.jpg" alt="Church Logo" className={styles.logoImage} />
        </Link>
        <div className={styles.logoTextContainer}>
          <span className={styles.logoText}>ELIM</span>
          <span className={styles.subtitle}>Emmanuel Living Impact Mission</span>
        </div>
      </div>

      {/* Menu Icon for mobile */}
      <div 
        className={styles.menuIcon} 
        onClick={toggleMenu} 
        ref={menuIconRef} // Attach ref to the menu icon
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <nav ref={menuRef}> {/* Attach ref to the menu */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
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
