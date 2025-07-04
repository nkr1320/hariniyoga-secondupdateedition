const ArticlesHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-dharma-brown mb-4">
        Sacred{' '}
        <span className="text-divine">Articles</span>
      </h2>
      <div className="mb-8">
        <p className="text-sanskrit text-2xl text-krishna-primary glow-text mb-2">
          स्वाध्यायाद्योगात्मकम्
        </p>
        <p className="text-lg text-dharma-stone italic">
          "Through self-study, connection with the Divine" - Yoga Sutra 2.44
        </p>
      </div>
      <p className="text-xl text-dharma-stone max-w-3xl mx-auto">
        Explore authentic teachings on yoga philosophy, Vedanta, and spiritual practice
      </p>
    </div>
  );
};

export default ArticlesHeader;