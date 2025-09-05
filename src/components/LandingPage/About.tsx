"use client";

import React from "react";
import { Users, Lightbulb, Leaf, TrendingUp } from "lucide-react";
import { motion, spring } from "framer-motion";

// Parent container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between cards
    },
  },
};

// Child card animation
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
        
        {/* Header */}
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
             <span className="text-emerald-500">Lycan International</span> 
          </h2>
        </motion.div>

        {/* Grid Layout with Animations */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Community First */}
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
            <div className='absolute bottom-0 left-0 w-[10rem] sm:w-[15rem] lg:w-[20rem] hidden lg:block'>
        <svg
          className='object-contain w-full h-full'
          width='247'
          height='112'
          viewBox='0 0 247 112'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-11.3078 6.83448C-3.12783 -2.27816 11.1278 -2.27816 19.3077 6.83449C24.4754 12.5914 32.4242 14.9625 39.88 12.963C51.566 9.82906 63.4063 17.4592 65.4417 29.4356L65.5449 30.0434C66.8494 37.7191 72.2586 44.0482 79.6144 46.5056C91.1709 50.3664 97.0428 63.262 92.3927 74.5686L92.2082 75.0172C89.231 82.2562 90.446 90.5979 95.3169 96.7141C102.985 106.342 101.029 120.563 90.9686 127.628C84.5939 132.103 81.1633 139.72 82.0249 147.484L82.0971 148.135C83.4388 160.226 74.2213 170.894 62.1147 171.261C54.3889 171.496 47.4341 176.027 44.0708 183.017L43.9048 183.362C38.625 194.336 25.0647 198.328 14.7229 191.954C8.14422 187.898 -0.144226 187.898 -6.72287 191.954C-17.0647 198.328 -30.6251 194.336 -35.9049 183.362L-36.0708 183.017C-39.4341 176.027 -46.3889 171.496 -54.1147 171.261C-66.2213 170.894 -75.4388 160.226 -74.0971 148.135L-74.0249 147.484C-73.1633 139.72 -76.5939 132.103 -82.9685 127.628C-93.0292 120.563 -94.9848 106.342 -87.3169 96.7141C-82.446 90.5979 -81.231 82.2562 -84.2082 75.0172L-84.3927 74.5686C-89.0428 63.262 -83.1709 50.3664 -71.6144 46.5056C-64.2586 44.0482 -58.8494 37.7191 -57.545 30.0434L-57.4417 29.4356C-55.4063 17.4592 -43.566 9.82906 -31.88 12.963C-24.4242 14.9625 -16.4754 12.5914 -11.3078 6.83448Z'
            fill='#FF5354'
          />
          <path
            d='M138.585 9C156.152 9.00028 171.149 37.6772 177.085 78.0713C217.486 84.0061 246.169 99.0053 246.169 116.574C246.169 134.143 217.487 149.141 177.088 155.076C171.154 195.482 156.155 224.169 138.585 224.169C121.015 224.169 106.014 195.482 100.08 155.076C59.6811 149.141 31 134.143 31 116.574C31.0001 99.0055 59.6825 84.0062 100.083 78.0713C106.019 37.6769 121.018 9 138.585 9Z'
            fill='#FBEB0F'
          />
          <path
            d='M90.8975 79.6133C89.8905 85.6064 91.4522 91.8605 95.3174 96.7139C102.985 106.342 101.029 120.564 90.9688 127.628C84.5942 132.104 81.1629 139.72 82.0244 147.484L82.0967 148.135C82.2298 149.335 82.2568 150.52 82.1895 151.684C51.4734 144.425 31 131.417 31 116.574C31.0001 100.369 55.4037 86.3492 90.8975 79.6133Z'
            fill='#FF9D5F'
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
