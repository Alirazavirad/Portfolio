import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsStar, BsStars } from "react-icons/bs";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuBookOpen, LuBrain, LuClock3, LuMessageCircle } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGraphql, SiMongodb, SiNestjs, SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div
      className="w-full sm:w-[60%] px-5 py-3
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
        <h2 className="text-white font-bold text-2xl">مهارت‌ها</h2>
      </div>{" "}
      <div className="text-right mt-4">
        <p className="text-purple-500">مهارت های فنی</p>
      </div>
      <div className="flex w-full border-b pb-5 border-slate-800 flex-wrap items-center mt-7 gap-2">
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
          <RiNextjsFill className="text-white w-full" size={40} />
          <p className="text-white text-sm ">Next.js</p>
        </div>
        <div
          className="
bg-cyan-500/10
border border-cyan-500/20
hover:border-purple-500/25
min-w-[142px]
items-center
rounded-xl px-4 py-2

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3

transition-all
duration-300
"
        >
          <FaReact className="text-cyan-400 w-full" size={40} />
          <p className="text-white text-sm ">React.js</p>
        </div>
        <div
          className="
bg-blue-500/10
border border-blue-500/20
hover:border-purple-500/25
min-w-[142px]

rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <SiTypescript className="text-blue-400 w-full" size={40} />
          <p className="text-white text-sm ">TypeScript</p>
        </div>
        <div
          className="
bg-green-500/10
border border-green-500/20
hover:border-purple-500/25
min-w-[142px]
items-center
rounded-xl px-4 py-2

hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <FaNodeJs className="text-green-400 w-full" size={40} />
          <p className="text-white text-sm ">Node.js</p>
        </div>
        <div
          className="
bg-red-500/10
border border-red-500/20
hover:border-purple-500/25
min-w-[142px]
rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <SiNestjs className="text-red-400 w-full" size={40} />
          <p className="text-white text-sm ">Nest.js</p>
        </div>
        <div
          className="
bg-sky-500/10
border border-sky-500/20
hover:border-purple-500/25
min-w-[142px]
rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <BiLogoPostgresql className="text-sky-400 w-full" size={40} />
          <p className="text-white text-sm ">PostgreSQL</p>
        </div>
        <div
          className="
bg-emerald-500/10
border border-emerald-500/20
hover:border-purple-500/25
min-w-[142px]
rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <SiMongodb className="text-emerald-400 w-full" size={40} />
          <p className="text-white text-sm ">MongoDB</p>
        </div>
        <div
          className="
bg-cyan-500/10
border border-cyan-500/20
hover:border-purple-500/25
min-w-[142px]
rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <RiTailwindCssFill className="text-cyan-400 w-full" size={40} />
          <p className="text-white text-sm ">Tailwind CSS</p>
        </div>
        <div
          className="
bg-orange-500/10
border border-orange-500/20
hover:border-purple-500/25
min-w-[142px]
rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <FaGitAlt className="text-orange-400 w-full" size={40} />
          <p className="text-white text-sm ">Git</p>
        </div>
        <div
          className="
bg-pink-500/10
border border-pink-500/20
hover:border-purple-500/25
min-w-[142px]
rounded-xl px-4 py-2
items-center
hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
flex flex-col gap-3
transition-all
duration-300
"
        >
          <SiGraphql className="text-pink-400 w-full" size={40} />
          <p className="text-white text-sm ">GraphQL</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-right ">
          <p className="text-purple-500">مهارت های نرم</p>
        </div>
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
            <LuBrain size={40} className="text-purple-400"/>
            <p className="text-white text-sm ">حل مسأله</p>
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
            <HiOutlineUserGroup size={40} className="text-purple-400"/>
            <p className="text-white text-sm ">کار تیمی</p>
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
            <LuClock3 size={40} className="text-purple-400"/>
            <p className="text-white text-sm ">مدیریت زمان</p>
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
            <LuBookOpen size={40} className="text-purple-400"/>
            <p className="text-white text-sm ">یادگیری سریع</p>
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
            <LuMessageCircle size={40} className="text-purple-400"/>
            <p className="text-white text-sm ">ارتباط موثر</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
