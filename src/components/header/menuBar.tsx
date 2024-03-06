"use client";
import Button from "./button";
import MenuBox from "./menuBox";

const MenuBar = function () {
  const openMenu = () => {
    alert("fuck you");
  };

  return (
    <div className="md:hidden mx-4">
      <Button function={openMenu}>
        <p>MENU</p>
      </Button>
      {/* <MenuBox /> */}
    </div>
  );
};

export default MenuBar;
