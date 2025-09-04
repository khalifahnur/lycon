"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { motion,easeOut} from "framer-motion";
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Logo + Socials */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-between"
            variants={item}
          >
            <div className="mb-8 lg:mb-0">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold tracking-wide">Lycan</h2>
              </Link>
            </div>

            {/* Socials (Desktop) */}
            <div className="hidden lg:flex gap-4">
              <a
                href="https://www.instagram.com/lycan"
                target="_blank"
                rel="nofollow noreferrer noopener"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/lycan"
                target="_blank"
                rel="nofollow noreferrer noopener"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
          >
            {/* Offerings */}
            <motion.div className="space-y-4" variants={item}>
              <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider">
                What We Do
              </h3>
              <nav className="space-y-3">
                {[
                  ["Murang’a Seal FC", "/offerings/muranga-seal-football-club"],
                  ["MSeal Membership & Ticketing", "/offerings/mseal-membership-ticketing"],
                  ["St. Sebastian Park", "/offerings/st-sebastian-park"],
                  ["St. Sebastian Academy", "/offerings/st-sebastian-academy"],
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

            {/* Resources */}
            <motion.div className="space-y-4" variants={item}>
              <h3 className="font-semibold text-gray-300 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <nav className="space-y-3">
                {[
                  ["News & Updates", "/resources/news"],
                  ["Success Stories", "/resources/stories"],
                  ["Insights & Reports", "/resources/insights"],
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

            {/* Company */}
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
                  href="/contact"
                  className="block text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
                <a
                  href="/newsletter"
                  className="block text-indigo-400 hover:text-indigo-300 transition-colors duration-200 text-sm font-medium"
                >
                  Sign Up for our Newsletter
                </a>
              </nav>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media - Mobile */}
        <motion.div
          className="lg:hidden flex gap-4 mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.instagram.com/lycan"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition-colors duration-300"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/lycan"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition-colors duration-300"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©2025 - Lycan Investments Ltd. | All rights reserved
            </p>
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
