"use client";
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
  return (
    <>
      <div className="sm:mt-37 mt-33 pt-4 px-5  sm:px-25 sm:flex sm:flex-row flex-col  sm:justify-between items-center">
        <img
          src="/imgs/mee.png"
          alt="me"
          className="w-[470px]  relative z-10 block sm:hidden h-[320px] object-cover sm:h-[430px]"
        />

        <div>
          <div className="flex flex-col gap-5">
            <p className="text-white text-md text-right">سلام من</p>
            <p className="text-white text-3xl text-right">علی رضوی راد</p>
            <p className="text-purple-500 text-3xl">Full Stack Developer</p>
            <div style={{ lineHeight: "35px" }} className="sm:w-102 text-right">
              <p className="text-white text-wrap ">
                من یک برنامه نویس فول استک هستم و با استفاده از تکنولوژی های
                مدرن , وبسایت ها و اپلیکیشن های مقیاس پذیر و با کیفیت بالا
                میسازم
              </p>
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
              مشاهده پروژه ها
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
              تماس با من
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
      <div className="sm:px-35 px-5 flex-col sm:flex sm:flex-row items-center justify-between gap-4  mt-8">
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px]  justify-center  flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <LuClock12 color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">+ 2</p>
            <p className="text-[#94A3B8]">سال تجربه</p>
          </div>
        </div>
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px] justify-center w-full mt-3 flex sm:mt-0 items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <FiFolder color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">+ 10</p>
            <p className="text-[#94A3B8]">پروژه انجام شده</p>
          </div>
        </div>
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px] justify-center w-full mt-3 flex sm:mt-0 items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <TbBrandCodesandbox color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">+ 5</p>
            <p className="text-[#94A3B8]">تکنولوژی اصلی</p>
          </div>
        </div>
        <div className="boxes gap-10 px-4 py-5 sm:w-[250px] justify-center w-full mt-3 sm:mt-0 flex items-center text-white font-bold">
          <div className="boxIn p-3 rounded-full">
            <FiAward color="#A855F7" size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl">100%</p>
            <p className="text-[#94A3B8]">رضایت کارفرما</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
