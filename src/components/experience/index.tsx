import SectionTitle from "@/lib/heading/sectionTitle";
import ExpCard from "./expCard";
import { req, sendHttpRequest } from "@/utils";
import { ExperienceCardProps } from "@/types/experience";

const Experience = async (props: { minCount: boolean }) => {
  const experienceList = await sendHttpRequest("experiences", req.get);

  return (
    <div className="my-4">
      <SectionTitle title="Experience" />
      {experienceList
        .slice(0, props.minCount === true ? 3 : experienceList.length)
        .map((exp: ExperienceCardProps, index: number) => {
          const expKey = `exp-${index}`;
          return <ExpCard key={expKey} {...exp} />;
        })}
    </div>
  );
};

export default Experience;
