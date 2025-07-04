import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Closing section with blessing and final call-to-action buttons
const ClosingBlessing = () => {
  return (
    <Card className="card-sacred text-center max-w-4xl mx-auto">
      <div className="p-8 space-y-6">
        {/* Blessing icon */}
        <div className="text-5xl">🙏</div>
        
        {/* Blessing title */}
        <h3 className="text-2xl font-bold text-dharma-brown">
          May Your Generosity Bear Sacred Fruit
        </h3>
        
        {/* Sacred quote section with background */}
        <div className="bg-gradient-sacred p-6 rounded-lg">
          {/* Sanskrit quote */}
          <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-4">
            यद्दातव्यं तद्दातव्यम्
          </p>
          
          {/* Quote translation */}
          <p className="text-lg text-dharma-stone italic mb-4">
            "What is to be given, must be given" - The spirit of dharmic giving
          </p>
          
          {/* Blessing message */}
          <p className="text-dharma-brown">
            Every act of generosity creates ripples of positive karma that extend far beyond what we can see. Your support helps preserve the eternal wisdom for countless future generations.
          </p>
        </div>

        {/* Final action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-divine">
            🎁 Make a Donation
          </Button>
          <Button className="btn-dharma" variant="outline">
            📋 View Impact Report
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ClosingBlessing;