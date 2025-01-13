import styles from '../styles/VerseSection.module.css';

export default function VerseSection({ verse, imageSrc }) {
  return (
    <div className={styles.verseSection}>
      {/* Left Half: Text */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Empowering the Next Generation in Christ</h1>
        <p className={styles.tagline}>
          Building a foundation of faith, love, and joy in every child’s heart.
        </p>
        <blockquote className={styles.verse}>
          Proverbs 22:6 - "Train up a child in the way he should go, and when he is old he will not depart from it."
        </blockquote>
        <blockquote className={styles.verse}>
          Jeremiah 29:11 - "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
        </blockquote>
        
      </div>

      {/* Right Half: Image */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={imageSrc = "./ki-u.jpg"}
          alt="Children and youth engaged in church activities"
        />
      </div>
    </div>
  );
}
