import { Experiences } from "@/constants/experience";
import SectionTitle from "@/lib/heading/sectionTitle";
import ExpCard from "./expCard";

const Experience = () => {
  return (
    <div className="my-4">
      <SectionTitle title="Experience" />
      {Experiences.slice(0, 3).map((exp, index) => {
        const expKey = `exp-${index}`;
        return <ExpCard key={expKey} {...exp} />;
      })}
    </div>
  );
};

export default Experience;
