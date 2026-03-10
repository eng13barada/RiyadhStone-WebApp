/**
 * Project Supports — /project-supports
 * Communications on how RiyadhStone de-risks mega/strategic projects 
 * Sections: Hero | Risk->Control Grid | 10 Protocol Process | Deliverables Matrix | Stakeholders | Engagement Modes | CTA
 */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../layout/SiteLayout';
import LightFooterWithMap from '../sections/LightFooterWithMap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, ShieldCheck, Search, Filter,
  Building2, LineChart, Target, HardHat, FileText, Check, FileCheck, Layers
} from 'lucide-react';
import { RISK_CONTROLS, PROTOCOLS, DELIVERABLES, STAKEHOLDERS, MODES } from './project-supports-data';

import tableBg from '../assets/generated/rs_supports_table_bg_v01.png';
import docPackImg from '../assets/generated/rs_supports_document_pack_v01.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Typography (High-Level Stakeholder) ─── */
const TX = {
  xl:    'text-[4rem] lg:text-[5.5rem] font-[900] font-manrope leading-[0.9] tracking-tighter',
  h2:    'text-[2.5rem] lg:text-[3.5rem] font-[900] font-manrope leading-[0.9] tracking-tighter',
  body:  'text-[1rem] lg:text-[1.15rem] font-[500] leading-relaxed',
  micro: 'text-[10px] font-[900] uppercase tracking-[0.4em]',
};

/* ─── Scroll Reveal Wrapper ─── */
const Rev: React.FC<{ children: React.ReactNode; delay?: number; className?: string; from?: 'bottom'|'left'|'right' }> = ({
  children, delay = 0, className = '', from = 'bottom'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    gsap.fromTo(el,
      { opacity: 0, y: from==='bottom'?40:0, x: from==='left'?-40:from==='right'?40:0 },
      { opacity:1, y:0, x:0, duration:1, delay, ease:'power3.out',
        scrollTrigger: { trigger: el, start:'top 85%', once: true } }
    );
  }, [delay, from]);
  return <div ref={ref} className={className}>{children}</div>;
};

