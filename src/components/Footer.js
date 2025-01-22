import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Church Info */}
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>We are a community focused on spreading love, faith, and hope. Join us in our journey to help others and grow spiritually.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p><strong>Address:</strong> Patel Nagar Film Nagar, Hyderabad, Telangana</p>
          <p><strong>Email:</strong> emmanuellivingimpactmission@gmail.com</p>
          <p><strong>Phone:</strong> +91 9908113279</p>
        </div>

        {/* Follow Us */}
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.footerSocialIcons}>
            <a href="https://www.facebook.com/elimimpact" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/elimimpact" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/elimimpact" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@elimimpact" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className={styles.footerCopyright}>
        <p>&copy; 2025 Emmanuel Living Impact Mission. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
