"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import CEOReport from "./Ceo";
import StatsSection from "./HeroStats";
import Image from "next/image";

// Parent container animation (controls stagger)
const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.58, 1],
    },
  },
};

// Child item animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function HeroSection() {
  return (
    <section  className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Background Shapes */}
      <div className="hidden lg:block absolute top-20 right-10 lg:right-32 w-32 h-32 lg:w-48 lg:h-48">
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-90" />
      </div>

      <div className="hidden lg:block absolute bottom-50 right-10 lg:right-40 w-24 h-24 lg:w-36 lg:h-36">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-8 lg:pr-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <CEOReport />
            </motion.div>

            <motion.div className="space-y-4" variants={item}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sports, events, and education —
                <span className="block">redefined.</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl"
              variants={item}
            >
              Discover opportunities that match your ambition. Lycan’s blend of
              innovation, community impact, and vision makes growing with us
              seamless and rewarding.
            </motion.p>

            <motion.div className="pt-4" variants={item}>
              <Button className="inline-flex items-center h-10 px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <a href="#get-started" className="text-lg">Get started</a>
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            className="relative lg:pl-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="relative" variants={item}>
              <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center"
                  alt="Professional team collaboration in modern office"
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Floating Secondary Image */}
            <motion.div
              className="absolute -bottom-6 -left-6 lg:-left-8 w-32 h-40 lg:w-40 lg:h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=500&fit=crop&crop=center"
                alt="Modern office space design"
                className="w-full h-full object-cover"
                fill
              />
            </motion.div>

            {/* Floating Success Badge */}
            <motion.div
              className="absolute hidden top-1/2 -left-4 bg-green-500 text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 md:flex items-center justify-center shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-lg lg:text-xl font-bold">98%</div>
                <div className="text-xs">Success</div>
              </div>
            </motion.div>

            {/* Background Accent Shapes */}
            <div className="absolute -top-8 -right-8 w-24 h-24 lg:w-32 lg:h-32 bg-blue-100 rounded-full opacity-60 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 lg:w-28 lg:h-28 bg-purple-100 rounded-full opacity-60 -z-10" />
          </motion.div>
        </motion.div>

        {/* Stats Section with delay */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
}
