// pages/success.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Success.module.css';

const Success = () => {
  return (
    <div>
      <Header />
      <div className={styles.successContainer}>
        <h2 className={styles.successHeading}>Thank You for Your Prayer Request!</h2>
        <p className={styles.successMessage}>
          We have received your request and our prayer team will reach out to you soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
