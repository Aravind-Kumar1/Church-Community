import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Header from '../components/Header'; // Import header component
import Footer from '../components/Footer'; // Import footer component
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false); // State to manage submitting status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting to true when form is submitted

    // Extract form data
    const { name, email, phone, subject, message } = formData;

    // Prepare the parameters to send to EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      subject: subject,
      message: message,
      to_name: 'Church Support', // Replace with your recipient's name
    };

    // Send the email using EmailJS
    emailjs
      .send(
        'service_ry3oqbn', // Replace with your Service ID
        'template_gbups93', // Replace with your Template ID
        templateParams,
        'Kj6fxAM-8iMlZuVbd' // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitting(false); // Reset submitting status
          toast.success('Message sent successfully!', { autoClose: 3000 }); // Show success toast

          // Clear the form fields only if submission is successful
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitting(false); // Reset submitting status
          toast.error(`Failed to send message. Error: ${error.text}`, { autoClose: 3000 }); // Show error toast
        }
      );
  };

  return (
    <div className={styles.contactPageWrapper}>
      <Header />
      
      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactFormContent}>
          <h2 className={styles.contactFormHeading}>Send Us a Message</h2>
          <form
            className={styles.contactForm}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className={styles.contactInputField}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className={styles.contactInputField}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className={styles.contactInputField}
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={styles.contactInputField}
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.contactTextArea}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.contactSubmitButton} disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'} {/* Display "Submitting..." when submitting */}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className={styles.contactDetailsSection}>
        <div className={styles.contactDetailsContent}>
          <h2 className={styles.contactDetailsHeading}>Contact Information</h2>
          <div className={styles.contactInfoText}>
            <p><strong>Address:</strong> Film Nagar Rd Number 13, Tarakarama Nagar, Hakimpet, Hyderabad, Telangana 500096</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> support@churchname.com</p>
          </div>
          <div className={styles.contactMapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2220782896834!2d78.4131484758267!3d17.41938728808785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e6b5da9d3%3A0x71dd4843c0df926a!2sFilm%20Nagar%20Rd%20Number%2013%2C%20Tarakarama%20Nagar%2C%20Hakimpet%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className={styles.contactMapIframe}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
