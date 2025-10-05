import React from 'react';
import { HeartIcon, SwirlIcon } from './Icons';

export const PrintLetterPage: React.FC = () => (
  <div className="relative w-full h-full bg-cream flex flex-col items-center justify-center aspect-[3/4] overflow-hidden">
    {/* Static Decorative Hearts */}
    <HeartIcon className="absolute top-4 left-4" />
    <HeartIcon className="absolute top-4 right-4" />
    <HeartIcon className="absolute bottom-4 left-4" />
    <HeartIcon className="absolute bottom-4 right-4" />
    {/* Static Swirls */}
    <SwirlIcon className="absolute top-2 left-2 opacity-40" />
    <SwirlIcon className="absolute bottom-2 right-2 opacity-40" />
    {/* Letter Content */}
    <div className="flex flex-col items-center justify-center px-8 py-12">
      <div className="font-dancing-script text-2xl text-navy-deep mb-4">Dear Shivam,</div>
      <div className="font-dancing-script text-lg text-navy-deep mb-6 text-center">
        Today is all about celebrating the incredible person you are—strong, kind, loving, and endlessly inspiring. I may not be the perfect girlfriend, but I promise I’m trying every day to be better for you, and one day, I’ll be everything you deserve. I’m so proud of everything you’re doing and how hard you’re working. I know this birthday might be a bit quiet with all the studying, but trust me in the birthdays to come, we’ll make up for it with the best celebrations ever. You deserve nothing less than all the happiness in the world. I love you more than words can say—always and forever. Happy Birthday Merudoo
      </div>
      <div className="font-dancing-script text-lg text-navy-deep mb-2">With all my love,</div>
      <div className="font-pacifico text-3xl text-coral">Taylor</div>
    </div>
  </div>
);
