"use client";

import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenu({ isMenuOpen, toggleMenu }: MobileMenuProps) {
  return (
    <div
      className={`playfair md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden bg-[#FAFAFA] rounded-b-lg`}
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        <Link
          href="/lycan-international/about"
          className="text-gray-700 hover:text-black font-medium text-lg transition-colors duration-200"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="#what-we-do"
          className="text-gray-700 hover:text-black font-medium text-lg transition-colors duration-200"
          onClick={toggleMenu}
        >
          What We Do
        </Link>
        <Link
          href="#our-team"
          className="text-gray-700 hover:text-black font-medium text-lg transition-colors duration-200"
          onClick={toggleMenu}
        >
          Our Team
        </Link>
        <Link
          href="/lycan-international/contact-form"
          className="text-blue-500 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}