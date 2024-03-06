import { ProjectList } from "@/constants/project";
import SectionTitle from "@/lib/heading/sectionTitle";
import ProjectCard from "./projectCard";
import { NavLink } from "@/lib/link";

const Projects = () => {
  return (
    <div>
      <SectionTitle title="Projects" />
      {ProjectList.slice(0, 3).map((project, index) => {
        return <ProjectCard key={`project-${index}`} {...project} />;
      })}
      <div className="mt-4">
        <NavLink path="/projects" text="view more" />
      </div>
    </div>
  );
};

export default Projects;
