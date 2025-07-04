import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import ClassesSection from "@/components/ClassesSection";
import Footer from "@/components/Footer";

const Classes = () => {
  return (
    <>
      <Helmet>
        <title>Yoga Classes & Workshops - Harini Yoga | Sacred Practice Sessions</title>
        <meta name="description" content="Join Harini Yoga's transformative classes and workshops. Experience authentic yoga teachings, meditation, and spiritual guidance in our sacred practice sessions." />
        <meta name="keywords" content="yoga classes, yoga workshops, meditation classes, spiritual workshops, online yoga, live yoga sessions, yoga teacher training" />
        <link rel="canonical" href="https://hariniyoga.com/classes" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <ClassesSection />
        <Footer />
      </div>
    </>
  );
};

export default Classes;