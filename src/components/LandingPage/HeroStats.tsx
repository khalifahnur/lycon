"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Counter({ target, suffix = "" }:any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const totalMilSecDur = 2000; 
    const incrementTime = Math.floor(totalMilSecDur / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className=" py-10 bg-[#FAFAFA]"
    >
      <div className="grid grid-cols-4 gap-6 sm:gap-8 text-center lg:mx-20">
        <div>
          <div className="text-lg sm:text-2xl font-extrabold text-blue-600">
            {animate && <Counter target={35} suffix="Acres" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Of purpose-built campus
          </div>
        </div>

        <div>
          <div className="text-lg sm:text-2xl font-extrabold text-green-600">
            {animate && <Counter target={9} suffix="K" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Seats
          </div>
        </div>

        <div>
          <div className="text-lg sm:text-2xl font-extrabold text-yellow-500">
            {animate && <Counter target={500} suffix="+" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Students
          </div>
        </div>

        <div>
          <div className="text-lg sm:text-2xl font-extrabold text-blue-600">
            {animate && <Counter target={85} suffix="% +" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            projected gross margins
          </div>
        </div>
      </div>
    </div>
  );
}
