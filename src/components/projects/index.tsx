import SectionTitle from "@/lib/heading/sectionTitle";
import ProjectCard from "./projectCard";
import { NavLink } from "@/lib/link";
import sendApiRequest, { req } from "@/utils/sendHttpRequest";
import { ProjectCardProps } from "@/types";

const Projects = async () => {
  const projectsList = await sendApiRequest("projects", req.get);

  return (
    <div>
      <SectionTitle title="Projects" />
      {projectsList
        .slice(0, 3)
        .map((project: ProjectCardProps, index: number) => {
          return <ProjectCard key={`project-${index}`} {...project} />;
        })}
      <div className="mt-4 text-center">
        <NavLink path="/projects" text="view more" />
      </div>
    </div>
  );
};

export default Projects;
