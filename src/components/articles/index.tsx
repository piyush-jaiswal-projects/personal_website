import SectionTitle from "@/lib/heading/sectionTitle";
import ArticleCard from "./articleCard";
import { NavLink } from "@/lib/link";
import { req, sendHttpRequest } from "@/utils";
import { ArticleCardProps } from "@/types/article";

const Articles = async () => {
  const articlesList = await sendHttpRequest("blogs", req.get);

  return (
    <div>
      <SectionTitle title="Recent writings" />
      {articlesList
        .slice(0, 3)
        .map((article: ArticleCardProps, index: number) => {
          return <ArticleCard key={`article-${index}`} {...article} />;
        })}
      <div className="mt-4 text-center">
        <NavLink path="/articles" text="view more" />
      </div>
    </div>
  );
};

export default Articles;
