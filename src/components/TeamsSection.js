"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/TeamsSection.module.css';

const teams = [
  { 
    name: 'Healing Team', 
    image: "./heal.jpg", 
    summary: 'The Healing Team is dedicated to nurturing the spiritual well-being of individuals in our community. Through prayer, counseling, and personal support, they create a safe space for people to heal emotionally, spiritually, and mentally. Their goal is to help individuals overcome personal struggles, find peace, and restore their faith, offering a compassionate ear and a guiding hand throughout the healing process.' 
  },
  { 
    name: 'Helping Team', 
    image: "./help.jpg", 
    summary: 'The Helping Team plays a vital role in providing assistance and essential resources to those in need. They organize food drives, offer support for housing and healthcare, and connect individuals with the right resources to improve their lives. Through their tireless efforts, they ensure that no one in our community feels left behind, and they work to lift people out of difficult circumstances by addressing their immediate and long-term needs.' 
  },
  { 
    name: 'Worship Team', 
    image: "./wor.jpg", 
    summary: 'The Worship Team leads our congregation in heartfelt praise and worship, creating an atmosphere where individuals can connect with God. Through the power of music, songs, and prayer, they inspire spiritual growth and provide an opportunity for everyone to express their faith in a meaningful way. Their ministry fosters a sense of unity, devotion, and peace, allowing the congregation to experience God’s presence in a deeply personal and collective way.' 
  },
  { 
    name: 'Youth Team', 
    image: "./pas_you.jpg", 
    summary: 'The Youth Team is committed to empowering the younger generation within our community. They organize dynamic events, mentorship programs, and leadership opportunities that help youth grow in their faith and life skills. By fostering an environment where young people can thrive, the team equips them with the tools they need to lead, make wise decisions, and build strong relationships. Their mission is to raise up the next generation of leaders who are grounded in faith and community.' 
  },
  { 
    name: 'Elders Team', 
    image: "./elders.jpg", 
    summary: 'The Elders Team provides invaluable guidance and wisdom to the entire community, offering a steady and experienced voice in times of decision-making and reflection. Drawing from years of life experience, they share their knowledge, offer counsel, and provide spiritual leadership. Their role is to ensure that the foundation of the community remains strong, providing direction and insight that helps everyone stay grounded in faith and values, no matter the challenges they may face.' 
  }
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

      <div className={styles.carouselWrapper}>
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

        <div className={styles.teamInfoWrapper}>
          <h3 className={styles.teamHeading}>{teams[currentIndex].name}</h3>
          <div className={styles.teamSummary}>
            <p>{teams[currentIndex].summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
