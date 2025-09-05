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
      className="mt-12 pt-8 border-t border-gray-200"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center">
        <div>
          <div className="text-3xl sm:text-2xl font-extrabold text-blue-600">
            {animate && <Counter target={33} suffix="Acres" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Of purpose-built campus
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-2xl font-extrabold text-green-600">
            {animate && <Counter target={9} suffix="K" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Seats
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-2xl font-extrabold text-yellow-500">
            {animate && <Counter target={500} suffix="+" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Students
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-2xl font-extrabold text-red-500">
            {animate && <span>$ <Counter target={8.9} suffix=".9M" /></span> }
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Phase 1 development investment
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-2xl font-extrabold text-blue-600">
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
