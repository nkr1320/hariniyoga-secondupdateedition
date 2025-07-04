import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import WhySiteSection from "@/components/WhySiteSection";
import Footer from "@/components/Footer";

const WhySite = () => {
  return (
    <>
      <Helmet>
        <title>Why This Sacred Platform Exists - Harini Yoga | Our Mission</title>
        <meta name="description" content="Discover the sacred purpose behind Harini Yoga platform - spreading authentic yoga wisdom and creating a global spiritual community." />
        <meta name="keywords" content="yoga mission, spiritual platform, yoga purpose, sacred teachings, yoga community, spiritual mission" />
        <link rel="canonical" href="https://hariniyoga.com/why-site" />
        <meta property="og:title" content="Why This Sacred Platform Exists - Our Mission" />
        <meta property="og:description" content="Learn about the sacred purpose and mission behind Harini Yoga platform." />
        <meta property="og:url" content="https://hariniyoga.com/why-site" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <WhySiteSection />
        <Footer />
      </div>
    </>
  );
};

export default WhySite;