import React from "react";
import { BsPhone, BsStars, BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { ImLocation2 } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

function Contact() {
  return (
    <div
      className='      w-full  px-5 py-3
bg-slate-900/50
border border-purple-500/10

hover:border-purple-500/25
hover:bg-slate-900/70

shadow-[0_0_15px_rgba(139,92,246,0.05)]
hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]

backdrop-blur-md
rounded-xl

transition-all duration-300

'
    >
      <div className="flex items-center justify-end gap-2">
        <BsStars className="text-purple-400" size={25} />
        <h2 className="text-white font-bold text-2xl">تماس با من</h2>
      </div>{" "}
      <div className="mt-7 flex flex-col gap-4">
        <div
          className="
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center gap-4
items-center
min-w-[143px]

rounded-lg px-3 py-3

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]

transition-all
duration-300
"
        >
          <CiMail size={25} className="text-purple-500" />
          <p className="text-white">ali.razavi.rad002@gmail.com</p>
        </div>
        <div
          className="
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center gap-4
items-center
min-w-[143px]

rounded-lg px-3 py-3

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]

transition-all
duration-300
"
        >
          <BsTelephone size={25} className="text-purple-500" />
          <p className="text-white">0917 414 8532</p>
        </div>
        <div
          className="
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center gap-4
items-center
min-w-[143px]

rounded-lg px-3 py-3

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]

transition-all
duration-300
"
        >
          <ImLocation2 size={25} className="text-purple-500" />
          <p className="text-white">ایران - شیراز</p>
        </div>
        <div className="flex items-center w-full gap-4">
          <a href="https://github.com/Alirazavirad" target="_blank"
            className=" 
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center justify-center
items-center

rounded-lg  py-5
w-full
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
cursor-pointer
transition-all
duration-300"
          >
            <GrGithub size={34} className="text-white" />
          </a>
          <a href="https://www.instagram.com/ali.razaviiirad" target="_blank"
            className="
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center justify-center
items-center
w-full
rounded-lg  py-5

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]

transition-all
duration-300"
          >
            <FaInstagram size={34} className="text-white" />
          </a>
          <a href="https://t.me/alirazavi002" target="_blank"
            className="
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center justify-center
items-center
w-full
rounded-lg  py-5

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]

transition-all
duration-300"
          >
            <FaTelegram size={34} className="text-white" />
          </a>
          <a href="https://wa.me/989174148532" target="_blank"
            className="
bg-white/5
border border-white/10
hover:border-purple-500/25
flex items-center justify-center
items-center
w-full
rounded-lg  py-5

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]

transition-all
duration-300"
          >
            <RiWhatsappFill size={34} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
