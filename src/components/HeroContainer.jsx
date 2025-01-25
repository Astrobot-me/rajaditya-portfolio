import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate.jsx";
import TimerCountdown from "../hooks/useCount";

export default function HeroContainer() {

  const time = TimerCountdown({ targetDate: "Jan 26 2025 16:00:00 GMT+0530" })
  return (
    (<div
      className="h-screen w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-600 to-blue-700 bg-opacity-50">
          Welcome to <br /> <span>AditYa RaJ's PortFolio </span>
        </h1>
        <div className=" mt-5 text-5xl text-white text-center font-normal">
          <TextGenerateEffect words={"Releasing Soon "} duration={0.9} />
        </div>

        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>
      </div>
    </div>)
  );
}
