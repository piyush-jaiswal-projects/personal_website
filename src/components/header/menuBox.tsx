import { NavItems, ExtLinksData } from "@/constants";
import { NavLink, ExtLink } from "@/lib/link";

const MenuBox = function () {
  return (
    <div className="w-[80vw] right-0 h-[100vw] block absolute z-50 border text-gray-400 rounded-lg bg-black p-4 text-[25px] text-left">
      {NavItems.map((item) => {
        return (
          <div className="m-1" key={item.title}>
            <NavLink path={item.path} text={item.title} />
            <br />
            <hr />
          </div>
        );
      })}

      {ExtLinksData.map((item) => {
        return (
          <div className="m-1" key={item.title}>
            <ExtLink title={item.title} image={item.image} link={item.link} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MenuBox;
