import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export default function SkillCard({ skill }) {
  const { name, category, level, description, featured } = skill;

  return (
    <div className={`group relative bg-[#11111D] border rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 ${
      featured 
        ? 'border-[#20C5E8]/40 hover:border-[#20C5E8] shadow-sm shadow-[#20C5E8]/10' 
        : 'border-[#252536] hover:border-[#20C5E8]/50 hover:bg-[#151525]'
    }`}>
      {/* Top row: Name & Star Badge if featured */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-base sm:text-lg text-[#F5F5FA] group-hover:text-[#20C5E8] transition-colors">
          {name}
        </h3>
        {featured ? (
          <span 
            title="Core focus skill"
            className="flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20 shrink-0"
          >
            <Star className="w-3 h-3 fill-amber-400" />
            <span className="hidden sm:inline text-[11px] font-medium">Core</span>
          </span>
        ) : (
          <span className="text-[11px] text-[#9999AA] bg-[#1a1a2e] px-2 py-0.5 rounded-full border border-[#252536] shrink-0">
            {level}
          </span>
        )}
      </div>

      {/* Description / Keywords */}
      <p className="text-xs sm:text-sm text-[#9999AA] leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Subtle bottom indicator */}
      <div className="mt-3 pt-2.5 border-t border-[#252536]/60 flex items-center justify-between text-[11px] text-[#9999AA]">
        <span className="capitalize text-[#20C5E8]/80 font-mono">{category}</span>
        <span className="flex items-center gap-1 text-[11px] text-[#9999AA]">
          <CheckCircle2 className="w-3 h-3 text-[#20C5E8]" />
          {level}
        </span>
      </div>
    </div>
  );
}

