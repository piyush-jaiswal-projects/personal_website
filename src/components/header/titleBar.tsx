import { NavLink } from "@/lib/link";

const TitleBar = function () {
  return (
    <div className="w-[100%] mx-4 overflow-hidden text-[25px]">
      <NavLink text="PIYUSH JAISWAL" path="/" />
    </div>
  );
};

export default TitleBar;
