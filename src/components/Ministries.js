import styles from "../styles/Ministries.module.css"; // Import styles

const Ministries = () => {
  return (
    <div className={styles.ministriesSection}>
      <h2 className={styles.sectionHeading}>Our Ministries</h2>

      <div className={styles.cardsContainer}>
        {/* Card 1: Meet Ministry */}
        <div className={styles.card}>
          <img className={styles.cardImage} src="./youth.jpg" alt="Meet Ministry" />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Youth Ministry</h3>
            <p className={styles.cardDescription}>
              Our Youth Ministry is designed to bring the congregation together through social gatherings, fellowship, and building lasting connections. Join us for our regular meet-ups!
            </p>
            <button className={styles.cardButton}>Get Involved</button>
          </div>
        </div>

        {/* Card 2: Children's Sunday School */}
        <div className={styles.card}>
          <img className={styles.cardImage} src="./kid.jpg" alt="Children's Sunday School" />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Children's Ministry</h3>
            <p className={styles.cardDescription}>
              Our Children’s Sunday School ministry provides a nurturing and educational environment where kids learn about God’s love, through Bible stories and engaging activities.
            </p>
            <button className={styles.cardButton}>Get Involved</button>
          </div>
        </div>

        {/* Card 3: Women’s Ministry */}
        <div className={styles.card}>
          <img className={styles.cardImage} src="./women.jpg" alt="Women's Ministry" />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Women’s Ministry</h3>
            <p className={styles.cardDescription}>
              Our Women’s Ministry empowers women of all ages to grow in faith, support one another, and serve the community. We hold events, bible studies, and retreats for spiritual growth.
            </p>
            <button className={styles.cardButton}>Get Involved</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
