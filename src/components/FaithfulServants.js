"use client";

import styles from '../styles/FaithfulServants.module.css';

const FaithfulServants = () => {
  return (
    <section className={styles.servantsSection}>
      <h2 className={styles.sectionTitle}>Faithful Servants of God</h2>
      <p className={styles.sectionTagline}>
        "Dedicated to spreading love, service, and faith through Christ’s teachings."
      </p>
      <div className={styles.contentWrapper}>
        {/* Text Card */}
        <div className={styles.textCard}>
          <h3 className={styles.heading}>Faithful Servants</h3>
          <p className={styles.text}>
          "<span className={styles.nameHighlight}>A Krupa Rao Garu</span> and <span className={styles.nameHighlight}>Kamala Garu</span> embody selfless love and spiritual leadership. Their lives of faith, prayer, and service to the community reflect the profound love of Christ in everything they do, guiding others with humility, grace, and a heart of compassion."
          </p>
        </div>

        {/* Image Card */}
        <div className={styles.imageCard}>
          <div className={styles.imageWrapper}>
            <img src="./both.jpg" alt="Faithful Servant" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaithfulServants;
