import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Mobilemenu{
    isMenuOpen:boolean;
    toggleMenu:()=>void
}

const MobileMenu = ({ isMenuOpen, toggleMenu }:Mobilemenu) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const toggleDropdown = (menu:any) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div
      className={`md:hidden fixed inset-0 bg-gray-100 z-50 transform transition-all duration-300 ease-in-out backdrop-blur-sm ${
        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="h-full flex flex-col justify-center py-6 space-y-4 px-4 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-900 hover:bg-blue-600 hover:scale-105 transition-all duration-200"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {/* Solutions Dropdown */}
        <div className="w-full max-w-md">
          <button
            onClick={() => toggleDropdown('solutions')}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 text-lg font-semibold hover:bg-blue-600 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
            <span>Solutions</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                activeDropdown === 'solutions' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out text-gray-900 rounded-lg mt-1 ${
              activeDropdown === 'solutions' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pl-6 py-3 space-y-3">
              {[
                { name: 'Muranga Seal Football Club', href: '/muranga-seal' },
                { name: 'St Sebastian Park', href: '/st-sebastian-park' },
                { name: 'St Sebastian Academy', href: '/st-sebastian-academy' },
                { name: 'Flex by Lycan', href: '/flex-by-lycan' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block py-2 px-3 rounded-lg text-base text-gray-900 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <Link
          href="/success-stories"
          className="block w-full max-w-md px-4 py-3 rounded-xl text-lg text-gray-900 font-semibold hover:bg-blue-600 hover:text-gray-500 transition-all duration-200 transform hover:scale-[1.02]"
          onClick={toggleMenu}
        >
          Success Stories
        </Link>

        {/* Company Dropdown */}
        <div className="w-full max-w-md">
          <button
            onClick={() => toggleDropdown('company')}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 text-lg font-semibold hover:bg-blue-600 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
            <span>Company</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                activeDropdown === 'company' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out bg-white/10 rounded-lg mt-1 ${
              activeDropdown === 'company' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pl-6 py-3 space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'The Lycan Experience', href: '/lycan-experience' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block py-2 px-3 rounded-lg text-base text-gray-900 hover:bg-blue-600 hover:text-gray-500 transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Dropdown */}
        <div className="w-full max-w-md">
          <button
            onClick={() => toggleDropdown('insights')}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 text-lg font-semibold hover:bg-blue-600 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
            <span>Insights</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                activeDropdown === 'insights' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out text-gray-900 rounded-lg mt-1 ${
              activeDropdown === 'insights' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pl-6 py-3 space-y-3">
              {[
                { name: 'All Insights', href: '/insights' },
                { name: 'Blog', href: '/blog' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block py-2 px-3 rounded-lg text-base text-gray-900 hover:bg-blue-600 hover:text-gray-500 transition-all duration-200 transform hover:scale-[1.02]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6 mt-6 border-t border-white/20 flex justify-center w-full max-w-md">
          <Link
            href="/lycan-international/contact-form"
            className="px-8 py-3 bg-white text-blue-600 rounded-sm font-semibold text-lg hover:bg-blue-100 hover:scale-105 transition-all duration-200"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;