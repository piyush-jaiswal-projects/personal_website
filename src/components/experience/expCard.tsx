import { ExperienceCardProps } from "@/types/experience";
import { getMonthName } from "@/utils";

const ExpCard = (props: ExperienceCardProps) => {
  const currYear = new Date().getFullYear();
  const currMonth = getMonthName(new Date().getMonth());
  const startYear = new Date(props.startDate).getFullYear();
  const startMonth = getMonthName(new Date(props.startDate).getMonth());
  const endYear = new Date(props.endDate).getFullYear();
  const endMonth = getMonthName(new Date(props.endDate).getMonth());
  const end = endYear === currYear ? "Present" : endYear;
  const period = `${startMonth} ${startYear} - ${endMonth} ${end}`;

  return (
    <div className="flex justify-start items-center p-4 h-[180px] mt-4">
      <div className="h-[180px] w-[40%]">
        <h1 className="text-[20px] text-gray-600">{period}</h1>
      </div>
      <div className="ml-8 h-[180px] w-[60%]">
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
