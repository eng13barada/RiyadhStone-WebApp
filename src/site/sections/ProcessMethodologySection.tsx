import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, Download, Eye, Layers, Settings, ShieldCheck, CalendarClock, Handshake, Network, CheckCircle2, LifeBuoy } from 'lucide-react';
import { processSteps } from '../data/processMethodology';

gsap.registerPlugin(ScrollTrigger);

const ProcessMethodologySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMouseY(e.clientY - rect.top);
    }
  };

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Title Entrance
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Cards Stagger
      gsap.from('.methodology-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="methodology" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 bg-gradient-to-b from-[#1E1A17] to-[#12100E]"
    >
      {/* Decorative overlays clipped individually so they don't break sticky */}
      <div className="absolute inset-0 rs-noise-overlay opacity-[0.03] z-0 pointer-events-none [overflow:hidden]" />
      <div className="absolute inset-0 rs-stone-grain opacity-[0.4] z-0 pointer-events-none [overflow:hidden]" />
      <div className="rs-grid-overlay opacity-10" />

      {/* Dynamic Golden Laser Line */}
      <div 
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CEAA6A] to-transparent pointer-events-none transition-all duration-300 ease-out z-0"
        style={{ top: mouseY, opacity: 0.2, boxShadow: '0 0 20px 2px rgba(206,170,106,0.3)' }}
      />

      <div className="container mx-auto relative z-10">
        {/* CRITICAL: items-start ensures the flex container doesn't stretch children,
            which allows position:sticky to activate on the left column */}
        <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-20 lg:items-start">
          
          {/* LEFT COLUMN: Sticky - self-start ensures it stays at its natural height */}
          <div className="lg:w-4/12 lg:sticky lg:top-28 self-start relative z-20">
            <div ref={titleRef} className="flex flex-col justify-between min-h-[calc(100vh-10rem)] py-8 lg:py-0">
              {/* TOP BLOCK */}
              <div>
                <span className="text-[#CEAA6A] font-[800] tracking-[0.2em] text-sm uppercase block mb-6">Engineering Methodology</span>
                <h2 className="text-H2 font-[800] tracking-tight text-[#FCFBEE] mb-8 leading-[1.1]">
                  Our Process for <br />
                  <span className="text-[#CEAA6A]">Validated Delivery.</span>
                </h2>
                <p className="text-[#FCFBEE]/60 text-lg leading-relaxed mb-12 font-[500] max-w-md">
                  We engineer clarity through a structured 10-step progression. Natural material is not the risk—undocumented expectations are.
                </p>
                <div className="mb-4">
                  <a 
                    href="/downloads/RS-Engineering-Methodology-Manifest.pdf" 
                    download
                    className="inline-flex items-center gap-4 bg-transparent text-[#CEAA6A]/70 text-[14px] font-[500] uppercase tracking-widest hover:text-[#CEAA6A] transition-colors"
                  >
                    <Download size={18} /> Download Technical Manifest
                  </a>
                </div>
              </div>

              {/* BOTTOM BLOCK (Same Typography style) */}
              <div className="w-full flex flex-col mt-auto mb-8 pt-20 border-t border-white/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-[800] tracking-tight text-[#FCFBEE] mb-6 leading-[1.1]">
                  Join the 10-Step <br />
                  <span className="text-[#CEAA6A]">Delivery Protocol.</span>
                </h2>
                <p className="text-[#FCFBEE]/60 text-lg leading-relaxed mb-12 font-[500] max-w-md">
                  Establish a clear baseline for your architectural intent. Our engineered approach removes ambiguity, mitigates risk, and guarantees documented outputs you can trust.
                </p>
                <button 
                  onClick={() => {
                    const stepEl = document.getElementById('step-01');
                    if (stepEl) {
                      stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      const expandBtn = stepEl.querySelector('button[aria-label="Expand details"]') as HTMLButtonElement | null;
                      if (expandBtn) expandBtn.click();
                    }
                  }}
                  className="w-full py-4 rounded-none bg-[#CEAA6A] text-[#12100E] font-[800] text-[15px] uppercase tracking-widest hover:bg-[#E2C792] transition-colors shadow-[0_0_20px_rgba(206,170,106,0.2)]"
                >
                  Start Your Process
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Timeline Container */}
          <div 
            ref={cardsRef} 
            className="lg:w-8/12 relative flex flex-col pb-24 lg:pt-8"
          >
            {/* Timeline Vertical Axis */}
            <div className="absolute left-[23px] top-[3.5rem] bottom-[8rem] w-[1px] bg-gradient-to-b from-[#CEAA6A]/40 via-[#CEAA6A]/20 to-transparent z-0 hidden md:block" />

            <div className="flex flex-col gap-12 relative w-full pr-2">
              {processSteps.map((step, index) => (
                <MethodologyCard key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component to handle individual state
const MethodologyCard = ({ step, index }: { step: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Icon mapping based on step number
  const renderIcon = () => {
    const icons = [Eye, Layers, Settings, ShieldCheck, CalendarClock, Handshake, Network, CheckCircle2, LifeBuoy];
    const Icon = icons[index % icons.length];
    return <Icon size={28} strokeWidth={2} className="text-[#CEAA6A]" />;
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      id={step.id}
      className="methodology-card relative flex items-start gap-4 md:gap-8 justify-end"
    >
      {/* Timeline Node - strictly aligned, separated from card */}
      <div className="hidden md:flex flex-col items-center mt-6 relative z-10 shrink-0">
        <div className="w-12 h-12 shrink-0 rounded-none border border-[#CEAA6A]/30 flex items-center justify-center bg-[#1E1A17] shadow-[0_0_20px_rgba(20,16,14,0.8)] z-10">
          <span className="text-[#CEAA6A] font-[800] text-lg leading-none opacity-80 uppercase font-mono">
            {step.number}
          </span>
        </div>
        {/* Horizontal connecting line to card */}
        <div className="absolute top-1/2 left-[100%] w-8 h-[1px] bg-[#CEAA6A]/20 -translate-y-1/2" />
      </div>

      {/* Container holding front */}
      <div className={`relative transition-all duration-700 w-full md:w-[calc(100%-8rem)]`}>
        
        {/* FRONT FACE */}
        <div className="bg-[#1E1A17] rounded-none border border-[#CEAA6A]/20 p-2 shadow-2xl glass-panel-dark flex flex-col items-stretch h-full w-full">
          
          <div className="p-6 md:p-8 relative flex-1">
            {/* Title / Add Button Area */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/5 pb-8 mb-8 mt-2 relative z-10">
              <div className="max-w-2xl flex items-start gap-6">
                 {/* Medium Size Icon Next to Title */}
                 <div className="p-4 rounded-none shrink-0 bg-[#CEAA6A]/10 border border-[#CEAA6A]/20 shadow-inner flex items-center justify-center mt-1">
                   {renderIcon()}
                 </div>
                 <div>
                   <h3 className="text-xl md:text-2xl font-[800] text-[#FCFBEE] tracking-tight leading-snug mb-3">
                     {step.title}
                   </h3>
                   <p className="text-[#FCFBEE]/60 font-[500] text-sm md:text-base leading-relaxed">
                     {step.summary}
                   </p>
                 </div>
              </div>
            </div>

            {/* Expandable Content Area */}
            <div 
              ref={contentRef}
              className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-[max-height]"
              style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0px', opacity: isExpanded ? 1 : 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pb-8">
                <div>
                  <h4 className="text-[#CEAA6A] font-[800] text-[15px] uppercase tracking-[0.2em] mb-4">Core Inputs & Actions</h4>
                  <ul className="space-y-3">
                    {step.expandedWhatHappens.map((item: string, i: number) => (
                      <li key={`in-${i}`} className="text-[#FCFBEE]/70 text-sm font-[500] flex items-start gap-3">
                        <span className="text-[#CEAA6A] mt-1 opacity-60 text-lg leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#CEAA6A] font-[800] text-[15px] uppercase tracking-[0.2em] mb-4">Validated Outputs</h4>
                  <ul className="space-y-3">
                    {step.expandedOutputs.map((item: string, i: number) => (
                      <li key={`out-${i}`} className="text-[#FCFBEE]/70 text-sm font-[500] flex items-start gap-3">
                        <span className="text-[#CEAA6A] mt-1 opacity-60 text-lg leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PLUS ICON IN BOTTOM RIGHT AS REQUESTED */}
            <button 
              onClick={handleToggle}
              className="absolute right-6 bottom-6 w-12 h-12 rounded-none flex items-center justify-center bg-[#1E1A17] hover:bg-[#24201C] border border-[#CEAA6A]/30 text-[#CEAA6A] hover:border-[#CEAA6A] transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-[#CEAA6A]/50 shadow-inner group"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isExpanded ? 'rotate-45 scale-90' : 'rotate-0 scale-100'}`}>
                <Plus size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessMethodologySection;
