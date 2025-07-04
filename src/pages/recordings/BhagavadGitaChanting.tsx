import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BhagavadGitaChanting = () => {
  return (
    <>
      <Helmet>
        <title>Bhagavad Gita Chanting Session - Harini Yoga</title>
        <meta name="description" content="Sacred chanting of select verses from the Bhagavad Gita with proper pronunciation and rhythm." />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <section className="py-20 bg-gradient-sacred">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="card-sacred">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📿</div>
                <Badge className="bg-green-100 text-green-800 mb-4">
                  Chanting
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-dharma-brown mb-4">
                  Bhagavad Gita Chanting Session
                </h1>
                <p className="text-lg text-dharma-stone mb-4">
                  Sacred chanting of select verses from the Bhagavad Gita with proper pronunciation and rhythm
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm text-dharma-stone">
                  <span>📚 All Levels</span>
                  <span>🎯 Devotional Practice</span>
                  <span>⏱️ 30 mins</span>
                </div>
              </div>

              {/* Audio Player */}
              <div className="mb-8">
                <div className="bg-krishna-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dharma-brown mb-4 text-center">
                    Sacred Chanting Practice
                  </h3>
                  <div className="bg-white/50 p-4 rounded-lg text-center">
                    <div className="text-4xl mb-4">🎵</div>
                    <p className="text-dharma-stone mb-4">
                      Traditional chanting with authentic Sanskrit pronunciation
                    </p>
                    <Button className="btn-divine">
                      ▶️ Play Chanting
                    </Button>
                  </div>
                </div>
              </div>

              {/* Session Content */}
              <div className="prose prose-lg max-w-none space-y-6 text-dharma-stone">
                <div className="bg-gradient-sacred p-6 rounded-lg text-center">
                  <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-2">
                    श्रीमद्भगवद्गीता
                  </p>
                  <p className="italic">
                    "The Song of the Divine" - Sacred verses for spiritual awakening
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-dharma-brown">About This Chanting Session</h2>
                <p>
                  Experience the transformative power of Bhagavad Gita chanting. This sacred practice helps 
                  purify the mind, open the heart, and connect with divine consciousness through the vibrations 
                  of ancient Sanskrit mantras.
                </p>

                <h3 className="text-xl font-bold text-dharma-brown">Featured Verses</h3>
                <div className="grid gap-4">
                  <div className="bg-dharma-sand/30 p-4 rounded-lg">
                    <p className="text-sanskrit text-lg text-krishna-primary mb-2">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन</p>
                    <p className="text-sm italic">
                      "You have the right to perform action, but never to the fruits of action" - 2.47
                    </p>
                  </div>
                  <div className="bg-krishna-primary/10 p-4 rounded-lg">
                    <p className="text-sanskrit text-lg text-krishna-primary mb-2">योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय</p>
                    <p className="text-sm italic">
                      "Established in yoga, perform action, abandoning attachment" - 2.48
                    </p>
                  </div>
                </div>

                <div className="bg-krishna-primary/10 p-6 rounded-lg text-center">
                  <p className="text-krishna-primary font-medium mb-2">
                    🌸 Let the sacred sounds purify your being and elevate your consciousness
                  </p>
                  <p className="text-sm text-dharma-stone italic">
                    "Through chanting, the divine presence awakens within"
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

export default BhagavadGitaChanting;