'use client';

import AboutHero from '../components/AboutHero'; // Import the AboutHero component
import Footer from '../components/Footer'; // Import Footer
import Header from '../components/Header'; // Import Header
import MissionVision from '../components/MissionVision';
import HistorySection from '../components/HistorySection';
import FaithfulServants from '../components/FaithfulServants';
import TeamsSection from '../components/TeamsSection';
import CallToActionSection from '../components/CallToActionSection';

const AboutPage = () => {
  return (
    <>
      <Header /> {/* Add the header */}
      <AboutHero /> {/* Include the hero section */}
      <MissionVision />
      {/* Add other sections of the About page below */}
      <HistorySection />
      <FaithfulServants />
      <TeamsSection />
       <CallToActionSection />
      <Footer /> {/* Add the footer */}
    </>
  );
};

export default AboutPage;
