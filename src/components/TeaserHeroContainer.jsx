import React from "react";
import { Spotlight } from "./ui/index.js";
import { TextGenerateEffect } from "./ui/index.js";
import { ShootingStars } from "./ui/index.js";
import { StarsBackground } from "./ui/index.js";
import TimerCountdown from "../hooks/useCount.js";

export default function HeroContainer() {

  const time = TimerCountdown({ targetDate: "Feb 04 2025 16:00:00 GMT+0530" })


  return (
    (<div
      className="h-screen w-full   flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <StarsBackground className={`bg-black/[0.96]`} />
      <ShootingStars maxDelay={1500} starColor={`#1f75ff`} maxSpeed={8} minSpeed={5} starWidth={30} />
      <div className=" p-4 max-w-7xl  relative z-10  w-full pt-24 md:pt-0">
        <h1
          className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-600 to-blue-700 bg-opacity-50 motion-preset-flomoji-[🚀]  ">
          Welcome to <br /> <span className="font-funneldisplay ">AditYa RaJ's PortFolio </span>
        </h1>
        <div className=" sm:mt-10 mt-20 text-5xl text-white text-center ">
          <TextGenerateEffect words={"Releasing Soon "} duration={0.9} className={`font-lexend`} />
        </div>
        <div className=" sm:text-6xl text-3xl text-white text-center font-lexend">
          <p className="mt-5  mb-5">
            <span>T - </span>
            <span className="inline-block sm:w-24 w-12 ">{time.days}</span>
            <span className="sm:text-2xl text-sm font-thin">days</span>
            <span className="inline-block sm:w-24 w-12">{time.hours}</span>
            <span className="sm:text-2xl text-sm font-thin">hours</span>
            <span className="inline-block sm:w-24 w-12">{time.minutes}</span>
            <span className="sm:text-2xl text-sm font-thin">mins</span>
            <span className="inline-block sm:w-24 w-12">{time.seconds}</span>
            <span className="sm:text-2xl text-sm font-thin">secs</span>
          </p>
        </div>

        <p
          className="sm:mt-10 mt-12 font-normal text-base text-neutral-300 sm:max-w-2xl max-w-[310px] text-center mx-auto  ">
         As the stars aligns,the gpt refines, and it fixes my code mess so it comes to life. Keep watching this space something remarkable is on its way 🚀.
        </p>
      </div>
    </div >)
  );
}
