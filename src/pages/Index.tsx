import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySiteSection from "@/components/WhySiteSection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Harini Yoga - Authentic Yoga & Spiritual Teachings | Sacred Practice</title>
        <meta name="description" content="Discover authentic yoga teachings with Harini Yoga. Join our sacred classes, workshops, and spiritual community for transformative practice rooted in ancient wisdom." />
        <meta name="keywords" content="yoga, spiritual teachings, meditation, yoga classes, authentic yoga, sacred practice, Krishna consciousness, Vedanta, yoga teacher, spiritual guidance" />
        <meta name="author" content="Harini Yoga" />
        <meta property="og:title" content="Harini Yoga - Authentic Yoga & Spiritual Teachings" />
        <meta property="og:description" content="Transform your practice with authentic yoga teachings, spiritual wisdom, and sacred community at Harini Yoga." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hariniyoga.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harini Yoga - Authentic Yoga & Spiritual Teachings" />
        <meta name="twitter:description" content="Join our sacred yoga community for authentic teachings and transformative practice." />
        <link rel="canonical" href="https://hariniyoga.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "YogaStudio",
            "name": "Harini Yoga",
            "description": "Authentic yoga and spiritual teachings",
            "url": "https://hariniyoga.com",
            "telephone": "+1-555-123-4567",
            "email": "info@hariniyoga.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Online Classes",
              "addressCountry": "Global"
            },
            "sameAs": [
              "https://facebook.com/hariniyoga",
              "https://instagram.com/harini.yoga",
              "https://youtube.com/@hariniyoga"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="why-site">
          <WhySiteSection />
        </div>
        <div id="donate">
          <DonateSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
