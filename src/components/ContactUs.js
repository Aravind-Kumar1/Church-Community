'use client';
import React, { useState } from 'react';
import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Handle Get Directions button click
  const handleGetDirections = () => {
    const destination = 'Emmanuel Church, Film Nagar, Jubilee Hills, Hyderabad, India';
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.location.href = directionsUrl;
  };

  // Handle Share button click
  const handleShare = () => {
    setShowShareOptions(true);
  };

  // Handle Close button click for Share Options
  const handleCloseShareOptions = () => {
    setShowShareOptions(false);
  };

  // Close Share Modal when clicking outside the modal area
  const handleCloseOnClickOutside = (e) => {
    if (e.target.classList.contains(styles.shareModal)) {
      setShowShareOptions(false);
    }
  };

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <h1 className={styles.contactHeading}>Be a Part of Our Family</h1>
          <p className={styles.contactDescription}>
            Stay connected with us through our social platforms and grow in faith together.
          </p>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="https://wa.me/919640540157" target="_blank" rel="noopener noreferrer">
              <img src="./whats.png" alt="WhatsApp" className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/elimimpact/" target="_blank" rel="noopener noreferrer">
              <img src="./social.png" alt="Instagram" className={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@elimimpact" target="_blank" rel="noopener noreferrer">
              <img src="./youtube.png" alt="YouTube" className={styles.icon} />
            </a>
            <a href="https://x.com/elimimpact" target="_blank" rel="noopener noreferrer">
              <img src="./twitter.png" alt="Twitter" className={styles.icon} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className={styles.contactButtons}>
            <button className={styles.contactButton} onClick={handleGetDirections}>
              <img src="./map.png" alt="Get Directions" className={styles.buttonIcon} />
              <span>Get Directions</span>
            </button>
            <button className={styles.contactButton} onClick={handleShare}>
              Share
            </button>
          </div>
        </div>

        {/* Share Options Modal */}
        {showShareOptions && (
          <div className={styles.shareModal} onClick={handleCloseOnClickOutside}>
            <div className={styles.shareContent}>
              <button className={styles.closeButton} onClick={handleCloseShareOptions}>
                &times;
              </button>
              <h2 className={styles.shareHeading}>Share via</h2>
              <div className={styles.shareIcons}>
                <a href="mailto:?subject=Join%20us%20at%20Emmanuel%20Church&body=Be%20a%20part%20of%20our%20family!" target="_blank" rel="noopener noreferrer">
                  <img src="./gmail.png" alt="Email" className={styles.shareIcon} />
                </a>
                <a href="https://wa.me/?text=Be%20a%20part%20of%20our%20family%20at%20Emmanuel%20Church!" target="_blank" rel="noopener noreferrer">
                  <img src="./whats.png" alt="WhatsApp" className={styles.shareIcon} />
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://emmanuelchurch.org" target="_blank" rel="noopener noreferrer">
                  <img src="./facebook.png" alt="Facebook" className={styles.shareIcon} />
                </a>
                <a href="https://twitter.com/intent/tweet?text=Join%20us%20at%20Emmanuel%20Church&url=https://emmanuelchurch.org" target="_blank" rel="noopener noreferrer">
                  <img src="./twitter.png" alt="Twitter" className={styles.shareIcon} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
