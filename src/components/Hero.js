import Link from 'next/link';
import styles from '../styles/Hero.module.css';
import '../styles/global.css'; // Do not use `styles` as the alias for global CSS.


const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Building a <span className={styles.bold}>Community</span><br />
          of <span className={styles.bold}>Grace</span> and <span className={styles.bold}>Hope</span>
        </h1>

        <p className={styles.heroSubtitle}>
          “Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom” - Colossians 3:16
        </p>
        <p className={styles.heroDescription}>
         Join a vibrant community rooted in love, faith, and service. Together, let’s worship, grow, and make a difference with purpose.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/up-events" className={styles.button}>
            Upcoming Events
          </Link>
          <Link href="/donate" className={styles.button}>
            Donate
          </Link>
        </div>
      </div>
      <img
        src="/emmanuel church.jpg" /* Replace with your actual image path */
        alt="Church Community"
        className={styles.heroImage}
      />
    </section>
  );
};

export default Hero;