import Header from "@/components/header";
import Landing from "@/components/landing";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-[50%] overflow-hidden p-4 mx-auto">
        <Landing />
        <Projects />
      </div>
    </>
  );
}
