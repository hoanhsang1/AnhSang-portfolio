import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080812] border-t border-[#252536] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-base font-bold tracking-tight text-[#F5F5FA]">
            {profileData.name}
          </div>
          <p className="text-xs text-[#9999AA]">
            Fullstack Developer • Java Spring Boot &amp; React
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/50 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/50 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="w-9 h-9 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/50 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/50 transition-colors ml-2 cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#9999AA] text-center md:text-right">
          © {new Date().getFullYear()} Hồ Anh Sang. Built with React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
