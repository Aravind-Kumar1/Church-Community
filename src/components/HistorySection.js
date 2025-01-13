"use client";

import { useEffect, useState } from "react";
import styles from "../styles/HistorySection.module.css";

const HistorySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    "./old.jpg", // Image 1
    "/pas_you.jpg", // Image 2
    "/emmanuel church.jpg", // Image 3
  ];

  // Change the active slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.historySection}>
      <h2 className={styles.historySectionTitle}>Our History</h2>
      <p className={styles.historySectionSubtitle}>
        "Building a legacy of faith and community since 1996."
      </p>
      <div className={styles.historyContentWrapper}>
        {/* Left side Image Slider */}
        <div className={styles.imageCard}>
          <div className={styles.imageSlider}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === activeSlide ? styles.active : ""}`}
              >
                <img src={image} alt={`History Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right side Text Summary */}
        <div className={styles.textCard}>
          <h3>Our Journey</h3>
          <p>
            The journey of Emmanuel Living Integrity Mission (ELIM) began in 1996 at Film Nagar with a small but determined group of believers. Through the unwavering dedication, hard work, and the power of prayer, we sought God’s guidance in building a strong community. Today, we are proud to call ELIM a family of 800 individuals who continue to grow in faith, love, and service to one another.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
