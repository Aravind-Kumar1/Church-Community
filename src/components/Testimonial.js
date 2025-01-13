"use client";

import React, { useState } from 'react';
import styles from '../styles/Testimonial.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aravind Kumar',
      role: 'Church Member',
      image: './Professional_pics.png',
      text: 'After attending ELIM, my faith was restored, and I experienced  healing in my life.',
    },
    {
      name: 'Raj Paul',
      role: 'Youth Leader',
      image: './Professional_pics.png',
      text: 'God has shown me a new purpose and direction through this community.',
    },
    {
      name: 'Manoj',
      role: 'Volunteer',
      image: './Professional_pics.png',
      text: 'I found a family here and witnessed God’s work in ways I never imagined.',
    },
    {
      name: 'Vinay',
      role: 'Worship Leader',
      image: './Professional_pics.png',
      text: 'The worship sessions here transformed my relationship with God.',
    },
    {
      name: 'Uday Kiran',
      role: 'Elder',
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
        <button className={styles.arrowButton} onClick={prevTestimonials} disabled={startIndex === 0}>
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

        <button className={styles.arrowButton} onClick={nextTestimonials} disabled={startIndex + visibleTestimonials >= testimonials.length}>
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
