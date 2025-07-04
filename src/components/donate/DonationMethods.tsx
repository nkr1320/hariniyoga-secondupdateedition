import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Type definition for donation method
interface DonationMethod {
  method: string;
  description: string;
  icon: string;
  link: string;
}

// Available donation methods and their details
// DEVELOPER NOTE: This component accepts an optional 'showContribute' prop to control visibility of contribution methods
// Usage: <DonationMethods showContribute={false} /> - hides "How to Contribute" section (for home page)
// Usage: <DonationMethods showContribute={true} /> - shows "How to Contribute" section (for donate page)
interface DonationMethodsProps {
  showContribute?: boolean; // Controls whether to show "How to Contribute" section
}

const DonationMethods = ({ showContribute = true }: DonationMethodsProps) => {
  const donationMethods: DonationMethod[] = [
    {
      method: "PayPal",
      description: "Secure online donations with instant confirmation",
      icon: "💳",
      link: "#paypal"
    },
    {
      method: "Venmo",
      description: "Quick and easy mobile donations",
      icon: "📱", 
      link: "#venmo"
    },
    {
      method: "Bank Transfer",
      description: "Direct bank transfer for larger donations",
      icon: "🏦",
      link: "#bank"
    },
    {
      method: "Cash/Check",
      description: "Traditional donation methods accepted",
      icon: "💵",
      link: "#cash"
    }
  ];

  return (
    <div className="mb-16">
      {/* PRIMARY DONATION METHODS SECTION */}
      {/* DEVELOPER NOTE: This grid displays the main donation methods */}
      {/* TO ADD NEW DONATION METHOD: Add new object to donationMethods array above with method, description, icon, link */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {donationMethods.map((method, index) => (
          <Card key={index} className="card-sacred text-center group cursor-pointer">
            <div className="p-4">
              {/* Method icon with hover animation */}
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              
              {/* Method name */}
              <h4 className="font-bold text-dharma-brown mb-2 text-sm">
                {method.method}
              </h4>
              
              {/* Method description */}
              <p className="text-dharma-stone text-xs mb-3">
                {method.description}
              </p>
              
              {/* Action button */}
              <Button 
                className="btn-divine w-full"
                size="sm"
              >
                Choose
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* HOW TO CONTRIBUTE SECTION */}
      {/* DEVELOPER NOTE: This section only shows when showContribute=true (donate page) */}
      {/* TO HIDE: Pass showContribute={false} prop from parent component */}
      {showContribute && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-dharma-brown mb-8 text-center">
            How to Contribute
          </h3>
          
          {/* CONTRIBUTE METHODS GRID */}
          {/* DEVELOPER NOTE: TO ADD NEW CONTRIBUTE METHOD: Add new card here following same pattern */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Volunteer Service */}
            <Card className="card-sacred text-center group cursor-pointer">
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🙏
                </div>
                <h4 className="font-bold text-dharma-brown mb-3">
                  Volunteer Service
                </h4>
                <p className="text-dharma-stone text-sm mb-4">
                  Offer your time and skills in seva (selfless service)
                </p>
                <Button className="btn-divine w-full" size="sm">
                  Join Seva
                </Button>
              </div>
            </Card>

            {/* Share Knowledge */}
            <Card className="card-sacred text-center group cursor-pointer">
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h4 className="font-bold text-dharma-brown mb-3">
                  Share Knowledge
                </h4>
                <p className="text-dharma-stone text-sm mb-4">
                  Contribute articles, teachings, or spiritual insights
                </p>
                <Button className="btn-divine w-full" size="sm">
                  Contribute
                </Button>
              </div>
            </Card>

            {/* Spread Awareness */}
            <Card className="card-sacred text-center group cursor-pointer">
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🌟
                </div>
                <h4 className="font-bold text-dharma-brown mb-3">
                  Spread Awareness
                </h4>
                <p className="text-dharma-stone text-sm mb-4">
                  Share our mission with your community and networks
                </p>
                <Button className="btn-divine w-full" size="sm">
                  Share Mission
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationMethods;