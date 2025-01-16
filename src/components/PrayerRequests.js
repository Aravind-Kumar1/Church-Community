import React from 'react';
import Link from 'next/link'; // Import Link
import styles from '../styles/PrayerRequests.module.css';


const PrayerRequests = () => {
  const prayerTopics = [
    { title: "For Job", imgSrc: "./job.png" },
    { title: "For Family", imgSrc: "./famly.jpg" },
    { title: "For Exams", imgSrc: "./exam.jpg" },
    { title: "Financial Problems", imgSrc: "./fin.jpg" },
    { title: "For Marriage", imgSrc: "./mar.jpg" },
    { title: "For Business", imgSrc: "./bus.jpg" },
    { title: "For Healing", imgSrc: "./hea.jpg" },
    { title: "Spiritual Life", imgSrc: "./spru.jpg" },
    { title: "For Children", imgSrc: "./chil.png" },
    { title: "For Emergency", imgSrc: "./emr.png" },
  ];

  return (
    <div>
      <div className={styles.hero}>
        {/* Desktop Hero Image */}
        <img
          src="./ban.png"
          alt="Prayer Banner"
          className={styles.heroImage}
        />
        {/* Mobile Hero Image */}
        <img
          src="./pray.jpg"
          alt="Prayer Banner for Mobile"
          className={styles.heroImageMobile}
        />
      </div>
      <div className={styles.containerHero}>
        <h2 className={styles.heading}>Submit Your Prayer Request</h2>
        <p className={styles.description}>
          Please select your problem and submit a prayer request.
        </p>
        <div className={styles.cardGrid}>
          {prayerTopics.map((topic, index) => (
            <div key={index} className={styles.card}>
              <img
                src={topic.imgSrc}
                alt={topic.title}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{topic.title}</h3>
              <Link href={`/submitPrayer?topic=${encodeURIComponent(topic.title)}`}>
                <button className={styles.prayerButton}>Request Prayer</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayerRequests;
