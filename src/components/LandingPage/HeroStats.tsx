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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {/* Fans & Community */}
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
            {animate && <Counter target={50} suffix="K+" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Fans & Community
          </div>
        </div>

        {/* Memberships */}
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-green-600">
            {animate && <Counter target={10} suffix="K+" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Membership Tickets
          </div>
        </div>

        {/* Events Hosted */}
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-yellow-500">
            {animate && <Counter target={200} suffix="+" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Events at St. Sebastian Park
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-red-500">
            {animate && <Counter target={5} suffix="+" />}
          </div>
          <div className="text-sm sm:text-base text-gray-700 mt-1">
            Years Empowering Murang’a Seal
          </div>
        </div>
      </div>
    </div>
  );
}
