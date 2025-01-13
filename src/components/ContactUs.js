'use client';
import React from 'react';
import styles from '../styles/ContactUs.module.css';
import { 
  FaWhatsapp, FaTwitter, 
  FaInstagram, FaYoutube, 
  FaLocationArrow 
} from 'react-icons/fa';

const ContactUs = () => {
  // Handle Get Directions button click
  const handleGetDirections = () => {
    const destination = 'Emmanuel Church, Film Nagar, Jubilee Hills, Hyderabad, India';
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.location.href = directionsUrl;  // Open in the same window/tab
  };

  // Handle Share button click
  const handleShare = () => {
    const shareMessage = 'Be a part of our family at Emmanuel Church!';
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        {/* Horizontal Card */}
        <div className={styles.contactCard}>
          <h1 className={styles.contactHeading}>Be a Part of Our Family</h1>
          <p className={styles.contactDescription}>
            Join us on our social media platforms to stay connected and grow together.
          </p>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="https://wa.me/11234567890" className={styles.icon}><FaWhatsapp className={styles.iconSize} /></a>
            <a href="https://twitter.com/churchname" className={styles.icon}><FaTwitter className={styles.iconSize} /></a>
            <a href="https://instagram.com/churchname" className={styles.icon}><FaInstagram className={styles.iconSize} /></a>
            <a href="https://youtube.com/channel/churchname" className={styles.icon}><FaYoutube className={styles.iconSize} /></a>
          </div>

          {/* Action Buttons */}
          <div className={styles.contactButtons}>
            <button className={styles.contactButton} onClick={handleGetDirections}>
              <FaLocationArrow className={styles.icon} /> Get Directions
            </button>
            <button className={styles.contactButton} onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
