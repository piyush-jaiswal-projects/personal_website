import { ArticleCardProps } from "@/types/article";

const ArticleCard = (props: ArticleCardProps) => {
  const date = props.createdAt.toString().substring(0, 8);

  return (
    <div className="mt-4">
      <div className="text-gray-600 text-[18px]">{date}</div>

      <div>
        <h1 className="text-[22px]">{props.title}</h1>
        <h1 className="text-gray-400">{props.desc}</h1>
      </div>
    </div>
  );
};

export default ArticleCard;
