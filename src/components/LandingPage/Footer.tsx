"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Footer() {
  return (
    <footer className="playfair bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="lg:col-span-2 flex flex-col justify-between"
            variants={item}
          >
            <div className="mb-8 lg:mb-0">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold tracking-wide">Lycan International</h2>             
              </Link>
              
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 lg:col-start-4 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
          >
            <motion.div className="space-y-4" variants={item}>
              <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider">
                What We Do
              </h3>
              <nav className="space-y-3">
                {[
                  ["St. Sebastian Park", "/st-sebastian-park"],
                  ["St. Sebastian Academy", "/st-sebastian-academy"],
                  ["Murang’a Seal FC", "/"],
                ].map(([title, link]) => (
                  <a
                    key={title}
                    href={link}
                    className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div className="space-y-4" variants={item}>
              <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider">
                Company
              </h3>
              <nav className="space-y-3">
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
                <a
                  href="/contact-form"
                  className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©2025 - Lycan International Ltd. | All rights reserved
            </p>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}