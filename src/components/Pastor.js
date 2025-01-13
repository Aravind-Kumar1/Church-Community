import React from "react";
import styles from "../styles/Pastor.module.css"; // Import the styles

const Pastor = () => {
  return (
    <div className={styles.pastorSection}>
      {/* New Heading Section */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.sectionHeading}>Meet Our Pastor</h2>
      </div>

      <div className={styles.container}>
        {/* Pastor Image */}
        <div className={styles.pastorImageWrapper}>
          <img
            className={styles.pastorImage}
            src="./pastor.jpg"
            alt="Pastor Rev A Krupa Rao Garu"
          />
        </div>

        {/* Pastor Summary */}
        <div className={styles.pastorSummary}>
          <p className={styles.pastorName}>
            Man of God
            <br />
          </p>
          <p className={styles.name}>Pastor Rev A Krupa Rao Garu</p>
          <p className={styles.pastorPosition}>
            Founder, Emmanuel Living Integrity Mission
          </p>

          <div className={styles.pastorBox}>
            <h4>Pastor's Vision</h4>
            <p>
              Pastor Rev A Krupa Rao Garu is a highly respected and influential preacher, known for his consistent teachings of love, hope, and redemption. He has dedicated his life to raising strong spiritual leaders who follow in his path of integrity and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pastor;