/* ─── Geometric Card (Strict) ─── */
const GC: React.FC<{ children: React.ReactNode; className?: string; dark?: boolean; hover?: boolean; onClick?: () => void }> = ({ children, className='', dark=false, hover=true, onClick }) => (
  <div onClick={onClick} className={`transition-all duration-500 border-l-2 ${
    dark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'
  } ${hover ? `hover:bg-${dark?'white/[0.04]':'black/[0.04]'} hover:border-[#CEAA6A]` : ''} ${className} ${onClick ? 'cursor-pointer':''}`}>
    <div className="p-6 h-full flex flex-col">{children}</div>
  </div>
);

/* ─── Blueprint SVG Sublayer ─── */
const Blueprint: React.FC<{ id: string; opacity?: number; dark?: boolean }> = ({ id, opacity=0.04, dark=false }) => (
  <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ opacity }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke={dark ? "#CEAA6A" : "#12100E"} strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
const ProjectSupports: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSection, setFilterSection] = useState('All');

  // Matrix logic
  const uniqueSections = ['All', ...Array.from(new Set(DELIVERABLES.map(d => d.section)))];
  const filteredDeliverables = DELIVERABLES.filter(d => {
    const matchesSearch = d.document.toLowerCase().includes(searchTerm.toLowerCase()) || d.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSection = filterSection === 'All' || d.section === filterSection;
    return matchesSearch && matchesSection;
  });

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <SiteLayout>
      <div className="eng-glow fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full bg-[radial-gradient(circle,rgba(206,170,106,0.06)_0%,transparent_60%)] pointer-events-none z-50 mix-blend-screen"/>

      {/* ── SECTION 01: THE STRATEGIC IMPERATIVE (Merged Hero + Risk Grid) ── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-[20vh] pb-32 bg-[#12100E] border-b border-white/10 overflow-hidden">
        <Blueprint id="supports-hero-bp" opacity={0.05} dark />
        
        {/* Dynamic network background effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg width="100%" height="100%">
             <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#CEAA6A" strokeWidth="1" strokeDasharray="4 8"/>
             <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#CEAA6A" strokeWidth="1" strokeDasharray="4 8"/>
             <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.5" strokeOpacity="0.1"/>
           </svg>
        </div>

        <div className="container mx-auto max-w-[90rem] relative z-10 flex-1 flex flex-col">
          
          {/* Top Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-end" style={{animation:'fadeUp 1s cubic-bezier(.16,1,.3,1) both'}}>
            <div className="lg:col-span-7">
              <span className={`${TX.micro} text-[#CEAA6A] flex items-center gap-3 mb-6`}>
                <span className="w-8 h-px bg-[#CEAA6A]"></span> THE STRATEGIC IMPERATIVE
              </span>
              <h1 className={`${TX.xl} text-white mb-8`}>
                Risk-Controlled<br/>
                <span className="text-[#CEAA6A]">Stone Delivery.</span>
              </h1>
              <p className={`${TX.body} text-white/50 max-w-2xl`}>
                RiyadhStone is built for large-scale delivery where failure is intolerable. We translate architectural intent into governed engineering outputs—submittals, inspections, traceability, and phased handover—so approvals accelerate and disputes collapse.
              </p>
            </div>
            {/* Right side vertically aligned to bottom of the container */}
            <div className="lg:col-span-5 flex flex-col justify-end gap-6 h-full pb-2">
               <div className="flex items-center gap-4 text-white/40 mb-2">
                 <ShieldCheck className="text-[#CEAA6A]" size={24}/>
                 <span className={`${TX.micro}`}>RS Master Protocol v2.x</span>
               </div>
               <p className="text-sm text-white/70 font-[500] leading-relaxed border-l-2 border-[#CEAA6A]/30 pl-4 py-2">
                 Every failure mode on your project has a control point. We engineered our delivery model to provide the explicit evidence required to de-risk your operations entirely.
               </p>
            </div>
          </div>

          {/* Combined Risk -> Control Matrix */}
          <Rev delay={0.3} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/5 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {RISK_CONTROLS.slice(0,5).map((r,i)=>(
              <div key={i} className="group relative bg-[#1A1613] hover:bg-[#1E1916] transition-colors p-6 lg:p-8 flex flex-col justify-between min-h-[300px]">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CEAA6A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>
                
                {/* Top: The Risk */}
                <div className="relative z-10 mb-12">
                   <div className="flex items-center gap-3 mb-4">
                     <span className="text-[10px] text-red-500/80 font-mono">FR-{String(i+1).padStart(2,'0')}</span>
                     <span className={`${TX.micro} text-white/30 truncate`}>{r.category}</span>
                   </div>
                   <h3 className="text-lg font-[700] text-white/80 leading-snug group-hover:text-red-400 transition-colors">{r.risk}</h3>
                </div>

                {/* Bottom: The Control */}
                <div className="relative z-10 border-t border-white/10 pt-6 mt-auto">
                   <div className="flex items-center gap-2 mb-3">
                     <ShieldCheck size={14} className="text-[#CEAA6A]"/>
                     <span className={`${TX.micro} text-[#CEAA6A]`}>ENGINEERED CONTROL</span>
                   </div>
                   <p className="text-sm font-[500] text-white/50 group-hover:text-white transition-colors">{r.control}</p>
                </div>
              </div>
            ))}
          </Rev>

        </div>
        <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}`}</style>
      </section>

      {/* ── SECTION 02: THE DELIVERY ENGINE (10 Protocol Process) ── */}
      <section id="protocol-process" className="bg-[#1A1613] py-24 min-h-[60svh] px-6 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(206,170,106,0.03)_0%,transparent_60%)] pointer-events-none"/>
        <Blueprint id="protocol-bp" opacity={0.02} dark/>
        
        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col h-full">
          <Rev className="mb-16">
            <span className={`${TX.micro} text-[#CEAA6A] flex items-center gap-3 mb-6`}>
              <span className="w-8 h-px bg-[#CEAA6A]"></span> THE DELIVERY ENGINE
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className={`${TX.h2} text-white`}>The 10 Protocol<br/>Process.</h2>
              <p className={`${TX.body} text-white/50 max-w-xl`}>
                Our delivery acts as a governed pipeline. We don't just supply stone; we enforce a strict sequence of engineering controls. Select a protocol to view its operational mandate.
              </p>
            </div>
          </Rev>

          {/* Dashboard UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 w-full h-[55svh] min-h-[500px] bg-black/40">
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col h-full bg-[#12100E]">
               <div className="flex flex-col flex-1 divide-y divide-white/5">
                  {PROTOCOLS.map((p, i) => (
                    <button 
                      key={p.id} 
                      onClick={()=>setActiveStep(i)} 
                      className={`w-full flex-1 text-left px-8 py-0 transition-all duration-300 flex items-center justify-between group ${
                      activeStep===i ? 'bg-[#CEAA6A]/10 border-l-[3px] border-l-[#CEAA6A]' : 'hover:bg-white/[0.02] border-l-[3px] border-l-transparent'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className={`text-[15px] font-[800] tracking-widest uppercase ${
                          activeStep===i ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                        }`}>
                          {p.title}
                        </span>
                      </div>
                      <ArrowRight size={18} className={`transition-transform duration-300 ${activeStep===i ? 'text-[#CEAA6A] translate-x-1' : 'text-white/20 -translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}/>
                    </button>
                  ))}
               </div>
            </div>

            {/* Right Detailed Output Panel */}
            <div className="lg:col-span-8 p-8 lg:p-16 relative overflow-hidden flex flex-col justify-center h-full bg-[radial-gradient(circle_at_80%_80%,rgba(206,170,106,0.05)_0%,transparent_50%)]">
                <Blueprint id={`node-bp-${activeStep}`} opacity={0.03} dark/>
                
                <div key={activeStep} className="relative z-10 w-full animate-fade-in flex flex-col items-start">
                   <div className="flex items-center gap-4 mb-8">
                     <span className={`${TX.micro} text-[13px] text-[#CEAA6A]`}>{PROTOCOLS[activeStep].title}</span>
                   </div>

                   <h3 className="text-4xl lg:text-6xl font-[900] text-white tracking-tight mb-12">
                     {PROTOCOLS[activeStep].title.split('—')[1]?.trim() || PROTOCOLS[activeStep].title}
                   </h3>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-10 w-full">
                     <div className="bg-[#12100E] p-8 lg:p-10">
                        <span className={`${TX.micro} text-[11px] text-[#CEAA6A]/60 flex items-center gap-2 mb-4`}><Target size={14}/> CONTROL INTENT</span>
                        <p className="text-[15px] sm:text-[16px] text-white/80 font-[500] leading-relaxed">{PROTOCOLS[activeStep].intent}</p>
                     </div>
                     <div className="bg-[#16120F] p-8 lg:p-10">
                        <span className={`${TX.micro} text-[11px] text-red-400/60 flex items-center gap-2 mb-4`}><ShieldCheck size={14}/> RISK ELIMINATED</span>
                        <p className="text-[15px] sm:text-[16px] text-white/60 font-[500] leading-relaxed">"{PROTOCOLS[activeStep].riskEliminated}"</p>
                     </div>
                   </div>

                   <div className="w-full">
                     <span className={`${TX.micro} text-[11px] text-[#CEAA6A] flex items-center gap-2 mb-5`}><FileCheck size={14}/> KEY OUTPUTS DELIVERED</span>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {PROTOCOLS[activeStep].outputs.map((out, idx)=>(
                          <li key={idx} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 group hover:border-[#CEAA6A]/40 hover:bg-white/[0.05] transition-colors">
                            <span className="w-2 h-2 bg-[#CEAA6A]/50 rounded-full group-hover:bg-[#CEAA6A] group-hover:scale-150 transition-all shrink-0"/>
                            <span className="text-[14px] text-white font-[600] group-hover:text-white tracking-wide">{out}</span>
                          </li>
                        ))}
                     </ul>
                   </div>
                </div>
            </div>
          </div>
          
        </div>
        <style>{`
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* ── SECTION 03: DELIVERABLES MATRIX (Table) ── */}
      <section id="deliverables-matrix" className="bg-[#1A1613] py-24 min-h-[100svh] px-6 relative overflow-hidden flex flex-col justify-center border-b border-white/5">
        <Blueprint id="matrix-bp" opacity={0.03} dark/>
        <img src={tableBg} alt="Table Background" className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(206,170,106,0.1)_0%,transparent_50%)] pointer-events-none"/>
        
        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col h-full">
          <Rev className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 shrink-0">
            <div>
              <span className={`${TX.micro} text-[#CEAA6A] flex items-center gap-3 mb-6`}>
                <span className="w-8 h-px bg-[#CEAA6A]"></span> EVIDENCE OF CONTROL
              </span>
              <h2 className={`${TX.h2} text-white mb-4`}>The Deliverables Matrix.</h2>
              <div className="border border-[#CEAA6A]/20 bg-white/[0.02] px-4 py-3 max-w-2xl">
                <p className="text-sm text-white/60 font-mono text-[14px]">This matrix is our primary risk-control instrument. Each delivered document actively protects programme, quality, and commercial certainty.</p>
              </div>
            </div>
            
            {/* Desktop Filters */}
            <div className="flex gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"/>
                <input 
                  type="text" 
                  placeholder="SEARCH DELIVERABLES" 
                  value={searchTerm}
                  onChange={e=>setSearchTerm(e.target.value)}
                  className="bg-black/40 border border-white/10 pl-12 pr-4 py-4 text-[12px] uppercase tracking-widest text-white placeholder:text-white/30 focus:outline-none focus:border-[#CEAA6A]/50 w-full sm:w-72 transition-colors font-mono"
                />
              </div>
              <div className="relative">
                <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#CEAA6A]"/>
                <select 
                  value={filterSection}
                  onChange={e=>setFilterSection(e.target.value)}
                  className="bg-[#CEAA6A]/10 border border-[#CEAA6A]/30 pl-12 pr-12 py-4 text-[12px] uppercase tracking-widest text-[#CEAA6A] focus:outline-none focus:border-[#CEAA6A] appearance-none cursor-pointer transition-colors font-mono"
                >
                  {uniqueSections.map(s => <option key={s} value={s} className="bg-[#1A1613]">{s}</option>)}
                </select>
              </div>
            </div>
          </Rev>

          {/* Masonry/Grid of Deliverable Cards */}
          <div className="flex-1 min-h-[50vh] flex flex-col relative w-full mt-10">
             {filteredDeliverables.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredDeliverables.map((row, i) => (
                    <div key={i} className="group relative bg-[#12100E] border border-white/10 p-8 hover:border-[#CEAA6A]/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(206,170,106,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[320px]">
                      
                      {/* Subtle Top Gradient */}
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEAA6A]/0 to-transparent group-hover:via-[#CEAA6A]/50 transition-all duration-700"/>
                      
                      {/* Top Section */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-[12px] text-white/30 font-mono tracking-widest bg-white/[0.02] px-3 py-1 border border-white/5 group-hover:border-[#CEAA6A]/20 group-hover:text-[#CEAA6A] transition-colors">{(i+1).toString().padStart(3,'0')}</span>
                          <span className="text-[11px] text-[#CEAA6A]/80 uppercase tracking-[0.2em] font-[800]">{row.section}</span>
                        </div>
                        <h3 className="text-[20px] lg:text-[22px] text-white font-[900] leading-tight mb-4 group-hover:text-[#CEAA6A] transition-colors">{row.document}</h3>
                        <p className="text-[14px] md:text-[15px] leading-relaxed text-white/50">{row.description}</p>
                      </div>
                      
                      {/* Bottom Governance Flag */}
                      <div className="border-t border-white/10 pt-6 mt-auto">
                        <div className="flex flex-col gap-2">
                          <span className={`${TX.micro} text-emerald-500/50`}>GOVERNANCE VALUE</span>
                          <div className="flex items-start gap-3">
                            <ShieldCheck size={16} className="text-emerald-400 mt-0.5 shrink-0"/>
                            <span className="text-[13px] md:text-[14px] text-emerald-400/90 font-[700] leading-snug">{row.value}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             ) : (
                <div className="w-full text-center py-24 bg-[#12100E] border border-white/10">
                  <span className="text-[13px] text-white/30 font-mono uppercase tracking-widest">No deliverables found matching current parameters.</span>
                </div>
             )}
          </div>
          
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(206,170,106,0.2); border-radius: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(206,170,106,0.4); }
          `}</style>
        </div>
      </section>

      {/* ── SECTION 04: STAKEHOLDER ALIGNMENT & ENGAGEMENT ── */}
      <section id="stakeholders" className="bg-[#1A1613] pt-40 pb-48 px-6 border-b border-[#CEAA6A]/15 overflow-hidden relative">
        <Blueprint id="stake-bp" opacity={0.03} dark/>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(206,170,106,0.05)_0%,transparent_50%)] pointer-events-none"/>

        <div className="container mx-auto max-w-[90rem] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Stakeholder Alignment */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className={`${TX.micro} text-[#CEAA6A] flex items-center gap-3 mb-6`}>
                <span className="w-8 h-px bg-[#CEAA6A]"></span> STAKEHOLDER ALIGNMENT
              </span>
              <h2 className={`${TX.h2} text-white mb-6`}>Governance protects<br/>all parties.</h2>
              <p className={`${TX.body} text-white/50 mb-12`}>True alignment isn't just communication; it's providing specific, documented value and control evidence to each stakeholder acting on the project.</p>

              <div className="flex flex-col gap-4">
                {STAKEHOLDERS.map((s,i)=>(
                  <Rev key={s.group} delay={0.1*i} from="left">
                    <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#CEAA6A]/40 transition-colors group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-[#CEAA6A]">
                            {i===0?<Building2 size={24}/>:i===1?<LineChart size={24}/>:i===2?<Layers size={24}/>:<HardHat size={24}/>}
                          </div>
                          <h3 className="text-[13px] font-[800] uppercase tracking-widest text-white group-hover:text-[#CEAA6A] transition-colors">{s.group}</h3>
                        </div>
                        <span className="text-[10px] text-white/20 font-mono">SH-{String(i+1).padStart(2,'0')}</span>
                      </div>
                      <p className="text-xs text-white/60 font-[500] leading-relaxed pl-10 border-l border-white/10 ml-3">
                        {s.needs}
                      </p>
                    </div>
                  </Rev>
                ))}
              </div>
            </div>

            {/* Right: Engagement Modes */}
            <div className="lg:col-span-7">
              <div className="bg-[#12100E] border border-white/10 p-8 lg:p-12 relative overflow-hidden h-full flex flex-col">
                <img src={docPackImg} alt="Document Pack Background" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none" />
                <div className="relative z-10">
                  <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>POST-AWARD INTEGRATION</span>
                  <h3 className="text-3xl font-[900] text-white mb-10">Engagement Modes</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {MODES.map((mode, i) => (
                      <Rev key={mode.mode} delay={0.1*i}>
                        <div className={`p-6 border flex flex-col h-full bg-[#1A1613] relative group transition-all duration-300 ${i===1?'border-[#CEAA6A]/50 shadow-[0_0_30px_rgba(206,170,106,0.1)] -translate-y-2':'border-white/10 hover:border-[#CEAA6A]/30'}`}>
                          {i===1 && <div className="absolute top-0 inset-x-0 h-[2px] bg-[#CEAA6A]"/>}
                          
                          <div className="mb-6">
                            <span className={`${TX.micro} ${i===1?'text-[#CEAA6A]':'text-white/30'} flex justify-between items-center mb-2`}>
                              {mode.type}
                              {i===1 && <span className="w-1.5 h-1.5 rounded-full bg-[#CEAA6A] animate-pulse"/>}
                            </span>
                            <h4 className={`text-lg font-[900] ${i===1?'text-white':'text-white/80'}`}>{mode.mode}</h4>
                          </div>
                          
                          <p className={`text-[11px] font-[500] leading-relaxed mb-6 flex-1 border-l-2 pl-3 py-1 ${i===1?'text-white/70 border-[#CEAA6A]/50':'text-white/40 border-white/10'}`}>
                            {mode.bestFor}
                          </p>
                          
                          <div>
                            <span className={`${TX.micro} ${i===1?'text-[#CEAA6A]/60':'text-white/20'} block mb-3`}>INCLUDED CONTROLS</span>
                            <ul className="flex flex-col gap-2">
                              {mode.includes.map(inc=>(
                                <li key={inc} className={`flex items-start gap-2 text-[10px] font-[600] ${i===1?'text-white/90':'text-white/50'}`}>
                                  <span className={i===1?'text-[#CEAA6A]':'text-white/20'}>+</span> {inc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Rev>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 05: PROJECT INITIATION (Monolithic CTA) ── */}
      <section id="cta-band" className="bg-[#1A1613] min-h-[100svh] py-40 px-6 text-center relative overflow-hidden flex flex-col justify-center">
        <Blueprint id="cta-bp" opacity={0.02} dark/>
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <Rev className="flex flex-col items-center w-full">
            <div className="w-16 h-16 border border-[#CEAA6A]/30 flex items-center justify-center mb-8 bg-[#1A1613] rotate-45">
               <div className="w-8 h-8 bg-[#CEAA6A] flex items-center justify-center -rotate-45">
                 <ShieldCheck size={16} className="text-[#12100E]"/>
               </div>
            </div>
            
            <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>FINAL STAGE INTEGRATION</span>
            <h2 className={`${TX.xl} text-white mb-6 tracking-tighter`}>Command The<br/>Execution.</h2>
            <p className={`${TX.body} text-white/50 mb-12 max-w-2xl mx-auto`}>
              Mega-projects fail in the undefined margins. Transfer the engineering risk, lock in the commercial boundaries, and let our governed frameworks guarantee absolute certainty from extraction to final handover.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
              <Link to="/contact-us#rfq"
                className="group relative flex items-center justify-center gap-3 bg-[#CEAA6A] text-[#12100E] px-12 py-6 font-[900] text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">SECURE PROJECT DELIVERY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/></span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"/>
              </Link>
              
              <a href="#" className={`group flex items-center justify-center gap-3 border border-white/20 bg-transparent text-white px-12 py-6 font-[900] text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:border-[#CEAA6A] hover:bg-[#1A1613] w-full sm:w-auto`}>
                <span className="flex items-center gap-2">DOWNLOAD MASTER PROTOCOL <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#CEAA6A] opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0"/></span>
              </a>
            </div>
          </Rev>
        </div>
      </section>

      {/* ── Trust Footer ── */}
      <LightFooterWithMap />

    </SiteLayout>
  );
};

export default ProjectSupports;
