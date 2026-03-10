import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MG4LaserScan: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.to(lineRef.current, {
      top: '100%',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="glass-card rounded-2xl h-40 overflow-hidden relative border-gold/30">
      <div className="absolute inset-0 stone-grain opacity-20" />
      <div ref={lineRef} className="absolute top-0 left-0 w-full h-px bg-gold shadow-[0_0_10px_#CEAA6A] z-10" />
      <div className="grid grid-cols-8 gap-1 p-4 absolute inset-0 opacity-20">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gold rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="text-[10px] uppercase tracking-widest font-bold">Reality Capture</span>
      </div>
    </div>
  );
};

export default MG4LaserScan;
