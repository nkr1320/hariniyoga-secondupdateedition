import { Card } from "@/components/ui/card";

// Impact metrics and donation statement
const ImpactStatement = () => {
  return (
    <Card className="card-sacred max-w-4xl mx-auto mb-16">
      <div className="text-center p-8">
        {/* Main icon */}
        <div className="text-6xl mb-6">🌱</div>
        
        {/* Impact title */}
        <h3 className="text-2xl font-bold text-dharma-brown mb-4">
          Your Support Creates Lasting Impact
        </h3>
        
        {/* Impact description */}
        <p className="text-dharma-stone leading-relaxed mb-6">
          Every donation directly supports our mission to preserve authentic yoga teachings and make them freely accessible to sincere seekers worldwide. Your generosity helps maintain the purity of ancient wisdom in our modern world.
        </p>
        
        {/* Impact metrics grid */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-krishna-primary/10 p-4 rounded-lg">
            <p className="text-krishna-primary font-bold text-2xl">1000+</p>
            <p className="text-dharma-stone text-sm">Students Reached</p>
          </div>
          <div className="bg-dharma-gold/10 p-4 rounded-lg">
            <p className="text-dharma-brown font-bold text-2xl">100%</p>
            <p className="text-dharma-stone text-sm">Goes to Mission</p>
          </div>
          <div className="bg-krishna-light/10 p-4 rounded-lg">
            <p className="text-krishna-primary font-bold text-2xl">Free</p>
            <p className="text-dharma-stone text-sm">Access for All</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ImpactStatement;