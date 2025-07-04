import { Card } from "@/components/ui/card";

const StudyResourcesSection = () => {
  return (
    <Card className="card-sacred text-center max-w-4xl mx-auto mt-16">
      <div className="space-y-6">
        <div className="text-5xl">📚</div>
        <h3 className="text-2xl font-bold text-dharma-brown">
          Complete Study Resources
        </h3>
        <p className="text-dharma-stone">
          Access our comprehensive collection of study materials, guided commentaries, and practical applications of ancient yogic wisdom.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-krishna-primary/10 p-4 rounded-lg">
            <p className="text-krishna-primary font-bold text-2xl">25+</p>
            <p className="text-dharma-stone text-sm">Articles Available</p>
          </div>
          <div className="bg-dharma-gold/10 p-4 rounded-lg">
            <p className="text-dharma-brown font-bold text-2xl">9</p>
            <p className="text-dharma-stone text-sm">Study Series</p>
          </div>
          <div className="bg-krishna-light/10 p-4 rounded-lg">
            <p className="text-krishna-primary font-bold text-2xl">Free</p>
            <p className="text-dharma-stone text-sm">Open Access</p>
          </div>
        </div>

        <div className="bg-gradient-sacred p-6 rounded-lg">
          <p className="text-sanskrit text-lg text-krishna-primary glow-text mb-2">
            यद्भावो तद्भवति
          </p>
          <p className="text-dharma-stone italic">
            "As is your intention, so is your manifestation" - Transform through authentic study
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StudyResourcesSection;