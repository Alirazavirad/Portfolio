"use client";
import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";

function Header() {
  const [whichActive, setWhichActive] = useState<string>("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWhichActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  
  return (
    <div className="fixed backdrop-blur-xl sm:px-12 px-5 z-10000 top-0 py-4  w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="border-purple-500 flex items-center justify-center w-fit px-2 py-1.5 border-2 text-purple-500 rounded-md">
            <span>AR</span>
          </div>
          <span className="text-white">علی رضوی راد</span>
        </div>
        <div className="sm:flex hidden items-center gap-12">
          <div
            onClick={() => scrollToSection("home")}
            className={`cursor-pointer text-white py-1 px-1 ${
              whichActive === "home" && "border-b-2 border-purple-500"
            }`}
          >
            خانه
          </div>

          <div
            onClick={() => scrollToSection("contact")}
            className={`cursor-pointer text-white py-1 px-1 ${
              whichActive == "contact" && "border-b-2 border-purple-500"
            }`}
          >
            درباره من
          </div>

          <div
            onClick={() => scrollToSection("projects")}
            className={`cursor-pointer text-white py-1 px-1 ${
              whichActive === "projects" && "border-b-2 border-purple-500"
            }`}
          >
            پروژه ها
          </div>

          <div
            onClick={() => scrollToSection("exps")}
            className={`cursor-pointer text-white py-1 px-1 ${
              whichActive === "exps" && "border-b-2 border-purple-500"
            }`}
          >
            تجربه ها
          </div>

          <div
            onClick={() => scrollToSection("contact")}
            className={`cursor-pointer text-white py-1 px-1 ${
              whichActive === "contact" && "border-b-2 border-purple-500"
            }`}
          >
            تماس با من
          </div>
        </div>{" "}
        <a
          href="/globe.svg"
          download="Ali-RezaviRad-Resume.pdf"
          className="
  bg-emerald-500/10
  border border-emerald-500/20
  text-emerald-400

  hover:bg-emerald-500/15
  hover:border-emerald-500/40

  shadow-[0_0_20px_rgba(16,185,129,0.12)]
  hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]

  transition-all duration-300
  gap-2 py-2 px-3 rounded-md
  flex items-center
  "
        >
          <span className="font-semibold">دانلود رزومه</span>
          <BsDownload />
        </a>{" "}
      </div>
    </div>
  );
}

export default Header;
