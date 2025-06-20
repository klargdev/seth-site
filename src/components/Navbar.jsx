import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../assets/images/png/5.jpg"; // 

const navigation = [
  { name: ' Home', to: '/' },
  { name: 'Biography & Tribute', to: '/tribute' },
  { name: 'Program', to: '/program' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Last Respect', to: '/guestbook' },
  { name: 'Donate', to: '/donate' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false); // Close menu when scrolling
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#040303] bg-opacity-90 text-white shadow-lg fixed w-full top-0 z-50 backdrop-blur-md h-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white">
  <img src={logo} alt="Memorial Logo" className="w-8 h-8" />
  <span>Memorial</span>
</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition duration-300 ${
                    location.pathname === item.to
                      ? 'text-white border-[#B3541E]'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-[#B3541E]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="p-3 bg-[#040303] bg-opacity-90 text-white rounded-full shadow-lg hover:bg-[#461111] transition"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-8 w-8 text-white brightness-200" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-8 w-8 text-white brightness-200" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Floating Menu (Bigger + Hover Effect) */}
        {isMenuOpen && (
          <div className="absolute top-16 right-5 w-64 bg-[#040303] bg-opacity-95 rounded-lg shadow-lg border border-gray-700 md:hidden">
            <div className="py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block px-6 py-4 text-base font-medium rounded-lg transition duration-300 ${
                    location.pathname === item.to
                      ? 'bg-[#B3541E] text-white' // Active Page Color
                      : 'text-gray-300 hover:bg-[#B3541E] hover:text-white' // Hover Color
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ADD THIS DIV TO PUSH PAGE CONTENT DOWN */}
      <div className="pt-16"></div>
    </>
  );
}
