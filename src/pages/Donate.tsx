import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Import individual components for full donate page
import DonateHeader from "@/components/donate/DonateHeader";
import ImpactStatement from "@/components/donate/ImpactStatement";
import DonationMethods from "@/components/donate/DonationMethods";
import AlternativeSupport from "@/components/donate/AlternativeSupport";
import ClosingBlessing from "@/components/donate/ClosingBlessing";

const Donate = () => {
  return (
    <>
      <Helmet>
        <title>Support Sacred Mission - Donate to Harini Yoga | Spiritual Giving</title>
        <meta name="description" content="Support the sacred mission of Harini Yoga through donations. Help spread authentic yoga teachings and spiritual wisdom to seekers worldwide." />
        <meta name="keywords" content="yoga donation, spiritual giving, support yoga, yoga mission support, sacred donation, yoga community support" />
        <link rel="canonical" href="https://hariniyoga.com/donate" />
        <meta property="og:title" content="Support Sacred Mission - Donate to Harini Yoga" />
        <meta property="og:description" content="Join our mission to spread authentic yoga teachings through your generous support." />
        <meta property="og:url" content="https://hariniyoga.com/donate" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        {/* DEVELOPER NOTE: Create separate donate section for full page to show all features */}
        <section id="donate" className="py-20 bg-gradient-sacred">
          <div className="container mx-auto px-6">
            <DonateHeader />
            <ImpactStatement />
            {/* DEVELOPER NOTE: showContribute={true} shows full donation options including "How to Contribute" */}
            <DonationMethods showContribute={true} />
            <AlternativeSupport />
            <ClosingBlessing />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Donate;