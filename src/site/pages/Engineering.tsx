/**
 * Engineering — /engineering
 * 8 full-viewport sections, Home-consistent design language
 * Light/Dark alternating bands, 4-token typography, GSAP reveal, interactive workstream tiles
 */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../layout/SiteLayout';
import LightFooterWithMap from '../sections/LightFooterWithMap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, ShieldCheck, AlertTriangle, Shuffle, FileCheck,
  Ruler, Layers, BookOpen, Cpu, ClipboardList, Leaf,
  HardHat, BarChart3, Clock, Package2, Map, Wrench, Check, Plus
} from 'lucide-react';
import heroBg from '../assets/generated/rs_engineering_hero_bg_v01.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Typography tokens (4 only) ─── */
const TX = {
  xl:    'text-[clamp(3rem,6vw,6.5rem)] font-[900] font-manrope leading-[0.88] tracking-[tighter]',
  h2:    'text-[clamp(2.5rem,5vw,5.2rem)] font-[900] font-manrope leading-[0.9] tracking-tight',
  body:  'text-[clamp(1rem,1.3vw,1.15rem)] font-[500] leading-relaxed',
  micro: 'text-[11px] font-[900] uppercase tracking-[0.3em]',
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

/* ─── Shared primitives ─── */
const GC: React.FC<{ children: React.ReactNode; className?: string; dark?: boolean; onClick?: ()=>void }> = ({ children, className='', dark=false, onClick }) => {
  const isInteractive = !!onClick;
  return (
    <div onClick={onClick} className={`border transition-all duration-300 ${isInteractive ? 'cursor-pointer' : ''} ${
      dark ? 'bg-white/[0.02] border-white/10 hover:border-[#CEAA6A]/40'
           : 'bg-black/[0.02] border-black/10 hover:border-[#CEAA6A]/50'
    } ${className}`}>{children}</div>
  );
};

const Blueprint: React.FC<{ id: string; opacity?: number; dark?: boolean }> = ({ id, opacity=0.04, dark=false }) => (
  <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ opacity }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#CEAA6A" strokeWidth="0.7"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  </div>
);

const GoldDot = () => <span className="w-1.5 h-1.5 rounded-full bg-[#CEAA6A] shrink-0 inline-block mt-1.5"/>;

