import React from 'react';

const MG7MaterialLayer: React.FC = () => {
  const layers = ["Texture", "Finish", "Tolerance", "Packing", "Traceability"];
  
  return (
    <div className="flex flex-col space-y-1">
      {layers.map((layer, i) => (
        <div 
          key={layer}
          className="glass-card py-2 px-4 rounded-xl border-gold/20 flex items-center justify-between hover:translate-x-2 transition-transform cursor-pointer group"
          style={{ opacity: 1 - i * 0.15 }}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">{layer}</span>
          <div className="w-4 h-px bg-gold group-hover:w-8 transition-all" />
        </div>
      ))}
    </div>
  );
};

export default MG7MaterialLayer;
