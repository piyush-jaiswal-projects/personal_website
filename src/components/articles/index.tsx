import SectionTitle from "@/lib/heading/sectionTitle";
import ArticleCard from "./articleCard";
import { ArticleList } from "@/constants/article";
import { NavLink } from "@/lib/link";

const Articles = () => {
  return (
    <div>
      <SectionTitle title="Recent writings" />
      {ArticleList.slice(0, 3).map((article, index) => {
        return <ArticleCard key={`article-${index}`} {...article} />;
      })}
      <div className="mt-4 text-center">
        <NavLink path="/articles" text="view more" />
      </div>
    </div>
  );
};

export default Articles;
