import { ExtLinks, NavItems } from "./constant";
import ExtLink from "./extLink";
import MenuBar from "./menuBar";
import NavLink from "./navLink";

const Navbar = function () {
  return (
    <>
      <div className="w-[50%] mx-4 justify-between items-center hidden md:flex">
        {NavItems.map((item) => {
          return (
            <NavLink path={item.path} text={item.title} key={item.title} />
          );
        })}

        {ExtLinks.map((item) => {
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
      <MenuBar />
    </>
  );
};

export default Navbar;
