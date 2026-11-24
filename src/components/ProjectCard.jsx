import React from 'react';
import { ExternalLink, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function ProjectCard({ project, onOpenDetails }) {
  const { title, number, categoryLabel, description, image, technologies, githubUrl, liveDemoUrl } = project;

  return (
    <div className="group flex flex-col bg-[#11111D] border border-[#252536] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#20C5E8]/60 hover:shadow-xl hover:shadow-cyan-950/20">
      {/* Project Thumbnail Image with Badge */}
      <div 
        className="relative aspect-video w-full overflow-hidden bg-[#0a0a14] cursor-pointer"
        onClick={() => onOpenDetails(project)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11111D] via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#11111D]/80 backdrop-blur-md border border-[#252536] text-[11px] font-semibold text-[#20C5E8]">
          {categoryLabel}
        </div>

        {/* Project Number */}
        <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-md bg-[#080812]/80 backdrop-blur-md border border-[#252536] text-[11px] font-mono text-[#9999AA]">
          {number}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
        {/* Title */}
        <div>
          <button
            onClick={() => onOpenDetails(project)}
            className="text-left group/title flex items-center justify-between w-full"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#F5F5FA] group-hover/title:text-[#20C5E8] transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#9999AA] opacity-0 group-hover/title:opacity-100 group-hover/title:text-[#20C5E8] transition-all -translate-x-1 group-hover/title:translate-x-0" />
          </button>
          <p className="mt-2 text-xs sm:text-sm text-[#9999AA] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#181829] border border-[#252536] text-[#D4D4E0]"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-[#181829] border border-[#252536] text-[#9999AA]">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions Row */}
        <div className="pt-3 border-t border-[#252536]/80 flex items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-2">
            {liveDemoUrl ? (
              <Button
                variant="outline"
                size="sm"
                href={liveDemoUrl}
                target="_blank"
                icon={ExternalLink}
              >
                Demo
              </Button>
            ) : null}
            {githubUrl ? (
              <Button
                variant="secondary"
                size="sm"
                href={githubUrl}
                target="_blank"
                icon={GithubIcon}
              >
                Code
              </Button>
            ) : null}
          </div>

          <button
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-1 text-xs text-[#20C5E8] hover:text-[#18AECF] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-[#20C5E8]/10 transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Chi tiết</span>
          </button>
        </div>
      </div>
    </div>
  );
}
