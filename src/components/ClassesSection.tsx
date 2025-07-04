import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ClassesSection = () => {
  const navigate = useNavigate();
  // Featured classes and workshops data
  const classes = [
    {
      title: "Gentle Vinyasa Krama Yoga",
      instructor: "Vedant Thyagaraj",
      schedule: "Sundays 9:00am to 10:15am Pacific Time",
      description: "Yogasthah kuru karmani: Be established in yoga & then engage yourself in activities.- Bhagavad Gita",
      details: "Start your week in a yogic state of balance and bliss.",
      method: "Vinyasa Krama Yoga guides you through step-by-step asana sequences that both energize and relax the body and mind.",
      contact: "  classes offered via zoom. Please email info@ekashri.yoga for link to join.",
      image: "🧘‍♀️",
      // status: "paid ",
      type: "Weekly Class"
    },
    {
      title: "Hatha Yoga Foundations",
      instructor: "Harini Yoga Team",
      schedule: "Tuesdays 7:00pm to 8:15pm Pacific Time",
      description: "स्थिरसुखमासनम्: Asana should be steady and comfortable. - Yoga Sutra 2.46",
      details: "Build a strong foundation in traditional Hatha Yoga with focus on proper alignment and breathing techniques.",
      method: "Classical Hatha Yoga approach with sustained postures, mindful transitions, and pranayama practice.",
      contact: " classes offered via zoom. Please email info@ekashri.yoga for link to join.",
      image: "🕉️",
      // status: "paid ",
      type: "Weekly Class"
    },
    {
      title: "Restorative Yoga & Meditation",
      instructor: "Divine Teachers",
      schedule: "Fridays 6:00pm to 7:30pm Pacific Time", 
      description: "प्रत्याहार: Withdrawal of the senses leads to inner peace. - Yoga Sutra 2.54",
      details: "Deeply relaxing practice combining gentle poses, pranayama, and guided meditation for complete restoration.",
      method: "Gentle, supported postures combined with breathing practices and meditation techniques for deep relaxation.",
      contact: " classes offered via zoom. Please email info@ekashri.yoga for link to join.",
      image: "🌙",
      // status: " paid",
      type: "Weekly Class"
    },
    {
      title: "Atma Bodha Study Series",
      instructor: "Adi Shankaracharya",
      schedule: "10 Saturdays starting Aug. 2, 2025",
      description: "आत्मबोधः - A text that explains the fundamentals of Vedanta",
      details: "Prakaranagranthah - An introductory text to Vedanta and the Subtle Realm (10 classes, Saturdays 7am-8am PST)",
      cost: "$60 (US)",
      image: "📿",
      status: "Upcoming",
      type: "Study Series"
    },
    {
      title: "Expanded Yoga Sutra Study Series",
      instructor: "Various Teachers",
      schedule: "Starting Nov. 2025",
      description: "Building on the Yoga Sutra Study series which completed a few years ago",
      details: "Deep dive into advanced concepts of Patanjali's Yoga Sutras with practical applications",
      image: "📜",
      status: "Upcoming",
      type: "Advanced Study"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "90 Hour Teacher Training Program",
      subtitle: "Vinyasa Krama Yoga",
      date: "July 2022 to October 2022",
      description: "Comprehensive yoga teacher training program covering philosophy, anatomy, and teaching methodology",
      image: "🎓"
    },
    {
      title: "CALM Program",
      subtitle: "Creating Awareness for Life Mastery",
      date: "February 2022",
      description: "Mindfulness and meditation workshop series for stress reduction and spiritual growth",
      image: "🧘"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        {/* Section Header with Sanskrit Quote */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            Sacred{' '}
            <span className="text-divine">Classes & Workshops</span>
          </h2>
          <div className="mb-8">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
              योगस्थः कुरु कर्माणि
            </p>
            <p className="text-lg text-dharma-stone italic">
              "Established in yoga, perform action" - Bhagavad Gita 2.48
            </p>
          </div>
          <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
            Join our authentic yoga and Vedanta classes rooted in traditional teachings
          </p>
        </div>

        {/* WEEKLY YOGA CLASSES SECTION */}
        {/* DEVELOPER NOTE: To add new class, add object to classes array above with type: "Weekly Class" */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dharma-brown mb-8 text-center">
            Yoga Classes
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {classes.filter(c => c.type === "Weekly Class").map((cls, index) => (
              <Card key={index} className="card-sacred">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-4">{cls.image}</div>
                  {/* <Badge className="bg-green-100 text-green-800 mb-4">
                    {cls.status}
                  </Badge> */}
                  <h4 className="text-1xl font-bold text-dharma-brown mb-2">
                    {cls.title}
                  </h4>
                  <p className="text-krishna-primary font-semibold mb-2">
                    with {cls.instructor}
                  </p>
                  <p className="text-dharma-stone font-medium mb-4">
                    {cls.schedule}
                  </p>
                </div>

                <div className="space-y-3 text-dharma-stone">
                  <p className="italic font-medium text-center">
                    "{cls.description}"
                  </p>
                  <p>{cls.details}</p>
                  <p className="font-medium">{cls.method}</p>
                  <div className="bg-krishna-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-krishna-primary font-medium">
                      📧 {cls.contact}
                    </p>
                  </div>
                </div>

                {/* DEVELOPER NOTE: Join Class Button - Opens Google Form for registration */}
                {/* TO UPDATE: Change the Google Form URL below to your actual registration form */}
                <div className="mt-6 pt-4 border-t border-dharma-sand">
                  <Button 
                    className="btn-divine w-full"
                    onClick={() => window.open('https://forms.google.com/hariniyoga-class-register', '_blank')}
                  >
                    Join Class
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Study Series */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-dharma-brown mb-8 text-center">
            Upcoming Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.filter(c => c.type !== "Weekly Class").map((cls, index) => (
              <Card key={index} className="card-sacred">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{cls.image}</div>
                  <Badge className={`mb-4 ${
                    cls.status === 'Upcoming' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {cls.status}
                  </Badge>
                  <h4 className="text-xl font-bold text-dharma-brown mb-2">
                    {cls.title}
                  </h4>
                  <p className="text-dharma-stone font-medium mb-2">
                    {cls.schedule}
                  </p>
                  {cls.cost && (
                    <p className="text-dharma-gold font-bold">
                      {cls.cost}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-dharma-stone text-sm">
                  <p className="font-medium">{cls.description}</p>
                  <p>{cls.details}</p>
                </div>

                {/* DEVELOPER NOTE: Program Registration Button */}
                {/* TO UPDATE: Change Google Form URL below to your actual program registration form */}
                <div className="mt-6 pt-4 border-t border-dharma-sand">
                  <Button 
                    className={cls.status === 'Upcoming' ? 'btn-dharma w-full' : 'btn-divine w-full'}
                    variant={cls.status === 'Upcoming' ? 'outline' : 'default'}
                    onClick={() => {
                      if (cls.status === 'Upcoming') {
                        window.open('https://forms.google.com/hariniyoga-program-register', '_blank');
                      }
                    }}
                  >
                    {cls.status === 'Upcoming' ? 'Register Interest' : 'Learn More'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Workshops */}
        <div>
          <h3 className="text-3xl font-bold text-dharma-brown mb-8 text-center">
            Past Workshops & Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="card-sacred">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{workshop.image}</div>
                  <h4 className="text-lg font-bold text-dharma-brown">
                    {workshop.title}
                  </h4>
                  <p className="text-krishna-primary font-medium mb-2">
                    {workshop.subtitle}
                  </p>
                  <p className="text-dharma-stone text-sm font-medium">
                    {workshop.date}
                  </p>
                </div>
                <p className="text-dharma-stone text-sm text-center">
                  {workshop.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="card-sacred text-center max-w-4xl mx-auto mt-16">
          <div className="space-y-4">
            <p className="text-sanskrit text-xl text-krishna-primary glow-text">
              तत् ध्यानजम् अनाशयम्
            </p>
            <p className="text-lg text-dharma-stone italic">
              "An action done from a meditative state of mind leaves no residues of attachment" - Yoga Sutra 4.6
            </p>
            <p className="text-dharma-brown">
              Join our sacred community of seekers exploring the depths of yoga and Vedanta through authentic traditional teachings.
            </p>
            <div className="bg-krishna-primary/10 p-4 rounded-lg">
              <p className="text-krishna-primary font-medium">
                📧 For class schedules and registration: info@ekashri.yoga
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ClassesSection;