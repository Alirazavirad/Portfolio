import Contact from "@/components/Contact";
import Exps from "@/components/Exps";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "صفحه اصلی",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <section id="home">
        <Header />
      </section>
      <Main />
      <section id="projects">
        <Projects />
      </section>
      <section id="exps">
        <Exps />
      </section>
      <div className="sm:flex  sm:px-25 px-5 items-start mt-12 justify-between">
        <Skills />
        <section id="contact" className="hidden w-[38%] sm:flex">
          <Contact />
        </section>
      </div>

      <div className=" sm:pb-20  sm:px-25 px-5  mt-10 ">
        <Tools />
      </div>
      <section id="contact" className="flex sm:hidden pb-5 mt-5 px-5">
        <Contact />
      </section>
    </div>
  );
}
