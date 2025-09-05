"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export default function LycanTeam() {
  return (
    <section className="bg-[#1A1A1A] text-white py-10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // animate when 20% is visible
        >
          {/* Left Image Block */}
          <motion.div
            className="w-full lg:w-1/3 relative"
            variants={fadeInUp}
          >
            <div className="absolute top-2 left-2 w-30 h-30 lg:w-60 lg:h-70 bg-orange-500 rounded-lg"></div>
            <div className="relative w-40 h-50 lg:w-60 lg:h-70 ml-4 mt-16 lg:ml-10 lg:mt-20">
              <Image
                decoding="async"
                className="object-cover w-full h-full"
                src="https://nomadgroup.io/wp-content/uploads/250702_Brand-Shoot_KT-studio-office-1-scaled.jpg"
                //src="/mseal/img-not-found.jpg"
                alt="Team meeting"
                fill
              />
            </div>
          </motion.div>

          {/* Text Block */}
          <motion.div
            className="w-full lg:w-1/3 text-center"
            variants={fadeInUp}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Get to know the team at{" "}
              <span className="text-emerald-500">Lycan</span>.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-6">
              We’re a passionate group of investors, sports enthusiasts, and
              community builders dedicated to Murang’a and beyond. We understand
              the evolving needs of modern clubs, fans, and communities. Our
              mission is to make investment in sports, education, and events
              smarter, more impactful, and future-ready.
            </p>
            <Button className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded flex-row justify-between">
              <Link href={'/lycan-international/executive'} className=""><span>Executive </span>
           </Link>
              <ArrowRight
                        size={16}
                        className="text-white group-hover:text-gray-700 animate-pulse group-hover:translate-x-1 transition-all duration-200"
                      />
            </Button>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-end relative"
            variants={fadeInUp}
          >
            <div className="absolute right-4 top-4 w-40 h-50 lg:w-64 lg:h-70 overflow-hidden">
              <Image
                decoding="async"
                className="object-cover h-full w-auto"
                src="https://nomadgroup.io/wp-content/uploads/250702_Brand-Shoot_KT-studio-office-3-scaled.jpg"
                alt="Office workspace"
                fill
              />
            </div>
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 mr-4 lg:mr-20">
              <Image
                decoding="async"
                className="object-cover w-full h-full"
                src="https://nomadgroup.io/wp-content/uploads/250702_Brand-Shoot_KT-kitchen-candids-1-scaled.jpg"
                alt="Team discussion"
                fill
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
