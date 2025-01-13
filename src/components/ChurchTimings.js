import React from 'react';
import styles from '../styles/ChurchTimings.module.css';

const ChurchTimings = () => {
  return (
    <div className={styles.churchTimings}>
      <div className={styles.sectionHeading}>Church Timings and Events</div>
      <div className={styles.timingsGrid}>
        {/* Sunday */}
        <div className={`${styles.timingItem} ${styles.sunday}`}>
          <div className={styles.timingTitle}>
            <h3>Sunday</h3>
          </div>
          <div className={styles.timingDetails}>
            <ul>
              <li>1st Service: 6 AM</li>
              <li>2nd Service: 11 AM</li>
              <li>3rd Service: 6 PM</li>
              <li>Sunday School: 10 AM</li>
            </ul>
          </div>
        </div>

        {/* Tuesday */}
        <div className={`${styles.timingItem} ${styles.tuesday}`}>
          <div className={styles.timingTitle}>
            <h3>Tuesday</h3>
          </div>
          <div className={styles.timingDetails}>
            <ul>
              <li>Women's Meet: 7 PM</li>
            </ul>
          </div>
        </div>

        {/* Wednesday */}
        <div className={`${styles.timingItem} ${styles.wednesday}`}>
          <div className={styles.timingTitle}>
            <h3>Wednesday</h3>
          </div>
          <div className={styles.timingDetails}>
            <ul>
              <li>Youth Meet: 7 PM</li>
            </ul>
          </div>
        </div>

        {/* Friday */}
        <div className={`${styles.timingItem} ${styles.friday}`}>
          <div className={styles.timingTitle}>
            <h3>Friday</h3>
          </div>
          <div className={styles.timingDetails}>
            <ul>
              <li>Fasting Prayer: 6 AM</li>
            </ul>
          </div>
        </div>

        {/* 1st Sunday of the Month */}
        <div className={`${styles.timingItem} ${styles.firstOfMonth}`}>
          <div className={styles.timingTitle}>
            <h3>1st Sunday</h3>
          </div>
          <div className={styles.timingDetails}>
            <ul>
              <li>Ballaradana: 6 AM</li>
            </ul>
          </div>
        </div>

        {/* Last Tuesday of the Month */}
        <div className={`${styles.timingItem} ${styles.lastTuesday}`}>
          <div className={styles.timingTitle}>
            <h3>Last Tuesday of the Month</h3>
          </div>
          <div className={styles.timingDetails}>
            <ul>
              <li>All Night Prayer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchTimings;
