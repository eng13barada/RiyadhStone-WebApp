/**
 * Solutions & Products — /solutions-products
 * Redesigned Families (Geometric), Compact Nav & Matrix, Click-anywhere Modals
 */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../layout/SiteLayout';
import LightFooterWithMap from '../sections/LightFooterWithMap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, X, Layers, Cpu, Droplets, Mountain, Footprints, Package, Grid3x3, ShieldCheck, Activity, CheckCircle2 
} from 'lucide-react';
import { FAMILIES, FINISHES, COMP_ROWS, type Family, type Finish, type SubProduct } from './solutions-data';

gsap.registerPlugin(ScrollTrigger);

/* ─── Typography ─── */
const TX = {
  xl:    'text-[clamp(3.5rem,6.5vw,6.5rem)] font-[900] font-manrope leading-[0.88] tracking-tighter', 
  h2:    'text-[clamp(2.5rem,4.5vw,4.5rem)] font-[900] font-manrope leading-[0.9] tracking-tighter', 
  body:  'text-[clamp(1.1rem,1.5vw,1.3rem)] font-[500] leading-relaxed',                             
  micro: 'text-[11px] font-[900] uppercase tracking-[0.4em]',                                        
};

/* ─── Scroll Reveal ─── */
const Rev: React.FC<{ children: React.ReactNode; delay?: number; className?: string; from?: 'bottom'|'left'|'right' }> = ({
  children, delay = 0, className = '', from = 'bottom'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    gsap.fromTo(el,
      { opacity: 0, y: from==='bottom'?36:0, x: from==='left'?-36:from==='right'?36:0 },
      { opacity:1, y:0, x:0, duration:0.75, delay, ease:'power3.out',
        scrollTrigger: { trigger: el, start:'top 87%', once: true } }
    );
  }, [delay, from]);
  return <div ref={ref} className={className}>{children}</div>;
};

