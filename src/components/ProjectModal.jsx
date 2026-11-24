import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, Target, CheckCircle2, AlertTriangle, Cpu, Wrench } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { details } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#11111D] border border-[#252536] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#F5F5FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#252536] bg-[#0d0d17]/80 shrink-0">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#20C5E8] bg-[#20C5E8]/10 px-2.5 py-0.5 rounded-full border border-[#20C5E8]/30">
                {project.number}
              </span>
              <span className="text-xs text-[#9999AA] uppercase tracking-wider font-semibold">
                {project.categoryLabel}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5FA]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#9999AA] hover:text-[#F5F5FA] hover:bg-[#1f1f33] border border-transparent hover:border-[#252536] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 divide-y divide-[#252536]">
          {/* 1. Project Overview */}
          <div className="space-y-3 pt-0">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <Target className="w-5 h-5" />
              1. Project Overview
            </h3>
            <p className="text-sm sm:text-base text-[#D4D4E0] leading-relaxed">
              {details.overview}
            </p>
          </div>

          {/* 2. Problem & Solution */}
          <div className="space-y-4 pt-6">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <AlertTriangle className="w-5 h-5" />
              2. Problem &amp; Solution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#171727] border border-[#252536]/80 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">The Problem</span>
                <p className="text-sm text-[#9999AA] leading-relaxed">
                  {details.problemAndSolution.problem}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#171727] border border-[#252536]/80 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">The Solution</span>
                <p className="text-sm text-[#9999AA] leading-relaxed">
                  {details.problemAndSolution.solution}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Main Features */}
          <div className="space-y-3 pt-6">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <CheckCircle2 className="w-5 h-5" />
              3. Main Features
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {details.mainFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#D4D4E0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20C5E8] mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Architecture */}
          <div className="space-y-3 pt-6">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <Layers className="w-5 h-5" />
              4. Architecture
            </h3>
            <div className="p-4 rounded-xl bg-[#0c0d18] border border-[#252536] text-sm text-[#D4D4E0] leading-relaxed">
              {details.architecture}
            </div>
          </div>

          {/* 5. Technologies */}
          <div className="space-y-3 pt-6">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <Cpu className="w-5 h-5" />
              5. Technologies &amp; Stack Breakdown
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {Object.entries(details.techStackDetails).map(([key, val]) => (
                <div key={key} className="p-3.5 rounded-xl bg-[#171727] border border-[#252536]">
                  <span className="text-[11px] font-mono uppercase text-[#20C5E8] font-bold block mb-1">
                    {key}
                  </span>
                  <span className="text-[#F5F5FA]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. My Responsibilities */}
          <div className="space-y-3 pt-6">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <Wrench className="w-5 h-5" />
              6. My Responsibilities
            </h3>
            <ul className="space-y-2">
              {details.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#D4D4E0]">
                  <span className="text-[#20C5E8] font-mono text-xs font-bold mt-0.5">0{idx + 1}.</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 7. Challenges & Solutions */}
          <div className="space-y-4 pt-6">
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#20C5E8]">
              <AlertTriangle className="w-5 h-5" />
              7. Challenges &amp; Technical Solutions
            </h3>
            <div className="space-y-3">
              {details.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#171727] border border-[#252536] space-y-2">
                  <div className="flex items-start gap-2 text-sm font-semibold text-rose-300">
                    <span className="text-xs bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 shrink-0">Thách thức</span>
                    <span>{item.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-[#9999AA] pl-1">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">Giải pháp</span>
                    <span className="text-[#D4D4E0]">{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer: 8. GitHub & 9. Live Demo */}
        <div className="p-4 sm:p-5 border-t border-[#252536] bg-[#0c0d18] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                icon={GithubIcon}
              >
                8. GitHub Repository
              </Button>
            )}
            {project.liveDemoUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveDemoUrl}
                target="_blank"
                icon={ExternalLink}
              >
                9. Live Demo
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
