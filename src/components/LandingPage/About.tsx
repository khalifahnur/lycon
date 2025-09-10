"use client";

import React from "react";
import { Users, Lightbulb, Leaf, TrendingUp } from "lucide-react";
import { motion, spring } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: spring, stiffness: 60, damping: 12 },
  },
};

const About = () => {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xl font-medium text-gray-300 uppercase tracking-wider mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
             <span className="text-blue-500">Lycan International</span> 
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300"
            variants={card}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become Africa&apos;s premier destination for sports development, academic achievement, and social impact; producing champions on the field, in the classroom, and in society.
            </p>
          </motion.div>

          {/* Innovation Driven */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300"
            variants={card}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To nurture and empower young athletes through world-class sports education, academic excellence, and holistic personal development, building a brighter future for individuals and communities across Africa.
            </p>
          </motion.div>

          {/* Growth Opportunities */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden lg:col-span-1 row-span-2"
            variants={card}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Company Overview
              </h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                Lycan International Limited is a privately held Kenyan company established to develop, own, and operate transformational sports and education facilities across East Africa.Founded by seasoned professionals with decades of experience in strategic operations, legal expertise, sports and youth development. We are developing East Africa’s first fully integrated residential sports and education academy on a 35-acre site near Nairobi, Kenya.
              </p>
              {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center">
                <Link href="/contact-form">Contact Us</Link>
                <TrendingUp className="ml-2 w-4 h-4" />
              </button> */}
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          </motion.div>

          {/* Sustainability Focused */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300 lg:col-span-2"
            variants={card}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sustainability Focused
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our projects are built for long-term value, not short-term gains.
              We prioritize environmental responsibility and sustainable
              practices that benefit future generations.
            </p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
