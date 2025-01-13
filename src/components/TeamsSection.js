"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/TeamsSection.module.css';

const teams = [
  { name: 'Healing Team', image: "./heal.jpg" },
  { name: 'Helping Team', image: "./help.jpg" },
  { name: 'Worship Team', image: "./wor.jpg" },
  { name: 'Youth Team', image: "./pas_you.jpg" },
  { name: 'Elders Team', image: "./elders.jpg" }
];

const TeamsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.teamsSection}>
      <h2 className={styles.sectionTitle}>Introducing Our Teams</h2>
      <p className={styles.sectionTagline}>
        "Empowering our community through diverse and dedicated teams."
      </p>

      <div className={styles.carouselContainer}>
        <div className={styles.imageWrapper}>
          {teams.map((team, index) => (
            <div 
              key={team.name}
              className={`${styles.carouselImageCard} ${index === currentIndex ? styles.active : ''}`}
            >
              <img src={team.image} alt={team.name} className={styles.carouselImageItem} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.teamNamesWrapper}>
        <h3 className={styles.teamHeading}>{teams[currentIndex].name}</h3>
      </div>
    </section>
  );
};

export default TeamsSection;
