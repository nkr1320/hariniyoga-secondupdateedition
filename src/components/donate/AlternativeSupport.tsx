import { Card } from "@/components/ui/card";

// Type definition for support method
interface SupportMethod {
  icon: string;
  title: string;
  description: string;
}

// Alternative ways to support the mission beyond monetary donations
const AlternativeSupport = () => {
  const supportMethods: SupportMethod[] = [
    {
      icon: "📢",
      title: "Spread the Word",
      description: "Share our teachings with fellow seekers and spiritual communities"
    },
    {
      icon: "⏰",
      title: "Volunteer Time",
      description: "Offer your skills in translation, transcription, or technical support"
    },
    {
      icon: "🤲",
      title: "Prayer & Intention",
      description: "Support our mission through meditation and positive intentions"
    }
  ];

  return (
    <Card className="card-sacred max-w-4xl mx-auto mb-16">
      <div className="p-8">
        {/* Section title */}
        <h3 className="text-2xl font-bold text-dharma-brown mb-6 text-center">
          Other Ways to Support Our Mission
        </h3>
        
        {/* Support methods grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {supportMethods.map((method, index) => (
            <div key={index} className="text-center bg-dharma-sand/30 p-6 rounded-lg">
              {/* Method icon */}
              <div className="text-4xl mb-3">{method.icon}</div>
              
              {/* Method title */}
              <h4 className="font-bold text-dharma-brown mb-2">{method.title}</h4>
              
              {/* Method description */}
              <p className="text-dharma-stone text-sm">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AlternativeSupport;