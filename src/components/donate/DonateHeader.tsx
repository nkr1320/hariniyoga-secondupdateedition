// Header section for the donation page with Sanskrit quote and description
const DonateHeader = () => {
  return (
    <div className="text-center mb-16">
      {/* Main title */}
      <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
        Sacred{' '}
        <span className="text-divine">Donation</span>
      </h2>
      
      {/* Sanskrit quote section */}
      <div className="mb-8">
        <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
          दानं परमं तप:
        </p>
        <p className="text-lg text-dharma-stone italic">
          "Giving is the highest form of spiritual practice" - Ancient Wisdom
        </p>
      </div>
      
      {/* Section description */}
      <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
        Support the preservation and sharing of authentic yogic wisdom. Every contribution helps maintain the integrity of ancient teachings.
      </p>
    </div>
  );
};

export default DonateHeader;