import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

const Articles = () => {
  return (
    <>
      <Helmet>
        <title>Sacred Articles & Teachings - Harini Yoga | Spiritual Wisdom</title>
        <meta name="description" content="Explore profound spiritual articles and teachings from Harini Yoga. Discover wisdom on yoga philosophy, meditation practices, and sacred traditions." />
        <meta name="keywords" content="yoga articles, spiritual teachings, yoga philosophy, meditation guides, sacred wisdom, yoga blog, spiritual articles" />
        <link rel="canonical" href="https://hariniyoga.com/articles" />
      </Helmet>
      <div className="min-h-screen pt-20">
        <Navigation />
        <ArticlesSection />
        <Footer />
      </div>
    </>
  );
};

export default Articles;