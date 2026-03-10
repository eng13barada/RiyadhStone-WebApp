import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, ShieldCheck, Clock, HardHat, Layers, Compass, Ruler, Palette, ChevronRight, Zap, Target, Binary, Plus, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, Badge, Button } from '../components/ui';
import Reveal from '../components/motion/Reveal';
import { Link } from 'react-router-dom';
import AuthPopup from '../components/ui/AuthPopup';
import { getCardAsset } from '../data/cardAssets';

// --- TYPES & DATA ---

interface ValueProp {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const valueProps: ValueProp[] = [
  { 
    title: "Outcome over Material", 
    desc: "We define the result: interface behavior, finish intent, and acceptance logic.",
    icon: <Target size={28} />
  },
  { 
    title: "Engineering Validation", 
    desc: "We align assumptions with deliverables: samples, mockups, and test packs.",
    icon: <Binary size={28} />
  },
  { 
    title: "Documentation Discipline", 
    desc: "Registers, revisions, and structured packs reduce approval friction.",
    icon: <FileText size={28} />
  },
  { 
    title: "Quality + Traceability", 
    desc: "Inspection gates and traceability-ready labeling support accountability.",
    icon: <ShieldCheck size={28} />
  },
  { 
    title: "Schedule Alignment", 
    desc: "Production and delivery are mapped to the project rhythm.",
    icon: <Clock size={28} />
  },
  { 
    title: "Integrated HSE", 
    desc: "Safety and resource responsibility are integrated into operations.",
    icon: <HardHat size={28} />
  }
];

interface SystemTile {
  id: string;
  label: string;
  name: string;
  desc: string;
  chips: string[];
  gridArea: string;
}

const systems: SystemTile[] = [
  { id: 'riyadex', label: 'EXTERIOR CLADDING', name: 'RIYADEX™', desc: 'Advanced mechanical fixing systems for ventilated stone facades. Engineered to withstand extreme thermal expansion.', chips: ['Mechanical', 'AISI 316'], gridArea: 'lg:col-span-2 lg:row-span-2' },
  { id: 'riyadfloor', label: 'HARDSCAPE', name: 'RIYADFLOOR™', desc: 'Heavy-duty pedestrian and vehicular paving solutions featuring slip-resistant finishes.', chips: ['Compressive', 'Slip-Resistant'], gridArea: 'lg:col-span-1 lg:row-span-2' },
  { id: 'riyadciv', label: 'PUBLIC REALM', name: 'RIYADCIV™', desc: 'Engineered curbing and highway boundary systems designed for longevity.', chips: ['Infrastructure', 'Boundary'], gridArea: 'lg:col-span-1 lg:row-span-1' },
  { id: 'riyadurb', label: 'URBAN OBJECTS', name: 'RIYADURB™', desc: 'Monolithic stone benches and planters blending ergonomic design with natural textures.', chips: ['Monolithic', 'Bespoke'], gridArea: 'lg:col-span-1 lg:row-span-1' },
  { id: 'riyadstep', label: 'VERTICAL FLOW', name: 'RIYADSTEP™', desc: 'Custom fabricated staircases with integrated anti-slip grooves and structural reinforcement.', chips: ['Custom Fab', 'Anti-Slip'], gridArea: 'lg:col-span-1 lg:row-span-2' },
  { id: 'riyadraw', label: 'RAW MATERIAL', name: 'RIYADRAW™', desc: 'Premium block and slab supply. Direct from Riyadh quarries for bespoke fabrication.', chips: ['LIME', 'SAND'], gridArea: 'lg:col-span-1 lg:row-span-2' },
  { id: 'riyadart', label: 'BESPOKE ART', name: 'RIYADART™', desc: 'Intricate CNC cut patterns and bespoke artistic elements precision-engineered from premium stone.', chips: ['CNC', 'Artistic'], gridArea: 'lg:col-span-2 lg:row-span-2' },
];

// (Wizard data removed and consolidated into products page link)

const RS1UnifiedSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Magic background scanline
      gsap.to('.magic-scan-line', {
        top: '100%',
        duration: 12,
        repeat: -1,
        ease: 'none',
      });

