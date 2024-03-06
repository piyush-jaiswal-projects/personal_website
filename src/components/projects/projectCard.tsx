import { ProjectCardProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg h-[100px] shadow-lg mt-4 p-2 flex justify-start items-center">
      <Link href={props.liveUrl} target="__blank">
        <div className="h-[75px] w-[75px] rounded-lg bg-gray-700">
          <Image src={props.coverImage} alt="" />
        </div>
      </Link>

      <div className="mx-4">
        <h1 className="font-semibold text-[20px]">{props.title}</h1>
        <h3>{props.description}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
