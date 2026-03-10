import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';

const MG8ApprovalPack: React.FC = () => {
  const items = ["TDS", "Samples Log", "Mockup Protocol", "BOQ Notes", "ITP", "Delivery Checklist"];
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedCount(prev => (prev + 1) % (items.length + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="glass-card rounded-[2.5rem] p-8 border-gold/30 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />
      <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-gold">Approval Pack Builder</h4>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={item} className={`flex items-center space-x-3 transition-all duration-500 ${i < checkedCount ? 'opacity-100 translate-x-1' : 'opacity-40'}`}>
            <div className={`w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center ${i < checkedCount ? 'bg-gold' : 'bg-transparent'}`}>
              {i < checkedCount && <Check size={10} className="text-ink" />}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-gold/10 flex justify-between items-center text-[10px] uppercase tracking-widest">
        <span className="text-muted-text">Status</span>
        <span className={checkedCount === items.length ? 'text-gold' : ''}>
          {checkedCount === items.length ? 'Ready for Handover' : 'Assembling...'}
        </span>
      </div>
    </div>
  );
};

export default MG8ApprovalPack;
