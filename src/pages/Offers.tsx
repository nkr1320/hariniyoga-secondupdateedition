// Offers page with pricing plans based on spiritual yoga offerings
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Offers = () => {
  // State for show less/more functionality for plans
  const [showDuoDetails, setShowDuoDetails] = useState(false);
  const [showFamilyDetails, setShowFamilyDetails] = useState(false);

  // Pricing plans data based on reference images
  const pricingPlans = [
    {
      id: 'individual',
      name: 'Individual',
      price: '₹999',
      period: '/month',
      description: 'Perfect for personal yoga journey',
      icon: '🧘‍♀️',
      gradient: 'from-orange-400 to-orange-500',
      features: [
        'Unlimited access to all classes',
        'HD video streaming with divine clarity',
        'Offline downloads for sacred practice',
        'Progress tracking with chakra alignment',
        'Personal meditation library',
        '24/7 customer support'
      ],
      showDetails: true,
      buttonText: 'Learn More',
      benefits: []
    },
    {
      id: 'duo',
      name: 'Duo',
      price: '₹1499',
      period: '/month',
      description: 'Share your wellness journey with a partner',
      icon: '💕',
      gradient: 'from-red-400 to-orange-500',
      features: [
        'Everything in Individual plan',
        '2 simultaneous streams',
        'Couple meditation sessions',
        'Partner challenge programs',
        'Shared progress tracking',
        'Priority customer support',
        'Divine connection practices'
      ],
      showDetails: showDuoDetails,
      buttonText: showDuoDetails ? 'Show Less' : 'Learn More',
      benefits: [
        { icon: '🎯', text: '14-day sacred trial period' },
        { icon: '🌿', text: 'Cancel anytime with grace' },
        { icon: '🕉️', text: 'New wisdom classes added weekly' },
        { icon: '🙏', text: '24/7 spiritual support' }
      ],
      isPopular: true
    },
    {
      id: 'family',
      name: 'Family',
      price: '₹2199',
      period: '/month',
      description: 'Wellness for the whole family',
      icon: '👨‍👩‍👧‍👦',
      gradient: 'from-yellow-400 to-orange-400',
      features: [
        'Everything in Duo plan',
        'Up to 6 family members',
        'Kids yoga programs',
        'Family meditation sessions',
        'Individual profiles for each member',
        'Parental controls',
        'Family wellness challenges',
        'Generational wisdom sharing'
      ],
      showDetails: showFamilyDetails,
      buttonText: showFamilyDetails ? 'Show Less' : 'Learn More',
      benefits: [
        { icon: '🎯', text: '14-day sacred trial period' },
        { icon: '🌿', text: 'Cancel anytime with grace' },
        { icon: '🕉️', text: 'New wisdom classes added weekly' },
        { icon: '🙏', text: '24/7 spiritual support' }
      ]
    }
  ];

  // Toggle details visibility
  const toggleDetails = (planId: string) => {
    if (planId === 'duo') {
      setShowDuoDetails(!showDuoDetails);
    } else if (planId === 'family') {
      setShowFamilyDetails(!showFamilyDetails);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-sacred">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-dharma-brown mb-6">
              Sacred{' '}
              <span className="text-divine">Offerings</span>
            </h1>
            
            {/* Sanskrit Quote */}
            <div className="mb-8">
              <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
                यत्कर्मणि मनो युञ्जीत तत्सिद्धिं लभते ध्रुवम्
              </p>
              <p className="text-lg text-dharma-stone italic">
                "When the mind is focused on any action, success is certain" - Ancient Wisdom
              </p>
            </div>
            
            <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
              Choose your sacred path to wellness and spiritual growth with our authentic yoga programs
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`card-sacred relative overflow-hidden ${
                  plan.isPopular ? 'ring-2 ring-krishna-primary ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-krishna-primary text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Plan Header */}
                <div className={`bg-gradient-to-r ${plan.gradient} text-white p-6 rounded-t-xl -m-8 mb-6`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{plan.icon}</span>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    {plan.price}<span className="text-lg font-normal">{plan.period}</span>
                  </div>
                  <p className="text-white/90">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {plan.features.slice(0, plan.showDetails ? plan.features.length : 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-krishna-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dharma-stone text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More / Show Less Button */}
                {(plan.id === 'duo' || plan.id === 'family') && (
                  <div className="mb-6">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => toggleDetails(plan.id)}
                      className="w-full border-krishna-primary text-krishna-primary hover:bg-krishna-primary hover:text-white"
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                )}

                {plan.id === 'individual' && (
                  <div className="mb-6">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full border-krishna-primary text-krishna-primary hover:bg-krishna-primary hover:text-white"
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                )}

                {/* Divine Plan Benefits (for Duo and Family when expanded) */}
                {plan.benefits.length > 0 && plan.showDetails && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg">✨</span>
                      <h4 className="font-bold text-dharma-brown">Divine Plan Benefits:</h4>
                    </div>
                    <div className="space-y-2">
                      {plan.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-sm">{benefit.icon}</span>
                          <span className="text-dharma-stone text-sm">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                {/* DEVELOPER NOTE: Registration buttons open Google Form */}
                {/* TO UPDATE: Change Google Form URL below to your actual registration form */}
                <div className="mt-auto">
                  {plan.isPopular ? (
                    <Button 
                      className="btn-divine w-full text-lg py-6"
                      onClick={() => window.open('https://forms.google.com/hariniyoga-divine-journey', '_blank')}
                    >
                      🌟 Start Your Divine Journey 🌟
                    </Button>
                  ) : (
                    <Button 
                      className="btn-dharma w-full text-lg py-6"
                      onClick={() => window.open('https://forms.google.com/hariniyoga-sacred-practice', '_blank')}
                    >
                      Begin Sacred Practice
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="card-sacred text-center max-w-4xl mx-auto mt-16">
            <div className="space-y-6">
              <div className="text-4xl">🕉️</div>
              <h3 className="text-2xl font-bold text-dharma-brown">
                Sacred Commitment to Your Journey
              </h3>
              <p className="text-dharma-stone">
                Every plan includes our complete collection of authentic yoga teachings, meditation practices, 
                and spiritual guidance rooted in ancient Sanātana Dharma traditions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-krishna-primary/10 p-4 rounded-lg">
                  <p className="text-krishna-primary font-bold text-xl">500+</p>
                  <p className="text-dharma-stone text-sm">Sacred Classes</p>
                </div>
                <div className="bg-dharma-gold/10 p-4 rounded-lg">
                  <p className="text-dharma-brown font-bold text-xl">100+</p>
                  <p className="text-dharma-stone text-sm">Meditation Sessions</p>
                </div>
                <div className="bg-krishna-light/10 p-4 rounded-lg">
                  <p className="text-krishna-primary font-bold text-xl">24/7</p>
                  <p className="text-dharma-stone text-sm">Spiritual Support</p>
                </div>
              </div>

              <div className="bg-gradient-sacred p-6 rounded-lg">
                <p className="text-sanskrit text-lg text-krishna-primary glow-text mb-2">
                  श्रद्धावान् लभते ज्ञानम्
                </p>
                <p className="text-dharma-stone italic">
                  "The faithful seeker attains wisdom" - Begin your transformation today
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Offers;