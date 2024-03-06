import { ProjectList } from "@/constants/project";
import SectionTitle from "@/lib/heading/sectionTitle";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div>
      <SectionTitle title="Projects" />
      {ProjectList.map((project, index) => {
        return <ProjectCard key={`project-${index}`} {...project} />;
      })}
    </div>
  );
};

export default Projects;
