import { ExperienceCardProps } from "@/types/experience";

const ExpCard = (props: ExperienceCardProps) => {
  const currYear = new Date().getFullYear();
  const endYear = props.endDate.getFullYear();
  const end = endYear === currYear ? "Present" : endYear;
  const period = `${props.startDate.getFullYear()} - ${end}`;

  return (
    <div className="flex justify-start items-center p-4 h-[180px] mt-4">
      <div className="h-[180px] w-[30%]">
        <h1 className="text-[20px] text-gray-600">{period}</h1>
      </div>
      <div className="ml-8 h-[180px] w-[70%]">
        <h1 className="text-[25px]">{props.profile}</h1>
        <h1 className="text-[20px] text-gray-600 leading-tight">
          {props.company}
        </h1>
        <p className="text-[18px] text-gray-400 mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default ExpCard;
