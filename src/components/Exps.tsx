import React from "react";
import { HiBriefcase } from "react-icons/hi";

function Exps() {
  return (
    <div className="px-25 mt-14 ">
      <p className="bg-gradient-to-r  text-right text-xl from-white to-slate-300 bg-clip-text text-transparent">
        تجربه ها
      </p>
      <div
        className="bg-slate-900/60
border border-purple-500/10
rounded-2xl
backdrop-blur-md

hover:border-purple-500/30
hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
w-full
mt-8
flex items-center gap-9
transition-all
py-4 px-5
duration-300
"
      >
        <div className="flex items-center border-r border-slate-400 pr-8 gap-6">
          <div
            className="
w-13 h-13

flex items-center justify-center

rounded-full

bg-gradient-to-br
from-purple-500/15
to-indigo-500/15

border border-purple-500/20

shadow-[0_0_20px_rgba(139,92,246,0.12)]

backdrop-blur-md

transition-all duration-300

hover:border-purple-500/40
hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
hover:-translate-y-1
"
          >
            <HiBriefcase className="text-purple-400 text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-100 font-bold">Full Stack Developer</p>
            <p className="text-purple-400 font-medium text-right">
              رایا یگانه ویدا
            </p>
            <p className="text-slate-500">1404/11/01 - 1404/08/01</p>
          </div>
        </div>
        <div className="flex items-center border-r border-slate-400 pr-8 gap-6">
          <div
            className="
w-13 h-13

flex items-center justify-center

rounded-full

bg-gradient-to-br
from-purple-500/15
to-indigo-500/15

border border-purple-500/20

shadow-[0_0_20px_rgba(139,92,246,0.12)]

backdrop-blur-md

transition-all duration-300

hover:border-purple-500/40
hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
hover:-translate-y-1
"
          >
            <HiBriefcase className="text-purple-400 text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-100 font-bold">Backend Developer</p>
            <p className="text-purple-400 font-medium text-right">مبنای 8</p>
            <p className="text-slate-500">
              (همکاری پروژه ای) 1404/05/01 - 1404/06/01
            </p>
          </div>
        </div>
        <div className="flex items-center border-r border-slate-400 pr-8 gap-6">
          <div
            className="
w-13 h-13

flex items-center justify-center

rounded-full

bg-gradient-to-br
from-purple-500/15
to-indigo-500/15

border border-purple-500/20

shadow-[0_0_20px_rgba(139,92,246,0.12)]

backdrop-blur-md

transition-all duration-300

hover:border-purple-500/40
hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
hover:-translate-y-1
"
          >
            <HiBriefcase className="text-purple-400 text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-100 font-bold">Frontend Developer</p>
            <p className="text-purple-400 font-medium text-right">چادکو</p>
            <p className="text-slate-500">1404/04/01 - 1404/03/02</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            className="
w-13 h-13

flex items-center justify-center

rounded-full

bg-gradient-to-br
from-purple-500/15
to-indigo-500/15

border border-purple-500/20

shadow-[0_0_20px_rgba(139,92,246,0.12)]

backdrop-blur-md

transition-all duration-300

hover:border-purple-500/40
hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
hover:-translate-y-1
"
          >
            <HiBriefcase className="text-purple-400 text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-100 font-bold">Frontend Developer</p>
            <p className="text-purple-400 font-medium text-right">دهقان فداکار</p>
            <p className="text-slate-500">1404/03/01 - 1403/07/01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exps;
