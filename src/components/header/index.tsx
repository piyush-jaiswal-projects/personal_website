"use server;";

import Navbar from "./navBar";
import TitleBar from "./titleBar";

const Header = function () {
  return (
    <div className="flex justify-between items-center h-[50px] md:h-[60px] lg:h-[70px] bg-gray-00 w-[100vw] overflow-hidden">
      <TitleBar />
      <Navbar />
    </div>
  );
};

export default Header;
