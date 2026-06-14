import React from "react";
import { HiBriefcase } from "react-icons/hi";
import { IoBriefcaseOutline } from "react-icons/io5";

function Exps() {
  return (
    <>
      <div className="px-25 mt-14 hidden sm:block ">
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
              <p className="text-purple-400 font-medium text-right">
                دهقان فداکار
              </p>
              <p className="text-slate-500">1404/03/01 - 1403/07/01</p>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10 px-5 block sm:hidden">
        <div className="flex justify-end items-center gap-3 mb-8">
          {/* <IoBriefcaseOutline className="text-purple-400" size={28} /> */}
          <h2 className="text-2xl font-bold text-white">تجربه‌ها</h2>
        </div>

        <div className="relative">
          
          <div
            className="
      absolute
      right-6
      top-0
      h-full
      w-[2px]
      bg-purple-500/30
      "
          />

          <div className="relative flex gap-4 mb-8">
            <div
              className="
        absolute
        right-[18px]
        top-14
        w-4
        h-4
        rounded-full
        bg-purple-500
        shadow-[0_0_20px_rgba(139,92,246,0.8)]
        "
            />

            <div
              className="
        mr-12

        bg-slate-900/40
        border border-purple-500/15

        rounded-2xl

        p-5

        w-full

        backdrop-blur-md

        shadow-[0_0_30px_rgba(139,92,246,0.05)]
        "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
            w-16
            h-16

            rounded-full

            bg-purple-500/10
            border border-purple-500/20

            flex
            items-center
            justify-center

            overflow-hidden
            "
                >
                  <IoBriefcaseOutline className="text-purple-400" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">
                    Frontend Developer
                  </h3>

                  <p className="text-white/80 mt-1">دهقان فداکار</p>

                  <p className="text-purple-400 mt-3">
                    1404/03/01 - 1403/07/01
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex gap-4 mb-8">
            <div
              className="
        absolute
        right-[18px]
        top-14
        w-4
        h-4
        rounded-full
        bg-purple-500
        "
            />

            <div
              className="
        mr-12
        bg-slate-900/40
        border border-purple-500/15
        rounded-2xl
        p-5
        w-full
        "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
            w-16 h-16
            rounded-full
            bg-blue-500/10
            border border-blue-500/20
            flex items-center justify-center
            "
                >
                  <IoBriefcaseOutline className="text-purple-400" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">
                    Frontend Developer
                  </h3>
                  <p className="text-white/80">چادکو</p>

                  <p className="text-purple-400 mt-3">
                    1404/04/01 - 1404/03/02
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex gap-4 mb-8">
            <div
              className="
        absolute
        right-[18px]
        top-14
        w-4
        h-4
        rounded-full
        bg-purple-500
        "
            />

            <div
              className="
        mr-12
        bg-slate-900/40
        border border-purple-500/15
        rounded-2xl
        p-5
        w-full
        "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
            w-16 h-16
            rounded-full
            bg-blue-500/10
            border border-blue-500/20
            flex items-center justify-center
            "
                >
                  <IoBriefcaseOutline className="text-purple-400" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">
                    Backend Developer
                  </h3>
                  <p className="text-white/80">مبنای 8</p>

                  <p className="text-purple-400 mt-3">
                    {" "}
                    (همکاری پروژه ای) 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex gap-4 mb-8">
            <div
              className="
        absolute
        right-[18px]
        top-14
        w-4
        h-4
        rounded-full
        bg-purple-500
        "
            />

            <div
              className="
        mr-12
        bg-slate-900/40
        border border-purple-500/15
        rounded-2xl
        p-5
        w-full
        "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
            w-16 h-16
            rounded-full
            bg-blue-500/10
            border border-blue-500/20
            flex items-center justify-center
            "
                >
                  <IoBriefcaseOutline className="text-purple-400" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">
                    Full Stack Developer
                  </h3>
                  <p className="text-white/80">رایا یگانه ویدا</p>

                  <p className="text-purple-400 mt-3">
                   1404/11/01 - 1404/08/01 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Exps;
