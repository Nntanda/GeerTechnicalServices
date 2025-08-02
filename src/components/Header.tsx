import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/images/logo.JPEG'; // ✅ Correct import based on your path
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+256 755 593 320 | +256 787 758 585</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>geertechnicalservices@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo and business name */}
          <div className="flex items-center space-x-3">
            <Image
              src={logo} // ✅ Using the imported logo
              alt="Geer Technical Logo"
              width={50}
              height={50}
              className="rounded-md"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-800">
                Geer<span className="text-orange-500">Technical</span>
              </h1>
              <span className="text-sm text-gray-600 hidden sm:block">Services Limited</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Contact</a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-800 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium">Contact</a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+256 755 593 320 | +256 787 758 585</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>geertechnicalservices@gmail.com</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
