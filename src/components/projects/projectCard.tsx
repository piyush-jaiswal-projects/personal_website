import { ProjectCardProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { DefaultProjImg } from "../../../public/images";
import { MenuIcon } from "../../../public/icons";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg h-[100px] shadow-lg mt-4 p-2 flex justify-start items-center">
      <Link href={props.liveUrl} target="__blank">
        <div className="h-[75px] w-[75px] overflow-hidden rounded-lg bg-gray-700">
          <Image
            src={DefaultProjImg}
            width={100}
            height={100}
            alt="Project"
            className="object-cover "
          />
        </div>
      </Link>

      <div className="mx-4">
        <Link href={props.liveUrl} target="__blank">
          <h1 className="font-semibold text-[20px]">{props.title}</h1>
        </Link>
        <h3>{props.description}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
