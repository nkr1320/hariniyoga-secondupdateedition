import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Article {
  title: string;
  category: string;
  description: string;
  readTime: string;
  difficulty: string;
  image: string;
  topics: string[];
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  // Define your YouTube video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ];

  // ✅ Replace with actual existing article slugs (or dynamic route setup)
  const articleRoutes = [
    "/articles/yoga-practice-patanjali",      // index 0
    "/articles/ashtanga-foundation",          // index 1
    "/articles/coming-soon"                   // index 2+
  ];

  const handleReadArticle = () => {
    // Use fallback route if index is out of bounds
    const route = articleRoutes[index] || articleRoutes[2];

    // Open valid route in new tab
    window.open(route, "_blank");
  };

  const handleWatchVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const videoUrl = videoUrls[index] || videoUrls[2];

    const popup = window.open('', 'videoPopup', 'width=800,height=600,scrollbars=yes,resizable=yes');
    
    if (popup) {
      popup.document.write(`
        <html>
          <head>
            <title>Sacred Teaching Video</title>
            <style>
              body { margin: 0; padding: 20px; background: #f5f5f5; font-family: Arial, sans-serif; }
              .container { max-width: 800px; margin: 0 auto; }
              .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; }
              .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
              h1 { color: #8B4513; text-align: center; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>🕉️ ${article.title}</h1>
              <div class="video-wrapper">
                <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </body>
        </html>
      `);
    }
  };

  return (
    <Card className="card-sacred group">
      <div className="text-center mb-6">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {article.image}
        </div>
        <div className="mb-4">
          <Button
            onClick={handleWatchVideo}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
            size="sm"
          >
            ▶️ Watch Teaching Video
          </Button>
        </div>
        <Badge className="bg-krishna-primary/10 text-krishna-primary mb-3">
          {article.category}
        </Badge>
        <h3 className="text-lg font-bold text-dharma-brown mb-3 leading-tight">
          {article.title}
        </h3>
      </div>

      <div className="flex justify-between items-center mb-4 text-sm">
        <span className="text-dharma-stone">{article.readTime}</span>
        <Badge 
          variant="outline"
          className={
            article.difficulty === "Beginner" 
              ? "border-green-500 text-green-700"
              : article.difficulty === "Intermediate"
              ? "border-yellow-500 text-yellow-700"
              : "border-red-500 text-red-700"
          }
        >
          {article.difficulty}
        </Badge>
      </div>

      <p className="text-dharma-stone text-sm leading-relaxed mb-6">
        {article.description}
      </p>

      <div className="mb-6">
        <div className="flex flex-wrap gap-1">
          {article.topics.map((topic) => (
            <span 
              key={topic}
              className="bg-dharma-sand text-dharma-brown px-2 py-1 rounded text-xs"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-dharma-sand">
        <Button 
          className="btn-divine w-full group-hover:scale-105 transition-transform"
          onClick={handleReadArticle}
        >
          Read Article
        </Button>
      </div>
    </Card>
  );
};

export default ArticleCard;
