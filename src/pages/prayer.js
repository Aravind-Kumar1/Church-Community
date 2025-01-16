'use client';

import Header from '../components/Header'; // Import Header
import PrayerRequests from '../components/PrayerRequests';
import Footer from '../components/Footer'; // Import Footer



const PrayerPage = () => {
  return (
    <>
      <Header /> {/* Add the header */}
      <PrayerRequests /> {/* Hero section for the Prayer page */}
      <Footer /> {/* Add the footer */}
    </>
  );
};

export default PrayerPage;
