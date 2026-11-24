import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  download,
  target,
  rel,
  className = '',
  disabled = false,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080812] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 gap-2",
    lg: "px-6 py-3 text-base gap-2.5"
  };

  const variants = {
    primary: "bg-[#20C5E8] text-[#080812] font-semibold hover:bg-[#18AECF] shadow-sm shadow-[#20C5E8]/20 hover:shadow-[#20C5E8]/40 focus:ring-[#20C5E8]",
    secondary: "bg-[#11111D] text-[#F5F5FA] border border-[#252536] hover:border-[#20C5E8]/60 hover:bg-[#171727] focus:ring-[#20C5E8]",
    outline: "bg-transparent text-[#20C5E8] border border-[#20C5E8]/50 hover:bg-[#20C5E8]/10 hover:border-[#20C5E8] focus:ring-[#20C5E8]",
    ghost: "bg-transparent text-[#9999AA] hover:text-[#F5F5FA] hover:bg-[#11111D] border border-transparent"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}

