import React from "react";
import { BsGithub, BsStars } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { SiPostman, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Tools() {
  return (
    <div
      className=" w-full sm:w-[60%] px-5 py-3
bg-slate-900/50
border border-purple-500/10

hover:border-purple-500/25
hover:bg-slate-900/70

shadow-[0_0_15px_rgba(139,92,246,0.05)]
hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]

backdrop-blur-md
rounded-xl

transition-all duration-300
"
    >
      <div className="flex items-center justify-end gap-2">
        <BsStars className="text-purple-400" size={25} />
        <h2 className="text-white font-bold text-2xl">ابزار و تکنولوژی ها</h2>
      </div>{" "}
      <div className="flex w-full    flex-wrap items-center mt-7 gap-2">
        <div
          className="
      bg-white/5
      border border-white/10
      hover:border-purple-500/25
      flex flex-col gap-3
      items-center
      min-w-[142px]
      
      rounded-xl px-5 py-2
      
      hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
      
      transition-all
      duration-300
      "
        >
          <VscVscode size={40} className="text-blue-400" />
          <p className="text-white text-sm ">VS Code</p>
        </div>
        <div
          className="
      bg-white/5
      border border-white/10
      hover:border-purple-500/25
      flex flex-col gap-3
      items-center
      min-w-[142px]
      
      rounded-xl px-5 py-2
      
      hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
      
      transition-all
      duration-300
      "
        >
          <SiPostman size={40} className="text-orange-400" />
          <p className="text-white text-sm ">Postman</p>
        </div>
        <div
          className="
      bg-white/5
      border border-white/10
      hover:border-purple-500/25
      flex flex-col gap-3
      items-center
      min-w-[142px]
      
      rounded-xl px-5 py-2
      
      hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
      
      transition-all
      duration-300
      "
        >
          <FaFigma size={40} className="text-pink-400" />
          <p className="text-white text-sm ">Figma</p>
        </div>
        <div
          className="
      bg-white/5
      border border-white/10
      hover:border-purple-500/25
      flex flex-col gap-3
      items-center
      min-w-[142px]
      
      rounded-xl px-5 py-2
      
      hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
      
      transition-all
      duration-300
      "
        >
          <BsGithub size={40} className="text-white" />
          <p className="text-white text-sm ">GitHub</p>
        </div>
        <div
          className="
      bg-white/5
      border border-white/10
      hover:border-purple-500/25
      flex flex-col gap-3
      items-center
      min-w-[142px]
      
      rounded-xl px-5 py-2
      
      hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
      
      transition-all
      duration-300
      "
        >
          <SiVercel size={40} className="text-white" />
          <p className="text-white text-sm ">Vercel</p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
