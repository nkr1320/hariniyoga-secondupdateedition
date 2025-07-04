import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const AshtangaFoundation = () => {
  return (
    <>
      <Helmet>
        <title>The foundation for Ashtanga Yoga as laid out by Patanjali - Harini Yoga</title>
        <meta name="description" content="Deep dive into the eight-fold path of yoga and its practical applications according to Patanjali." />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <section className="py-20 bg-gradient-sacred">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="card-sacred">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📿</div>
                <h1 className="text-3xl md:text-4xl font-bold text-dharma-brown mb-4">
                  The foundation for Ashtanga Yoga as laid out by Patanjali
                </h1>
                <p className="text-lg text-dharma-stone">
                  Deep dive into the eight-fold path of yoga and its practical applications
                </p>
              </div>

              {/* YouTube Video Embed */}
              <div className="mb-8">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Ashtanga Yoga Foundation by Patanjali"
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-6 text-dharma-stone">
                <div className="bg-krishna-primary/10 p-6 rounded-lg text-center">
                  <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-2">
                    अष्टाङ्गयोगो मे प्रोक्तः
                  </p>
                  <p className="italic">
                    "The eight-limbed yoga has been declared by me" - Foundation of Ashtanga
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-dharma-brown">Understanding Ashtanga Yoga</h2>
                <p>
                  Ashtanga Yoga, literally meaning "eight-limbed yoga," represents Patanjali's systematic approach 
                  to spiritual development. This comprehensive method addresses all aspects of human existence - 
                  physical, mental, emotional, and spiritual.
                </p>

                <h3 className="text-xl font-bold text-dharma-brown">The Ethical Foundation</h3>
                <p>
                  The first two limbs, Yama and Niyama, establish the ethical and moral foundation essential for 
                  spiritual progress. Without this foundation, the practice of yoga becomes merely physical exercise.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-dharma-sand/30 p-4 rounded-lg">
                    <h4 className="font-bold text-dharma-brown mb-2">Yama (Restraints)</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Ahimsa (Non-violence)</li>
                      <li>• Satya (Truthfulness)</li>
                      <li>• Asteya (Non-stealing)</li>
                      <li>• Brahmacharya (Energy conservation)</li>
                      <li>• Aparigraha (Non-possessiveness)</li>
                    </ul>
                  </div>
                  <div className="bg-krishna-primary/10 p-4 rounded-lg">
                    <h4 className="font-bold text-dharma-brown mb-2">Niyama (Observances)</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Saucha (Cleanliness)</li>
                      <li>• Santosha (Contentment)</li>
                      <li>• Tapas (Disciplined practice)</li>
                      <li>• Svadhyaya (Self-study)</li>
                      <li>• Ishvara Pranidhana (Surrender to Divine)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-dharma-brown">Progressive Development</h3>
                <p>
                  Each limb of Ashtanga prepares the practitioner for the next stage. The physical practices 
                  (Asana and Pranayama) prepare the body and mind for the deeper practices of concentration 
                  and meditation.
                </p>

                <div className="bg-gradient-sacred p-6 rounded-lg text-center">
                  <p className="text-sanskrit text-lg text-krishna-primary glow-text mb-2">
                    यम नियमासन प्राणायाम प्रत्याहार धारणा ध्यान समाधयो ऽष्टावङ्गानि
                  </p>
                  <p className="italic text-dharma-stone">
                    "The eight limbs of yoga are yama, niyama, asana, pranayama, pratyahara, dharana, dhyana, and samadhi" - Yoga Sutra 2.29
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

export default AshtangaFoundation;