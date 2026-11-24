import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#11111D] border border-[#252536] text-[#20C5E8] text-xs font-medium tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#20C5E8]"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5FA] relative">
        {title}
      </h2>

      {/* Decorative subtle cyan underline bar */}
      <div className={`h-1 w-12 bg-[#20C5E8] rounded-full mt-3 mb-4 ${align === 'center' ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className="text-sm sm:text-base text-[#9999AA] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

