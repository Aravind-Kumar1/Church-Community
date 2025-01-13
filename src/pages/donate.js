import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Donate.module.css';

const Donate = () => {
  return (
    <div>
      <Header />
      <section className={styles.donateSection}>
        <div className={styles.card}>
          <div className={styles.leftContent}>
            <h1 className={styles.heading}>Make a Difference</h1>
            <p className={styles.message}>
              Your generosity helps us serve the community and spread hope. Every donation makes a meaningful impact.
            </p>
            <p className={styles.tagline}>“Give, and it will be given to you.” – Luke 6:38</p>
          </div>
          <div className={styles.rightContent}>
            <img
              src="./qr.jpg"
              alt="Donate and make a difference"
              className={styles.image}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;
