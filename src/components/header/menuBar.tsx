"use client";
import { useState } from "react";
import Button from "./button";
import MenuBox from "./menuBox";
import Image from "next/image";
import { MenuIcon } from "../../../public/icons";

const MenuBar = function () {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible((currVal) => !currVal);
  };

  return (
    <div className="lg:hidden mx-4 w-[100%] overflow-hidden">
      <Button function={toggleMenu}>
        <Image src={MenuIcon} alt="Menu" width={15} className="invert" />
      </Button>
      <div
        onClick={toggleMenu}
        id="small-menu"
        className={isMenuVisible === true ? "block" : "hidden"}
      >
        <MenuBox />
      </div>
    </div>
  );
};

export default MenuBar;
