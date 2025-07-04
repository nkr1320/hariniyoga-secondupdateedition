import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  // DEVELOPER NOTE: Contact methods configuration
  // TO ADD NEW CONTACT METHOD: Add new object to contactMethods array below
  // Required fields: title, value, icon, description, link, color
  // Links starting with 'http' will open in new tab
  const contactMethods = [
    {
      title: "WhatsApp",
      value: "+1 (555) 123-4567", // DEVELOPER NOTE: Replace with actual phone number
      icon: "📱",
      description: "Quick messages and class inquiries",
      link: "https://wa.me/15551234567", // DEVELOPER NOTE: Update with actual WhatsApp link
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Facebook",
      value: "HariniYogaTeaching",
      icon: "📘",
      description: "Community updates and events",
      link: "https://facebook.com/hariniyoga",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Instagram",
      value: "@harini.yoga",
      icon: "📸",
      description: "Daily wisdom and yoga inspiration",
      link: "https://instagram.com/harini.yoga",
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "Email",
      value: "info@hariniyoga.com", // DEVELOPER NOTE: Replace with actual email
      icon: "📧",
      description: "Detailed inquiries and collaborations", 
      link: "mailto:info@hariniyoga.com", // DEVELOPER NOTE: Update with actual email
      color: "bg-krishna-primary/10 text-krishna-primary"
    },
    {
      title: "LinkedIn", 
      value: "Harini Yoga Official",
      icon: "💼",
      description: "Professional connections and updates",
      link: "https://linkedin.com/company/hariniyoga-dummy",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Twitter",
      value: "@HariniYoga",
      icon: "🐦", 
      description: "Daily inspiration and quick updates",
      link: "https://twitter.com/hariniyoga-dummy",
      color: "bg-sky-100 text-sky-800"
    },
    {
      title: "YouTube",
      value: "Harini Yoga Channel",
      icon: "📺",
      description: "Free classes and teachings",
      link: "https://youtube.com/@hariniyoga",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Zoom Classes",
      value: "Weekly Live Sessions",
      icon: "💻",
      description: "Interactive online classes",
      link: "#classes",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  // DEVELOPER NOTE: Social media highlights for community engagement
  // TO ADD NEW SOCIAL PLATFORM: Add new object here with platform, description, action, icon
  const socialMediaHighlights = [
    {
      platform: "WhatsApp",
      description: "Join our sacred community group for daily satsang and class reminders",
      action: "Join Group",
      icon: "💚"
    },
    {
      platform: "Facebook", 
      description: "Connect with fellow practitioners and stay updated on events",
      action: "Follow Page",
      icon: "👥"
    },
    {
      platform: "Instagram",
      description: "Daily inspiration, asana practice tips, and spiritual quotes", 
      action: "Follow Account",
      icon: "✨"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            Sacred{' '}
            <span className="text-divine">Connection</span>
          </h2>
          <div className="mb-8">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
              सत्संगत्वे निस्सङगत्वम्
            </p>
            <p className="text-lg text-dharma-stone italic">
              "In the company of the wise, one becomes free from attachments" - Bhaja Govindam
            </p>
          </div>
          <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
            Connect with our sacred community through various channels. Let's walk the spiritual path together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="card-sacred">
              <h3 className="text-2xl font-bold text-dharma-brown mb-6 text-center">
                Divine Channels
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <div className="flex items-start space-x-4 p-4 bg-dharma-sand/50 rounded-lg hover:bg-krishna-primary/5 transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
                      <div className="text-2xl group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-bold text-dharma-brown">
                            {method.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${method.color}`}>
                            Active
                          </span>
                        </div>
                        <p className="text-krishna-primary font-medium">
                          {method.value}
                        </p>
                        <p className="text-sm text-dharma-stone">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="card-sacred">
              <h3 className="text-xl font-bold text-dharma-brown mb-4">
                Sacred Availability
              </h3>
              <div className="space-y-4 text-dharma-stone">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for spiritual guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Open for yoga class collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Teaching & mentoring opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Vedanta study group discussions</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-dharma-sand">
                <p className="text-sm text-dharma-stone italic text-center">
                  "सर्वे भवन्तु सुखिनः" - May all beings be happy. 
                  Every connection is an opportunity to share the light of ancient wisdom.
                </p>
              </div>
            </Card>
          </div>

          {/* Social Media Highlights */}
          <div className="space-y-6">
            <Card className="card-sacred">
              <h3 className="text-2xl font-bold text-dharma-brown mb-6 text-center">
                Join Our Sacred Community
              </h3>
              <div className="space-y-6">
                {socialMediaHighlights.map((social, index) => (
                  <div key={index} className="bg-gradient-sacred p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{social.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-dharma-brown mb-2">
                          {social.platform}
                        </h4>
                        <p className="text-dharma-stone mb-4">
                          {social.description}
                        </p>
                        <Button className="btn-divine w-full">
                          {social.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Class Schedule Quick Access */}
            <Card className="card-sacred">
              <h3 className="text-xl font-bold text-dharma-brown mb-4">
                Quick Access
              </h3>
              <div className="space-y-3">
                <Button 
                  className="btn-divine w-full"
                  onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  📅 View Class Schedule
                </Button>
                <Button 
                  className="btn-dharma w-full" 
                  variant="outline"
                  onClick={() => document.getElementById('podcast')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🎙️ Listen to Podcasts
                </Button>
                <Button 
                  className="btn-divine w-full"
                  onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🙏 Support Our Mission
                </Button>
              </div>
            </Card>

            {/* Sanskrit Blessing */}
            <Card className="card-sacred text-center">
              <div className="space-y-4">
                <div className="text-5xl">🕉️</div>
                <p className="text-sanskrit text-xl text-krishna-primary glow-text">
                  सत्यमेव जयते नानृतम्
                </p>
                <p className="text-dharma-stone">
                  "Truth alone triumphs, not falsehood" - Let's connect in authenticity and spiritual fellowship
                </p>
                <div className="bg-krishna-primary/10 p-4 rounded-lg">
                  <p className="text-krishna-primary font-medium">
                    🌸 Namaste - The divine in me honors the divine in you
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;