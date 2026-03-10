import React from 'react';

const MG3CursorProtocol: React.FC = () => {
  return (
    <div className="glass-card rounded-3xl p-6 border-gold/20 overflow-hidden relative group">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className={`h-4 rounded-sm border border-gold/10 ${i % 3 === 0 ? 'bg-gold/20' : 'bg-transparent'}`} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-muted-text mb-1">Weekly Plan</span>
          <span className="text-xs font-bold">Protocol Active</span>
        </div>
        <button className="bg-ink text-ivory text-[10px] px-3 py-1 rounded-full uppercase tracking-widest hover:bg-gold transition-colors">
          Save
        </button>
      </div>
      
      {/* Moving cursor dot */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gold/40 blur-xl rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
    </div>
  );
};

export default MG3CursorProtocol;
