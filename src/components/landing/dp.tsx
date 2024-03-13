import Image from "next/image";
import { Pic } from "../../../public/images";

const Dp = () => {
  return (
    <div className="w-[200px] h-[200p mx-auto p-2 bg-green-100 rounded-full flex justify-center align-middle">
      <div className="overflow-hidden w-[100%] h-[100%] rounded-full">
        <Image alt="" src={Pic} />
      </div>
    </div>
  );
};

export default Dp;
