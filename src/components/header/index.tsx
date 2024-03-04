"use server;";

import Navbar from "./navBar";
import TitleBar from "./titleBar";

const Header = function () {
  return (
    <div className="flex justify-around items-center h-[50px] bg-red-500 w-[100vw] overflow-hidden">
      <TitleBar />
      <Navbar />
    </div>
  );
};

export default Header;