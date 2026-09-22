import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  const primaryText = isDark ? '#ffffff' : '#211a1a';
  const subtitleText = isDark ? '#fed488' : '#775a19';
  const circleColor = isDark ? '#e9c176' : '#c5a059';

  const MonogramCircle = () => (
    <div className="relative flex items-center justify-center shrink-0 w-11 h-11 md:w-12 md:h-12">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(197,160,89,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dashed golden ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={circleColor}
          strokeWidth="2.5"
          strokeDasharray="4 3"
        />
        {/* Inner thin border */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={circleColor}
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        
        {/* Stylized monogram DR / JR */}
        {/* D curve */}
        <path
          d="M 36 28 L 48 28 C 60 28 66 36 66 45 C 66 54 60 62 48 62 L 36 62 Z"
          stroke={primaryText}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* R diagonal leg */}
        <path
          d="M 44 48 L 64 74"
          stroke={circleColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Vertical stem */}
        <path
          d="M 36 28 L 36 74"
          stroke={primaryText}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Small gold sparkle/node */}
        <circle cx="64" cy="74" r="2.5" fill={circleColor} />
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <MonogramCircle />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <MonogramCircle />
        <div className="flex flex-col">
          <span
            className="font-serif text-lg md:text-xl font-medium tracking-tight"
            style={{ color: primaryText }}
          >
            Dra. Juliene Ribeiro
          </span>
          <span
            className="text-[10px] md:text-xs font-semibold tracking-[0.16em] uppercase"
            style={{ color: subtitleText }}
          >
            Harmonização Facial • Método Singullaris®
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      <MonogramCircle />
      <div className="flex flex-col">
        <span
          className="font-serif text-lg md:text-xl font-medium tracking-tight leading-tight group-hover:text-primary transition-colors"
          style={{ color: primaryText }}
        >
          Dra. Juliene Ribeiro
        </span>
        <span
          className="text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase -mt-0.5"
          style={{ color: subtitleText }}
        >
          Harmonização Facial • Método Singullaris®
        </span>
      </div>
    </div>
  );
};