/* ─── Blueprint overlay SVG ─── */
const Blueprint = ({ id = 'bp', opacity = 0.04, dark=false }: { id?: string; opacity?: number; dark?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M 64 0 L 0 0 0 64" fill="none" stroke={dark ? "#CEAA6A" : "#4E3E2F"} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  </div>
);

const FamilyIcon: React.FC<{ id: string; size?: number; className?: string }> = ({ id, size=18, className }) => {
  const icons: Record<string, React.ReactNode> = {
    riyadex:    <Mountain size={size} className={className}/>, riyadfloor: <Grid3x3 size={size} className={className}/>,
    riyadciv:   <Layers size={size} className={className}/>,   riyadwet:   <Droplets size={size} className={className}/>,
    riyadurb:   <Package size={size} className={className}/>,  riyadstep:  <Footprints size={size} className={className}/>,
    riyadraw:   <Cpu size={size} className={className}/>,
  };
  return <>{icons[id] ?? <Layers size={size} className={className}/>}</>;
};

/* ═══════════════════════════════════════════════════════
   SUB-PRODUCT MODAL (Click anywhere closely)
   ═══════════════════════════════════════════════════════ */
const SubProductModal: React.FC<{ product: SubProduct; family: Family; onClose: () => void }> = ({ product, family, onClose }) => (
  // The outer backdrop catches clicks, and we do NOT prevent propagation on the inner div, so clicking anywhere closes it.
  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md cursor-pointer" onClick={onClose}>
    <div className="bg-[#FCFBEE] rounded-none p-10 max-w-2xl w-full shadow-[0_32px_80px_rgba(0,0,0,0.4)] border border-[#CEAA6A]/20 flex flex-col cursor-default" style={{animation:'popIn .4s cubic-bezier(.22,1,.36,1) both'}}>
      <style>{`@keyframes popIn{from{opacity:0;transform:scale(.92) translateY(16px)}to{opacity:1;transform:none}}`}</style>
      
      <div className="flex items-start justify-between mb-8 pointer-events-none">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`${TX.micro} bg-[#CEAA6A]/10 text-[#CEAA6A] px-2 py-1 rounded-sm border border-[#CEAA6A]/20`}>{family.trademark}</span>
            <span className={`${TX.micro} text-[#A19D94]`}>{product.label} Item</span>
          </div>
          <h3 className="text-4xl font-[900] font-manrope text-[#4E3E2F] tracking-tight">{product.name}</h3>
        </div>
        <button onClick={onClose} className="w-12 h-12 rounded-none bg-[#4E3E2F]/5 flex items-center justify-center hover:bg-[#CEAA6A] hover:text-[#12100E] text-[#4E3E2F] transition-colors shrink-0 pointer-events-auto">
          <X size={24} />
        </button>
      </div>

      <div className="h-64 rounded-none bg-[#4E3E2F]/5 overflow-hidden border border-[#4E3E2F]/10 relative mb-8 flex-shrink-0 group pointer-events-none">
        {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
            <>
               <Blueprint id={`bp-modal-${family.id}`} opacity={0.06} />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                 <FamilyIcon id={family.id} size={56} />
                 <p className="mt-4 text-[#4E3E2F]/50 font-[600] text-lg max-w-sm leading-relaxed">
                   Image reference for <strong className="text-[#4E3E2F]">{product.name}</strong> will be integrated from submittal package.
                 </p>
               </div>
            </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 pointer-events-none">
        <div className="bg-white/60 rounded-2xl p-5 border border-[#A19D94]/20 flex flex-col justify-center">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-2`}>Typical Engineering</span>
            <p className="text-[14px] font-[600] text-[#4E3E2F] leading-snug">
              LOD-350 modeling • Joint tolerance definition • Interface coordination
            </p>
        </div>
        <div className="bg-white/60 rounded-2xl p-5 border border-[#A19D94]/20 flex flex-col justify-center">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-2`}>Approval Readiness</span>
            <p className="text-[14px] font-[600] text-[#4E3E2F] leading-snug">
              MAR-ready format • Validation logic enclosed • QA checkpoint linked
            </p>
        </div>
      </div>
      
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════
   FULL PAGE
   ═══════════════════════════════════════════════════════ */
const SolutionsProducts: React.FC = () => {
  const [activeFinish, setActiveFinish] = useState<Finish|null>(null);
  const [activeSubProduct, setActiveSubProduct] = useState<{product: SubProduct, family: Family}|null>(null);
  
  const [finishFilter, setFinishFilter] = useState<string>('all');
  const [tableFilter, setTableFilter] = useState<string>('all');

  const filteredFinishes = finishFilter === 'all'
    ? FINISHES
    : FINISHES.filter(f => f.families.includes(finishFilter));

  const tableFilterFamilies = tableFilter === 'all'
    ? FAMILIES.map(f=>f.id)
    : tableFilter === 'exterior'
      ? ['riyadex','riyadfloor','riyadciv']
      : tableFilter === 'wet'
        ? ['riyadwet','riyadstep']
        : ['riyadfloor','riyadciv','riyadurb'];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fn = (e: MouseEvent) => gsap.to('.sp-glow', { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <SiteLayout>
      <div className="rs-noise-overlay"/>
      <div className="sp-glow fixed top-0 left-0 w-[800px] h-[800px] -ml-[400px] -mt-[400px] rounded-full bg-[radial-gradient(circle,rgba(206,170,106,0.08)_0%,transparent_60%)] pointer-events-none z-50 mix-blend-screen"/>

      {/* ── SECTION 1: SYSTEMS ARCHITECTURE (Philosophy + Map) [DARK THEME] ── */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#1A1410] px-6 py-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4E3E2F_0%,transparent_50%)] opacity-20 pointer-events-none" />
        <Blueprint id="sec1-bp" opacity={0.04} dark />
        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col mt-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Philosophy & Identity */}
            <div style={{ animation: 'abHeroIn 0.8s cubic-bezier(0.22,1,0.36,1) both' }}>
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-[#CEAA6A]/20 rounded-full px-6 py-2.5 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CEAA6A] animate-pulse" />
                <span className={`${TX.micro} text-[#CEAA6A]`}>System Engineering</span>
              </div>
              <h1 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-[900] font-manrope leading-[0.9] tracking-tighter text-white mb-6">
                Why We Divide Stone<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CEAA6A] to-[#8C6D3F]">Into Systems</span>
              </h1>
              <p className={`${TX.body} text-white/60 mb-10 max-w-xl`}>
                Major projects cannot rely on material supply alone. They require defined interfaces, tolerance logic, finish discipline, validation steps, and flawless delivery records. A "system" is the fastest path to clarity.
              </p>
              
              {/* Executive Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
                {[
                  {title:'Interface First', desc:'We define how stone meets structure.'},
                  {title:'Tolerance Discipline', desc:'Constraining variation with hard metrics.'},
                  {title:'Validated Delivery', desc:'Approvals, mockups, and records.'},
                ].map((c,i) => (
                  <div key={i} className="p-6 flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CEAA6A] mb-4"/>
                    <h4 className="text-[13px] font-[800] text-white uppercase tracking-wider mb-2">{c.title}</h4>
                    <p className="text-[12px] text-white/50 font-[500] leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button onClick={()=>scrollTo('systems-index')} className="flex items-center gap-3 bg-[#CEAA6A] text-[#12100E] px-10 py-5 rounded-full font-[900] text-[12px] uppercase tracking-widest hover:bg-white transition-all shadow-lg hover:shadow-[#CEAA6A]/20">
                  <ArrowRight size={16}/> Explore The Systems
                </button>
              </div>
            </div>

            {/* Right: Interactive Systems Map */}
            <div style={{ animation: 'abHeroIn 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) both' }}>
              <div className="relative bg-[#24201C] border border-[#CEAA6A]/20 rounded-[3rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col min-h-[550px] overflow-hidden">
                <Blueprint id="sp-map2" opacity={0.03} dark/>
                <div className="flex justify-between items-center mb-8">
                  <span className={`${TX.micro} text-[#CEAA6A]/60`}>Master Architecture</span>
                  <div className="flex gap-2"><span className="w-2 h-2 rounded-full bg-white/10"/><span className="w-2 h-2 rounded-full bg-[#CEAA6A]"/><span className="w-2 h-2 rounded-full bg-white/10"/></div>
                </div>
                
                <div className="mx-auto flex flex-col items-center justify-center mb-10 relative z-10 w-full">
                  <span className="text-[20px] sm:text-[24px] font-[900] text-white tracking-widest uppercase flex items-center gap-1 font-manrope">
                    RiyadhStone<span className="text-[#CEAA6A] font-[400] text-[16px] -mt-3">®</span> <span className="text-[#CEAA6A] ml-2">SYSTEMS</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                  {FAMILIES.map((f,i)=>(
                    <button key={f.id} onClick={()=>scrollTo(f.id)} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-[1.2rem] p-4 hover:bg-[#CEAA6A] hover:border-transparent transition-all group text-left">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-[#12100E]/20 group-hover:text-[#12100E] transition-all shrink-0">
                        <FamilyIcon id={f.id} size={20}/>
                      </div>
                      <div>
                        {/* Increased System Name Size */}
                        <span className="text-[17px] font-[900] text-white group-hover:text-[#12100E] transition-colors block leading-tight mb-0.5">{f.trademark}</span>
                        <span className={`${TX.micro} text-[#CEAA6A]/70 group-hover:text-[#12100E]/70 transition-colors`}>{f.descriptor}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div id="systems-index" className="invisible relative -top-24" />

      {/* ── SECTION 2: ENGINEERED PRODUCT FAMILIES (Geometric/Architectural Layout) ── */}
      {FAMILIES.map((family, idx) => (
        <section key={family.id} id={family.id} className="relative w-full overflow-hidden flex flex-col justify-center px-6 py-20 border-b border-[#4E3E2F]/10 group bg-[#FCFBEE]">
          
          {/* Dynamic Background Image Layer with Heavy Lightening */}
          <div className="absolute inset-0 z-0">
             <img src={family.image} alt="Background abstract" className="w-full h-full object-cover scale-[1.02] transition-transform duration-[10s] ease-out group-hover:scale-110" />
             <div className="absolute inset-0 bg-[#FCFBEE]/95 backdrop-blur-[6px]" />
          </div>
          
          <Blueprint id={`bp-lf-${family.id}`} opacity={0.03} />
          
          <div className="container mx-auto max-w-[90rem] relative z-10">
            <Rev from="bottom">
              {/* Massive Geometric Structural Block */}
              <div className="border border-[#4E3E2F]/15 rounded-[2rem] overflow-hidden bg-white/30 backdrop-blur-md shadow-[0_20px_60px_rgba(78,62,47,0.05)]">
                
                {/* TOP HALF: Text & Main Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#4E3E2F]/15">
                   
                   {/* Left Col (Text Details) */}
                   <div className="lg:col-span-5 p-10 lg:p-14 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/50 border border-[#CEAA6A]/20 flex items-center justify-center text-[#CEAA6A] shadow-sm">
                          <FamilyIcon id={family.id} size={24}/>
                        </div>
                        <div>
                           <span className={`${TX.micro} text-[#CEAA6A] block leading-tight`}>System Architecture</span>
                           <span className="text-[12px] font-[900] uppercase tracking-widest text-[#4E3E2F] leading-tight opacity-40">{family.descriptor}</span>
                        </div>
                      </div>
                      <h2 className={`${TX.h2} text-[#4E3E2F] mb-6`}>{family.trademark}</h2>
                      <div className="flex flex-col gap-6 mb-10">
                        {family.body.map((t,i)=>(
                          <p key={i} className={`${TX.body} text-[#4E3E2F]/80 m-0`}>{t}</p>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#4E3E2F]/15">
                        <div>
                          <span className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-[900] text-[#CEAA6A] mb-3"><ShieldCheck size={16}/> Constraints</span>
                          <p className="text-[13px] font-[600] text-[#4E3E2F]/70 leading-relaxed">{family.constraints.join(' • ')}</p>
                        </div>
                        <div>
                          <span className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-[900] text-[#CEAA6A] mb-3"><Activity size={16}/> Outputs</span>
                          <div className="flex flex-wrap gap-2 text-[13px] font-[700] text-[#4E3E2F]/70">
                             {family.outputs.join(' • ')}
                          </div>
                        </div>
                      </div>
                   </div>

                   {/* Right Col (Hero Visual) */}
                   <div className="lg:col-span-7 relative h-[400px] lg:h-auto overflow-hidden group/img cursor-pointer">
                      <img src={family.image} alt={family.trademark} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-[1.5s] ease-out" />
                      <div className="absolute top-6 right-6">
                         <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 text-center">
                           <span className="text-[10px] uppercase font-[900] tracking-[0.2em] text-[#CEAA6A] block mb-0.5">Approval Reference</span>
                           <span className="text-[18px] font-[900] text-[#4E3E2F]">{family.id.toUpperCase()}-v2</span>
                         </div>
                      </div>
                   </div>

                </div>

                {/* BOTTOM HALF: 8 Sub-Product Cards (Geometric Grid) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-[#4E3E2F]/15 border-t border-[#4E3E2F]/15 w-full">
                  {family.subProducts.map((sp, i)=>(
                    <button 
                      key={sp.name + i} 
                      onClick={() => setActiveSubProduct({product: sp, family})}
                      className="bg-white/40 h-[180px] flex flex-col p-6 text-left hover:bg-white hover:text-[#CEAA6A] hover:shadow-[inset_0_-4px_0_#CEAA6A] transition-all group/card relative overflow-hidden"
                    >
                      {/* Faded Background Image inside the geometric card */}
                      <div className="absolute inset-0 opacity-[0.05] group-hover/card:opacity-20 transition-opacity duration-500 pointer-events-none">
                         {sp.image ? (
                           <img src={sp.image} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center">
                              <FamilyIcon id={family.id} size={100}/>
                           </div>
                         )}
                      </div>

                      <div className="relative z-10 w-full h-full flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-[#CEAA6A] font-[900] block opacity-80 mb-1">{sp.label}</span>
                        <p className="text-[15px] font-[900] text-[#4E3E2F] leading-tight transition-colors flex-1 pr-6">{sp.name}</p>
                        <div className="mt-auto w-8 h-8 rounded-full border border-[#4E3E2F]/20 flex items-center justify-center text-[#4E3E2F]/40 group-hover/card:bg-[#CEAA6A] group-hover/card:border-transparent group-hover/card:text-white transition-all pointer-events-none">
                           <ArrowRight size={14} className="-rotate-45" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

              </div>
            </Rev>
          </div>
        </section>
      ))}

      {/* ── SECTION 3: SELECTION LOGIC (How to Choose) [FULL HEIGHT] ── */}
      <section className="bg-[#24201C] px-6 min-h-screen relative overflow-hidden flex flex-col justify-center border-b border-white/5 py-16">
        <Blueprint id="sec3-bp" dark opacity={0.03} />
        
        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col justify-center gap-16 lg:gap-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* Left Section: Titles & Intro */}
            <div className="lg:col-span-4 flex flex-col justify-center sticky top-32 self-start h-fit">
              <Rev from="left">
                 <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>Engineering Intelligence</span>
                 <h2 className={`${TX.h2} text-white mb-6 uppercase`}>How to<br/><span className="text-[#CEAA6A]">Navigate<br/>Systems</span></h2>
                 <p className={`${TX.body} text-white/50 max-w-sm`}>
                   Selecting material solely on aesthetics introduces risk. Select the system by exposure, loads, and interfaces first — then govern the visual finish.
                 </p>
              </Rev>
            </div>

            {/* Right Section: 4 Cards Stacked Vertically */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              {[
                {num:'01', label:'Exposure Governance', desc:'Exterior vs Interior. Defines water absorption limits, weather resistance needs.'},
                {num:'02', label:'Live & Dead Loads', desc:'Pedestrian vs Vehicular vs Wind. Governs thickness, fixation, and bedding requirements.'},
                {num:'03', label:'Interface Detailing', desc:'How it meets other trades. Requires LOD-350 modeling, sub-frame design, or edge logic.'},
                {num:'04', label:'Validation & Assurance', desc:'Establishing standard before production via Physical Mockups, MAR packs, and QA checkpoints.'},
              ].map((step,i) => (
                <Rev key={step.num} delay={0.1 + (i*0.1)} from="bottom" className="w-full">
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 group relative overflow-hidden hover:border-[#CEAA6A]/50 transition-colors flex flex-col justify-center w-full min-h-[140px]">
                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 mb-2 relative z-10">
                        <span className="text-[64px] lg:text-[72px] font-[900] text-[#CEAA6A] leading-none opacity-80">{step.num}</span>
                        <h3 className="text-[20px] lg:text-[28px] font-[900] text-white tracking-tight leading-tight">{step.label}</h3>
                     </div>
                     <p className="text-[15px] lg:text-[16px] text-white/70 leading-relaxed font-[500] relative z-10 sm:pl-[88px] max-w-3xl">{step.desc}</p>
                     
                     <span className="absolute -right-8 -bottom-16 text-[180px] font-[900] text-white/[0.03] leading-none transition-transform group-hover:-translate-x-4 pointer-events-none">{step.num}</span>
                  </div>
                </Rev>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ── SECTION 4: VALIDATION & FINISH EXPLORER [DARK THEME] COMPRESSED -25% ── */}
      <section className="bg-[#120E0B] px-6 py-20 border-b border-white/10 relative overflow-hidden flex flex-col justify-center">
        <Blueprint id="sec4-bp" dark opacity={0.03} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#CEAA6A_0%,transparent_60%)] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-[90rem] relative z-10">
          
          <Rev className="mb-12 text-center max-w-3xl mx-auto">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>Aesthetic Validation</span>
            <h2 className={`${TX.h2} text-white mb-4 uppercase`}>Finish Explorer</h2>
            <p className={`${TX.body} text-white/60`}>
              Natural variation is managed through explicit finish selection. Use this matrix to lock your aesthetic intent with the correct traction and exposure profile.
            </p>
          </Rev>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {[{id:'all',label:'All Finishes'}, ...FAMILIES.map(f=>({id:f.id,label:f.trademark}))].map(chip=>(
              <button key={chip.id} onClick={()=>setFinishFilter(chip.id)}
                className={`${TX.micro} px-8 py-4 rounded-full border transition-all ${
                  finishFilter===chip.id
                    ? 'bg-[#CEAA6A] text-[#12100E] border-transparent shadow-[0_10px_30px_rgba(206,170,106,0.2)]'
                    : 'bg-[#1A1410] border-white/10 text-white/60 hover:border-[#CEAA6A]/50 hover:text-white'
                }`}>{chip.label}</button>
            ))}
          </div>

          <div className="border border-white/10 rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {filteredFinishes.map((finish,i)=>(
                <button key={finish.id} onClick={()=>setActiveFinish(finish)}
                  className="bg-transparent h-[380px] lg:h-[450px] flex flex-col p-8 text-left hover:bg-white/10 transition-all group/finish relative overflow-hidden border-b lg:border-b-0 border-white/10"
                >
                  {/* Faded Background Image to match Geometric style */}
                  <div className="absolute inset-0 opacity-10 group-hover/finish:opacity-30 transition-opacity duration-700 pointer-events-none">
                     <img src={finish.image} alt={finish.name} className="w-full h-full object-cover mix-blend-screen" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-[#120E0B]/50 to-transparent" />
                  </div>

                  <div className="relative z-10 w-full h-full flex flex-col">
                    <span className="text-[12px] uppercase tracking-[0.2em] text-[#CEAA6A] font-[900] block mb-2">{finish.families[0].toUpperCase()} Family</span>
                    <h4 className="text-[24px] lg:text-[28px] font-[900] font-manrope text-white tracking-tight leading-tight group-hover/finish:text-[#CEAA6A] transition-colors pr-6">{finish.name}</h4>
                    
                    <div className="mt-6 flex flex-col gap-1">
                      <span className="text-[11px] font-[900] uppercase tracking-widest text-[#CEAA6A]/60">Traction</span>
                      <span className="text-[13px] font-[600] text-white">{finish.traction}</span>
                    </div>

                    <div className="mt-auto flex items-center gap-3 w-fit border-b border-[#CEAA6A]/40 pb-1 text-[#CEAA6A] opacity-70 group-hover/finish:opacity-100 transition-opacity">
                      <span className="text-[11px] font-[900] uppercase tracking-widest">View Specs</span>
                      <ArrowRight size={14} className="group-hover/finish:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 5: MATRIX & ENGAGEMENT (GEOMETRIC REDESIGN < 100vh) ── */}
      <section className="bg-[#1A1410] px-6 py-10 min-h-[90vh] relative flex flex-col justify-center overflow-hidden border-b border-white/5">
        <Blueprint id="cmp-bp2" dark opacity={0.03}/>

        <div className="container mx-auto max-w-[90rem] relative z-10 w-full h-full flex flex-col justify-center">
          
          <Rev className="mb-10 flex flex-col lg:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
            <div>
              <span className={`${TX.micro} text-[#CEAA6A] block mb-2`}>Data Matrix</span>
              <h2 className="text-3xl lg:text-5xl font-[900] font-manrope text-white tracking-tight uppercase">Compare Systems</h2>
            </div>
            
            <Link to="/contact-us#rfq" className="hidden lg:flex shrink-0 items-center gap-4 bg-[#CEAA6A] text-[#12100E] px-8 py-4 rounded-full font-[900] text-[12px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#12100E] hover:-translate-y-1 transition-all shadow-xl">
               Consult our Engineers <ArrowRight size={16} />
            </Link>
          </Rev>

          <Rev delay={0.1} className="w-full flex-1 flex flex-col justify-center min-h-[600px] h-full"> {/* Expanded height 30% */}
            {/* Scrollable Container with Sticky Header */}
            <div className="w-full h-full overflow-auto hide-scrollbar border border-white/15 rounded-2xl bg-black/20 backdrop-blur-md relative">
              <div className="min-w-[1200px] flex flex-col divide-y divide-white/15 h-full">
                   
                   {/* Header Row (Sticky) */}
                   <div className="sticky top-0 z-20 grid grid-cols-[340px_repeat(7,1fr)] items-stretch divide-x divide-white/15 bg-[#1A1410]/95 backdrop-blur-xl border-b border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                      <div className="py-5 px-6 flex items-center justify-start">
                         <span className="text-[13px] font-[900] uppercase tracking-widest text-white/50">Evaluation Criteria</span>
                      </div>
                      {FAMILIES.map(f => (
                        <div key={f.id} className="py-5 px-4 flex items-center justify-center gap-3">
                           <FamilyIcon id={f.id} size={18} className="text-[#CEAA6A]"/>
                           <span className="text-[14px] font-[900] tracking-widest text-white uppercase">{f.trademark}</span>
                        </div>
                      ))}
                   </div>

                   {/* Data Rows */}
                   <div className="flex-1 flex flex-col justify-around bg-[#1A1410]/40">
                     {COMP_ROWS.map((row,ri)=>(
                       <div key={row.criteria} className={`grid grid-cols-[340px_repeat(7,1fr)] items-stretch divide-x divide-white/10 hover:bg-white/[0.04] transition-colors group flex-1 ${ri !== COMP_ROWS.length-1 ? 'border-b border-white/[0.06]' : ''}`}>
                         
                         <div className="py-4 px-6 flex items-center justify-start bg-white/[0.03] group-hover:bg-transparent transition-colors">
                           <span className="text-[15px] font-[800] text-white/90 leading-tight pr-4">{row.criteria}</span>
                         </div>
                         
                         {FAMILIES.map(f=>(
                           <div key={f.id} className="py-4 px-3 flex items-center justify-center text-center">
                              {/* Intelligent text formatting without background boxes */}
                               {row[f.id] === 'High' || row[f.id] === 'High exterior' || row[f.id] === 'High public' || row[f.id] === 'Very High' ? (
                                   <span className="text-[#CEAA6A] text-[14px] font-[900] uppercase tracking-wide flex items-center gap-1.5"><ShieldCheck size={16}/> {row[f.id]}</span>
                              ) : row[f.id] === 'Low' || row[f.id] === 'Low–Medium' ? (
                                   <span className="text-white/40 text-[14px] font-[800] uppercase tracking-wide">{row[f.id]}</span>
                              ) : row[f.id] === 'Medium' || row[f.id] === 'Medium–High' ? (
                                   <span className="text-white/70 text-[14px] font-[800] uppercase tracking-wide opacity-80">{row[f.id]}</span>
                              ) : (
                                   <span className="text-[14px] text-white/60 font-[700] leading-snug">{row[f.id]}</span>
                              )}
                           </div>
                         ))}

                       </div>
                     ))}
                   </div>

              </div>
            </div>
          </Rev>
          
          <div className="mt-8 flex lg:hidden justify-center">
             <Link to="/contact-us#rfq" className="w-full text-center bg-[#CEAA6A] text-[#12100E] px-8 py-5 rounded-xl font-[900] text-[13px] uppercase tracking-[0.2em]">
               Consult our Engineers
             </Link>
          </div>

        </div>
      </section>

      <LightFooterWithMap/>

      {/* Modals */}
      {activeFinish && <FinishModal finish={activeFinish} onClose={()=>setActiveFinish(null)}/>}
      {activeSubProduct && <SubProductModal product={activeSubProduct.product} family={activeSubProduct.family} onClose={()=>setActiveSubProduct(null)}/>}

    </SiteLayout>
  );
};

/* Finish Modal Render Component (Click anywhere to close) */
const FinishModal: React.FC<{ finish: Finish; onClose: () => void }> = ({ finish, onClose }) => (
  // Outer dimming click closes it
  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md cursor-pointer" onClick={onClose}>
    {/* Inner card: removed e.stopPropagation() so click passes through to outer div */}
    <div className="bg-[#1A1410] rounded-none p-10 max-w-2xl w-full shadow-2xl border border-[#CEAA6A]/20 cursor-default" style={{animation:'popIn .3s cubic-bezier(.22,1,.36,1) both'}}>
      <style>{`@keyframes popIn{from{opacity:0;transform:scale(.92) translateY(16px)}to{opacity:1;transform:none}}`}</style>
      
      <div className="flex items-start justify-between mb-8 pointer-events-none">
        <div>
          <span className={`${TX.micro} text-[#CEAA6A] block mb-2`}>Finish Reference</span>
          <h3 className="text-4xl font-[900] font-manrope text-white tracking-tight">{finish.name}</h3>
        </div>
        <button onClick={onClose} className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center hover:bg-white hover:text-[#1A1410] text-white/50 transition-colors pointer-events-auto">
          <X size={24} />
        </button>
      </div>

      <div className="h-80 rounded-none bg-black mb-8 overflow-hidden border border-white/10 relative pointer-events-none">
        <img src={finish.image} alt={finish.name} className="w-full h-full object-cover opacity-90" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8 pointer-events-none">
        {[['Exposure',finish.exposure],['Traction',finish.traction]].map(([k,v])=>(
          <div key={k} className="bg-white/5 rounded-none p-5 border border-white/10 text-left">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-2`}>{k}</span>
            <span className="text-[14px] font-[800] text-white leading-tight">{v}</span>
          </div>
        ))}
        <div className="col-span-2 lg:col-span-1 bg-red-900/10 rounded-none p-5 border border-red-900/30 text-left flex flex-col justify-center">
          <span className={`${TX.micro} text-red-400 block mb-2`}>Avoid When</span>
          <span className="text-[13px] font-[600] text-white/80 leading-tight">{finish.avoidWhen}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-sm p-6 bg-white/5 rounded-none border border-[#CEAA6A]/20 border-l-4 border-l-[#CEAA6A] pointer-events-none">
        <p className="flex items-start gap-3"><span className="font-[800] text-[#CEAA6A] shrink-0 mt-0.5"><CheckCircle2 size={16}/></span><span className="text-white/80 font-[600] text-[14px] leading-relaxed"><strong className="text-white">Primary Use:</strong> {finish.useWhen}</span></p>
        <p className="flex items-start gap-3"><span className="font-[800] text-white/40 shrink-0 mt-0.5"><ShieldCheck size={16}/></span><span className="text-white/60 font-[500] text-[13px] leading-relaxed"><strong className="text-white/80">Care Note:</strong> {finish.careNotes}</span></p>
      </div>
    </div>
  </div>
);

export default SolutionsProducts;
