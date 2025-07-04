import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import RecordingsSection from "@/components/RecordingsSection";
import Footer from "@/components/Footer";

const Recordings = () => {
  return (
    <>
      <Helmet>
        <title>Practice Recordings & Sessions - Harini Yoga | Sacred Audio Library</title>
        <meta name="description" content="Access exclusive yoga practice recordings and meditation sessions from Harini Yoga. Deepen your practice with guided audio content." />
        <meta name="keywords" content="yoga recordings, meditation audio, practice sessions, guided yoga, yoga audio library, spiritual recordings" />
        <link rel="canonical" href="https://hariniyoga.com/recordings" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <RecordingsSection />
        <Footer />
      </div>
    </>
  );
};

export default Recordings;