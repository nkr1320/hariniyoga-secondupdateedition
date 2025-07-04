import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Sacred Connection - Contact Harini Yoga | Get in Touch</title>
        <meta name="description" content="Connect with Harini Yoga community. Find contact information, social media channels, and ways to join our sacred spiritual journey." />
        <meta name="keywords" content="contact yoga teacher, yoga community contact, spiritual guidance contact, yoga classes contact, Harini yoga contact" />
        <link rel="canonical" href="https://hariniyoga.com/contact" />
        <meta property="og:title" content="Sacred Connection - Contact Harini Yoga" />
        <meta property="og:description" content="Connect with our sacred yoga community and spiritual guidance." />
        <meta property="og:url" content="https://hariniyoga.com/contact" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Contact;