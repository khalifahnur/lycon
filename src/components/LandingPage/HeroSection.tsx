"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, easeOut } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <motion.video
        ref={videoRef}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://st-sebastian-video-bucket-2025.s3.us-east-1.amazonaws.com/ssp.mp4"
        poster="/assets/video-poster.jpg"
        aria-label="Background video showcasing St. Sebastian Sports Academy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30" />

      <button
        onClick={toggleMute}
        className="absolute bottom-2 right-4 z-20 p-2 sm:p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors "
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707a1 1 0 011.414 0L12 5.586V18.414l-4.707-4.707a1 1 0 00-.707-.293zM15 12h6M3 3l18 18" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={item}>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl font-poppins">
                Transforming African Sports
                <span className="block text-blue-500">Excellence</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg lg:text-2xl text-gray-100 leading-relaxed max-w-md sm:max-w-lg lg:max-w-xl drop-shadow-md font-poppins"
              variants={item}
            >
              Building East Africa&apos;s premier sports and education ecosystem through St. Sebastian Sports Academy.
            </motion.p>
          </motion.div>
          <motion.div
            className="hidden lg:block relative lg:pl-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}