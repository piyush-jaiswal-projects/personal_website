import Experience from "@/components/experience";
import Header from "@/components/header";
import Landing from "@/components/landing";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-[50%] overflow-hidden p-4 mx-auto">
        <Landing />
        <Projects />
        <Experience />
      </div>
    </>
  );
}
