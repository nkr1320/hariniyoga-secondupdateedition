import { Card } from "@/components/ui/card";

const WhySiteSection = () => {
  return (
    <section id="why-site" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
            Why This{' '}
            <span className="text-divine">Site</span>
          </h2>
          <div className="mb-8">
            <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
              तत् ध्यानजम् अनाशयम्
            </p>
            <p className="text-lg text-dharma-stone italic">
              "Tatra Dhyanajam Anashayam" - Yoga Sutra 4.6
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Opening Quote */}
          <Card className="card-sacred">
            <div className="text-center p-8">
              <div className="text-5xl mb-6">🌟</div>
              <blockquote className="text-lg text-dharma-stone leading-relaxed italic">
                "With the renewed interest in health and subtle body topics, there is a glut of information on all aspects of Yoga. The Indian mystic and Spiritual teacher, Sri M, says that these days there are more teachers than students. So what is the need for another website on this topic?"
              </blockquote>
            </div>
          </Card>

          {/* Sanskrit Wisdom */}
          <Card className="card-sacred">
            <div className="text-center p-8">
              <p className="text-sanskrit text-3xl text-krishna-primary glow-text mb-4">
                तत्र ध्यानजम् अनाशयम्
              </p>
              <p className="text-xl text-dharma-stone font-medium mb-4">
                Tatra Dhyanajam Anashayam (Yoga Sutra 4.6)
              </p>
              <p className="text-lg text-dharma-brown">
                "An action done from a meditative state of mind leaves no residues of attachment"
              </p>
            </div>
          </Card>

          {/* Main Content */}
          <Card className="card-sacred">
            <div className="p-8 space-y-6">
              <p className="text-dharma-stone leading-relaxed">
                Therefore ancient texts, written by enlightened sages in a meditative state of mind and studied for thousands of years, are worth studying because they ground the mind and make it conducive for better thinking. This site aims to bring together such pieces of information on yoga by providing links, connecting its various aspects, like asanas and ayurveda and provide a repository of information for the like-minded.
              </p>
              
              <p className="text-dharma-stone leading-relaxed">
                The yogic texts we know of today are a small fraction of what was available many hundreds of years ago. They were destroyed by invasions and also by insects :). Many yogis gave up their lives trying to preserve them. Some Yogis fled to Tibet, to escape the invaders where the texts and the techniques were preserved in monasteries in the Tibetan language. Others fled to Southern India which was spared a little more from the invasions than was Northern India.
              </p>
              
              <p className="text-dharma-stone leading-relaxed">
                While invasions aren't a major cause for concern, and certainly not insects, for preserving these ancient yogic techniques these days, it is dilution and misinterpretation by some teachers, from a sense of ego, that pose problems. My goal is for the website I maintain, to be a place where people can search and get authentic links to the scriptural interpretations as they had been interpreted for thousands of years.
              </p>
            </div>
          </Card>

          {/* Mission Statement */}
          <Card className="card-sacred">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-dharma-brown mb-6 text-center">
                Our Sacred Mission
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🔍</div>
                    <div>
                      <h4 className="font-bold text-dharma-brown mb-2">Authentic Sources</h4>
                      <p className="text-dharma-stone text-sm">
                        Connecting seekers to genuine scriptural interpretations as preserved for millennia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📚</div>
                    <div>
                      <h4 className="font-bold text-dharma-brown mb-2">Preserved Wisdom</h4>
                      <p className="text-dharma-stone text-sm">
                        Safeguarding ancient knowledge from dilution and misinterpretation
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h4 className="font-bold text-dharma-brown mb-2">Community Building</h4>
                      <p className="text-dharma-stone text-sm">
                        Creating a repository for like-minded seekers and authentic practitioners
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <h4 className="font-bold text-dharma-brown mb-2">Connected Knowledge</h4>
                      <p className="text-dharma-stone text-sm">
                        Linking various aspects of yoga - asanas, ayurveda, philosophy, and practice
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">⚖️</div>
                    <div>
                      <h4 className="font-bold text-dharma-brown mb-2">Balance & Truth</h4>
                      <p className="text-dharma-stone text-sm">
                        Providing balanced perspectives free from ego and commercial interests
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🕊️</div>
                    <div>
                      <h4 className="font-bold text-dharma-brown mb-2">Service & Devotion</h4>
                      <p className="text-dharma-stone text-sm">
                        Offering knowledge freely as service to humanity and preservation of dharma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Historical Context */}
          <Card className="card-sacred">
            <div className="p-8">
              <h3 className="text-xl font-bold text-dharma-brown mb-4 text-center">
                Preserving the Lineage
              </h3>
              <div className="bg-gradient-sacred p-6 rounded-lg">
                <p className="text-dharma-stone leading-relaxed mb-4">
                  The ancient wisdom of yoga has survived countless challenges - invasions, natural disasters, and the passage of time. Many brave souls sacrificed everything to preserve these teachings. Some fled to Tibet, others to Southern India, carrying with them the precious knowledge that forms the foundation of authentic yoga practice today.
                </p>
                <p className="text-dharma-stone leading-relaxed">
                  In our modern age, the challenge is different but equally important: maintaining the purity and authenticity of these teachings amidst commercialization and misinterpretation. This site stands as a beacon for those seeking the true path, unmarked by ego or commercial interests.
                </p>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="card-sacred">
            <div className="text-center p-8">
              <div className="text-5xl mb-6">🙏</div>
              <h3 className="text-2xl font-bold text-dharma-brown mb-4">
                Join Our Sacred Mission
              </h3>
              <p className="text-dharma-stone mb-6">
                Together, we can preserve and share the authentic teachings of yoga for future generations. Every seeker, every student, every teacher who values truth contributes to this noble cause.
              </p>
              
              <div className="bg-krishna-primary/10 p-6 rounded-lg">
                <p className="text-sanskrit text-lg text-krishna-primary glow-text mb-2">
                  सत्यमेव जयते नानृतम्
                </p>
                <p className="text-dharma-stone italic">
                  "Truth alone triumphs, not falsehood" - Mundaka Upanishad
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhySiteSection;