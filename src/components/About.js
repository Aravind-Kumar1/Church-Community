import React from "react";
import styles from "../styles/About.module.css"; // Ensure the correct path to your CSS file

const About = () => {
  return (
    <div className={styles.aboutSection}>
      {/* Section Heading */}
      <h2 className={styles.sectionHeading}>About Our Church</h2>

      <div className={styles.container}>
        {/* Image on the Left */}
        <div className={styles.imageWrapper}>
          <img
            className={styles.aboutImage}
            src="./fam.jpg"
            alt="Church Image"
          />
        </div>

        {/* Text Box on the Right */}
        <div className={styles.aboutText}>
          <div className={styles.aboutBox}>
            <h3 className={styles.boxHeading}>Welcome to ELIM Family</h3>
            <p className={styles.aboutPara}>
              At Emmanuel Living Impact Mission (ELIM), we are a vibrant family committed to spreading love, hope, and faith to our community. We believe in living with integrity, love, and service, and we invite you to join us on this journey.
            </p>
            <p className={styles.memberCount}>
              We are a family of <span className={styles.number}> 800+ members</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
