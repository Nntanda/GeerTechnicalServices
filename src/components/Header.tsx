import React, { useState } from 'react';
import logo from '/logo.jpeg';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden items-center justify-end border-b border-slate-100 py-2.5 text-xs font-medium tracking-wide text-slate-500 md:flex">
          <div className="flex items-center gap-6">
            <a href="tel:+256755593320" className="flex items-center gap-2 transition-colors hover:text-blue-800">
              <Phone className="h-3.5 w-3.5 text-orange-500" />
              <span>+256 755 593 320 | +256 787 758 585</span>
            </a>
            <div className="flex items-center gap-2">
              <span>P.O. Box 902190</span>
            </div>
            <a href="mailto:geertechnicalservices@gmail.com" className="flex items-center gap-2 transition-colors hover:text-blue-800">
              <Mail className="h-3.5 w-3.5 text-orange-500" />
              <span>geertechnicalservices@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-3.5">
          {/* Logo and business name */}
          <a href="#home" className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500">
            <img
              src={logo}
              alt="Geer Technical Logo"
              width={48}
              height={48}
              className="rounded-xl object-cover shadow-sm"
            />
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                Geer<span className="text-orange-500">Technical</span>
              </h1>
              <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">Services Limited</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            <a href="#home" className="text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600">Home</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600">Services</a>
            <a href="#projects" className="text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600">Projects</a>
            <a href="#community" className="text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600">Community</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600">About</a>
            <a href="#contact" className="rounded-full bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600">Contact Us</a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:border-orange-300 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-slate-100 pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ['Home', '#home'],
                ['Services', '#services'],
                ['Projects', '#projects'],
                ['Community', '#community'],
                ['About', '#about'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  {label}
                </a>
              ))}
              <div className="mt-3 space-y-2 border-t border-slate-100 pt-4">
                <a href="tel:+256755593320" className="flex items-center gap-2 text-sm text-slate-500">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>+256 755 593 320 | +256 787 758 585</span>
                </a>
                <a href="mailto:geertechnicalservices@gmail.com" className="flex items-center gap-2 text-sm text-slate-500">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>geertechnicalservices@gmail.com</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
