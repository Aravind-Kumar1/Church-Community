import Header from '../components/Header';
import Hero from '../components/Hero';  // Add the Hero section
import Footer from '../components/Footer';
import Pastor from '../components/Pastor';  // Import the Pastor component
import About from '../components/About';  // Import the About component
import Ministries from '../components/Ministries';  // Import the Ministries component
import Testimonial from '../components/Testimonial';  // Import the Testimonial component
import ChurchTimings from '../components/ChurchTimings';  // Import the Church Timings component
import ContactUs from '../components/ContactUs';  // Import the ContactUs component

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pastor />  {/* Add the Pastor section here */}
      <About />   {/* Add the About section here */}
      <Ministries />  {/* Add the Ministries section here */}
      <Testimonial />  {/* Add the Testimonial section here */}
      <ChurchTimings />  {/* Add the Church Timings section here */}
      <ContactUs />  {/* Add the ContactUs section here */}
      <Footer />
    </div>
  );
};

export default Home;
