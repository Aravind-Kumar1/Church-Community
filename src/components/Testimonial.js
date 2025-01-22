'use client';
import React, { useState } from 'react';
import styles from '../styles/Testimonial.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Willson',
      role: 'Youth Mentor',
      image: './w.png',
      text: 'After attending ELIM, my faith was restored, and I experienced healing in my life. I feel closer to God than ever before.',
    },
    {
      name: 'Shiva',
      role: 'Youth Leader',
      image: './shiva.jpg',
      text: 'God has shown me a new purpose and direction through this community. It has been a transformative experience.',
    },
    {
      name: 'Raj Paul',
      role: 'Assistant Youth Leader',
      image: './raj.jpg',
      text: 'I found a family here and witnessed God’s work in ways I never imagined. Every prayer here feels like a miracle.',
    },
    {
      name: 'Mathews',
      role: 'Worship Leader',
      image: './nani.jpg',
      text: 'The worship sessions here transformed my relationship with God. I’ve developed a deep sense of peace and purpose.',
    },
    {
      name: 'Uday Kiran',
      role: 'Sound Technician',
      image: './u.jpg',
      text: 'I’ve witnessed countless miracles in this community. The atmosphere is filled with hope and divine intervention.',
    },
    {
      name: 'Praveen',
      role: 'Youth Volunteer Coordinator',
      image: './pra.jpg',
      text: 'Serving in this community has brought a sense of fulfillment. Seeing lives change has been a blessing.',
    },
    {
      name: 'Issac',
      role: 'Prayer Coordinator',
      image: './is.jpg',
      text: 'Leading prayers here has been an honor. I’ve seen God answer prayers in remarkable ways.',
    },
    {
      name: 'Jeevan Kumar',
      role: 'Youth Event Coordinator',
      image: './jeevan.jpg',
      text: 'Organizing events has shown me the power of unity and faith. It’s been an inspiring journey.',
    },
    {
      name: 'Vinay',
      role: 'Tech Coordinator',
      image: './jee.png',
      text: 'Handling tech for this community has taught me patience and trust in God’s timing.',
    },
    {
      name: 'Manoj',
      role: 'Youth Outreach Coordinator',
      image: './man.jpg',
      text: 'Reaching out to others has helped me grow spiritually and emotionally. It’s been a rewarding experience.',
    },
    {
      name: 'Karunakur',
      role: 'Youth Volunteer Coordinator',
      image: './kar.jpg',
      text: 'I’ve discovered the joy of serving others and seeing the impact of our efforts firsthand.',
    },
    {
      name: 'Manohar',
      role: 'Broadcast Sound Engineer',
      image: './sh.png',
      text: 'Ensuring sound quality for worship has deepened my connection to the messages being shared.',
    },
    {
      name: 'Jeevan Kranth',
      role: 'Sound System Designer',
      image: './jee.png',
      text: 'Designing sound systems for events has been challenging but incredibly rewarding. It’s all for His glory.',
    },
    {
      name: 'Silva Kumar',
      role: 'Stage Manager',
      image: './kumar.jpg',
      text: 'Managing the stage has taught me teamwork and the importance of creating a space for spiritual encounters.',
    },
    {
      name: 'Vivek',
      role: 'Drum Technician',
      image: './vivi.png',
      text: 'Maintaining the instruments has been a privilege. It’s amazing to see music bring people closer to God.',
    },
    {
      name: 'Mahesh',
      role: 'Youth Volunteer Coordinator',
      image: './ma.jpg',
      text: 'Being part of this community has strengthened my faith and given me a greater sense of purpose.',
    },
    {
      name: 'Abhishiek',
      role: 'Instrument Coordinator',
      image: './abh.jpg',
      text: 'Coordinating instruments has allowed me to use my skills for a higher purpose. I feel truly blessed.',
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
