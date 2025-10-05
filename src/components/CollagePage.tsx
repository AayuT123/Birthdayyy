import React from 'react';
import { Polaroid } from './Polaroid';

const PHOTOS = [
  { src: 'https://picsum.photos/id/1011/200/200', note: 'You make even the ordinary feel extraordinary just by being with me.', noteColor: '#FF6B6B' },
  { src: 'https://picsum.photos/id/1012/200/200', note: 'With you, I’ve found not just love, but peace and home.', noteColor: '#FFD700' },
  { src: 'https://picsum.photos/id/1015/200/200', note: 'Every day with you feels like my favorite chapter of life.', noteColor: '#4ECDC4' },
  { src: 'https://picsum.photos/id/1016/200/200', note: 'Thank you for being my biggest supporter and my softest place to fall.', noteColor: '#FF6B6B' },
  { src: 'https://picsum.photos/id/1020/200/200', note: 'I love the way you see me, even on the days I don’t see myself clearly.', noteColor: '#FFD700' },
  { src: 'https://picsum.photos/id/1024/200/200', note: 'No matter what happens, you’ll always be my favorite person.', noteColor: '#4ECDC4' },
];

function randomRotation(i: number) {
  return (Math.random() * 8 - 4) + (i % 2 === 0 ? 2 : -2);
}

export const CollagePage: React.FC = () => (
  <div className="w-full h-full bg-cream flex items-center justify-center aspect-[3/4]">
    <div className="grid grid-cols-3 grid-rows-2 gap-6">
      {PHOTOS.map((photo, i) => (
        <Polaroid
          key={i}
          src={photo.src}
          note={photo.note}
          noteColor={photo.noteColor}
          rotation={randomRotation(i)}
          delay={i * 100}
        />
      ))}
    </div>
  </div>
);
