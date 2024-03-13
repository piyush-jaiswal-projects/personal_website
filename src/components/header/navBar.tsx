import { ExtLinksData, NavItems } from "@/constants";
import MenuBar from "./menuBar";
import { NavLink, ExtLink } from "@/lib/link";

const Navbar = function () {
  return (
    <div className="w-[50%] h-[100%] p-2 text-right flex justify-end">
      <div className="justify-between items-center hidden lg:flex">
        {NavItems.map((item) => {
          return (
            <NavLink path={item.path} text={item.title} key={item.title} />
          );
        })}

        {ExtLinksData.map((item) => {
          return (
            <ExtLink
              key={item.title}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
      <div className="w-[50%] lg:hidden overflow-hidden text-center">
        <MenuBar />
      </div>
    </div>
  );
};

export default Navbar;
