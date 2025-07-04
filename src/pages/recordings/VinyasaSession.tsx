import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const VinyasaSession = () => {
  return (
    <>
      <Helmet>
        <title>Gentle Vinyasa Krama Yoga Session - Harini Yoga</title>
        <meta name="description" content="Complete gentle yoga session with step-by-step guidance through traditional Vinyasa Krama sequences." />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <section className="py-20 bg-gradient-sacred">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="card-sacred">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🧘‍♀️</div>
                <Badge className="bg-green-100 text-green-800 mb-4">
                  Practice Session
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-dharma-brown mb-4">
                  Gentle Vinyasa Krama Yoga - Session 1
                </h1>
                <p className="text-lg text-dharma-stone mb-4">
                  Complete gentle yoga session with step-by-step guidance through traditional Vinyasa Krama sequences
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm text-dharma-stone">
                  <span>📚 All Levels</span>
                  <span>🎯 Centering & Flow</span>
                  <span>⏱️ 75 mins</span>
                </div>
              </div>

              {/* Audio Player */}
              <div className="mb-8">
                <div className="bg-krishna-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dharma-brown mb-4 text-center">
                    Sacred Practice Session
                  </h3>
                  <div className="bg-white/50 p-4 rounded-lg text-center">
                    <div className="text-4xl mb-4">🎵</div>
                    <p className="text-dharma-stone mb-4">
                      High-quality audio recording of complete Vinyasa Krama practice
                    </p>
                    <Button className="btn-divine">
                      ▶️ Play Recording
                    </Button>
                  </div>
                </div>
              </div>

              {/* Session Details */}
              <div className="prose prose-lg max-w-none space-y-6 text-dharma-stone">
                <div className="bg-gradient-sacred p-6 rounded-lg text-center">
                  <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-2">
                    योगस्थः कुरु कर्माणि
                  </p>
                  <p className="italic">
                    "Established in yoga, perform action" - Bhagavad Gita 2.48
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-dharma-brown">About This Session</h2>
                <p>
                  This gentle Vinyasa Krama Yoga session, guided by Vedant Thyagaraj, offers a wonderful way to 
                  bring yourself to a yogic state of centeredness and bliss. The methodical, step-by-step approach 
                  includes well-crafted asana sequences that combine energizing as well as relaxing practices.
                </p>

                <h3 className="text-xl font-bold text-dharma-brown">What You'll Experience</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gentle warm-up sequences to prepare the body</li>
                  <li>Traditional Vinyasa Krama flowing movements</li>
                  <li>Breath-synchronized postures</li>
                  <li>Mindful transitions between poses</li>
                  <li>Relaxing cool-down and restoration</li>
                  <li>Final meditation and pranayama</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-dharma-sand/30 p-4 rounded-lg">
                    <h4 className="font-bold text-dharma-brown mb-2">Preparation</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Comfortable yoga mat</li>
                      <li>• Quiet, peaceful space</li>
                      <li>• Blocks or cushions if needed</li>
                      <li>• Light, loose clothing</li>
                    </ul>
                  </div>
                  <div className="bg-krishna-primary/10 p-4 rounded-lg">
                    <h4 className="font-bold text-dharma-brown mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Increased flexibility and strength</li>
                      <li>• Improved breath awareness</li>
                      <li>• Mental clarity and focus</li>
                      <li>• Stress reduction and relaxation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-krishna-primary/10 p-6 rounded-lg text-center">
                  <p className="text-krishna-primary font-medium mb-2">
                    🌸 Practice with devotion and surrender to the Divine within
                  </p>
                  <p className="text-sm text-dharma-stone italic">
                    "Let your practice be an offering to the highest Self"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default VinyasaSession;