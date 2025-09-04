"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

/* eslint-disable @typescript-eslint/no-explicit-any */
  const toggleDropdown = (dropdown:any) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-[#FAFAFA] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-black tracking-tight">
                Lycan
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
                Solutions
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform group-hover:rotate-180 duration-200"
                />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    Muranga Seal Football Club
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    St Sebastian Park
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    St Sebastian Academy
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              Success Stories
            </a>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                Company
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform group-hover:rotate-180 duration-200"
                />
              </button>

              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    The Lycan Experience
                  </a>
                </div>
              </div>
            </div>

            {/* Insights Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
                Insights
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform group-hover:rotate-180 duration-200"
                />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    All Insights
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
              <Link href="/contact-form">Contact us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="h-full flex flex-col justify-center items-center py-4 space-y-6 border-t border-gray-100 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Solutions Mobile */}
            <div>
              {/* Solutions */}
              <button
                onClick={() => toggleDropdown("solutions")}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out"
              >
                <span className="font-medium">Solutions</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "solutions"
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 py-2 space-y-2">
                  {[
                    "Muranga Seal Football Club",
                    "St Sebastian Park",
                    "St Sebastian Academy",
                    "Flex by Lycan",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block py-2 px-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 ease-in-out"
            >
              Success Stories
            </a>

            {/* Company */}
            <div>
              <button
                onClick={() => toggleDropdown("company")}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out"
              >
                <span className="font-medium">Company</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "company"
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 py-2 space-y-2">
                  {["About Us", "The Lycan Experience"].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block py-2 px-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Insights */}
            <div>
              <button
                onClick={() => toggleDropdown("insights")}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out"
              >
                <span className="font-medium">Insights</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "insights" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "insights"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 py-2 space-y-2">
                  {["All Insights", "Blog"].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block py-2 px-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 mt-6 border-t border-gray-200 flex justify-center">
              <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
                <Link href="/contact-form">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
