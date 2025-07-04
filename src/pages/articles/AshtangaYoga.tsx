// Helmet is used to set <head> tags like title and meta for SEO
import { Helmet } from 'react-helmet-async';

// Navigation and Footer components (assumed custom site layout)
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Card component used for content container
import { Card } from "@/components/ui/card";

// This component represents a single page about Patanjali's Yoga Practice
const AshtangaYoga = () => {
  return (
    <>
      {/* SEO Meta Information for this page */}
      <Helmet>
        {/* Title shown in browser tab */}
        <title>The Yoga Practice as defined by Patanjali - Harini Yoga</title>
        
        {/* Meta description for SEO and social previews */}
        <meta 
          name="description" 
          content="Understanding the fundamental principles of yoga as laid out in the Yoga Sutras of Patanjali." 
        />
      </Helmet>

      {/* Page wrapper with full screen height and top padding for navigation spacing */}
      <div className="min-h-screen pt-20">
        
        {/* Top navigation bar (imported) */}
        <Navigation />

        {/* Main section of the page with padding and background gradient */}
        <section className="py-20 bg-gradient-sacred">
          <div className="container mx-auto px-6 max-w-4xl">
            
            {/* Content card holds everything in a styled box */}
            <Card className="card-sacred">
              
              {/* Section heading with emoji, title, and subtitle */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🧘‍♀️</div> {/* Emoji icon */}
                <h1 className="text-3xl md:text-4xl font-bold text-dharma-brown mb-4">
                  The Yoga Practice as defined by Patanjali
                </h1>
                <p className="text-lg text-dharma-stone">
                  Understanding the fundamental principles of yoga as laid out in the Yoga Sutras
                </p>
              </div>

              {/* Embedded YouTube video section */}
              <div className="mb-8">
                <div className="aspect-video"> {/* Maintains 16:9 ratio */}
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video ID
                    title="The Yoga Practice as defined by Patanjali"
                    className="w-full h-full rounded-lg"
                    allowFullScreen // Enables fullscreen button
                  />
                </div>
              </div>

              {/* Article content section with prose styling for readability */}
              <div className="prose prose-lg max-w-none space-y-6 text-dharma-stone">
                
                {/* Sanskrit quote block with stylized background */}
                <div className="bg-krishna-primary/10 p-6 rounded-lg text-center">
                  <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-2">
                    योगश्चित्तवृत्तिनिरोधः
                  </p>
                  <p className="italic">
                    "Yoga is the cessation of fluctuations of the mind" - Yoga Sutra 1.2
                  </p>
                </div>

                {/* Introduction heading and content */}
                <h2 className="text-2xl font-bold text-dharma-brown">
                  Introduction to Patanjali's Definition
                </h2>
                <p>
                  The sage Patanjali, in his foundational text the Yoga Sutras, provides us with the most comprehensive 
                  and authoritative definition of yoga. Written approximately 2,000 years ago, this timeless wisdom 
                  continues to guide practitioners on the path of self-realization.
                </p>

                {/* Eight-fold path heading and list */}
                <h3 className="text-xl font-bold text-dharma-brown">
                  The Eight-Fold Path
                </h3>
                <p>
                  Patanjali outlines the Ashtanga Yoga, or eight-limbed path, which serves as a complete guide for 
                  spiritual development:
                </p>

                {/* List of eight limbs of yoga */}
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Yama</strong> - Ethical restraints and moral disciplines</li>
                  <li><strong>Niyama</strong> - Observances and spiritual practices</li>
                  <li><strong>Asana</strong> - Physical postures for steadiness</li>
                  <li><strong>Pranayama</strong> - Breath control and energy regulation</li>
                  <li><strong>Pratyahara</strong> - Withdrawal of the senses</li>
                  <li><strong>Dharana</strong> - Concentration and focused attention</li>
                  <li><strong>Dhyana</strong> - Meditation and sustained awareness</li>
                  <li><strong>Samadhi</strong> - Union and supreme consciousness</li>
                </ul>

                {/* Practical application section */}
                <h3 className="text-xl font-bold text-dharma-brown">
                  Practical Applications
                </h3>
                <p>
                  The beauty of Patanjali's system lies in its practical applicability. Each limb builds upon the 
                  previous one, creating a systematic approach to inner purification and spiritual growth. Modern 
                  practitioners can benefit from this ancient wisdom by incorporating these principles into daily life.
                </p>

                {/* Final inspirational quote */}
                <div className="bg-gradient-sacred p-6 rounded-lg text-center">
                  <p className="text-sanskrit text-lg text-krishna-primary glow-text mb-2">
                    तत्र स्थितौ यत्नोऽभ्यासः
                  </p>
                  <p className="italic text-dharma-stone">
                    "Practice is the sustained effort to maintain steadiness" - Yoga Sutra 1.14
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Site footer at the bottom */}
        <Footer />
      </div>
    </>
  );
};

// Exporting the component so it can be used in routes/pages
export default AshtangaYoga;
