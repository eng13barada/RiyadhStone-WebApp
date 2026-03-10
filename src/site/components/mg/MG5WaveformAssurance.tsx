import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MG5WaveformAssurance: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    // Simple pulse effect
    gsap.to(pathRef.current, {
      opacity: 0.3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 border-gold/20 flex flex-col items-center justify-center space-y-4">
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          ref={pathRef}
          d="M0 20C20 20 20 0 40 0C60 0 60 40 80 40C100 40 100 20 120 20" 
          stroke="#CEAA6A" 
          strokeWidth="2" 
        />
      </svg>
      <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Assurance Signal</span>
    </div>
  );
};

export default MG5WaveformAssurance;
