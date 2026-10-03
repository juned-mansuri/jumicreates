import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-xs'
          : 'bg-gradient-to-b from-black/80 via-black/35 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo with Actual Artwork */}
        <a
          href="#"
          aria-label="JUMI Creates Home"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/20 shadow-xs flex-shrink-0 bg-brand-charcoal transform group-hover:scale-105 transition-transform duration-200">
            <img
              src="/logo.jpg"
              alt="JUMI Creates Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black text-xl sm:text-2xl tracking-tighter transition-colors ${
                scrolled ? 'text-brand-black' : 'text-white'
              }`}
            >
              JUMI
            </span>
            <span
              className={`font-bold text-xs sm:text-sm tracking-widest hidden sm:inline transition-colors ${
                scrolled ? 'text-brand-black/60' : 'text-white/70'
              }`}
            >
              CREATES
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-lime inline-block transform group-hover:scale-125 transition-transform duration-200" />
          </div>
        </a>

        {/* Center Floating Pill Navigation (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-gray-100/90 border-gray-200 shadow-xs'
              : 'bg-white/10 backdrop-blur-xl border-white/20 shadow-xl'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider transition-colors ${
                scrolled
                  ? 'text-brand-black/75 hover:text-brand-black hover:bg-gray-200'
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action CTA (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-brand-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-transform active:scale-95"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 arrow-rotate" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border focus:outline-none transition-colors ${
            scrolled
              ? 'bg-gray-100 border-gray-200 text-brand-black'
              : 'bg-black/50 backdrop-blur-md border-white/20 text-white'
          }`}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-5 bg-brand-charcoal text-white rounded-3xl border border-white/20 shadow-2xl flex flex-col gap-3 z-50">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[10px] font-bold tracking-widest text-brand-lime uppercase font-mono">
                NAVIGATION
              </span>
              <span className="text-[10px] text-gray-400">JUMI CREATES</span>
            </div>
            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-extrabold tracking-tight px-4 py-2.5 rounded-2xl text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-brand-black font-bold text-sm uppercase tracking-wider py-3 rounded-full shadow-sm transition-all mt-2"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
