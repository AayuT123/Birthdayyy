import React from 'react';

// Birthday Cake SVG
export const BirthdayCakeIcon: React.FC = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-40 mx-auto">
    {/* Cake tiers */}
    <rect x="40" y="160" width="120" height="30" rx="15" fill="#FFD700" />
    <rect x="55" y="120" width="90" height="40" rx="15" fill="#4ECDC4" />
    <rect x="70" y="80" width="60" height="40" rx="15" fill="#FF6B6B" />
    {/* Candles */}
    <rect x="85" y="60" width="6" height="20" rx="3" fill="#0a192f" />
    <rect x="109" y="60" width="6" height="20" rx="3" fill="#0a192f" />
    <rect x="97" y="55" width="6" height="25" rx="3" fill="#0a192f" />
    {/* Candle flames with pulse animation */}
    <g className="animate-flame">
      <ellipse cx="88" cy="60" rx="4" ry="7" fill="#FFD700" />
      <ellipse cx="112" cy="60" rx="4" ry="7" fill="#FFD700" />
      <ellipse cx="100" cy="55" rx="4" ry="7" fill="#FFD700" />
    </g>
  </svg>
);

// Heart SVG
export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 29s-13-8.35-13-16.5A7.5 7.5 0 0 1 16 5a7.5 7.5 0 0 1 13 7.5C29 20.65 16 29 16 29z" fill="#FF6B6B" />
  </svg>
);

// Swirl SVG
export const SwirlIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 30c10-20 50-20 60 0" stroke="#FFD700" strokeWidth="3" fill="none" />
  </svg>
);

// Right Arrow SVG
export const RightArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
