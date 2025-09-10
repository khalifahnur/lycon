"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled when scrolling past 50px
      setIsScrolled(window.scrollY > 250);

      // Determine active section
      const sections = ["vision", "join", "invest", "about", "what-we-do", "our-team"];
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 rounded-lg ${
        isScrolled
          ? "bg-[#FAFAFA] md:backdrop-blur-md md:translate-y-2 px:10 lg:mx-20"
          : "bg-transparent translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-black tracking-tight">
                Lycan
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link
              href="/lycan-international/about"
              className={`text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 ${
                activeSection === "about" ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="#what-we-do"
              className={`text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 ${
                activeSection === "what-we-do" ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              What We Do
            </Link>
            <Link
              href="#our-team"
              className={`text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 ${
                activeSection === "our-team" ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              Our Team
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
              <Link href="/lycan-international/contact-form">Contact Us</Link>
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </header>
  );
}