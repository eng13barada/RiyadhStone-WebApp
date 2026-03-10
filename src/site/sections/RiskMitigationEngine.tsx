import React, { useEffect } from 'react';
import { 
  ArrowRight, Download, Scan, Microscope, Layers, Activity, 
  Box, Map, Cpu, ShieldCheck 
} from 'lucide-react';
import gsap from 'gsap';

import realityCaptureImg from '../assets/generated/rs_engineering_realitycapture_panel_v01.png';
import qaqcImg from '../assets/generated/rs_engineering_lab_qaqc_panel_v01.png';
import traceabilityImg from '../assets/generated/rs_engineering_traceability_panel_v01.png';
import instrumentsImg from '../assets/generated/rs_engineering_instruments_panel_v01.png';
import scanningImg from '../assets/generated/rs_engineering_3d_scanning_panel_v01.png';
import modularCladImg from '../assets/generated/rs_engineering_modular_clad_panel_v01.png';
import mechanicalImg from '../assets/generated/rs_engineering_mechanical_panel_v01.png';
import landscapeImg from '../assets/generated/rs_engineering_landscape_panel_v01.png';
import bespokeImg from '../assets/generated/rs_engineering_bespoke_int_panel_v01.png';

const RiskMitigationEngine: React.FC = () => {

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to('.rs-mouse-glow', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out'
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-[#24201C] text-white/90 selection:bg-[#CEAA6A]/30 font-sans w-full overflow-hidden">
      {/* Dynamic Mouse Glow */}
      <div className="rs-mouse-glow fixed top-0 left-0 w-[800px] h-[800px] -ml-[400px] -mt-[400px] rounded-full bg-[radial-gradient(circle,rgba(206,170,106,0.08)_0%,transparent_60%)] pointer-events-none z-50 mix-blend-screen" />

      {/* Global Dark Abstract Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4E3E2F_0%,transparent_70%)] opacity-30" />
        <div className="absolute inset-0 rs-noise-overlay opacity-10 mix-blend-overlay" />
      </div>

      {/* =========================================
          SECTION A+B (MERGED) — METHODOLOGY & RISK ENGINE
          ========================================= */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-center px-6 py-20 border-b border-white/5">
        <div className="container mx-auto max-w-[90rem]">

          {/* Section Label */}
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-[900] tracking-[0.4em] uppercase text-[#CEAA6A] block mb-2">ENGINEERED METHODOLOGY</span>
            <div className="w-16 h-px bg-[#CEAA6A]/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start relative">

            {/* ── BACKGROUND ENGRAVING ── */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
              <span className="absolute -top-4 -left-8 text-[18vw] font-[900] text-white/[0.018] leading-none tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_4px_24px_rgba(206,170,106,0.06)]">
                ENGINEER
              </span>
              <span className="absolute -bottom-4 -right-8 text-[18vw] font-[900] text-white/[0.018] leading-none tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_4px_24px_rgba(206,170,106,0.06)]">
                MITIGATE
              </span>
            </div>

            {/* ══ LEFT COLUMN — Engineering-Led ══ */}
            <div className="flex flex-col gap-10 relative z-10">

              {/* Label + Heading + Body */}
              <div className="flex flex-col">
                <span className="text-[14px] font-[900] font-manrope tracking-[0.45em] uppercase text-[#CEAA6A] block mb-4">
                  THE METHODOLOGY
                </span>
                <h2 className="text-[clamp(2.4rem,4vw,4.2rem)] font-[900] font-manrope leading-[0.88] tracking-tighter uppercase mb-6 text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.04)]">
                  ENGINEERING‑LED<br />
                  <span className="text-white/30">NOT SUPPLY‑DRIVEN</span>
                </h2>
                <div className="min-h-[90px] xl:min-h-[85px]">
                  <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] text-white/55 font-[500] leading-[1.75]">
                    RiyadhStone® <strong className="text-white font-[800]">reverses the procurement sequence</strong>, shifting from reactive supply to proactive control.<br />
                    We begin by analyzing your <strong className="text-white font-[800]">architectural intent</strong> and constraints, then proactively <strong className="text-white font-[800]">engineer the stone result</strong> with our protocol governs every detail ensuring strict <strong className="text-white font-[800]">delivery discipline</strong>.
                  </p>
                </div>
              </div>

              {/* 4 Steps — frameless */}
              <div className="flex flex-col gap-7 border-t border-white/[0.06] pt-8">
                {[
                  { num: '01', title: 'Understand Intent', desc: 'Translate architectural vision into measurable stone requirements.' },
                  { num: '02', title: 'Engineer the System', desc: 'Define interfaces, tolerance bands, and connection details.' },
                  { num: '03', title: 'Validate Before Fabrication', desc: 'Test packs, lab data, and mock-up sign-off before production begins.' },
                  { num: '04', title: 'Govern the Delivery', desc: 'Traceable records from quarry lot to installed panel.' },
                ].map(step => (
                  <div key={step.num} className="flex items-start gap-6 group">
                    <span className="text-[#CEAA6A]/25 font-[900] text-3xl font-manrope tabular-nums group-hover:text-[#CEAA6A]/60 transition-colors duration-300 shrink-0 w-8">{step.num}</span>
                    <div>
                      <h4 className="text-[20px] font-[900] text-white uppercase tracking-[0.08em] mb-1.5">{step.title}</h4>
                      <p className="text-[13px] text-white/45 font-[500] leading-[1.65]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ══ RIGHT COLUMN — Risk Mitigation ══ */}
            <div className="flex flex-col gap-10 relative z-10">

              {/* Label + Heading + Body */}
              <div className="flex flex-col">
                <span className="text-[14px] font-[900] font-manrope tracking-[0.45em] uppercase text-[#CEAA6A] block mb-4">
                  RISK MITIGATION ENGINE
                </span>
                <h2 className="text-[clamp(2.4rem,4vw,4.2rem)] font-[900] font-manrope leading-[0.88] tracking-tighter uppercase mb-6 text-white drop-shadow-[0_2px_20px_rgba(206,170,106,0.08)]">
                  REDUCE<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CEAA6A] to-[#E2C792]">PROJECT RISK</span>
                </h2>
                <div className="min-h-[90px] xl:min-h-[85px]">
                  <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] text-white/55 font-[500] leading-[1.75]">
                    In the natural stone industry, <strong className="text-white font-[800]">risk is not material variation</strong>; rather, it is unmanaged expectations.<br />
                    Our comprehensive <strong className="text-white font-[800]">methodology</strong> anticipates potential failures and structural conflicts early on.<br />
                    By deploying verified control measures, we systematically <strong className="text-white font-[800]">eliminate each risk category directly</strong>.
                  </p>
                </div>
              </div>

              {/* 4 Risk Items — frameless, mirroring left column structure */}
              <div className="flex flex-col gap-7 border-t border-white/[0.06] pt-8">
                {[
                  { num: '01', risk: 'Interface Conflict', how: 'Eliminated by engineered joint details in Step 02' },
                  { num: '02', risk: 'Dimensional Rejection', how: 'Prevented by tolerance validation in Step 03' },
                  { num: '03', risk: 'Documentation Gap', how: 'Closed by traceable delivery records in Step 04' },
                  { num: '04', risk: 'Expectation Drift', how: 'Managed by measurable intent definition in Step 01' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-6 group">
                    <span className="text-[#CEAA6A]/25 font-[900] text-3xl font-manrope tabular-nums group-hover:text-[#CEAA6A]/60 transition-colors duration-300 shrink-0 w-8">{item.num}</span>
                    <div>
                      <h4 className="text-[20px] font-[900] text-white uppercase tracking-[0.08em] mb-1.5">{item.risk}</h4>
                      <p className="text-[13px] text-white/45 font-[500] leading-[1.65]">{item.how}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          SECTION C & D (COMBINED)— INSTRUMENTS & SOLUTIONS
          ========================================= */}
      <section className="relative z-10 w-full min-h-[100svh] overflow-hidden flex flex-col justify-center px-6 py-12 md:py-16 border-b border-white/5">
        <div className="container mx-auto max-w-[90rem]">
          
          <div className="text-center mb-10 lg:mb-14 overflow-hidden">
             <span className="text-base md:text-lg font-black tracking-[0.4em] uppercase text-[#CEAA6A] block mb-3">
               INTEGRATED ECOSYSTEM
             </span>
             <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-[900] font-manrope leading-[0.9] tracking-tighter uppercase text-white mb-3">
               INSTRUMENTS & SOLUTIONS
             </h2>
             <p className="text-base lg:text-lg text-white/50 font-[500] leading-relaxed max-w-2xl mx-auto">
               We instrument the workflow so every decision is traceable, and deliver engineered systems aligned to project complexity.
             </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* 8 Combined Cards with square aspect ratio */}
            {[
              { title: 'Traceability', tag: 'ID / Batch', icon: <Cpu/>, desc: 'QR/BATCH logic linking quarry lot → slab → cutlist.', img: traceabilityImg },
              { title: 'Telemetry', tag: 'Live', icon: <Activity/>, desc: 'Status feed for production gates and dispatch.', img: instrumentsImg },
              { title: '3D Scanning', tag: 'LiDAR', icon: <Scan/>, desc: 'Reality capture to validate geometry and constraints.', img: scanningImg },
              { title: 'Lab QA/QC', tag: 'QA', icon: <Microscope/>, desc: 'Test packs and compliance evidence.', img: qaqcImg },
              { title: 'Modular Clad', tag: 'System', icon: <Layers/>, desc: 'Pre-assembled logic for controlled installation.', img: modularCladImg },
              { title: 'Mechanical', tag: 'System', icon: <Box/>, desc: 'Anchoring strategy engineered to load paths.', img: mechanicalImg },
              { title: 'Landscape', tag: 'System', icon: <Map/>, desc: 'Paving systems designed by exposure and duty.', img: landscapeImg },
              { title: 'Bespoke Int.', tag: 'System', icon: <ShieldCheck/>, desc: 'Book-matched intent governed through approvals.', img: bespokeImg }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-[#1A1613]/70 border border-white/5 hover:border-[#CEAA6A]/30 rounded-none p-5 lg:p-6 overflow-hidden transition-all duration-300 hover:bg-[#1F1A17] flex flex-col justify-between aspect-square">
                {item.img && <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen scale-100 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 pointer-events-none" />}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#CEAA6A_0%,transparent_50%)] group-hover:opacity-20 transition-opacity" />
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#CEAA6A] group-hover:-translate-y-1 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-[900] tracking-[0.2em] uppercase text-white/40 bg-white/5 px-2 py-1 rounded-none">
                    {item.tag}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-base lg:text-lg font-[800] text-white tracking-tight mb-2 uppercase leading-snug">{item.title}</h3>
                  <p className="text-sm text-white/50 font-[500] leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================
          SECTION E — REALITY CAPTURE
          ========================================= */}
      <section className="relative z-10 w-full flex flex-col justify-center px-6 py-10 lg:py-12 border-b border-white/5">
        <div className="container mx-auto max-w-[90rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 flex flex-col justify-between">
               <div>
                 <span className="text-sm md:text-base font-[900] font-manrope tracking-[0.4em] uppercase text-[#CEAA6A] block mb-4 lg:mb-6">
                   PRECISION MAPPING
                 </span>
                 <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-[900] font-manrope leading-[0.88] tracking-tighter uppercase text-white mb-6">
                   REALITY<br />CAPTURE
                 </h2>
                 <p className="text-[clamp(0.95rem,1.3vw,1.15rem)] text-white/60 font-[500] leading-relaxed mb-10">
                   We deploy LiDAR and photogrammetric capture to build a spatial foundation for every engineered decision—before a single cut begins.
                 </p>
               </div>

               {/* Service cards */}
               <div className="flex flex-col gap-2 flex-grow justify-center mt-6">
                 {[
                   {
                     tag: 'Engineering Output',
                     title: 'Professional Technical Proposals',
                     desc: 'Reality-based data enables accurate, consultant-grade proposals with geometry references, material constraints, and coordination flags.'
                   },
                   {
                     tag: 'Quantity Surveying',
                     title: 'Precise BOQ & Quantities',
                     desc: 'Scan-derived quantities for flooring, cladding, and complex zones eliminate estimation error and reduce RFI risk at tender stage.'
                   },
                   {
                     tag: 'Documentation',
                     title: 'As-Built 3D References',
                     desc: 'Post-installation LiDAR generates verified 3D as-built documentation—fully aligned to BIM deliverables and handover requirements.'
                   },
                   {
                     tag: 'Marketing & Presentation',
                     title: 'Cinematic HD Media',
                     desc: 'High-resolution renders, walkthrough animations, and aerial footage from capture data serve as premium marketing tools for developers and project owners.'
                   },
                 ].map((svc, i) => (
                   <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-none px-5 py-3 hover:border-[#CEAA6A]/30 transition-colors group">
                     <div className="w-8 h-8 rounded-none bg-[#CEAA6A]/10 border border-[#CEAA6A]/20 flex items-center justify-center shrink-0">
                       <Scan size={14} className="text-[#CEAA6A]" />
                     </div>
                     <div>
                       <span className="text-[12px] font-[900] uppercase tracking-[0.3em] text-[#CEAA6A]/60 block mb-1">{svc.tag}</span>
                       <h4 className="text-sm font-[800] text-white mb-1 leading-snug">{svc.title}</h4>
                       <p className="text-[13px] text-white/40 font-[500] leading-relaxed">{svc.desc}</p>
                     </div>
                   </div>
                 ))}

                 <button className="text-[13px] font-[900] font-manrope uppercase tracking-[0.3em] text-white border border-white/20 px-6 py-4 rounded-none hover:bg-[#CEAA6A] hover:border-[#CEAA6A] hover:text-[#12100E] transition-colors flex items-center gap-2 mt-2 w-fit">
                   Request Capture Package <ArrowRight size={14} />
                 </button>
               </div>
            </div>

            <div className="lg:col-span-7" style={{ aspectRatio: '1 / 1', position: 'relative' }}>
               <div className="absolute inset-0 rounded-none bg-[#1A1613] border border-white/10 overflow-hidden shadow-2xl">
                 <img src={realityCaptureImg} alt="Reality Capture Data" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1613] via-transparent to-[#1A1613]/50 pointer-events-none" />
                 {/* Abstract Reality Capture Grid */}
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="opacity-40 relative z-10">
                    <defs>
                      <linearGradient id="scan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#CEAA6A" stopOpacity="0.2"/>
                        <stop offset="50%" stopColor="#CEAA6A" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#12100E" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="20 40" />
                    <path d="M0,100 Q300,300 800,50 T1200,400" fill="none" stroke="url(#scan-grad)" strokeWidth="3" />
                    <path d="M-100,200 Q400,100 600,600 T1400,200" fill="none" stroke="url(#scan-grad)" strokeWidth="1" opacity="0.5" />
                 </svg>
                 <div className="absolute top-0 left-0 w-full h-1 bg-[#CEAA6A] opacity-50 shadow-[0_0_20px_#CEAA6A] animate-scan-line" />
                 <div className="absolute top-8 right-8 z-10">
                   <div className="bg-[#CEAA6A]/10 border border-[#CEAA6A]/30 backdrop-blur-md px-4 py-2 rounded-none inline-flex">
                     <span className="text-[12px] font-[900] uppercase tracking-[0.2em] text-[#CEAA6A]">Density / High</span>
                   </div>
                 </div>
                 {/* Bottom overlay note */}
                 <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#12100E] to-transparent">
                   <p className="text-[12px] font-[600] uppercase tracking-widest text-[#CEAA6A]/80 leading-[1.8]">
                     Empowering your vision with exact dimensions and absolute clarity.<br />
                     Every scan is a step towards flawless execution and zero unexpected surprises.
                   </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          SECTION F — TECHNICAL LIBRARY
          ========================================= */}
      <section className="relative z-10 w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] overflow-hidden flex flex-col justify-center px-6 py-12 md:py-16">
        <div className="container mx-auto max-w-[90rem]">
          
          <div className="text-center mb-10 lg:mb-14">
             <span className="text-sm md:text-base font-black tracking-[0.4em] uppercase text-[#CEAA6A] block mb-4">
               GOVERNED DATA
             </span>
             <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-[900] font-manrope leading-[0.9] tracking-tighter uppercase text-white mb-4">
               TECHNICAL LIBRARY
             </h2>
             <p className="text-[clamp(1rem,1.2vw,1.1rem)] text-white/50 font-[500] leading-relaxed max-w-2xl mx-auto">
               Curated packs that convert intent into measurable requirements and governed delivery.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { cat: 'TDS', title: 'TDS-01: RIYADEX™ External System', desc: 'Finish references, scope limits, tolerances, and performance notes.' },
              { cat: 'Method Statement', title: 'MS-04: Mechanical Fix Protocol', desc: 'Sequencing logic for handling, setting-out, and installation readiness.' },
              { cat: 'CAD Details', title: 'CAD-08: Interface Typical Details', desc: 'Standard junction details, edges, corners, and movement allowances.' },
              { cat: 'BIM Objects', title: 'BIM-LOD-350: Corner Conditions', desc: 'Coordinated family set with naming discipline and parameters.' },
              { cat: 'Submittals', title: 'TEMPLATE: Material Approval Request', desc: 'Consultant-ready format for approval tracking and record control.' },
              { cat: 'Quality & ITP Pack', title: 'ITP: Limestone Quality Gates', desc: 'Inspection gates, acceptance criteria, and traceability checkpoints.' }
            ].map((lib, idx) => (
              <div key={idx} className="bg-[#1A1613] border border-white/5 hover:border-[#CEAA6A]/20 rounded-none p-6 lg:p-8 flex flex-col justify-between group transition-colors">
                <div>
                  <div className="mb-4 lg:mb-6 block">
                    <span className="text-sm font-[900] tracking-widest uppercase text-[#CEAA6A] drop-shadow-[0_0_8px_rgba(206,170,106,0.3)]">{lib.cat}</span>
                  </div>
                  <h3 className="text-sm lg:text-base font-[900] text-white tracking-wide uppercase mb-3 leading-snug">{lib.title}</h3>
                  <p className="text-[14px] lg:text-[15px] text-white/40 font-[500] leading-relaxed line-clamp-2">
                    {lib.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      title="Available in project pack after contract award."
                      className="flex items-center justify-center text-[#CEAA6A]/80 hover:text-white drop-shadow-[0_0_8px_rgba(206,170,106,0.2)] transition-colors"
                    >
                      <Download size={20} />
                    </button>
                    {/* File type badge */}
                    <span 
                      className="text-sm font-[900] uppercase tracking-widest drop-shadow-[0_0_8px_rgba(206,170,106,0.3)]"
                      style={{
                        color: lib.cat.includes('CAD') ? '#38bdf8' // Blue for CAD
                             : lib.cat.includes('BIM') ? '#a78bfa' // Purple for RVT
                             : lib.cat.includes('ITP') ? '#4ade80' // Green for XLSX
                             : '#f87171' // Red for PDF
                      }}
                    >
                      {lib.cat.includes('CAD') ? '.CAD' : lib.cat.includes('BIM') ? '.RVT' : lib.cat.includes('ITP') ? '.XLSX' : '.PDF'}
                    </span>
                  </div>
                  <span className="text-[12px] font-[700] uppercase tracking-widest text-[#CEAA6A] opacity-0 group-hover:opacity-100 transition-opacity">
                    Access Pack
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global CSS for utilities used in this component */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanLine {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-line {
          animation: scanLine 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default RiskMitigationEngine;
