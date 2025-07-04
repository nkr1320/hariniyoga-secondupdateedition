import { useState } from 'react';
import ArticlesHeader from './articles/ArticlesHeader';
import ArticlesFilter from './articles/ArticlesFilter';
import ArticleCard from './articles/ArticleCard';
import StudyResourcesSection from './articles/StudyResourcesSection';
import { articles, categories } from './articles/articlesData';

const ArticlesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredArticles = activeFilter === "All" 
    ? articles 
    : articles.filter(article => article.category === activeFilter);
  
  return (
    <section id="articles" className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        <ArticlesHeader />
        <ArticlesFilter 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>
        <StudyResourcesSection />
      </div>
    </section>
  );
};

export default ArticlesSection;