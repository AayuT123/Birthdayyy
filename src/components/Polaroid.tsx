import React from 'react';

interface PolaroidProps {
  src: string;
  note: string;
  noteColor: string;
  rotation: number;
  delay: number;
}

export const Polaroid: React.FC<PolaroidProps> = ({ src, note, noteColor, rotation, delay }) => (
  <div
    className="relative flex flex-col items-center shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    style={{
      transform: `rotate(${rotation}deg)`,
      animation: `polaroid-in 0.7s cubic-bezier(.68,-0.55,.27,1.55) both`,
      animationDelay: `${delay}ms`,
    }}
  >
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden" style={{ width: 120, height: 140 }}>
      <img
        src={src}
        alt="Memory"
        className="w-full h-24 object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
      <div className="w-full h-16 flex items-center justify-center">
        <span
          className="font-dancing-script text-sm text-center px-2"
          style={{ color: noteColor }}
        >
          {note}
        </span>
      </div>
    </div>
    <style>{`
      @keyframes polaroid-in {
        0% { opacity: 0; transform: scale(0.8) rotate(${rotation}deg); }
        100% { opacity: 1; transform: scale(1) rotate(${rotation}deg); }
      }
    `}</style>
  </div>
);
