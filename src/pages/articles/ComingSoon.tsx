import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Article Coming Soon - Harini Yoga</title>
        <meta name="description" content="This sacred article is being prepared with love and devotion. Stay tuned for authentic yoga wisdom." />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <section className="py-20 bg-gradient-sacred">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="card-sacred text-center">
              <div className="text-6xl mb-6">🌸</div>
              <h1 className="text-3xl md:text-4xl font-bold text-dharma-brown mb-6">
                Sacred Wisdom Being Prepared
              </h1>
              <div className="bg-krishna-primary/10 p-6 rounded-lg mb-6">
                <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-2">
                  धैर्यं यस्य पिता क्षमा च जननी
                </p>
                <p className="text-lg text-dharma-stone italic">
                  "Patience is the father, forgiveness is the mother" - Sacred preparation requires time
                </p>
              </div>
              <p className="text-lg text-dharma-stone mb-8">
                This article is being crafted with devotion and authentic spiritual insight. 
                Please check back soon for profound teachings on yoga and Vedanta.
              </p>
              <div className="space-y-4">
                <Button 
                  className="btn-divine"
                  onClick={() => window.history.back()}
                >
                  ← Return to Articles
                </Button>
                <div className="bg-gradient-sacred p-4 rounded-lg">
                  <p className="text-krishna-primary font-medium">
                    🙏 Subscribe to our newsletter for updates on new articles and teachings
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

export default ComingSoon;