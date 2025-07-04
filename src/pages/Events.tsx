import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Past Events & Sacred Gatherings - Harini Yoga | Community Events</title>
        <meta name="description" content="Discover past yoga events, workshops, and sacred gatherings at Harini Yoga. Experience the transformative power of our spiritual community." />
        <meta name="keywords" content="yoga events, spiritual gatherings, yoga workshops, meditation retreats, yoga community events, past events" />
        <link rel="canonical" href="https://hariniyoga.com/events" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <EventsSection />
        <Footer />
      </div>
    </>
  );
};

export default Events;