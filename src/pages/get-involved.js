// /pages/get-involved.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com'; // Import emailjs
import styles from '../styles/GetInvolved.module.css';

import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    involvementType: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false); // To manage form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      involvement_type: formData.involvementType,
      message: formData.message,
      to_name: 'Church Admin' // Customize this with your admin's name
    };

    // Log the templateParams for debugging
    console.log('Sending email with params:', templateParams);

    // Send the email using EmailJS
    emailjs
      .send(
        'service_ry3oqbn', // Your Service ID
        'template_a2rk4tp', // Your Template ID
        templateParams,
        'Kj6fxAM-8iMlZuVbd' // Your Public Key (User ID)
      )
      .then(
        (result) => {
          console.log('EmailJS result:', result.text); // Log result for success
          setSubmitting(false); // Reset submitting status
          toast.success('Thank you for getting involved!'); // Success toast
          // Clear form data after submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            involvementType: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error); // Log error for debugging
          setSubmitting(false); // Reset submitting status
          toast.error('There was an error submitting the form. Please try again later.'); // Error toast
        }
      );
  };

  return (
    <div>
      <Header />
      <section className={styles.getInvolvedSection}>
        <div className={styles.formWrapper}>
          <h2 className={styles.getInvolvedTitle}>Get Involved</h2>
          <p className={styles.getInvolvedDescription}>
            Join us in making a difference. Whether you're volunteering, donating, or offering your skills in other ways, we'd love to have you on board.
          </p>

          <form className={styles.involvedForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="involvementType" className={styles.formLabel}>Select Role</label>
                <select
                  id="involvementType"
                  name="involvementType"
                  value={formData.involvementType}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Select...</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="donor">Donor</option>
                  <option value="prayerPartner">Prayer Partner</option>
                  <option value="missionary">Missionary</option>
                  <option value="eventOrganizer">Event Organizer</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextArea}
              />
            </div>

            <button type="submit" className={styles.formSubmitButton} disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
      <Footer />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default GetInvolved;
