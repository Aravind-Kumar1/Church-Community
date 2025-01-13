'use client';
import React, { useState } from 'react';
import styles from '../styles/Testimonial.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Willson',
      role: 'Youth Mentor',
      image: './uday.jpg',
      text: 'After attending ELIM, my faith was restored, and I experienced  healing in my life.',
    },
    {
      name: 'Shiva',
      role: 'Youth Leader',
      image: './shiva.jpg',
      text: 'God has shown me a new purpose and direction through this community.',
    },
    {
      name: 'Raj Paul',
      role: 'Assistant Youth Leader',
      image: './raj.jpg',
      text: 'I found a family here and witnessed God’s work in ways I never imagined.',
    },
    {
      name: 'Mathews',
      role: 'Worship Leader',
      image: './nani.jpg',
      text: 'The worship sessions here transformed my relationship with God.',
    },
    {
      name: 'Uday Kiran',
      role: 'Sound Technician',
      image: './uday.jpg',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Issac',
      role: 'Prayer Coordinator',
      image: './is.jpg',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Jeevan Kumar',
      role: 'Youth Event Coordinator',
      image: './jeevan.jpg',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Vinay',
      role: 'Tech Coordinator',
      image: './jee.png',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Manoj',
      role: 'Youth Outreach Coordinator',
      image: './man.jpg',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Manohar',
      role: 'Broadcast Sound Engineer',
      image: './sh.png',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Jeevan Kranth',
      role: 'Sound System Designer',
      image: './jee.png',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Silva Kumar',
      role: 'Stage Manager',
      image: './kumar.jpg',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Vivek',
      role: 'Drum Technician',
      image: './vivi.png',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Abhishiek',
      role: 'Instrument Coordinator',
      image: './abh.jpg',
      text: 'I’ve witnessed countless miracles in this community.',
    },
     {
      name: 'Bharadwag',
      role: 'Microphone Coordinator',
      image: './bar.png',
      text: 'I’ve witnessed countless miracles in this community.',
    },
    {
      name: 'Aravind Kumar',
      role: 'Youth Volunteer Coordinator',
      image: './Professional_pics.png',
      text: 'I’ve witnessed countless miracles in this community.',
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = 3; // Show three testimonials at a time

  const nextTestimonials = () => {
    if (startIndex + visibleTestimonials < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevTestimonials = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionHeading}>Miracles in Our Lives</h2>
      <div className={styles.testimonialWrapper}>
        <button className={`${styles.arrowButton} ${styles.left}`} onClick={prevTestimonials} disabled={startIndex === 0}>
          &#8592; {/* Left Arrow */}
        </button>

        <div className={styles.testimonialsContainer}>
          {testimonials.slice(startIndex, startIndex + visibleTestimonials).map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.avatarWrapper}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.avatar} />
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <p className={styles.testimonialAuthor}>{testimonial.name}</p>
              <p className={styles.testimonialRole}>{testimonial.role}</p>
            </div>
          ))}
        </div>

        <button className={`${styles.arrowButton} ${styles.right}`} onClick={nextTestimonials} disabled={startIndex + visibleTestimonials >= testimonials.length}>
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
