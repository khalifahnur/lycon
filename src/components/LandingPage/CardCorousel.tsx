"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function CardCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const offerings = [
    
    {
      id: 1,
      title: "St. Sebastian Park",
      description:
        "A multi-purpose stadium and events ground. From football matches to weddings and concerts, St. Sebastian Park is designed to host unforgettable experiences for the community.",
      image: "https://imgur.com/mWiZyBs.jpeg",
      url: "/lycan-international/st-sebastian-park",
    },
    {
      id: 2,
      title: "St. Sebastian Sports Academy",
      description:
        "An upcoming school that blends academics with sports to nurture well-rounded learners and athletes. St. Sebastian Academy will be a hub for excellence, discipline, and opportunity.",
      image: "https://imgur.com/6qo28qJ.jpeg",
      url: "/lycan-international/st-sebastian-academy",
    },
    {
      id: 3,
      title: "Murang’a Seal Football Club",
      description:
        "Lycan proudly supports Murang’a Seal FC, nurturing both the senior team and academy players. Our investment builds pathways for young talent to shine locally and internationally.",
      image: "/mseal/mseal-team-photo.jpeg",
      url: "https://murangaseal.com",
    },
    // {
    //   id: 4,
    //   title: "MSeal Membership & Ticketing System",
    //   location: "Digital Platform",
    //   description:
    //     "A modern membership and ticketing platform that connects fans with the club. Secure, seamless, and designed to strengthen the fan experience with exclusive access and rewards.",
    //   image: "/mseal/img-not-found.jpg",
    //   url: "https://mseal-membership.vercel.app/",
    // },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % offerings.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, offerings.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offerings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offerings.length) % offerings.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="playfair bg-[#FAFAFA]/50 py-16 lg:py-24" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        {/* <motion.div
          className="text-center mb-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={item}
          >
            Investment discussions <br />
             are open.
          </motion.h2>

          <motion.div className="max-w-3xl mx-auto mb-8" variants={item}>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join us in building the future of sports and education in East Africa.
            </p>
          </motion.div>
        </motion.div> */}

        {/* Desktop Grid */}
        <motion.div
          id="get-started"
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {offerings.slice(0, 3).map((property) => (
            <motion.div key={property.id} variants={item}>
              <PropertyCard itm={property} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {offerings.map((itm) => (
                <div
                  key={itm.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <PropertyCard itm={itm} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {offerings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function PropertyCard({ itm }: any) {
  return (
    <div className="group cursor-pointer">
      <a href={itm.url} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
          <Image
            src={itm.image}
            alt={itm.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
            fill
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {itm.title}
          </h3>

          <div className="flex justify-between items-end gap-4">
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
              {itm.description}
            </p>

            {/* Arrow Icon */}
            <div className="flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight
                size={16}
                className="text-gray-400 group-hover:text-blue-600"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
