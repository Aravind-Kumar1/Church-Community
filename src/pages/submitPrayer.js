import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/SubmitPrayer.module.css';
import { useRouter } from 'next/router';
import emailjs from 'emailjs-com';

const SubmitPrayer = () => {
  const [fullName, setFullName] = useState('');
  const [prayerFor, setPrayerFor] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { topic: queryTopic } = router.query;

  useEffect(() => {
    if (queryTopic) {
      setTopic(queryTopic);
    }
  }, [queryTopic]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    const emailData = {
      fullName,
      prayerFor,
      city,
      phone,
      prayerRequest,
      topic,
    };

    console.log('Sending data:', emailData);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        setMessage('Prayer request sent successfully!');
        router.push('/success');
      } else {
        setMessage(`Error: ${response.text}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send prayer request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.heroSection}>
        <h2 className={styles.heroHeading}>Prayer Request: {topic || 'Please select a prayer topic'}</h2>
        <p className={styles.heroDescription}>
          Please tell us your problem & get a call back from our prayer team.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.formLabel}>Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your full name"
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="prayerFor" className={styles.formLabel}>Prayer for Whom</label>
            <select
              id="prayerFor"
              value={prayerFor}
              onChange={(e) => setPrayerFor(e.target.value)}
              required
              className={styles.formSelect}
            >
              <option value="">Select Prayer Recipient</option>
              <option value="myself">Myself</option>
              <option value="parents">Parents</option>
              <option value="sister">Sister</option>
              <option value="brother">Brother</option>
              <option value="friends">Friends</option>
              <option value="children">Children</option>
              <option value="spouse">Spouse</option>
              <option value="family">Family</option>
              <option value="community">Community</option>
              <option value="church">Church</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="city" className={styles.formLabel}>City</label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className={styles.formSelect}
            >
              <option value="">Select Your City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Pune">Pune</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Surat">Surat</option>
              <option value="Indore">Indore</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>Phone Number (+91)</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Enter your phone number"
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="prayerRequest" className={styles.formLabel}>Enter Prayer Request (max 600 words)</label>
            <textarea
              id="prayerRequest"
              value={prayerRequest}
              onChange={(e) => setPrayerRequest(e.target.value)}
              required
              maxLength="600"
              placeholder="Enter your prayer request here..."
              className={styles.formTextarea}
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Prayer Request'}
        </button>
      </form>
      {message && <p>{message}</p>}
      <Footer />
    </div>
  );
};

export default SubmitPrayer;
