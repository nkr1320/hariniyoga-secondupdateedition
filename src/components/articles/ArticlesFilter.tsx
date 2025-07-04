import { Button } from "@/components/ui/button";

interface ArticlesFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

const ArticlesFilter = ({ categories, activeFilter, onFilterChange }: ArticlesFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={category === activeFilter ? "default" : "outline"}
          className={category === activeFilter ? "btn-divine" : "btn-dharma"}
          size="sm"
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ArticlesFilter;