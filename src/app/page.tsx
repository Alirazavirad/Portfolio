import Contact from "@/components/Contact";
import Exps from "@/components/Exps";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Main />
      <Projects />
      {/* <Exps/> */}
      <div className="sm:flex  sm:px-25 px-5 items-start mt-12 justify-between">
        <Skills />
        <div className="hidden w-[38%] sm:flex">
          <Contact />
        </div>
      </div>

      <div className=" sm:pb-20  sm:px-25 px-5  mt-10 ">
        <Tools />
      </div>
      <div className="flex sm:hidden pb-5 mt-5 px-5">
        <Contact />
      </div>
    </div>
  );
}
