import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventsSection = () => {
  // Past events data organized by year
  const eventsByYear = {
    2022: [
      {
        title: "200 Hour Teacher Training Program",
        subtitle: "Vinyasa Krama Yoga",
        date: "July 2022 to October 2022",
        description: "Comprehensive yoga teacher training program covering philosophy, anatomy, and teaching methodology in the traditional Vinyasa Krama style",
        participants: "12 graduates",
        image: "🎓",
        type: "Training Program"
      },
      {
        title: "Collaboration with Sambodh Society",
        subtitle: "Yoga Practice Videos Production",
        date: "September 2022",
        location: "Kalamazoo, MI",
        description: "Partnership with Sambodh Society for the production of authentic yoga practice videos, bringing traditional teachings to a wider audience",
        impact: "Multiple video series created",
        image: "🎬",
        type: "Collaboration"
      },
      {
        title: "CALM Program",
        subtitle: "Creating Awareness for Life Mastery",
        date: "February 2022",
        description: "Mindfulness and meditation workshop series designed to help participants develop awareness and mastery over their life experiences",
        participants: "30+ attendees",
        image: "🧘",
        type: "Workshop"
      },
      {
        title: "Personalized Yoga Therapy Sessions",
        subtitle: "Individual Healing Approach",
        date: "Ongoing throughout 2022",
        description: "One-on-one therapeutic yoga sessions tailored to individual needs, combining asana, pranayama, and philosophical guidance",
        sessions: "50+ sessions conducted",
        image: "💆‍♀️",
        type: "Therapy"
      },
      {
        title: "Yoga of the Bhagavad Gita Chanting Classes",
        subtitle: "Sacred Sound Practice",
        date: "Monthly sessions 2022",
        description: "Regular chanting sessions exploring the profound verses of the Bhagavad Gita, combining study with devotional practice",
        frequency: "Monthly gatherings",
        image: "📿",
        type: "Chanting"
      },
      {
        title: "Weekly Yoga Classes with Vedant Thyagaraj",
        subtitle: "Ongoing Community Practice",
        date: "Every Sunday 2022",
        description: "Regular community yoga classes led by Vedant Thyagaraj, providing consistent practice opportunities for local sangha",
        attendance: "15-20 regular participants",
        image: "🕉️",
        type: "Regular Class"
      }
    ],
    2021: [
      {
        title: "Foundation Yoga Workshop Series",
        subtitle: "Building Strong Practice Roots",
        date: "Various dates 2021",
        description: "Workshop series focused on establishing proper foundations in yoga practice, covering alignment, breathing, and philosophical understanding",
        workshops: "6 workshops conducted",
        image: "🏗️",
        type: "Workshop Series"
      },
      {
        title: "Online Meditation Retreat",
        subtitle: "Virtual Spiritual Gathering",
        date: "Summer 2021",
        description: "Multi-day online meditation retreat adapting traditional practices to virtual format during pandemic times",
        participants: "40+ global participants",
        image: "💻",
        type: "Retreat"
      }
    ]
  };

  const eventTypeColors = {
    "Training Program": "bg-blue-100 text-blue-800",
    "Collaboration": "bg-purple-100 text-purple-800", 
    "Workshop": "bg-green-100 text-green-800",
    "Therapy": "bg-orange-100 text-orange-800",
    "Chanting": "bg-pink-100 text-pink-800",
    "Regular Class": "bg-yellow-100 text-yellow-800",
    "Workshop Series": "bg-indigo-100 text-indigo-800",
    "Retreat": "bg-teal-100 text-teal-800"
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            Past Events &{' '}
            <span className="text-divine">Milestones</span>
          </h2>
          <div className="mb-8">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
            </p>
            <p className="text-lg text-dharma-stone italic">
              "You have the right to perform action, but never to the fruits of action" - Bhagavad Gita 2.47
            </p>
          </div>
          <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
            A journey of service through yoga teachings, workshops, and spiritual gatherings
          </p>
        </div>

        {/* Events Timeline */}
        {Object.entries(eventsByYear).map(([year, events]) => (
          <div key={year} className="mb-16">
            {/* Year Header */}
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-divine mb-4">{year}</h3>
              <div className="w-24 h-1 bg-gradient-divine mx-auto rounded-full"></div>
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="card-sacred group">
                  {/* Event Header */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {event.image}
                    </div>
                    <Badge className={`mb-3 ${eventTypeColors[event.type] || 'bg-gray-100 text-gray-800'}`}>
                      {event.type}
                    </Badge>
                    <h4 className="text-lg font-bold text-dharma-brown mb-2">
                      {event.title}
                    </h4>
                    <p className="text-krishna-primary font-medium mb-2">
                      {event.subtitle}
                    </p>
                    <p className="text-dharma-stone text-sm">
                      {event.date}
                    </p>
                    {event.location && (
                      <p className="text-dharma-stone text-xs mt-1">
                        📍 {event.location}
                      </p>
                    )}
                  </div>

                  {/* Event Description */}
                  <p className="text-dharma-stone text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Event Stats */}
                  <div className="space-y-2 text-xs">
                    {event.participants && (
                      <div className="bg-krishna-primary/10 px-3 py-2 rounded-lg">
                        <span className="text-krishna-primary font-medium">
                          👥 {event.participants}
                        </span>
                      </div>
                    )}
                    {event.impact && (
                      <div className="bg-dharma-gold/10 px-3 py-2 rounded-lg">
                        <span className="text-dharma-brown font-medium">
                          ✨ {event.impact}
                        </span>
                      </div>
                    )}
                    {event.sessions && (
                      <div className="bg-krishna-light/10 px-3 py-2 rounded-lg">
                        <span className="text-krishna-primary font-medium">
                          📊 {event.sessions}
                        </span>
                      </div>
                    )}
                    {event.frequency && (
                      <div className="bg-purple-100 px-3 py-2 rounded-lg">
                        <span className="text-purple-700 font-medium">
                          🔄 {event.frequency}
                        </span>
                      </div>
                    )}
                    {event.attendance && (
                      <div className="bg-green-100 px-3 py-2 rounded-lg">
                        <span className="text-green-700 font-medium">
                          📈 {event.attendance}
                        </span>
                      </div>
                    )}
                    {event.workshops && (
                      <div className="bg-blue-100 px-3 py-2 rounded-lg">
                        <span className="text-blue-700 font-medium">
                          🎯 {event.workshops}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Impact Summary */}
        <Card className="card-sacred text-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="text-5xl">🌟</div>
            <h3 className="text-3xl font-bold text-dharma-brown">
              Journey of Sacred Service
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-krishna-primary/10 p-6 rounded-lg">
                <p className="text-krishna-primary font-bold text-3xl">200+</p>
                <p className="text-dharma-stone">Students Taught</p>
              </div>
              <div className="bg-dharma-gold/10 p-6 rounded-lg">
                <p className="text-dharma-brown font-bold text-3xl">15+</p>
                <p className="text-dharma-stone">Major Events</p>
              </div>
              <div className="bg-krishna-light/10 p-6 rounded-lg">
                <p className="text-krishna-primary font-bold text-3xl">3</p>
                <p className="text-dharma-stone">Years Active</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <p className="text-purple-700 font-bold text-3xl">∞</p>
                <p className="text-dharma-stone">Lives Touched</p>
              </div>
            </div>

            <div className="bg-gradient-sacred p-8 rounded-lg">
              <p className="text-sanskrit text-xl text-krishna-primary glow-text mb-4">
                लोकाः समस्ताः सुखिनो भवन्तु
              </p>
              <p className="text-lg text-dharma-stone italic mb-4">
                "May all beings in all worlds be happy and free"
              </p>
              <p className="text-dharma-brown">
                Each event, each teaching, each moment of connection has been an offering in service to the ancient wisdom tradition and the wellbeing of all seekers on the path.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;