/* ─── Workstream data ─── */
const WORKSTREAMS_BASE = [
  { id:'design-assist', icon:<Wrench size={16}/>, title:'Design Assist & VE', risk:'Scope misalignment eliminated early.',
    why:'Late-stage material changes cost 3–5× upfront clarification.', how:'We engage at concept/SD stage to align stone systems with structural intent, budgets, and interface logic.', outputs:[{name:'Design Assist Report', desc:'Early-stage validation of structural interfaces and material suitability.'},{name:'Interface Alignment Log', desc:'Documented resolution of trade boundary clashes.'},{name:'Value-Engineering Options Matrix', desc:'Cost/Benefit analysis of alternative stone systems.'}] },
  { id:'submittals', icon:<FileCheck size={16}/>, title:'Submittals (TDS/MAR)', risk:'Approval friction and consultant rework.',
    why:'Incomplete submittals cause multi-cycle delays.', how:'We prepare MAR-format technical submittals with samples, finish references, and specification alignment statements.', outputs:[{name:'Material Approval Request (MAR)', desc:'Formal submittal package for consultant sign-off.'},{name:'Technical Data Sheet (TDS)', desc:'Physical and mechanical property certification.'},{name:'Finish Reference Sheet', desc:'Visual baseline for acceptable aesthetic variance.'}] },
  { id:'as-built', icon:<Map size={16}/>, title:'As-Built Records', risk:'Post-installation disputes and warranty gaps.',
    why:'Without as-built documentation, responsibility becomes disputed.', how:'We capture layout, dimensions, batch references, and deviation notes throughout installation.', outputs:[{name:'As-Built Drawings', desc:'Final accurate record of in-situ installation.'},{name:'Deviation Log', desc:'Itemized tracking of site-driven dimensional changes.'},{name:'Panel Traceability Map', desc:'Index linking specific installed panels to their production batch.'}] },
  { id:'load-study', icon:<BarChart3 size={16}/>, title:'Load Study', risk:'Structural failures and over-engineering.',
    why:'Untested load assumptions lead to anchor failures or over-specified systems.', how:'We document load parameters, fixing logic, and wind exposure categorization early.', outputs:[{name:'Loads Summary Report', desc:'Calculation of dead and live loads on the fixing system.'},{name:'Fixing Method Statement', desc:'Engineered procedure for safe and compliant anchor installation.'},{name:'Structural Coordination Note', desc:'Formal alignment between stone engineers and the primary structural consultant.'}] },
  { id:'shop-drawings', icon:<Ruler size={16}/>, title:'Shop Drawings & BIM', risk:'On-site dimensional clashes.',
    why:'Undocumented cut plans cause material waste and site delays.', how:'We produce coordinated shop drawings at LOD-350 with clash-check sign-off.', outputs:[{name:'Coordinated Shop Drawings', desc:'Fully dimensioned fabrication and installation plans.'},{name:'BIM LOD-350 Objects', desc:'Intelligent 3D models integrated into the master federated model.'},{name:'Clash Report', desc:'Identification and resolution of spatial conflicts prior to site.'}] },
  { id:'boq', icon:<ClipboardList size={16}/>, title:'BOQ & Quantity Support', risk:'Budget surprises and scope creep.',
    why:'Inaccurate quantities cause procurement failures and programme risk.', how:'We prepare detailed takeoff schedules and phased BOQs aligned to the approved layout.', outputs:[{name:'Bill of Quantities (BOQ)', desc:'Itemized pricing schedule derived directly from approved shop drawings.'},{name:'Phased Quantity Schedule', desc:'Time-linked breakdown of required materials per programme phase.'},{name:'Material Call-Off Plan', desc:'Strategic ordering schedule to govern factory production and site storage.'}] },
  { id:'scheduling', icon:<Clock size={16}/>, title:'Time Scheduling & Method Statement', risk:'Programme misalignment.',
    why:'Stone installation logic must be planned against cladding and wet-trade programmes.', how:'We produce method statements with ITP hold points and delivery sequence logic.', outputs:[{name:'Integrated Programme', desc:'Stone delivery sequence linked to the master construction schedule.'},{name:'Method Statement', desc:'Step-by-step procedural governance for safe installation.'},{name:'Traffic / Delivery Plan', desc:'Logistics map governing truck movements and offloading at the project site.'}] },
  { id:'cost', icon:<BarChart3 size={16}/>, title:'Cost Estimation & Control', risk:'Budget drift.',
    why:'Stone costs are volatile without locked scope and unit rates.', how:'We provide itemized cost plans with risk allowances and change-order governance.', outputs:[{name:'Elemental Cost Plan', desc:'High-level budgeting based on historical metrics and schematic design.'},{name:'Unit Rate Schedule', desc:'Hard-locked rates for variations calculation.'},{name:'Variation Management Log', desc:'Strict tracking of approved vs. pending cost impacts.'}] },
  { id:'tracking', icon:<Package2 size={16}/>, title:'Tracking Delivery & Inspections', risk:'Undetected non-conformance on site.',
    why:'Uninspected deliveries carry hidden defects that surface post-installation.', how:'We implement pre-delivery inspection protocols and site QA registers.', outputs:[{name:'Delivery Inspection Checklist', desc:'Protocol for validating material condition upon arrival.'},{name:'Non-Conformance Register', desc:'Tracking and close-out of damaged or out-of-spec deliveries.'},{name:'Batch Tracking Sheet', desc:'Linking site pallets back to specific factory production runs.'}] },
  { id:'records', icon:<BookOpen size={16}/>, title:'Records & Documentation', risk:'Warranty and accountability exposure.',
    why:'Records protect the owner, consultant, and contractor at handover.', how:'We compile full project records into a structured handover package.', outputs:[{name:'Document Register', desc:'Master index of all technical submissions and dynamic revisions.'},{name:'Handover Package', desc:'Consolidated O&M data, warranties, and as-builts.'},{name:'Digital Archive Index', desc:'Searchable repository of all project communication and approvals.'}] },
  { id:'quality', icon:<ShieldCheck size={16}/>, title:'Quality & Warranty', risk:'Post-installation defects with no recourse.',
    why:'Undocumented quality processes leave defects under dispute.', how:'We govern QA from incoming material → in-process → delivery → warranty response.', outputs:[{name:'Inspection Test Plan (ITP)', desc:'The master QA workflow dictating physical hold and witness points.'},{name:'Warranty Certificate', desc:'Formal backing of system performance post-handover.'},{name:'Non-Conformance Issue Log', desc:'Centralized tracking for corrective and preventative actions.'}] },
  { id:'hse-env', icon:<Leaf size={16}/>, title:'HSE & Green Building', risk:'Incident liability and compliance failure.',
    why:'Without documented HSE protocols, incidents translate to legal and financial exposure.', how:'We integrate safety-by-design into every method statement and installation protocol.', outputs:[{name:'Task Risk Assessment (TRA)', desc:'Identification of specific hazards linked to stone handling.'},{name:'HSE Compliance Register', desc:'Evidence of adherence to local and international safety mandates.'},{name:'Sustainability Evidence File', desc:'Documentation required for LEED or Mostadam certification points.'}] },
];

