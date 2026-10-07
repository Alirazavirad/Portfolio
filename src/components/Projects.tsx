"use client";
import { useLanguage } from "@/app/LanguageProvider";
import React from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

function Projects() {
  const { t } = useLanguage();
  return (
    <div className="sm:px-25 px-5 sm:mt-20 mt-7 ">
      <div className="flex items-center ">
        <p className="bg-gradient-to-r text-xl from-white to-slate-300 bg-clip-text text-transparent">
          {t.projects.title}
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
              className="object-cover pb-5 h-[190px] rounded-t-md w-full"
              alt=""
            />
          </div>
          <div className="px-5  ">
            <p className="text-white text-xl ">{t.projects.samim}</p>
            <p className="text-slate-400 text-sm mt-4">
              {t.projects.samim_info}
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
              onClick={() => {
                toast.error(t.projects.error, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <div
              onClick={() => {
                toast.error(t.projects.error, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
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
          <div className="px-5  ">
            <p className="text-white text-xl ">{t.projects.aval}</p>
            <p className="text-slate-400 text-sm mt-4">
              {t.projects.aval_info}
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
            <a
              href="https://avalkeshavarz.ir"
              target="_blank"
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </a>
            <div
              onClick={() => {
                toast.error(t.projects.classified, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
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
              className="object-cover pb-5 h-[190px] rounded-t-md w-full"
              alt=""
            />
          </div>
          <div className="px-5  ">
            <p className="text-white text-xl ">{t.projects.hesabfa}</p>
            <p className="text-slate-400 text-sm mt-4">
              {t.projects.hesabfa_info}
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
              onClick={() => {
                toast.error(t.projects.classified, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <div
              onClick={() => {
                toast.error(t.projects.classified, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
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
              src="/imgs/chat.png"
              className="object-cover pb-5 h-[190px] rounded-t-md w-full"
              alt=""
            />
          </div>
          <div className="px-5  ">
            <p className="text-white text-xl ">{t.projects.chat}</p>
            <p className="text-slate-400 text-sm mt-4">
              {t.projects.chat_info}
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
              <p>WebSocket</p>
            </div>
          </div>
          <div className="px-5 flex mt-5 pb-4 items-center justify-between">
            <a
              href="https://chat-frontend-nine-mu.vercel.app/"
              target="_blank"
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </a>
            <a
              href="https://github.com/Alirazavirad/chat-frontend"
              target="_blank"
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
            </a>
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
              src="/imgs/mokamel.png"
              className="object-cover pb-5 h-[190px] rounded-t-md w-full"
              alt=""
            />
          </div>
          <div className="px-5  ">
            <p className="text-white text-xl ">{t.projects.mokamel}</p>
            <p className="text-slate-400 text-sm mt-4">
              {t.projects.mokamel_info}
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
            <a
              href="https://mokamel-shop-frontend-3ieh.vercel.app/"
              target="_blank"
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </a>
            <a
              href="https://github.com/Alirazavirad/mokamelShop-frontend"
              target="_blank"
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
            </a>
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
              src="/imgs/nft.png"
              className="object-cover pb-5 h-[190px] rounded-t-md w-full"
              alt=""
            />
          </div>
          <div className="px-5  ">
            <p className="text-white text-xl ">NFT</p>
            <p className="text-slate-400 text-sm mt-4">{t.projects.nft_info}</p>
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
              onClick={() => {
                toast.error(t.projects.error, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </div>
            <a
              href="https://github.com/Alirazavirad/NFT-backend"
              target="_blank"
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
            </a>
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
              src="/imgs/salah.png"
              className="object-cover pb-5 h-[190px] rounded-t-md w-full"
              alt=""
            />
          </div>
          <div className="px-5  ">
            <p className="text-white text-xl ">{t.projects.salah}</p>
            <p className="text-slate-400 text-sm mt-4">
              {t.projects.salah_info}
            </p>
          </div>
          <div className="px-5 flex items-center gap-2 mt-5">
            <div
              className="bg-purple-500/10 text-purple-400 border border-purple-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>Next.js</p>
            </div>
            <div
              className="bg-blue-500/10 text-blue-400 border border-blue-500/20
 rounded-md py-1 px-2 text-sm flex items-center justify-center
"
            >
              <p>React.js</p>
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
            <a
              href="https://salahservice.ir"
              target="_blank"
              className=" flex items-center gap-2 pt-1
text-purple-500
hover:text-purple-400
duration-300
transition-all
cursor-pointer



"
            >
              <p className="text-sm">{t.projects.demo}</p>
              <CiShare1 size={18} className="text-purple-500" />
            </a>
            <div
              onClick={() => {
                toast.error(t.projects.classified, {
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  theme: "colored",
                });
              }}
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
