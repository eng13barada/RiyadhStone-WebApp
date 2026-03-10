import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MG1Props {
  className?: string;
}

const MG1TraceabilityShuffler: React.FC<MG1Props> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.mg-card');
    if (!cards) return;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cards, {
      y: (i) => i * 10,
      opacity: (i) => 1 - i * 0.3,
      scale: (i) => 1 - i * 0.05,
      stagger: {
        amount: 1,
        repeat: -1,
        yoyo: true
      }
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <div ref={containerRef} className={`relative h-32 w-full flex items-center justify-center ${className}`}>
      <div className="mg-card absolute inset-0 glass-card rounded-2xl p-4 flex items-center justify-between border-gold/30">
        <span className="text-xs font-bold uppercase tracking-widest">Source Lot</span>
        <span className="text-[10px] text-muted-text">RS-LAT-882</span>
      </div>
      <div className="mg-card absolute inset-0 glass-card rounded-2xl p-4 flex items-center justify-between border-gold/20 translate-y-2 scale-95 opacity-70">
        <span className="text-xs font-bold uppercase tracking-widest">Production Batch</span>
        <span className="text-[10px] text-muted-text">BATCH-4401</span>
      </div>
      <div className="mg-card absolute inset-0 glass-card rounded-2xl p-4 flex items-center justify-between border-gold/10 translate-y-4 scale-90 opacity-40">
        <span className="text-xs font-bold uppercase tracking-widest">Delivery Pallet</span>
        <span className="text-[10px] text-muted-text">PALLET-A9</span>
      </div>
    </div>
  );
};

export default MG1TraceabilityShuffler;