let globalOutputCounter = 1;

const WORKSTREAMS = WORKSTREAMS_BASE.map(ws => {
  return {
    ...ws,
    outputs: ws.outputs.map(out => ({
      ...out,
      globalIndex: globalOutputCounter++
    }))
  };
});

// Calculate the 13th unified section dynamically
const allDeliverables = WORKSTREAMS_BASE.flatMap(ws => ws.outputs).map((out, index) => ({
  ...out,
  globalIndex: index + 1
}));

WORKSTREAMS.push({
  id: 'all-systems',
  icon: <Layers size={16}/>,
  title: 'RiyadhStone (All Deliverables)',
  risk: 'Total system overview.',
  why: 'A comprehensive view of all 36 mandatory engineering outputs governing the project lifecycle.',
  how: 'We execute every protocol listed below across the project duration, ensuring zero gaps in the documentation chain.',
  outputs: allDeliverables
});

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
const Engineering: React.FC = () => {
  const [activeWS, setActiveWS] = useState(WORKSTREAMS[0]);

  /* Mouse glow */
  useEffect(() => {
    const fn = (e: MouseEvent) => gsap.to('.eng-glow', { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <SiteLayout>
      <div className="rs-noise-overlay"/>
      <div className="eng-glow fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full bg-[radial-gradient(circle,rgba(206,170,106,0.06)_0%,transparent_60%)] pointer-events-none z-50 mix-blend-screen"/>

      {/* ── SECTION 1: THE ENGINEERING ARGUMENT (Hero) ── */}
      <section
        id="engineering"
        className="relative min-h-[100svh] flex flex-col justify-center px-6 overflow-hidden bg-[#120E0B]"
        style={{
          backgroundImage:`url(${heroBg})`,
          backgroundAttachment:'fixed', backgroundSize:'cover', backgroundPosition:'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#120E0B]/80 via-[#1A1410]/95 to-[#1A1410] z-0 pointer-events-none"/>
        <Blueprint id="hero-bp" opacity={0.05} dark />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#CEAA6A_0%,transparent_50%)] opacity-[0.03] mix-blend-screen pointer-events-none"/>

        <div className="container mx-auto max-w-[90rem] relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center" style={{animation:'heroin .75s cubic-bezier(.22,1,.36,1) both'}}>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 mb-8 w-fit rounded-none shadow-sm">
                <span className="w-2.5 h-2.5 bg-[#CEAA6A] animate-pulse rounded-none"/>
                <span className={`${TX.micro} text-[#CEAA6A]`}>RS Master Protocol v2.x</span>
              </div>
              <h1 className={`${TX.xl} text-white mb-8`}>
                Risk-Controlled<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CEAA6A] to-[#8C6D3F]">Stone Delivery</span>
              </h1>
              <p className={`${TX.body} text-white/70 max-w-xl mb-12`}>
                Stone is not the risk. Undocumented expectations are. For mega-scale projects, we engineer the control points — governing complex interfaces, commanding tolerances, and enforcing validation before procurement.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact-us#rfq"
                  className="flex justify-center items-center gap-3 border-[2px] border-[#CEAA6A] bg-[#CEAA6A] text-[#12100E] px-12 py-5 font-[900] text-[12px] uppercase tracking-widest hover:bg-[#1A1410] hover:text-[#CEAA6A] transition-all duration-300 rounded-none shadow-[0_10px_40px_-10px_rgba(206,170,106,0.3)]">
                  <ArrowRight size={16}/> Initiate Review
                </Link>
                <a href="#deliverables"
                  className="flex justify-center items-center gap-3 border-[2px] border-white/20 bg-transparent text-white px-12 py-5 font-[900] text-[12px] uppercase tracking-widest hover:border-[#CEAA6A] hover:text-[#CEAA6A] hover:bg-white/5 transition-all duration-300 rounded-none">
                  Explore Matrix
                </a>
              </div>
            </div>

            {/* Right 3-Card Stack */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row h-auto lg:h-[500px] gap-4 relative items-stretch justify-end" style={{animation:'heroin .85s .12s cubic-bezier(.22,1,.36,1) both'}}>
              {[
                { title: "Absolute Validation", desc: "Forcing verifiable checks prior to raw material commitment.", icon: <ShieldCheck size={28} className="text-[#CEAA6A]"/> },
                { title: "Micro-Tolerance", desc: "Governing fabrication boundaries with uncompromising precision.", icon: <Ruler size={28} className="text-[#CEAA6A]"/> },
                { title: "Data Traceability", desc: "Every stone unit tracked, logged, and permanently indexed.", icon: <Layers size={28} className="text-[#CEAA6A]"/> },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col items-center text-center justify-center hover:bg-[#CEAA6A]/5 hover:border-[#CEAA6A]/40 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#CEAA6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"/>
                  <div className="w-16 h-16 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#CEAA6A]/20 transition-colors shadow-sm relative z-10 shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-[14px] font-[900] text-white uppercase tracking-widest mb-4 leading-tight relative z-10">{item.title}</h4>
                  <p className="text-[12px] text-white/50 leading-relaxed font-[500] relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY ENGINEERING-FIRST (Risk Cards) ── */}
      <section id="why" className="relative min-h-[100svh] flex flex-col justify-center px-6 py-24 bg-[#16120F] border-b border-white/5 overflow-hidden">
        <Blueprint id="why-bp" opacity={0.03} dark />
        <div className="container mx-auto max-w-[90rem] relative z-10">
          <div className="border border-white/10 bg-[#1A1410]/60 backdrop-blur-xl p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[#CEAA6A]/5 pointer-events-none mix-blend-color-dodge"/>
            <Rev className="mb-16 text-center max-w-4xl mx-auto relative z-10">
               <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>The Argument</span>
               <h2 className={`${TX.h2} text-white mb-6 uppercase tracking-tighter`}>Why Engineering-First</h2>
               <p className={`${TX.body} text-white/60`}>Procurement-first delivery inherits undocumented risk. Our engineering practice anticipates and closes failure modes before physical commitments are made.</p>
            </Rev>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {icon:<AlertTriangle size={24}/>, title:'Scope Risk', fail:'Missing requirements surface late.', control:'Boundary definition + interface alignment.', ev:['Alignment Log']},
                {icon:<Layers size={24}/>, title:'Interface Risk', fail:'Late trade clashes.', control:'LOD-350 BIM coordination.', ev:['Shop Drawings']},
                {icon:<Ruler size={24}/>, title:'Tolerance Risk', fail:'Fit/finish failures on site.', control:'Governed dimensional boundaries.', ev:['Dimensional QA']},
                {icon:<FileCheck size={24}/>, title:'Approval Risk', fail:'Multi-cycle rework.', control:'MAR-format strict alignment.', ev:['MAR Pack']},
              ].map((card,i)=>(
                <Rev key={card.title} delay={0.1*i} className="h-full">
                  <div className="group border border-white/10 bg-[#120E0B] hover:border-[#CEAA6A]/40 transition-colors p-8 lg:p-10 h-full flex flex-col items-start relative overflow-hidden min-h-[380px]">
                    <div className="w-16 h-16 bg-black/40 border border-white/10 flex items-center justify-center text-[#CEAA6A] mb-8 shadow-sm group-hover:bg-[#CEAA6A] group-hover:text-[#1A1410] transition-colors rounded-none shrink-0">
                      {card.icon}
                    </div>
                    <h4 className="text-[20px] font-[900] text-white uppercase tracking-widest mb-6">{card.title}</h4>
                    <p className="text-[14px] text-red-500/80 font-[700] mb-4 uppercase tracking-wider">Failure: <span className="font-[500] text-white/60 normal-case tracking-normal">{card.fail}</span></p>
                    <p className="text-[14px] text-[#CEAA6A]/90 font-[700] mb-8 uppercase tracking-wider">Control: <span className="font-[500] text-white/60 normal-case tracking-normal">{card.control}</span></p>
                    
                    <div className="mt-auto pt-6 border-t border-white/10 w-full flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className="text-[12px] text-[#CEAA6A] font-[900] tracking-widest uppercase">Evidence</span>
                      <span className="text-[13px] text-white font-[700] uppercase tracking-widest">{card.ev[0]}</span>
                    </div>
                  </div>
                </Rev>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE GOVERNED WORKSTREAMS (Systems Layout) ── */}
      <section id="workstreams" className="bg-[#16120F] h-[100svh] min-h-[800px] relative flex flex-col justify-center py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#CEAA6A_0%,transparent_50%)] opacity-[0.03] pointer-events-none"/>
        <Blueprint id="ws-bp" opacity={0.03} dark />
        
        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col lg:flex-row gap-12 items-stretch h-full max-h-[1000px]">
          
          {/* Left Text & Matrix Controls */}
          <div className="lg:w-1/3 flex flex-col shrink-0 h-full">
            <Rev className="mb-6 shrink-0">
              <span className={`${TX.micro} text-[#CEAA6A] block mb-2`}>Core Architecture</span>
              <h2 className={`${TX.h2} text-white mb-3 leading-none tracking-tighter uppercase text-[clamp(1.8rem,3vw,2.5rem)]`}>12 Disciplines.<br/>One Matrix.</h2>
              <p className={`${TX.body} text-white/50 text-[14px] leading-relaxed max-w-md`}>Selecting from these technical capabilities allows consultants and mega-project teams to compose a custom engineering intervention.</p>
            </Rev>
            
            <div className="flex flex-col flex-1 overflow-y-auto custom-scrollbar border border-white/10 bg-[#120E0B]">
              {WORKSTREAMS.map((ws, i) => (
                <button
                  key={ws.id}
                  onClick={() => setActiveWS(ws)}
                  className={`group flex items-center justify-between px-5 py-3 border-b border-white/5 last:border-b-0 transition-colors text-left flex-1 ${
                    activeWS.id === ws.id 
                      ? 'bg-[#1A1410] text-[#CEAA6A] outline outline-[1px] outline-offset-[-1px] outline-[#CEAA6A]' 
                      : 'bg-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`${activeWS.id === ws.id ? 'text-[#CEAA6A]' : 'text-white/40 group-hover:text-[#CEAA6A]'}`}>
                      {React.cloneElement(ws.icon as React.ReactElement, { size: 18 })}
                    </span>
                    <span className={`text-[13px] font-[900] uppercase tracking-widest ${activeWS.id === ws.id ? 'text-white' : 'text-white/80'}`}>
                      {ws.title}
                    </span>
                  </div>
                  <ArrowRight size={16} className={`${activeWS.id === ws.id ? 'text-[#CEAA6A]' : 'text-white/20 group-hover:text-[#CEAA6A]'} transition-transform ${activeWS.id !== ws.id ? '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100' : ''}`}/>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detailed Output */}
          <div className="lg:w-2/3 w-full h-full flex mt-6 lg:mt-0">
            <div className="bg-[#120E0B] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-12 flex flex-col relative overflow-hidden rounded-none w-full h-full">
               <div className="absolute inset-0 bg-[#CEAA6A]/5 pointer-events-none" />
               <div className="relative z-10 flex items-center gap-5 border-b border-white/10 pb-8 mb-8 shrink-0">
                  <div className="w-20 h-20 bg-[#1A1410] text-[#CEAA6A] flex items-center justify-center border border-[#CEAA6A]/50 rounded-none shadow-md shrink-0">
                     {React.cloneElement(activeWS.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div>
                    <span className={`${TX.micro} text-white/40 block mb-1`}>Selected Workstream</span>
                    <h3 className={`${TX.h2} text-[clamp(2rem,3.5vw,3.5rem)] text-white tracking-tight leading-none uppercase`}>{activeWS.title}</h3>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-white/10 pb-8 relative z-10 shrink-0">
                 <div>
                   <span className={`${TX.micro} text-red-500 block mb-3`}>The Critical Risk</span>
                   <p className={`${TX.body} text-white/80 leading-relaxed font-[700] text-[15px]`}>{activeWS.why}</p>
                 </div>
                 <div>
                   <span className={`${TX.micro} text-[#CEAA6A] block mb-3`}>Engineered Control</span>
                   <p className={`${TX.body} text-[#CEAA6A] leading-relaxed font-[700] text-[15px]`}>{activeWS.how}</p>
                 </div>
               </div>

               <div className="relative z-10 flex-1 flex flex-col min-h-0">
                 <span className={`${TX.micro} text-white/50 block mb-6`}>Formal Deliverables ({activeWS.outputs.length})</span>
                 <div className="flex flex-col gap-4 overflow-y-auto pr-4 custom-scrollbar">
                   {activeWS.outputs.map((o)=>(
                      <div key={o.globalIndex} className="relative flex flex-col gap-2 p-5 bg-[#1A1410] border border-white/10 shadow-sm rounded-none overflow-hidden">
                        {/* High transparency floating number in bottom-left */}
                        <div className="absolute -bottom-4 -left-2 text-[50px] font-[900] text-white/5 leading-none pointer-events-none select-none z-0">
                          {String(o.globalIndex).padStart(2, '0')}
                        </div>
                        
                        <div className="flex items-start gap-4 z-10">
                          <Check size={18} className="text-[#CEAA6A] shrink-0 mt-0.5" />
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-[14px] font-[900] text-white uppercase tracking-widest leading-tight">{o.name}</span>
                            <span className="text-[13px] text-white/60 font-[500] leading-snug">{o.desc}</span>
                          </div>
                        </div>
                      </div>
                   ))}
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/5 text-right shrink-0">
                   <span className={`${TX.micro} text-white/40 inline-block px-3 py-1 bg-white/5`}>System Output Governed</span>
                 </div>
               </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ── SECTION 4: QUALITY & SAFETY GOVERNANCE (Edge-to-Edge Dark Split) ── */}
      <section id="qa-hse" className="bg-[#120E0B] h-[100svh] min-h-[800px] relative overflow-hidden border-b border-white/5 flex flex-col lg:flex-row">
        
        {/* Quality Half */}
        <div className="flex-1 border-b lg:border-b-0 lg:border-r border-white/10 p-10 lg:p-20 relative overflow-hidden">
          <Blueprint id="qa-bp" opacity={0.03} dark />
          <Rev className="relative z-10 h-full flex flex-col justify-center max-w-2xl mx-auto">
            <span className={`${TX.micro} text-[#CEAA6A] flex items-center gap-2 mb-4`}><ShieldCheck size={12}/> QA/QC System</span>
            <h2 className="text-[2.5rem] lg:text-[3.5rem] font-[900] font-manrope text-white leading-tight mb-8">Quality is a System.<br/><span className="text-[#CEAA6A]">Not a Checklist.</span></h2>
            
            <p className={`${TX.body} text-white/60 mb-12`}>
              Every decision is documented — from raw block extraction through milling tolerances to delivery sign-off. Records are compiled into an indisputable handover asset.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {label:'In-Process Verification', val: <><span className="text-[#CEAA6A]">Tolerances</span> commanded during milling.</>},
                {label:'Finish Consistency', val: <><span className="text-[#CEAA6A]">Governed</span> against physical FRB Masters.</>},
                {label:'Non-Conformance', val: <><span className="text-[#CEAA6A]">Identified</span> prior to site manifestation.</>},
                {label:'Material Tracking', val: <><span className="text-[#CEAA6A]">End-to-end</span> batch traceability.</>},
                {label:'Delivery Inspection', val: <><span className="text-[#CEAA6A]">Pre-verified</span> units reaching the site.</>}
              ].map(item=>(
                <div key={item.label} className="border-l-2 border-[#CEAA6A] pl-5">
                  <span className="text-[15px] font-[900] text-white tracking-widest uppercase block mb-1">{item.label}</span>
                  <span className="text-[14px] text-white/70 font-[500]">{item.val}</span>
                </div>
              ))}
            </div>
          </Rev>
        </div>

        {/* Safety Half */}
        <div className="flex-1 p-10 lg:p-20 relative overflow-hidden bg-[#16120F]">
          <Blueprint id="hse-bp" opacity={0.03} dark />
          <Rev delay={0.1} className="relative z-10 h-full flex flex-col justify-center max-w-2xl mx-auto">
            <span className={`${TX.micro} text-[#CEAA6A] flex items-center gap-2 mb-4`}><HardHat size={12}/> HSE Architecture</span>
            <h2 className="text-[2.5rem] lg:text-[3.5rem] font-[900] font-manrope text-white leading-tight mb-8">Zero-Incident relies<br />on <span className="text-[#CEAA6A]">Engineered Logic.</span></h2>
            
            <p className={`${TX.body} text-white/60 mb-12`}>
              We integrate safety governance into every method statement — not as a reactive compliance layer, but as structured, actionable discipline aligned to the environment.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {label:'Task Risk Assessment', val: <>Pre-planning the <span className="text-[#CEAA6A]">hazard map</span> (TRA/JSA).</>},
                {label:'Handling Protocol', val: <>Approving <span className="text-[#CEAA6A]">lift capabilities</span> and vectors.</>},
                {label:'HSE Evidence File', val: <>Compiled site <span className="text-[#CEAA6A]">safety compliance</span> register.</>},
                {label:'Environmental Audits', val: <>Monitoring <span className="text-[#CEAA6A]">dust and water</span> mitigation.</>},
                {label:'Tool-Box Talks', val: <>Daily <span className="text-[#CEAA6A]">safety alignments</span> for site teams.</>}
              ].map(item=>(
                <div key={item.label} className="border-l-2 border-[#CEAA6A] pl-5">
                  <span className="text-[15px] font-[900] text-white tracking-widest uppercase block mb-1">{item.label}</span>
                  <span className="text-[14px] text-white/70 font-[500]">{item.val}</span>
                </div>
              ))}
            </div>
          </Rev>
        </div>

      </section>

      {/* ── SECTION 5: ENVIRONMENTAL STEWARDSHIP (Geometric Cards) ── */}
      <section id="environment" className="bg-[#0A0806] h-[100svh] min-h-[800px] flex flex-col justify-center px-6 py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 rs-noise-overlay opacity-20 mix-blend-overlay pointer-events-none"/>
        <Blueprint id="env-bp" opacity={0.03} dark />
        
        <div className="container mx-auto max-w-[90rem] relative z-10">
          <Rev className="mb-20 text-center max-w-3xl mx-auto">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}><Leaf size={14} className="inline mr-2 -mt-1"/>Provenance & Stewardship</span>
            <h2 className={`${TX.h2} font-[900] font-manrope text-[#CEAA6A] leading-[1] mb-6 tracking-tighter uppercase`}>Origin. Traceability. Legacy.</h2>
            <p className={`${TX.body} text-white/50`}>
              We align with LEED and Mostadam logic through aggressive lifecycle tracking. No greenwashing — just verified engineering metrics.
            </p>
          </Rev>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {val:'< 8%', unit:'Waste', title:'Digital Cut Optimsation', desc:'Optimizing yield algorithms to drastically reduce offcut generation during block conversion.'},
              {val:'100%', unit:'Recycled', title:'Closed-Loop Processing', desc:'Factory wet-cutting utilizes total reclaimed water filtering, eliminating fresh water burn.'},
              {val:'Local', unit:'Chain', title:'Regional Priority', desc:'Mandating KSA-quarried systems where applicable to compress embodied carbon footprint.'},
            ].map((m,i)=>(
              <Rev key={i} delay={0.1*i} className="h-full">
                <div className="group border border-[#CEAA6A]/20 bg-black/40 hover:bg-[#CEAA6A]/5 hover:-translate-y-2 transition-all duration-300 p-10 lg:p-14 h-full flex flex-col items-start relative overflow-hidden rounded-none shadow-2xl">
                  {/* Geometric Deco */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#CEAA6A]/10 to-transparent border-l border-b border-[#CEAA6A]/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-[-1] scale-y-[1] origin-top-right"/>
                  
                  <div className="flex items-baseline gap-2 mb-6 text-[#CEAA6A] border-b border-[#CEAA6A]/20 pb-6 w-full">
                    <span className="text-[3.5rem] lg:text-[4.5rem] font-[900] leading-none tracking-tighter block">{m.val}</span>
                    <span className="text-[14px] font-[900] uppercase tracking-widest bg-[#CEAA6A]/10 px-3 py-1 border border-[#CEAA6A]/30">{m.unit}</span>
                  </div>
                  <h4 className="text-[18px] font-[900] text-white uppercase tracking-widest mb-4 leading-tight">{m.title}</h4>
                  <p className="text-[14px] text-white/50 font-[500] leading-relaxed mb-8">{m.desc}</p>
                  
                  <div className="mt-auto w-full pt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-white/5">
                     <span className="text-[#CEAA6A] text-[10px] uppercase font-[900] tracking-widest">System Verified</span>
                     <span className="w-1.5 h-1.5 bg-[#CEAA6A] animate-pulse"></span>
                  </div>
                </div>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: DELIVERABLES MATRIX (Geometric & Creative) ── */}
      <section id="deliverables" className="bg-[#120E0B] min-h-[100svh] flex flex-col justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#CEAA6A_0%,transparent_60%)] opacity-[0.03] pointer-events-none"/>
        <Blueprint id="matrix-bp" opacity={0.05} dark />
        
        <div className="container mx-auto max-w-[90rem] relative z-10 h-full flex flex-col justify-center">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between mb-16">
            <Rev className="max-w-2xl">
              <span className={`${TX.micro} text-[#CEAA6A] block mb-3`}><FileCheck size={14} className="inline mr-2 -mt-1"/>Output Governance</span>
              <h2 className={`${TX.h2} text-white uppercase tracking-tighter mb-4`}>The Deliverables Matrix</h2>
              <p className={`${TX.body} text-white/70`}>Every engineering intervention results in a defined, submittable document. Strict formats, absolute accountability. The matrix below defines the standard mandatory outputs for a fully-governed project.</p>
            </Rev>
            <Rev delay={0.2} from="right" className="hidden lg:flex items-center gap-6">
              <div className="text-right">
                <span className="block text-[3rem] font-[900] text-white leading-none mb-1">15+</span>
                <span className={`${TX.micro} text-white/50`}>Standard Documents</span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-left">
                <span className="block text-[3rem] font-[900] text-white leading-none mb-1">100%</span>
                <span className={`${TX.micro} text-white/50`}>Traceability</span>
              </div>
            </Rev>
          </div>

          {/* Geometric Dashboard Grid */}
          <Rev delay={0.2} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                {c:'Base Inputs', i:['Site Survey Data','Interface Drawings','Consultant Brief']},
                {c:'Core Engineering', i:['Design Assist Report','Structural Coord. Note','Load Summary']},
                {c:'Approval Packs', i:['MAR Document','Finish Reference Sheet (FRB)','Spec Compliance Matrix']},
                {c:'Technical Design', i:['BIM LOD-350 Objects','Shop Drawings','Panel Schedules']},
                {c:'Quality/Safety', i:['ITP Register','Non-Conformance Log','Task Risk Assessment']},
              ].map((col, index)=>(
                <div key={col.c} className="bg-[#16120F] border border-white/10 flex flex-col relative overflow-hidden group hover:border-[#CEAA6A]/50 hover:shadow-2xl transition-all duration-300 min-h-[450px]">
                  
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-[700ms] ease-out opacity-20 group-hover:opacity-40"
                      style={{ backgroundImage: `url(${heroBg})`, filter: 'grayscale(100%)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-[#120E0B]/80 to-[#120E0B]/50" />
                  </div>

                  <div className="p-8 border-b border-white/10 bg-white/5 relative z-10">
                    <span className="text-[15px] font-[900] text-white uppercase tracking-widest">{col.c}</span>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col gap-4 relative z-10">
                    {col.i.map(out=>(
                      <div key={out} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#CEAA6A] rounded-none shrink-0 mt-2"/>
                        <span className="text-[13px] font-[700] text-white/80 uppercase tracking-wider leading-snug">{out}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Phase Number Deco - Moved to bottom */}
                  <div className="absolute bottom-6 left-8 text-[70px] font-[900] text-white/5 leading-none pointer-events-none group-hover:text-[#CEAA6A]/15 group-hover:-translate-y-2 transition-all duration-500 z-10">
                    0{index + 1}
                  </div>
                  
                  <div className="mt-auto h-2 w-full bg-white/5 group-hover:bg-[#CEAA6A] transition-colors duration-300 relative z-10" />
                </div>
              ))}
            </div>
          </Rev>

        </div>
      </section>

      {/* ── SECTION 7: LOCK THE SCOPE (Immersive CTA) ── */}
      <section id="connect" className="bg-[#120E0B] min-h-[100svh] flex flex-col justify-center items-center relative overflow-hidden px-6 py-24">
        {/* Massive Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120E0B] via-[#1A1410] to-[#120E0B] z-0"/>
        <Blueprint id="cta-bp" opacity={0.05} dark />
        
        {/* Animated Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#CEAA6A_0%,transparent_30%)] opacity-[0.015] pointer-events-none mix-blend-screen scale-[1.2] animate-[pulse_6s_ease-in-out_infinite]"/>
        
        <Rev className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 border border-[#CEAA6A]/30 bg-[#CEAA6A]/5 flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(206,170,106,0.1)]">
            <Wrench size={36} className="text-[#CEAA6A]" />
          </div>
          
          <span className={`${TX.micro} text-[#CEAA6A] block mb-8 tracking-[0.4em]`}>Connect With Engineering</span>
          <h2 className={`text-[clamp(3.5rem,7vw,8rem)] font-[900] font-manrope text-white uppercase tracking-tighter leading-none mb-10`}>
            Lock The <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#CEAA6A] to-[#8C6D3F]">Scope.</span>
          </h2>
          
          <p className="text-[clamp(1.1rem,1.5vw,1.4rem)] text-white/60 mb-16 max-w-3xl font-[500] leading-relaxed mx-auto">
            Forward your constraints, drawings, or structural queries. Our technical team responds with governed system options tailored for absolute precision. 
          </p>
          
          <Link to="/contact-us#rfq"
            className="group relative flex items-center justify-center gap-6 border border-[#CEAA6A]/50 bg-[#1A1410]/80 text-[#CEAA6A] px-16 py-8 font-[900] text-[16px] uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden shadow-[0_20px_60px_-15px_rgba(206,170,106,0.25)] hover:shadow-[0_20px_80px_-10px_rgba(206,170,106,0.4)]"
          >
            {/* Hover Fill Effect */}
            <div className="absolute inset-0 bg-[#CEAA6A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"/>
            
            <span className="relative z-10 group-hover:text-[#120E0B] transition-colors duration-300">Request Technical Consultation</span>
            <ArrowRight size={24} className="relative z-10 group-hover:text-[#120E0B] group-hover:translate-x-2 transition-all duration-300" />
            
            {/* Geometric Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#CEAA6A] z-20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#CEAA6A] z-20" />
          </Link>
          
          {/* Bottom Grid Coordinates / Meta */}
          <div className="mt-24 flex items-center gap-8 text-[11px] font-[900] uppercase tracking-widest text-[#CEAA6A]/40">
            <span>RiyadhStone® Protocol v2.5</span>
            <span className="w-2 h-2 bg-[#CEAA6A]/30 rounded-none"/>
            <span>Engineering Directive Active</span>
          </div>
        </Rev>
      </section>

      <LightFooterWithMap/>
    </SiteLayout>
  );
};

export default Engineering;
