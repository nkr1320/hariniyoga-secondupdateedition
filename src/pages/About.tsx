import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Harini - Sacred Yoga Teacher & Spiritual Guide | Harini Yoga</title>
        <meta name="description" content="Meet Harini, an authentic yoga teacher and spiritual guide dedicated to sharing sacred wisdom through traditional yoga practices and Krishna consciousness." />
        <meta name="keywords" content="yoga teacher, spiritual guide, Harini yoga, authentic yoga teacher, Krishna consciousness, yoga instructor, spiritual mentor" />
        <link rel="canonical" href="https://hariniyoga.com/about" />
        <meta property="og:title" content="About Harini - Sacred Yoga Teacher & Spiritual Guide" />
        <meta property="og:description" content="Discover Harini's journey as an authentic yoga teacher sharing sacred wisdom through traditional practices." />
        <meta property="og:url" content="https://hariniyoga.com/about" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <AboutSection />
        <Footer />
      </div>
    </>
  );
};

export default About;