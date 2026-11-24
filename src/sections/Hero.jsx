import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import Button from '../components/Button';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting - subtle, not exaggerated */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#20C5E8]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Info & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11111D] border border-[#252536] text-xs font-medium text-[#20C5E8]">
            <Sparkles className="w-3.5 h-3.5 text-[#20C5E8]" />
            <span>Passerelles numériques Vietnam (PNV)</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5FA]">
              {profileData.name}
            </h1>
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#20C5E8]">
              <span>{profileData.role}</span>
              <span className="w-2 h-6 bg-[#20C5E8] animate-pulse rounded-sm hidden sm:inline-block" />
            </div>
          </div>

          {/* Tagline / Summary */}
          <p className="text-base sm:text-lg text-[#9999AA] max-w-xl leading-relaxed">
            {profileData.tagline}
          </p>

          {/* Tech Quick Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["Java Spring Boot", "React", "MySQL", "REST API", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[#11111D] border border-[#252536] text-[#D4D4E0]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href="#projects"
              icon={ArrowRight}
              iconPosition="right"
            >
              View My Projects
            </Button>
            <Button
              variant="secondary"
              size="md"
              href={profileData.contact.cvLink}
              download="Ho-Anh-Sang-CV.pdf"
              icon={Download}
            >
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="md"
              href={profileData.contact.github}
              target="_blank"
              icon={GithubIcon}
            >
              GitHub
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/60 transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/60 transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="w-10 h-10 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/60 transition-all cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Code Card Preview */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-[#11111D] border border-[#252536] rounded-2xl shadow-xl p-5 space-y-4 relative overflow-hidden group">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#252536]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#9999AA] font-mono">
                <Terminal className="w-3.5 h-3.5 text-[#20C5E8]" />
                <span>DeveloperProfile.java</span>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-1 text-[#D4D4E0]">
              <p><span className="text-purple-400">public class</span> <span className="text-[#20C5E8] font-semibold">HoAnhSang</span> &#123;</p>
              <p className="pl-4"><span className="text-purple-400">private final String</span> role = <span className="text-emerald-300">"Fullstack Developer"</span>;</p>
              <p className="pl-4"><span className="text-purple-400">private final String</span> school = <span className="text-emerald-300">"Passerelles numériques"</span>;</p>
              <p className="pl-4"><span className="text-purple-400">private String[]</span> coreStack = &#123;</p>
              <p className="pl-8 text-amber-200">"Java", "Spring Boot", "React", "MySQL"</p>
              <p className="pl-4">&#125;;</p>
              <p className="pl-4"><span className="text-purple-400">public void</span> <span className="text-blue-400">buildSolutions</span>() &#123;</p>
              <p className="pl-8 text-[#9999AA]">// Focused on practical solutions &amp; clean code</p>
              <p className="pl-8"><span className="text-[#20C5E8]">System</span>.out.<span className="text-blue-400">println</span>(<span className="text-emerald-300">"Ready to create value!"</span>);</p>
              <p className="pl-4">&#125;</p>
              <p>&#125;</p>
            </div>

            {/* Active Status footer in card */}
            <div className="pt-3 border-t border-[#252536] flex items-center justify-between text-xs text-[#9999AA]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-medium">Seeking Internship / Junior</span>
              </div>
              <span className="font-mono text-[11px]">Java 17 • React 19</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
