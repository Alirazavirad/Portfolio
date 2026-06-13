import React from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="sm:px-25 px-5 sm:mt-20 mt-7 ">
      <div className="flex items-center justify-between">
        <p
          className="text-purple-500 font-light cursor-pointer
hover:text-purple-400"
        >
          دیدن همه پروژه ها
        </p>
        <p className="bg-gradient-to-r text-xl from-white to-slate-300 bg-clip-text text-transparent">
          پروژه های منتخب
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-10 mt-5">
        <div
          className="bg-slate-900/60
border border-purple-500/10
rounded-2xl
backdrop-blur-md

hover:border-purple-500/30
hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
sm:w-[300px] w-full
transition-all
duration-300
"
        >
          <div className="rounded-t-md ">
            <img
              src="/imgs/samim.png"
              className="object-cover pb-5 h-[190px] rounded-t-md"
              alt=""
            />
          </div>
          <div className="px-5  text-right">
            <p className="text-white text-xl ">صمیم یدک</p>
            <p className="text-slate-400 text-sm mt-4">
              فروشگاه آنلاین لوازم یدکی با پنل مدیریت و سیستم سفارشات
            </p>
          </div>
          <div className="px-5 flex items-center gap-2 mt-5">
            <div
              className="bg-purple-500/10 text-purple-400 border border-purple-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Node.js</p>
            </div>
            <div
              className="bg-blue-500/10 text-blue-400 border border-blue-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Next.js</p>
            </div>
            <div
              className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/2
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>MongoDB</p>
            </div>
          </div>
          <div className="px-5 flex mt-5 pb-4 items-center justify-between">
            <div
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">مشاهده دمو</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <div
              className=" flex items-center gap-2
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer


"
            >
              <p className="text-sm pt-1">GitHub</p>
              <FaGithub size={18} className="text-purple-500" />
            </div>
          </div>
        </div>
        <div
          className="bg-slate-900/60
border border-purple-500/10
rounded-2xl
backdrop-blur-md

hover:border-purple-500/30
hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
sm:w-[300px] w-full
transition-all
duration-300
"
        >
          <div className="rounded-t-md ">
            <img
              src="/imgs/aval.png"
              className="object-cover w-full pb-5 h-[190px] rounded-t-md"
              alt=""
            />
          </div>
          <div className="px-5  text-right">
            <p className="text-white text-xl ">اول کشاورز</p>
            <p className="text-slate-400 text-sm mt-4">
            وب اپلیکیشن  فروشگاه آنلاین  محصولات کشاورزی با پنل مدیریت و سیستم سفارشات 
            </p>
          </div>
          <div className="px-5 flex items-center gap-2 mt-5">
            <div
              className="bg-purple-500/10 text-purple-400 border border-purple-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>React.js</p>
            </div>
            <div
              className="bg-blue-500/10 text-blue-400 border border-blue-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Next.js</p>
            </div>
            <div
              className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/2
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>MySQL</p>
            </div>
          </div>
          <div className="px-5 flex mt-5 pb-4 items-center justify-between">
            <div
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">مشاهده دمو</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <div
              className=" flex items-center gap-2
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer


"
            >
              <p className="text-sm pt-1">GitHub</p>
              <FaGithub size={18} className="text-purple-500" />
            </div>
          </div>
        </div>
        <div
          className="bg-slate-900/60
border border-purple-500/10
rounded-2xl
backdrop-blur-md

hover:border-purple-500/30
hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
sm:w-[300px] w-full
transition-all
duration-300
"
        >
          <div className="rounded-t-md ">
            <img
              src="/imgs/hesab.png"
              className="object-cover pb-5 h-[190px] rounded-t-md"
              alt=""
            />
          </div>
          <div className="px-5  text-right">
            <p className="text-white text-xl ">حسابفا</p>
            <p className="text-slate-400 text-sm mt-4">
              بکند مشابه حسابفا برای فاکتور ها و انبار داری و حساب داری
            </p>
          </div>
          <div className="px-5 flex items-center gap-2 mt-5">
            <div
              className="bg-purple-500/10 text-purple-400 border border-purple-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Node.js</p>
            </div>
            <div
              className="bg-blue-500/10 text-blue-400 border border-blue-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Express.js</p>
            </div>
            <div
              className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/2
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>MongoDB</p>
            </div>
          </div>
          <div className="px-5 flex mt-5 pb-4 items-center justify-between">
            <div
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">مشاهده دمو</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <div
              className=" flex items-center gap-2
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer


"
            >
              <p className="text-sm pt-1">GitHub</p>
              <FaGithub size={18} className="text-purple-500" />
            </div>
          </div>
        </div>
        <div
          className="bg-slate-900/60
border border-purple-500/10
rounded-2xl
backdrop-blur-md

hover:border-purple-500/30
hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
sm:w-[300px] w-full
transition-all
duration-300
"
        >
          <div className="rounded-t-md ">
            <img
              src="/imgs/samim.png"
              className="object-cover pb-5 h-[190px] rounded-t-md"
              alt=""
            />
          </div>
          <div className="px-5  text-right">
            <p className="text-white text-xl ">صمیم یدک</p>
            <p className="text-slate-400 text-sm mt-4">
              فروشگاه آنلاین لوازم یدکی با پنل مدیریت و سیستم سفارشات
            </p>
          </div>
          <div className="px-5 flex items-center gap-2 mt-5">
            <div
              className="bg-purple-500/10 text-purple-400 border border-purple-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Node.js</p>
            </div>
            <div
              className="bg-blue-500/10 text-blue-400 border border-blue-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Next.js</p>
            </div>
            <div
              className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/2
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>MongoDB</p>
            </div>
          </div>
          <div className="px-5 flex mt-5 pb-4 items-center justify-between">
            <div
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">مشاهده دمو</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <div
              className=" flex items-center gap-2
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer


"
            >
              <p className="text-sm pt-1">GitHub</p>
              <FaGithub size={18} className="text-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
