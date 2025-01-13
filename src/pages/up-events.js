import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/UpEvents.module.css';

const events = {
  previous: [
    {
      id: 1,
      title: 'Christmas Celebration',
      date: 'December 25, 2024',
      description: 'A joyous celebration of Christmas with the church family.',
      image: './fest1.jpg',
    },
    {
      id: 2,
      title: 'watchnight Service',
      date: 'November 24, 2024',
      description: 'A heartfelt service to give thanks for the blessings received.',
      image: './fest2.jpg',
    },
    {
        id: 2,
        title: ' New Year Celebrations',
        date: 'November 24, 2024',
        description: 'A heartfelt service to give thanks for the blessings received.',
        image: './fam.jpg',
      },
      {
        id: 2,
        title: 'Love Fest Service',
        date: 'November 24, 2024',
        description: 'A heartfelt service to give thanks for the blessings received.',
        image: './fest3.jpg',
      },
  ],
  upcoming: [
    {
      id: 1,
      title: 'Youth Conference',
      date: 'February 20, 2025',
      description: 'A conference for the youth to connect, learn, and grow.',
      image: './emmanuel church.jpg',
    },
    {
      id: 2,
      title: 'Easter Sunday Service',
      date: 'April 20, 2025',
      description: 'Join us for a special Easter Sunday celebration.',
      image: './emmanuel church.jpg',
    },
    {
        id: 2,
        title: 'Easter Sunday Service',
        date: 'April 20, 2025',
        description: 'Join us for a special Easter Sunday celebration.',
        image: './emmanuel church.jpg',
      },
      {
        id: 2,
        title: 'Easter Sunday Service',
        date: 'April 20, 2025',
        description: 'Join us for a special Easter Sunday celebration.',
        image: './emmanuel church.jpg',
      },
  ],
};

const UpEvents = () => {
  return (
    <div className={styles.upEventsPage}>
      {/* Header Component */}
      <Header />

      <main>
       

        {/* Previous Events Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Previous Events</h2>
          <div className={styles.cardsContainer}>
            {events.previous.map((event) => (
              <div key={event.id} className={styles.card}>
                <img src={event.image} alt={event.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{event.title}</h3>
                  <p className={styles.cardDate}>{event.date}</p>
                  <p className={styles.cardDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <div className={styles.cardsContainer}>
            {events.upcoming.map((event) => (
              <div key={event.id} className={styles.card}>
                <img src={event.image} alt={event.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{event.title}</h3>
                  <p className={styles.cardDate}>{event.date}</p>
                  <p className={styles.cardDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default UpEvents;
