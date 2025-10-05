import React from 'react';

interface BalloonProps {
  color: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Balloon: React.FC<BalloonProps> = ({ color, className, style }) => (
  <div
    className={`absolute z-10 animate-balloon ${className ?? ''}`}
    style={style}
  >
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-16">
      <ellipse cx="20" cy="25" rx="16" ry="22" fill={color} />
      <path d="M20 47c0 5 0 10 0 10" stroke="#0a192f" strokeWidth="2" />
      <path d="M20 47c-3 2-6 2-8 0" stroke="#0a192f" strokeWidth="2" />
      <path d="M20 47c3 2 6 2 8 0" stroke="#0a192f" strokeWidth="2" />
    </svg>
    <style>{`
      .animate-balloon {
        animation: balloon-float 4s ease-in-out infinite alternate;
      }
      @keyframes balloon-float {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-16px) scale(1.05); }
        100% { transform: translateY(0) scale(1); }
      }
    `}</style>
  </div>
);
