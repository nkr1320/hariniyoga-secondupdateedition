import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const RecordingsSection = () => {
  // DEVELOPER NOTE: RecordingsSection component manages audio/video content navigation
  // TO ADD NEW RECORDING: 
  // 1. Add to classRecordings array below
  // 2. Create corresponding page in src/pages/recordings/
  // 3. Add route to src/App.tsx 
  // 4. Update handleListenNow function below

  // Handle listen now navigation to individual recording pages  
  const handleListenNow = (index: number) => {
    // DEVELOPER NOTE: Navigation logic for recording pages
    // TO ADD NEW RECORDING PAGE: Add new condition here with proper route
    if (index === 0) window.open('/recordings/vinyasa-session', '_blank');
    else if (index === 1) window.open('/recordings/bhagavad-gita-chanting', '_blank');
    else window.open('/recordings/meditation-pranayama', '_blank');
  };

  // DEVELOPER NOTE: Recording series data configuration
  // TO ADD NEW SERIES: Add new object to recordingSeries array
  const recordingSeries = [
    {
      title: "Ashtanga Yoga Dialogue Series",
      description: "Complete podcast series exploring Patanjali's eight-limbed path through scholarly dialogue",
      totalEpisodes: 8,
      episodes: [
        {
          episode: 3,
          title: "Dialogue on Niyama",
          subtitle: "(2nd limb of Ashtanga Yoga)",
          hosts: ["Vedant Thyagaraj", "Dr. Shriram Sarvotham"],
          duration: "45 mins",
          type: "Video + Audio"
        },
        {
          episode: 4,
          title: "Dialogue on Asanas", 
          subtitle: "(3rd limb of Ashtanga Yoga)",
          hosts: ["Vedant Thyagaraj", "Dr. Shriram Sarvotham"],
          duration: "52 mins",
          type: "Video + Audio"
        },
        {
          episode: 5,
          title: "Dialogue on Pranayama",
          subtitle: "(4th limb of Ashtanga Yoga)", 
          hosts: ["Vedant Thyagaraj", "Dr. Shriram Sarvotham"],
          duration: "48 mins",
          type: "Video + Audio"
        },
        {
          episode: 6,
          title: "Dialogue on Pratyahara",
          subtitle: "(5th limb of Ashtanga Yoga)",
          hosts: ["Vedant Thyagaraj", "Dr. Shriram Sarvotham"],
          duration: "50 mins",
          type: "Video + Audio"
        }
      ],
      image: "🎙️",
      category: "Podcast Series"
    }
  ];

  // DEVELOPER NOTE: Class recordings data configuration  
  // TO ADD NEW CLASS RECORDING: Add new object here with title, instructor, date, duration, description, level, focus, image, type
  const classRecordings = [
    {
      title: "Gentle Vinyasa Krama Yoga - Session 1",
      instructor: "Vedant Thyagaraj", 
      date: "Recent Practice",
      duration: "75 mins",
      description: "Complete gentle yoga session with step-by-step guidance through traditional Vinyasa Krama sequences",
      level: "All Levels",
      focus: "Centering & Flow",
      image: "🧘‍♀️",
      type: "Practice Session"
    },
    {
      title: "Bhagavad Gita Chanting Session",
      instructor: "Traditional Chanting",
      date: "Monthly Recording",
      duration: "30 mins", 
      description: "Sacred chanting of select verses from the Bhagavad Gita with proper pronunciation and rhythm",
      level: "All Levels",
      focus: "Devotional Practice",
      image: "📿",
      type: "Chanting"
    },
    {
      title: "Meditation & Pranayama Practice",
      instructor: "Guided Session",
      date: "Weekly Practice",
      duration: "45 mins",
      description: "Combined breathing practices and meditation techniques for developing inner awareness",
      level: "Beginner to Intermediate",
      focus: "Breath & Meditation",
      image: "🌬️",
      type: "Meditation"
    }
  ];

  const studyRecordings = [
    {
      title: "The Bhagavad Gita Study Series",
      subtitle: "Chapter-by-Chapter Exploration",
      sessions: "18 recorded sessions",
      description: "Complete study of the Bhagavad Gita with traditional commentary and practical applications",
      image: "📖",
      status: "Complete Series"
    },
    {
      title: "Yoga Sutra Study Workshop Recordings",
      subtitle: "Past Workshop Series",
      sessions: "Multiple sessions available",
      description: "Recorded workshops diving deep into Patanjali's Yoga Sutras with group discussions",
      image: "📚",
      status: "Archive Available"
    }
  ];

  return (
    <section id="recordings" className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            Sacred{' '}
            <span className="text-divine">Recordings</span>
          </h2>
          <div className="mb-8">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
              श्रुतिस्मृतिपुराणानाम्
            </p>
            <p className="text-lg text-dharma-stone italic">
              "Through sacred sounds and recorded wisdom" - Access teachings anytime
            </p>
          </div>
          <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
            Listen to authentic yoga teachings, guided practices, and philosophical discussions
          </p>
        </div>


        {/* PRACTICE RECORDINGS SECTION */}
        {/* DEVELOPER NOTE: Displays class recording cards with navigation to individual pages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dharma-brown mb-8 text-center">
            Practice Session Recordings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classRecordings.map((recording, index) => (
              <Card key={index} className="card-sacred">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{recording.image}</div>
                  <Badge className="bg-green-100 text-green-800 mb-3">
                    {recording.type}
                  </Badge>
                  <h4 className="text-lg font-bold text-dharma-brown mb-2">
                    {recording.title}
                  </h4>
                  <p className="text-krishna-primary font-medium text-sm mb-2">
                    {recording.instructor}
                  </p>
                  <p className="text-dharma-stone text-xs">{recording.date}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <p className="text-dharma-stone leading-relaxed">
                    {recording.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-krishna-primary/10 p-2 rounded">
                      <span className="text-krishna-primary font-medium">
                        📚 {recording.level}
                      </span>
                    </div>
                    <div className="bg-dharma-gold/10 p-2 rounded">
                      <span className="text-dharma-brown font-medium">
                        🎯 {recording.focus}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-dharma-stone">⏱️ {recording.duration}</span>
                  </div>
                </div>

                {/* DEVELOPER NOTE: Listen Now button navigation */}
                {/* Opens individual recording page in new tab */}
                <div className="mt-6 pt-4 border-t border-dharma-sand">
                  <Button 
                    className="btn-divine w-full"
                    onClick={() => handleListenNow(index)}
                  >
                    🎵 Listen Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Study Series Recordings */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dharma-brown mb-8 text-center">
            Study Series Archives
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {studyRecordings.map((study, index) => (
              <Card key={index} className="card-sacred">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{study.image}</div>
                  <Badge className="bg-blue-100 text-blue-800 mb-3">
                    {study.status}
                  </Badge>
                  <h4 className="text-xl font-bold text-dharma-brown mb-2">
                    {study.title}
                  </h4>
                  <p className="text-krishna-primary font-medium mb-3">
                    {study.subtitle}
                  </p>
                  <p className="text-dharma-stone text-sm mb-4">
                    {study.sessions}
                  </p>
                </div>

                <p className="text-dharma-stone text-sm leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="mt-6 pt-4 border-t border-dharma-sand">
                  <Button className="btn-dharma w-full" variant="outline">
                    Access Archive
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Access Information */}
        <Card className="card-sacred text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="text-5xl">🎧</div>
            <h3 className="text-2xl font-bold text-dharma-brown">
              Free Access to Sacred Teachings
            </h3>
            <p className="text-dharma-stone">
              All recordings are provided freely as service to the spiritual community. Download, listen, and share these authentic teachings.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-krishna-primary/10 p-4 rounded-lg">
                <p className="text-krishna-primary font-bold text-2xl">50+</p>
                <p className="text-dharma-stone text-sm">Hours of Content</p>
              </div>
              <div className="bg-dharma-gold/10 p-4 rounded-lg">
                <p className="text-dharma-brown font-bold text-2xl">HD</p>
                <p className="text-dharma-stone text-sm">Audio Quality</p>
              </div>
              <div className="bg-krishna-light/10 p-4 rounded-lg">
                <p className="text-krishna-primary font-bold text-2xl">Free</p>
                <p className="text-dharma-stone text-sm">Always Available</p>
              </div>
            </div>

            <div className="bg-gradient-sacred p-6 rounded-lg">
              <p className="text-sanskrit text-lg text-krishna-primary glow-text mb-2">
                वेदोऽखिलो धर्ममूलम्
              </p>
              <p className="text-dharma-stone italic">
                "The Vedas are the root of all dharma" - Preserve and share the eternal wisdom
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-divine">
                📱 Download App
              </Button>
              <Button className="btn-dharma" variant="outline">
                📧 Subscribe to Updates
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RecordingsSection;