import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-5 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-2xl sm:rounded-full border px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg backdrop-blur-md ${
        isScrolled 
          ? 'bg-[#11111D]/90 border-[#252536] shadow-black/40' 
          : 'bg-[#11111D]/70 border-[#252536]/80'
      }`}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#F5F5FA] hover:text-[#20C5E8] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#20C5E8]/10 border border-[#20C5E8]/30 flex items-center justify-center text-[#20C5E8] font-mono text-sm font-semibold">
            HS
          </div>
          <span className="hidden xs:inline">Hồ Anh Sang</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#20C5E8] bg-[#20C5E8]/10 font-semibold'
                    : 'text-[#9999AA] hover:text-[#F5F5FA] hover:bg-[#1c1c2e]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button: Download CV */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.contact.cvLink}
            download="Ho-Anh-Sang-CV.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#20C5E8]/10 text-[#20C5E8] border border-[#20C5E8]/40 hover:bg-[#20C5E8] hover:text-[#080812] text-xs font-semibold transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#9999AA] hover:text-[#F5F5FA] hover:bg-[#1a1a2b] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed top-20 left-4 right-4 bg-[#11111D] border border-[#252536] rounded-2xl p-4 shadow-2xl flex flex-col gap-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#20C5E8] bg-[#20C5E8]/10 font-semibold'
                    : 'text-[#9999AA] hover:text-[#F5F5FA] hover:bg-[#1c1c2e]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#252536] flex items-center justify-between">
            <a
              href={profileData.contact.cvLink}
              download="Ho-Anh-Sang-CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#20C5E8] text-[#080812] font-semibold text-sm hover:bg-[#18AECF] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
