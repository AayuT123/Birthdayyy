import React from 'react';
import { BirthdayCakeIcon, RightArrowIcon } from './Icons';
import { Confetti } from './Confetti';
import { Balloon } from './Balloon';

export const CoverPage: React.FC = () => (
  <div className="relative w-full h-full bg-cream flex flex-col items-center justify-center aspect-[3/4] overflow-hidden">
    <Confetti />
    {/* Balloons */}
    <Balloon color="#FF6B6B" className="top-4 right-8" style={{ zIndex: 2 }} />
    <Balloon color="#4ECDC4" className="top-1/3 left-4" style={{ zIndex: 2 }} />
    <Balloon color="#FFD700" className="bottom-8 right-12" style={{ zIndex: 2 }} />
    {/* Main Text */}
    <div className="flex flex-col items-center justify-center mt-12">
  <h1 className="font-pacifico text-4xl text-navy-deep mb-2 drop-shadow-lg">Happy Birthday</h1>
  <h2 className="font-pacifico text-6xl text-coral mb-6 drop-shadow-lg">Shivam</h2>
      <BirthdayCakeIcon />
    </div>
    {/* Footer Hint */}
    <div className="absolute bottom-6 left-0 w-full flex items-center justify-center gap-2 text-lg font-dancing-script text-navy-deep">
      Turn the page to see more!
      <RightArrowIcon className="w-6 h-6" />
    </div>
  </div>
);
