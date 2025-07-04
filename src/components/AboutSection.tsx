import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const journeyStages = [
    {
      title: "Awakening",
      sanskrit: "जागरण",
      description: "Like Arjuna in the battlefield, I once stood confused between career paths. Until the divine guidance led me to code.",
      icon: "🌅",
      year: "2020"
    },
    {
      title: "Learning",
      sanskrit: "अध्ययन", 
      description: "Embracing the discipline of coding like a yogi embraces asanas. Each bug was a teacher, each solution an enlightenment.",
      icon: "📚",
      year: "2021-2022"
    },
    {
      title: "Creating",
      sanskrit: "सृजन",
      description: "Now building digital temples that serve humanity, merging Krishna's wisdom with modern technology.",
      icon: "⚡",
      year: "2023-Present"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            About the{' '}
            <span className="text-divine">Journey</span>
          </h2>
          <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
            From spiritual seeker to digital creator, guided by eternal principles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="card-sacred">
              <h3 className="text-2xl font-bold text-dharma-brown mb-4">
                The Dharmic Developer
              </h3>
              <div className="space-y-4 text-dharma-stone leading-relaxed">
                <p>
                  Like the <span className="text-dharma-gold font-medium">Bhagavad Gita</span> teaches us about 
                  performing our duty without attachment to results, I approach coding as a form of 
                  <span className="text-krishna-primary font-medium"> Karma Yoga</span> - selfless service through technology.
                </p>
                <p>
                  Every line of code is written with mindfulness, every project approached with the 
                  intention to serve. My development philosophy is rooted in the principle of 
                  <span className="text-dharma-gold font-medium"> "तत् त्वम् असि"</span> - recognizing the divine in all users and stakeholders.
                </p>
                <p>
                  Through meditation and coding, I've discovered that both require similar qualities: 
                  patience, focus, continuous learning, and the wisdom to debug not just code, 
                  but our own limitations.
                </p>
              </div>
            </Card>

            {/* Skills Card */}
            <Card className="card-sacred">
              <h3 className="text-xl font-bold text-dharma-brown mb-4">
                Sacred Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'React', 'TypeScript', 'Node.js', 
                  'Python', 'PostgreSQL', 'MongoDB',
                  'Docker', 'AWS', 'Firebase',
                  'TailwindCSS', 'Framer Motion', 'Next.js'
                ].map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-krishna-primary/10 text-krishna-primary rounded-lg text-sm font-medium text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dharma-brown mb-8 text-center">
              The Sacred Journey
            </h3>
            {journeyStages.map((stage, index) => (
              <Card key={index} className="card-sacred">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{stage.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-dharma-brown">
                        {stage.title}
                      </h4>
                      <span className="text-sm text-dharma-stone bg-dharma-sand px-3 py-1 rounded-full">
                        {stage.year}
                      </span>
                    </div>
                    <p className="text-sanskrit text-krishna-primary mb-2">
                      {stage.sanskrit}
                    </p>
                    <p className="text-dharma-stone leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <Card className="card-sacred text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text">
              योगस्थः कुरु कर्माणि
            </p>
            <p className="text-lg text-dharma-stone italic">
              "Established in yoga, perform your actions" - Bhagavad Gita 2.48
            </p>
            <p className="text-dharma-brown">
              This is my coding philosophy: staying centered in divine consciousness 
              while creating technology that uplifts humanity.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;