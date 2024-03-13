import Articles from "@/components/articles";
import Experience from "@/components/experience";
import Landing from "@/components/landing";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="lg:w-[50%] overflow-hidden p-4 mx-auto">
        <Landing />
        <Projects minCount={true} />
        <Experience minCount={true} />
        {/* <Articles minCount={true} /> */}
      </div>
    </>
  );
}
