import React from 'react';

const MG6SpecComparator: React.FC = () => {
  const specs = [
    { label: "Aesthetic", val1: 40, val2: 90 },
    { label: "Durability", val1: 60, val2: 95 },
    { label: "Documentation", val1: 30, val2: 100 },
    { label: "Delivery", val1: 50, val2: 95 },
  ];

  return (
    <div className="glass-panel-ivory rounded-3xl p-6 border-rs-gold/20 flex flex-col space-y-4">
      <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2">
        <span className="text-rs-ink/60">Standard Supply</span>
        <span className="text-rs-gold">RiyadhStone®</span>
      </div>
      {specs.map(spec => (
        <div key={spec.label} className="space-y-1">
          <div className="flex justify-between text-[10px] uppercase tracking-tighter text-rs-ink">
            <span>{spec.label}</span>
          </div>
          <div className="h-1.5 w-full bg-rs-ink/5 rounded-full relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-rs-ink/20 transition-all duration-1000" 
              style={{ width: `${spec.val1}%` }} 
            />
            <div 
              className="absolute left-0 top-0 h-full bg-rs-gold transition-all duration-1000 delay-300 shadow-[0_0_8px_rgba(206,170,106,0.6)]" 
              style={{ width: `${spec.val2}%` }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MG6SpecComparator;