      // Staggered reveals for cards
      gsap.from('.magical-card', {
        scrollTrigger: {
          trigger: '.magical-cards-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleRequestConsultation = () => {
    setIsAuthOpen(true);
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-8 lg:py-16 bg-[#FCFBEE] overflow-hidden font-manrope selection:bg-[#CEAA6A]/30"
      data-theme="light"
    >
      <AuthPopup 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        title="Protocol Submission"
        onSuccess={() => console.log('Consultation requested')}
      />

      {/* CREATIVE BACKGROUND INSTRUMENT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Technical Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4E3E2F 2px, transparent 2px),
              linear-gradient(to bottom, #4E3E2F 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Major Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #CEAA6A 3px, transparent 3px),
              linear-gradient(to bottom, #CEAA6A 3px, transparent 3px)
            `,
            backgroundSize: '300px 300px',
          }}
        />
        <div className="magic-scan-line absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CEAA6A]/30 to-transparent z-10" />
      </div>
      
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-radial-gradient from-[#CEAA6A]/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[70vw] h-[70vw] bg-radial-gradient from-[#CEAA6A]/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 rs-noise-overlay opacity-[0.08] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-10 relative z-10">
        
        {/* --- SUB-BLOCK 1: VALUE PROPOSITION (#why) --- */}
        <div id="why" className="min-h-screen flex flex-col justify-center py-20 relative">
          <div className="text-center max-w-6xl mx-auto mb-16 relative">
             <Reveal>
              <h2 className="text-5xl md:text-8xl text-[#4E3E2F] font-[900] tracking-tighter leading-[0.9] mb-8 uppercase">
                The Value <br /><span className="text-[#CEAA6A]">Proposition</span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#4E3E2F]/60 font-[600] max-w-3xl mx-auto leading-relaxed">
                We do not compete by claiming perfection. We compete by engineering clarity — <span className="text-[#4E3E2F]">and proving it through documented outputs.</span>
              </p>
            </Reveal>
          </div>

          <div className="magical-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative max-w-6xl mx-auto">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="magical-card relative group">
                {/* Glow behind card */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#CEAA6A]/15 to-transparent rounded-none blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Card Container - Added persistent glowing border */}
                <div className="relative h-full p-8 md:p-10 rounded-none bg-[#FCFBEE]/80 backdrop-blur-xl border border-[#CEAA6A]/30 shadow-[0_0_15px_rgba(206,170,106,0.15)] group-hover:shadow-[0_20px_50px_rgba(206,170,106,0.3)] group-hover:bg-white group-hover:-translate-y-2 transition-all duration-700 flex flex-col items-start overflow-hidden cursor-pointer">
                  
                  {/* Subtle top border highlight */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#CEAA6A] to-[#E2C792] opacity-80 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Elegant Golden Icon */}
                  <div className="w-12 h-12 rounded-none bg-gradient-to-br from-[#CEAA6A]/10 to-[#CEAA6A]/5 border border-[#CEAA6A]/20 flex items-center justify-center text-[#CEAA6A] mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#CEAA6A] group-hover:text-[#FCFBEE] group-hover:shadow-lg transition-all duration-500">
                    <div className="group-hover:animate-pulse">
                      {React.cloneElement(prop.icon as React.ReactElement, { size: 22, strokeWidth: 1.5 })}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-[800] text-[#4E3E2F] mb-4 tracking-tight">{prop.title}</h4>
                  <p className="text-[#4E3E2F]/60 text-sm font-[600] leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SUB-BLOCK 2: SYSTEMS MOSAIC (#systems) --- */}
        <div id="systems" className="mb-20 relative z-10">
          <div className="mb-16 flex flex-col lg:flex-row justify-center items-center gap-8 text-center">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="h-[1px] w-12 bg-[#CEAA6A]/30" />
                  <span className="text-[#CEAA6A] font-[900] tracking-[0.5em] text-[15px] md:text-sm uppercase">Solutions & Systems Architecture</span>
                  <div className="h-[1px] w-12 bg-[#CEAA6A]/30" />
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl text-[#4E3E2F] font-[900] tracking-tighter leading-[0.9] uppercase">
                  RiyadhStone <span className="text-[#CEAA6A]">Systems</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[340px]">
            {systems.map((sys) => (
              <div key={sys.id} className={`${sys.gridArea} relative group rounded-none overflow-hidden border border-[#CEAA6A]/10 bg-white shadow-xl hover:shadow-[0_40px_100px_rgba(206,170,106,0.1)] transition-all duration-1000`}>
                <div className="absolute inset-0 z-0 overflow-hidden bg-white/20">
                  <img src={getCardAsset(sys.id)} alt={sys.name} className="w-full h-full object-cover grayscale opacity-[0.4] group-hover:scale-110 group-hover:grayscale-[0.5] group-hover:opacity-100 transition-all duration-[1.8s] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-white/40 transition-all duration-1000" />
                </div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end z-10 pointer-events-none group-hover:opacity-0 transition-all duration-700">
                   <div className="text-[#CEAA6A] px-2 py-1 text-[13px] font-[900] uppercase tracking-[0.5em] inline-block self-start mb-8 italic">
                    {sys.label}
                  </div>
                  <h4 className="text-4xl md:text-5xl font-[900] text-[#4E3E2F] mb-8 tracking-tighter italic uppercase leading-none">{sys.name}</h4>
                  <p className="text-[#4E3E2F]/60 text-sm font-[600] leading-relaxed max-w-[280px] italic">{sys.desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-12 bg-white/95 backdrop-blur-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-700 flex flex-col gap-10 z-20 border-t border-[#CEAA6A]/10">
                   <div className="flex flex-wrap gap-3">
                    {sys.chips.map((c, i) => (
                      <span key={i} className="text-sm font-[900] uppercase tracking-widest text-[#4E3E2F]/80 italic drop-shadow-sm">
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link to={`/solutions-products#${sys.id}`} className="flex items-center justify-between group/link bg-[#4E3E2F] text-white p-7 rounded-none shadow-2xl hover:bg-[#CEAA6A] transition-colors">
                    <span className="text-[13px] font-[900] uppercase tracking-[0.5em] italic">Explore Protocol</span>
                    <div className="w-12 h-12 rounded-none bg-white/10 flex items-center justify-center -rotate-45 group-hover/link:rotate-0 transition-transform duration-700">
                       <ArrowRight size={22} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SUB-BLOCK 3: SPECIFICATION WIZARD (#how-i-choose) --- */}
        <div id="how-i-choose" className="pt-8 pb-24">
          {/* WIZARD CALL TO ACTION (Replaces the standalone Wizard block) */}
          <div className="max-w-4xl mx-auto text-center border border-[#CEAA6A]/20 bg-[#FCFBEE]/80 backdrop-blur-xl rounded-none p-12 shadow-[0_20px_50px_rgba(206,170,106,0.05)]">
            <h3 className="text-3xl md:text-5xl text-[#4E3E2F] font-[900] tracking-tight mb-6 uppercase">
              How Do You <span className="text-[#CEAA6A]">Choose?</span>
            </h3>
            <p className="text-lg text-[#4E3E2F]/60 font-[600] leading-relaxed mb-10 mx-auto max-w-2xl">
              Our engineering stack handles the selection logic for you. Access our full interactive protocol to define your project parameters.
            </p>
            <Link 
              to="/solutions-products"
              className="inline-flex items-center gap-4 bg-[#4E3E2F] text-white px-8 py-4 rounded-none font-[900] text-[13px] uppercase tracking-[0.3em] hover:bg-[#CEAA6A] hover:scale-105 transition-all shadow-xl"
            >
              <span>Access Selection Guide</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* --- Removed legacy #how-i-choose block previously here --- */}
      </div>
    </section>
  );
};

export default RS1UnifiedSection;




