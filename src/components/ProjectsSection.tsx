import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const [viewType, setViewType] = useState<'tech' | 'dharma'>('tech');

  const projects = [
    {
      title: "Meditation Timer App",
      techDescription: "A React Native app with TypeScript, Firebase auth, and custom meditation timers with ambient sounds.",
      dharmaDescription: "Digital tool for deepening spiritual practice, helping users establish consistent meditation routines aligned with vedic time cycles.",
      image: "🧘‍♂️",
      techStack: ["React Native", "TypeScript", "Firebase", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      impact: "500+ daily meditators"
    },
    {
      title: "Sanskrit Learning Platform",
      techDescription: "Full-stack MERN application with spaced repetition algorithm, progress tracking, and interactive Sanskrit lessons.",
      dharmaDescription: "Preserving ancient wisdom by making Sanskrit accessible to modern seekers, connecting them to original spiritual texts.",
      image: "📿",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      impact: "1000+ students learning"
    },
    {
      title: "Dharmic E-commerce",
      techDescription: "Next.js e-commerce platform with Stripe integration, inventory management, and responsive design.",
      dharmaDescription: "Ethical marketplace for spiritual books and artifacts, supporting authentic teachers and artisans worldwide.",
      image: "🛍️",
      techStack: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      impact: "₹50L+ in ethical sales"
    },
    {
      title: "Yoga Class Manager",
      techDescription: "Vue.js SPA with real-time booking system, payment processing, and teacher dashboard for yoga studios.",
      dharmaDescription: "Streamlining sacred practice sharing, helping yoga teachers focus on teaching while technology handles logistics.",
      image: "🕉️",
      techStack: ["Vue.js", "Firebase", "Vuex", "Chakra UI"],
      liveUrl: "#",
      githubUrl: "#",
      impact: "20+ studios served"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            Sacred{' '}
            <span className="text-divine">Projects</span>
          </h2>
          <p className="text-xl text-dharma-stone max-w-3xl mx-auto mb-8">
            Dharma in action - building technology that serves humanity and spiritual growth
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-dharma-sand rounded-lg p-1 inline-flex">
              <Button
                onClick={() => setViewType('tech')}
                variant={viewType === 'tech' ? 'default' : 'ghost'}
                className={viewType === 'tech' ? 'btn-divine' : 'text-dharma-brown'}
                size="sm"
              >
                Technical View
              </Button>
              <Button
                onClick={() => setViewType('dharma')}
                variant={viewType === 'dharma' ? 'default' : 'ghost'}
                className={viewType === 'dharma' ? 'btn-dharma' : 'text-dharma-brown'}
                size="sm"
              >
                Spiritual Impact
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="card-sacred group">
              {/* Project Icon */}
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-dharma-brown mb-4 text-center">
                {project.title}
              </h3>

              {/* Dynamic Description */}
              <p className="text-dharma-stone leading-relaxed mb-6 min-h-[80px]">
                {viewType === 'tech' ? project.techDescription : project.dharmaDescription}
              </p>

              {/* Tech Stack (only in tech view) */}
              {viewType === 'tech' && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-krishna-primary/10 text-krishna-primary border-krishna-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact (only in dharma view) */}
              {viewType === 'dharma' && (
                <div className="mb-6">
                  <div className="bg-dharma-gold/20 text-dharma-brown px-4 py-2 rounded-lg text-center font-medium">
                    🌟 {project.impact}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-dharma-sand">
                <Button 
                  className="btn-divine flex-1"
                  size="sm"
                >
                  Live Demo
                </Button>
                <Button 
                  className="btn-dharma flex-1"
                  variant="outline"
                  size="sm"
                >
                  View Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Sanskrit Quote */}
        <Card className="card-sacred text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text">
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
            </p>
            <p className="text-lg text-dharma-stone italic">
              "You have the right to perform action, but never to the fruits of action" - Bhagavad Gita 2.47
            </p>
            <p className="text-dharma-brown">
              Every project is an offering of service, coded with devotion and detachment from results.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;