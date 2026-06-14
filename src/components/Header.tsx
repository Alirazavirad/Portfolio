"use client";
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";

function Header() {
  const [whichActive, setWhichActive] = useState<string>("Home");
  const Activate = async (text: string) => {
    setWhichActive(text);
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
            className={`text-white py-1 px-1  ${whichActive == "Home" && "border-b-2 border-purple-500"}`}
          >
            <span>خانه</span>
          </div>
          <div
            className={`text-white py-1 px-1  ${whichActive == "About" && "border-b-2 border-purple-500"}`}
          >
            <span>درباره من</span>
          </div>
          <div
            className={`text-white py-1 px-1  ${whichActive == "Projects" && "border-b-2 border-purple-500"}`}
          >
            <span>پروژه ها</span>
          </div>
          <div
            className={`text-white py-1 px-1  ${whichActive == "Exps" && "border-b-2 border-purple-500"}`}
          >
            <span>تجربه ها</span>
          </div>
          <div
            className={`text-white py-1 px-1  ${whichActive == "Contact" && "border-b-2 border-purple-500"}`}
          >
            <span>تماس با من</span>
          </div>
        </div>
        <div
          className=" bg-emerald-500/10
border border-emerald-500/20
text-emerald-400

hover:bg-emerald-500/15
hover:border-emerald-500/40
cursor-pointer

shadow-[0_0_20px_rgba(16,185,129,0.12)]
hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]

transition-all
duration-300  gap-2 py-2 px-3 rounded-md flex items-center"
        >
          <span className="font-semibold">دانلود رزومه</span>
          <BsDownload />
        </div>
      </div>
    </div>
  );
}

export default Header;
