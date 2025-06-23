import React from "react";
import { Spotlight } from "./ui/index.js";
import { TextGenerateEffect } from "./ui/index.js";
import { ShootingStars } from "./ui/index.js";
import { StarsBackground } from "./ui/index.js";
import TimerCountdown from "../hooks/useCount.js";
import { Link } from "react-router";


export default function HeroContainer() {

  const time = TimerCountdown({ targetDate: "Feb 28 2025 10:00:00 GMT+0530" })


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
          <TextGenerateEffect words={"Releasing Full Portfolio Soon "} duration={0.9} className={`font-lexend`} />
        </div>
        {/* <div className=" sm:text-6xl text-3xl text-white text-center font-lexend">
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
        </div> */}

        <div className=" sm:mt-10 mt-5 text-white text-center font-lexend">
          <a href="#linkedin">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border text-sm border-slate-800 bg-[linear-gradient(110deg,#16181b,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Check Profile
        </button>
          </a>
        </div>

        <p
          className="sm:mt-20 mt-10 font-normal text-base text-neutral-300 sm:max-w-2xl max-w-[310px] text-center mx-auto  ">
         As the stars aligns,the gpt refines, and it fixes my code mess so it comes to life. Keep watching this space something remarkable is on its way 🚀.
        </p>
      </div>

      
    </div >)


  );
}

        // // Button code
        
  
        // // tailwind.config.js code
        
      