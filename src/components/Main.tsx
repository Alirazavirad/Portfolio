"use client";
import { useLanguage } from "@/app/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FiAward, FiFolder } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";
import { LuClock12 } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";
import { TbBrandCodesandbox } from "react-icons/tb";
function Main() {
  const { t, language } = useLanguage();
  return (
    <>
      <div className="sm:mt-37 mt-33 pt-4 px-5  sm:px-25 sm:flex sm:flex-row flex-col  sm:justify-between items-center">
        <img
          src="/imgs/mee.png"
          alt="me"
          className="w-[470px]  relative z-10 block sm:hidden h-[400px] object-cover sm:h-[430px]"
        />

        <div>
          <div className="flex flex-col gap-5">
            <p className="text-white text-md ">{t.main.hi}</p>
            <p className="text-white text-3xl ">{t.header.name}</p>
            <p className="text-purple-500 text-3xl">Full Stack Developer</p>
            <div style={{ lineHeight: "35px" }} className="sm:w-102 ">
              <p className="text-white text-wrap ">{t.main.me}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 mt-6">
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="pro w-full  py-3  text-center rounded-md"
            >
              {t.main.project}
            </button>
            <button
              onClick={() => {
                const isMobile = window.innerWidth < 640;

                const el = document.getElementById(
                  isMobile ? "contact-mobile" : "contact",
                );

                el?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="about w-full  py-3  text-center rounded-md"
            >
              {t.main.contact}
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/Alirazavirad"
              className="social-btn flex items-center justify-center"
            >
              <GrGithub color="white" size={30} />
            </a>
            <a
              href="https://wa.me/989174148532"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center justify-center"
            >
              <RiWhatsappFill color="white" size={28} />
            </a>{" "}
            <a
              href="https://t.me/alirazavi002"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center justify-center"
            >
              <FaTelegram color="white" size={30} />
            </a>
            <a
              href="https://www.instagram.com/ali.razaviiirad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center justify-center"
            >
              <FaInstagram color="white" size={30} />
            </a>
          </div>
        </div>
        <img
          src="/imgs/mee.png"
          alt="me"
          className="w-[470px] hidden sm:block object-cover h-[430px]"
        />
        {/* <div className="border-purple-500 border p-28 rounded-full">
          <Image src={"/imgs/mee.png"} alt="me" width={100} height={100} />
        </div> */}
      </div>
      {/* <div className="sm:px-35 px-5 flex-col sm:flex sm:flex-row items-center justify-between gap-4  mt-8">
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px]  justify-center  flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <LuClock12 color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">+ 2</p>
            <p className="text-[#94A3B8]">{t.main.experience}</p>
          </div>
        </div>
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px] justify-center w-full mt-3 flex sm:mt-0 items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <FiFolder color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">+ 10</p>
            <p className="text-[#94A3B8]">{t.main.done_projects}</p>
          </div>
        </div>
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px] justify-center w-full mt-3 flex sm:mt-0 items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <TbBrandCodesandbox color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">+ 5</p>
            <p className="text-[#94A3B8] whitespace-nowrap">{t.main.tech}</p>
          </div>
        </div>
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px] justify-center w-full mt-3 sm:mt-0 flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <FiAward color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">100%</p>
            <p className="text-[#94A3B8]">{t.main.emplyee}</p>
          </div>
        </div>
      </div> */}
      <div className="px-5 sm:px-35 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        {/* Experience */}
        <div className="boxes gap-6 px-4 py-5 w-full sm:w-[270px] justify-center flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full shrink-0">
            <LuClock12 color="#A855F7" size={25} />
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-2xl">+ 2</p>
            <p className="text-[#94A3B8]">{t.main.experience}</p>
          </div>
        </div>

        {/* Projects */}
        <div className="boxes gap-6 px-4 py-5 w-full sm:w-[250px] justify-center flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full shrink-0">
            <FiFolder color="#A855F7" size={25} />
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-2xl">+ 10</p>
            <p className="text-[#94A3B8]">{t.main.done_projects}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="boxes gap-6 px-4 py-5 w-full sm:w-[250px] justify-center flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full shrink-0">
            <TbBrandCodesandbox color="#A855F7" size={25} />
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-2xl"> + 5</p>
            <p className="text-[#94A3B8] sm:whitespace-nowrap">{t.main.tech}</p>
          </div>
        </div>

        {/* Employees */}
        <div className="boxes gap-6 px-4 py-5 w-full sm:w-[290px] justify-center flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full shrink-0">
            <FiAward color="#A855F7" size={25} />
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-2xl">100%</p>
            <p className="text-[#94A3B8]">{t.main.emplyee}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
