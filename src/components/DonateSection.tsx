// Main donation section component that orchestrates all sub-components
import DonateHeader from "./donate/DonateHeader";
import ImpactStatement from "./donate/ImpactStatement";
import DonationMethods from "./donate/DonationMethods";
import AlternativeSupport from "./donate/AlternativeSupport";
import ClosingBlessing from "./donate/ClosingBlessing";

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        {/* Section header with title and description */}
        <DonateHeader />
        
        {/* Impact metrics and mission statement */}
        <ImpactStatement />
        
        {/* Available donation methods */}
        {/* DEVELOPER NOTE: showContribute={false} hides "How to Contribute" section for home page */}
        <DonationMethods showContribute={false} />
        
        {/* Alternative ways to support beyond money */}
        <AlternativeSupport />
        
        {/* Closing blessing and final call-to-action */}
        <ClosingBlessing />
      </div>
    </section>
  );
};

export default DonateSection;