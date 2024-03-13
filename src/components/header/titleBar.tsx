import { NavLink } from "@/lib/link";

const TitleBar = function () {
  return (
    <div className="w-[50%] p-2 text-left overflow-hidden text-[100%] h-[100%] ">
      <NavLink text="PIYUSH JAISWAL" path="/" />
    </div>
  );
};

export default TitleBar;
