import Dp from "./dp";
import Intro from "./intro";

const Landing = () => {
  return (
    <div className="lg:flex text-center lg:justify-around items-center my-4 lg:my-10">
      <Dp />
      <Intro />
    </div>
  );
};

export default Landing;
