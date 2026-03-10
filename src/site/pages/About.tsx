/**
 * About RiyadhStone® — Premium Content Page
 * Consolidated into 5 distinct, highly-creative sections, mirroring Home aesthetics.
 */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../layout/SiteLayout';
import LightFooterWithMap from '../sections/LightFooterWithMap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, ShieldCheck, Layers, Cpu, Microscope,
  Box, Scan, BookOpen, Leaf, Rocket, Activity,
  Globe, ChevronRight, CheckCircle2, Target, Eye
} from 'lucide-react';
import heroBg from '../assets/generated/rs_about_hero_bg_v01.png';
import droneBg from '../assets/generated/rs_popup_drone.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Typography tokens ─── */
const TX = {
  xl: 'text-[clamp(2.8rem,4.5vw,5rem)] font-[900] font-manrope leading-[0.88] tracking-tighter',
  h2: 'text-[clamp(2.4rem,4.5vw,4.2rem)] font-[900] font-manrope leading-[0.9] tracking-tighter',
  body: 'text-[clamp(1.1rem,1.5vw,1.35rem)] font-[500] leading-relaxed',
  micro: 'text-[11px] md:text-[12px] font-[900] uppercase tracking-[0.35em]',
  bentoTitle: 'text-[1.4rem] lg:text-[1.6rem] font-[900] font-manrope leading-tight text-[#4E3E2F]',
};

/* ─── Animated Counter ─── */
const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({ target, suffix = '', duration = 1.8 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.disconnect();
        let start = 0;
        const step = target / (duration * 60);
        const id = setInterval(() => {
          start = Math.min(start + step, target);
          setVal(Math.round(start));
          if (start >= target) clearInterval(id);
        }, 1000 / 60);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

/* ─── Scroll Reveal Box ─── */
const Rev: React.FC<{ children: React.ReactNode; delay?: number; className?: string; from?: 'bottom' | 'left' | 'right' }> = ({ children, delay = 0, className = '', from = 'bottom' }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const y = from === 'bottom' ? 40 : 0;
    const x = from === 'left' ? -40 : from === 'right' ? 40 : 0;
    gsap.fromTo(el,
      { opacity: 0, y, x },
      { opacity: 1, y: 0, x: 0, duration: 0.8, delay, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
    );
  }, [delay, from]);
  return <div ref={ref} className={className}>{children}</div>;
};

/* ─── Glass Card (Bento Style) ─── */
const BentoCard: React.FC<{ children: React.ReactNode; className?: string; dark?: boolean; hover?: boolean }> = ({ children, className = '', dark = false, hover = true }) => (
  <div className={`rounded-none border p-8 transition-all duration-300 relative overflow-hidden group ${
    dark
      ? `bg-white/5 border-white/10 ${hover ? 'hover:border-[#CEAA6A]/40 hover:bg-white/10' : ''}`
      : `bg-white/60 backdrop-blur-xl border-white/50 shadow-[0_8px_30px_rgba(78,62,47,0.04)] ${hover ? 'hover:border-[#CEAA6A]/50 hover:shadow-[0_20px_40px_rgba(206,170,106,0.15)] hover:-translate-y-1' : ''}`
  } ${className}`}>
    {children}
  </div>
);

const Dot = () => <span className="w-1.5 h-1.5 rounded-none bg-[#CEAA6A] shrink-0 inline-block mt-1.5" />;

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════ */
const About: React.FC = () => {

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => gsap.to('.ab-glow', { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <SiteLayout>
      <div className="rs-noise-overlay" />
      <div className="ab-glow fixed top-0 left-0 w-[700px] h-[700px] -ml-[350px] -mt-[350px] rounded-none bg-[radial-gradient(circle,rgba(206,170,106,0.08)_0%,transparent_60%)] pointer-events-none z-50 mix-blend-screen" />

      {/* ── SECTION 1: THE IDENTITY & STORY ─────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="ab-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#4E3E2F" strokeWidth="0.6"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#ab-grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col items-center mt-10">
          <div className="text-center max-w-4xl" style={{ animation: 'abHeroIn 0.8s cubic-bezier(0.22,1,0.36,1) both' }}>
            <div className="inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-xl border border-[#CEAA6A]/30 rounded-none px-6 py-2.5 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-none bg-[#CEAA6A] animate-pulse" />
              <span className={`${TX.micro} text-[#CEAA6A]`}>Our Origins</span>
            </div>
            <h1 className={`${TX.xl} text-[#4E3E2F] mb-6`}>
              Engineering from<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CEAA6A] to-[#8C6D3F]">Intent to Result</span>
            </h1>
            <p className={`${TX.body} text-[#625C55] mb-12`}>
              In an industry that treated stone simply as a raw material supply, we saw compounding risks: loose tolerances, interface clashes, and delayed handovers. We started RiyadhStone® to transform this chaotic supply chain into a governed engineering process — protecting the architectural intent from the quarry to the final installation.
            </p>
          </div>

          {/* Heritage Bento & Stats */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4" style={{ animation: 'abHeroIn 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) both' }}>
            
            {/* Main Image Card */}
            <BentoCard className="md:col-span-2 p-0 h-[400px]" hover={false}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[1.2rem] font-[800] tracking-wide mb-2">Engineered Stone = Trusted Results</p>
                <div className="flex gap-4 opacity-70">
                  <span className="text-xs uppercase tracking-widest font-bold">Interfaces</span>
                  <span className="text-xs uppercase tracking-widest font-bold">Tolerances</span>
                  <span className="text-xs uppercase tracking-widest font-bold">Validation</span>
                </div>
              </div>
            </BentoCard>

            {/* Stats Stack */}
            <div className="md:col-span-1 flex flex-col gap-4 h-[400px]">
              {[
                { val: 450, suffix: '+', label: 'Projects Served' },
                { val: 100, suffix: '%', label: 'Approval-Ready Submittals' }
              ].map(stat => (
                <BentoCard key={stat.label} className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className={`${TX.h2} text-[#CEAA6A] leading-none mb-2`}>
                    <Counter target={stat.val} suffix={stat.suffix} />
                  </div>
                  <p className={`${TX.micro} text-[#4E3E2F]/50`}>{stat.label}</p>
                </BentoCard>
              ))}
            </div>

            {/* Our Story Steps */}
            <BentoCard className="md:col-span-1 h-[400px] flex flex-col justify-center gap-6">
              {[
                { step: '01', title: 'Architectural Intent', icon: <BookOpen size={14}/> },
                { step: '02', title: 'System Engineering', icon: <Cpu size={14}/> },
                { step: '03', title: 'Validation & Mockups', icon: <Microscope size={14}/> },
                { step: '04', title: 'Governed Delivery', icon: <ShieldCheck size={14}/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-none bg-[#CEAA6A]/10 text-[#CEAA6A] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-[0.8rem] font-[800] uppercase tracking-wider text-[#4E3E2F]">{item.title}</p>
                </div>
              ))}
            </BentoCard>

          </div>
        </div>
      </section>

      {/* ── SECTION 1.5: VISION & MISSION ─────────────────────────── */}
      <section className="bg-white px-6 py-32 lg:py-40 relative overflow-hidden min-h-screen flex flex-col justify-center border-b border-[#4E3E2F]/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEAA6A]/30 to-transparent" />
        
        <div className="container mx-auto max-w-[90rem] relative z-10">
          <Rev className="text-center max-w-4xl mx-auto mb-20">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>The Future We Build</span>
            <h2 className={`${TX.h2} text-[#4E3E2F] mb-6`}>Our Vision &<br />Mission</h2>
            <p className={`${TX.body} text-[#625C55]`}>
              We are not just supplying stone; we are building a legacy of engineered reliability. Our doctrine is absolute transparency, strict tolerances, and perfect integration.
            </p>
          </Rev>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Rev delay={0.1} from="bottom" className="lg:col-span-1">
              <div className="h-full flex flex-col items-start bg-white p-10 border border-[#CEAA6A]/20 shadow-sm relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[radial-gradient(circle,#CEAA6A_0%,transparent_70%)] opacity-5 transition-opacity duration-700 group-hover:opacity-20 pointer-events-none" />
                <div className="w-14 h-14 bg-[#FCFBEE] text-[#CEAA6A] flex items-center justify-center mb-10 border border-[#CEAA6A]/20">
                  <Eye strokeWidth={1.5} size={28} />
                </div>
                <h3 className={`${TX.bentoTitle} text-[#4E3E2F] mb-5`}>The Vision</h3>
                <p className="text-[16px] text-[#625C55] leading-relaxed relative z-10">
                  To establish RiyadhStone® as the definitive global benchmark and undisputed reference for engineering-led, zero-tolerance luxury stone delivery in landmark architecture.
                </p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#CEAA6A]/30 to-transparent" />
              </div>
            </Rev>

            <Rev delay={0.2} from="bottom" className="lg:col-span-1">
              <div className="h-full flex flex-col items-start bg-[#FCFBEE] p-10 border border-[#4E3E2F]/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiAvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIC8+Cjwvc3ZnPg==')] pointer-events-none" />
                <div className="w-14 h-14 bg-[#4E3E2F] text-white flex items-center justify-center mb-10 shadow-md">
                  <Target strokeWidth={1.5} size={28} />
                </div>
                <h3 className={`${TX.bentoTitle} text-[#4E3E2F] mb-5`}>The Mission</h3>
                <p className="text-[16px] text-[#625C55] leading-relaxed relative z-10">
                  To eliminate the inherent risks of raw material procurement by transforming stone into a predictable, engineered architectural system. We deliver confidence through rigorous BIM planning, automated fabrication, and validated installation protocols.
                </p>
              </div>
            </Rev>

            <Rev delay={0.3} from="bottom" className="lg:col-span-1 md:col-span-2">
              <div className="h-full flex flex-col justify-center bg-gradient-to-br from-[#1A1410] to-[#24201C] text-white p-10 border border-white/5 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#CEAA6A] opacity-[0.03] blur-3xl pointer-events-none" />
                <div className="w-14 h-14 bg-white/5 text-[#CEAA6A] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#CEAA6A] group-hover:text-[#1A1410] transition-colors duration-500">
                  <Activity strokeWidth={1.5} size={28} />
                </div>
                <h3 className={`${TX.bentoTitle} text-white mb-5`}>Our Doctrine</h3>
                <p className="text-[16px] text-white/60 leading-relaxed mb-8 relative z-10">
                  What is assumed must be specified. We substitute guesswork with empirical engineering data.
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                   {['Zero Interface Ambiguity', '100% Traceability Protocols', 'Absolute Value Engineering'].map(val => (
                     <div key={val} className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-[#CEAA6A]" />
                       <span className="text-[13px] font-[700] uppercase tracking-wide text-white/80">{val}</span>
                     </div>
                   ))}
                </div>
              </div>
            </Rev>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CHALLENGE & PHILOSOPHY (Problem Space) ────── */}
      <section className="bg-[#24201C] flex flex-col justify-center min-h-[80vh] px-6 py-20 lg:py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-x-0 top-0 h-px bg-[#CEAA6A]/30 shadow-[0_0_15px_#CEAA6A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4E3E2F_0%,transparent_60%)] opacity-30 pointer-events-none" />
        
        <div className="container mx-auto max-w-[90rem] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* The Challenge (Left) */}
            <Rev from="left">
              <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>The Problem Space</span>
              <h2 className={`${TX.h2} text-white mb-6`}>Material Without<br /><span className="text-[#CEAA6A]">Control is Risk</span></h2>
              <p className={`${TX.body} text-white/50 mb-10`}>
                Risk is rarely the stone itself. Risk is unmanaged expectations. When stone is treated only as a material supply, projects encounter late-stage friction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Interface Ambiguity', desc: 'Undefined edges between trades cause rework.', outputs: ['Cost Overruns', 'Delayed Handovers'] },
                  { label: 'Tolerance Drift', desc: 'Unchecked cut deviations compound across panels.', outputs: ['Aesthetic Failures', 'Structural Stress'] },
                  { label: 'Supply Chain Blackboxes', desc: 'Hidden quarry yields risk late-stage shocks.', outputs: ['Inconsistent Veining', 'Material Shortages'] },
                  { label: 'Installation Disconnects', desc: 'Manufacturing ignores site realities.', outputs: ['Ad-hoc Site Cutting', 'Lost Warranties'] }
                ].map((item, i) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 p-5 hover:border-[#CEAA6A]/40 transition-colors">
                    <h4 className="text-[14px] font-[800] text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                       <Activity size={14} className="text-[#CEAA6A]"/> {item.label}
                    </h4>
                    <p className="text-[13px] text-white/50 mb-4">{item.desc}</p>
                    <ul className="flex flex-col gap-1.5 opacity-80">
                      {item.outputs.map(out => (
                        <li key={out} className="text-[11px] font-bold text-[#CEAA6A] flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#CEAA6A]" /> {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Rev>

            {/* Our Philosophy (Right) */}
            <div className="flex flex-col gap-4">
              <Rev delay={0.1} from="right" className="flex-1">
                <BentoCard dark className="h-full bg-gradient-to-br from-white/10 to-transparent border-white/10 p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-[900] text-white uppercase tracking-wider mb-4">Our Core Philosophy</h3>
                    <p className="text-[#CEAA6A] text-[18px] font-[600] leading-relaxed mb-10">
                      We build stone outcomes the way engineers build systems: defined inputs, controlled decisions, and documented outputs. What is assumed becomes specified.
                    </p>
                    <div className="flex gap-3 flex-wrap mt-auto">
                      {['Longevity', 'Aesthetic Discipline', 'Validation First', 'Engineering Over Supply'].map(chip => (
                        <span key={chip} className="text-[12px] uppercase tracking-widest bg-black/40 text-white/60 px-4 py-2 rounded-none border border-white/5">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </BentoCard>
                </Rev>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto">
                {[
                  { icon: <Globe size={24} />, title: 'The Benchmark', desc: 'Global reference for engineering-led stone.' },
                  { icon: <ShieldCheck size={24} />, title: 'True Integrity', desc: 'Truth of materials and manufacturing records.' }
                ].map((card, i) => (
                  <Rev key={card.title} delay={0.2 + (i * 0.1)} from="bottom">
                    <BentoCard dark className="h-full p-6">
                      <div className="w-10 h-10 rounded-none bg-black/30 text-[#CEAA6A] flex items-center justify-center mb-4 border border-white/5">
                        {card.icon}
                      </div>
                      <h4 className="text-[14px] font-[800] text-white uppercase tracking-wide mb-2">{card.title}</h4>
                      <p className="text-[13px] text-white/40 leading-relaxed">{card.desc}</p>
                    </BentoCard>
                  </Rev>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE ENGINE (Capabilities) ────────────────────── */}
      <section className="bg-[#1A1410] flex flex-col justify-center min-h-screen px-6 py-24 lg:py-32 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#4E3E2F_0%,transparent_50%)] opacity-30 pointer-events-none" />
        <div className="container mx-auto max-w-[90rem] relative z-10">
          <Rev className="text-center mb-16 max-w-3xl mx-auto">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>Operating Model & Factory</span>
            <h2 className={`${TX.h2} text-white mb-6`}>Protocol Before Production</h2>
            <p className={`${TX.body} text-white/60`}>
              Capacity is not just machines. It is repeatability, QA gates, and documentation discipline. We combine traditional craft intuition with rigorous BIM technology and fabrication control.
            </p>
          </Rev>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu size={28} />, title: 'BIM & CAD Engineering', desc: 'LOD-350 detailing and digital templating translate constraints into precise layouts, removing fabrication ambiguity.' },
              { icon: <Scan size={28} />, title: 'Mockups & Validation', desc: 'Physical references and test packs provide visual and technical governance prior to full-scale manufacturing.' },
              { icon: <Box size={28} />, title: 'Precision Factory', desc: 'Calibrated stone cutting, managed finishing systems (honed by exposure logic), and engineered packaging.' },
              { icon: <ShieldCheck size={28} />, title: 'QA/QC Gates', desc: 'Every panel is inspected against the BIM model before dispatch, ensuring absolute dimensional compliance.' },
              { icon: <Microscope size={28} />, title: 'Material Forensics', desc: 'Continuous testing of porosity, compressive strength, and flexural limits to guarantee longevity.' },
              { icon: <Globe size={28} />, title: 'Automated Traceability', desc: 'From block extraction to final crate, every piece carries a digital footprint for post-handover facility management.' }
            ].map((cap, i) => (
              <Rev key={cap.title} delay={0.1 * (i%3)} from="bottom">
                <BentoCard dark className="h-full flex flex-col group p-10 min-h-[340px] bg-white/5 border-white/10 hover:border-[#CEAA6A]/30 transition-colors">
                  <div className="w-14 h-14 rounded-none bg-black/40 border border-white/10 flex items-center justify-center text-[#CEAA6A] mb-8 shadow-sm group-hover:bg-[#CEAA6A] group-hover:text-[#1A1410] transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className={`${TX.bentoTitle} text-white mb-4`}>{cap.title}</h3>
                  <p className="text-[15px] text-white/60 leading-relaxed flex-1">{cap.desc}</p>
                  
                  {/* Visual Protocol Steps */}
                  <div className="mt-8 border-t border-white/10 pt-5 flex justify-between items-center opacity-70">
                    <span className="text-[10px] font-[900] uppercase tracking-widest text-[#CEAA6A]">01 Input</span>
                    <ArrowRight size={10} className="text-white/40" />
                    <span className="text-[10px] font-[900] uppercase tracking-widest text-white/60">Processing</span>
                    <ArrowRight size={10} className="text-white/40" />
                    <span className="text-[10px] font-[900] uppercase tracking-widest text-[#CEAA6A]">Output</span>
                  </div>
                </BentoCard>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE ECOSYSTEM ─────────────────────────────────── */}
      <section className="bg-[#FCFBEE] flex flex-col justify-center min-h-screen px-6 py-24 lg:py-32 border-b border-[#CEAA6A]/15 relative">
        <div className="absolute inset-0 border-t border-black/5" />
        <div className="container mx-auto max-w-[90rem] relative z-10">
          <Rev className="text-center mb-16 max-w-3xl mx-auto">
             <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>Structural Reliability</span>
             <h2 className={`${TX.h2} text-[#4E3E2F] mb-6`}>Our Engineered<br />Ecosystem</h2>
             <p className={`${TX.body} text-[#625C55]`}>
                RiyadhStone® aligns ownership, operations, and technical partners under one governed protocol, ensuring zero-incident delivery.
             </p>
          </Rev>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
              { title: 'Operating Leadership', tag: 'Execution', icon: <Layers size={28} />, desc: 'Board governance structured for long-horizon stability and strict technical mandates.' },
              { title: 'Technical Partners', tag: 'Ecosystem', icon: <Cpu size={28} />, desc: 'Alliances with tier-one European automation brands and BIM consultants.' },
              { title: 'HSE Framework', tag: 'Safety First', icon: <ShieldCheck size={28} />, desc: 'Embedded safety-in-design protocols ensuring zero incidents across environments.' },
              { title: 'Sustainability', tag: 'Stewardship', icon: <Leaf size={28} />, desc: 'Green extraction targets, water recycling loops, and carbon-tracked logistics.' },
              { title: 'Quarry Alliances', tag: 'Direct Sourcing', icon: <Globe size={28} />, desc: 'Exclusive access rights to premium global reserves, derisking supply chains.' },
              { title: 'Logistics Control', tag: 'Supply Chain', icon: <Box size={28} />, desc: 'End-to-end controlled transit, ensuring panels arrive undamaged and sequenced.' }
            ].map((item, i) => (
              <Rev key={item.title} delay={0.1 * (i%3)} from="bottom">
                <BentoCard className="h-full min-h-[250px] flex flex-col items-start bg-white hover:border-[#CEAA6A]/30">
                  <div className="w-14 h-14 bg-[#FCFBEE] text-[#4E3E2F] border border-[#4E3E2F]/10 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <span className={`text-[12px] uppercase tracking-widest font-black text-[#CEAA6A] mb-2`}>
                     {item.tag}
                  </span>
                  <h4 className="text-[1.3rem] font-[800] uppercase tracking-wide text-[#4E3E2F] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-[#625C55] font-[500] leading-relaxed">
                    {item.desc}
                  </p>
                </BentoCard>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE FINAL VALUE & VISION ──────────────────────── */}
      {/* ── SECTION 5: THE FINAL VALUE & VISION ──────────────────────── */}
      <section className="bg-white flex flex-col justify-center min-h-screen px-6 py-24 lg:py-32 relative overflow-hidden border-b border-[#4E3E2F]/10">
        <div className="absolute inset-0 bg-[#FCFBEE]/40 pointer-events-none" />
        
        <div className="container mx-auto max-w-[90rem] relative z-10 flex flex-col items-center">
          
          <Rev className="text-center max-w-3xl mb-16">
            <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>The Superior Choice</span>
            <h2 className={`${TX.h2} text-[#4E3E2F] mb-6`}>Why RiyadhStone®</h2>
            <p className="text-[1.1rem] text-[#625C55]">
              We compete by engineering clarity over assumptions — delivering stone as a governed system, not a risky material purchase.
            </p>
          </Rev>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-32">
             {[
                { title: 'Risk-Controlled Delivery', desc: 'We absorb the uncertainties of stone sourcing so you don\'t have to. Every slab is planned, cut, and delivered against an engineered protocol.' },
                { title: 'Approval-Ready Submittals', desc: 'Comprehensive technical documentation, structural calculations, and shop drawings that sail through consultant reviews.' },
                { title: 'Absolute Traceability', desc: 'A digital thread connects the deployed panel on site back to the exact block extracted from the quarry.' },
                { title: 'Site Friction Reduction', desc: 'Panels arrive pre-engineered for their specific location. No ad-hoc cutting, no delays, no surprises.' }
             ].map((val, i) => (
                <Rev key={val.title} delay={i * 0.1}>
                  <BentoCard className="h-full p-10 lg:p-14 flex flex-col justify-center bg-white border-[#CEAA6A]/20 hover:border-[#CEAA6A]/60 transition-colors cursor-default min-h-[220px]">
                    <h3 className="text-[18px] font-[900] uppercase tracking-widest text-[#4E3E2F] mb-4">{val.title}</h3>
                    <p className="text-[15px] text-[#625C55] leading-relaxed font-[500]">{val.desc}</p>
                  </BentoCard>
                </Rev>
             ))}
          </div>

          <Rev className="w-full flex flex-col md:flex-row bg-[#FCFBEE] rounded-none overflow-hidden min-h-[60vh] border border-[#CEAA6A]/20">
             <div className="md:w-1/2 relative group flex flex-col justify-end items-start text-left p-10 lg:p-16 xl:p-20 overflow-hidden cursor-pointer" onClick={() => window.location.href='/contact-us#careers'}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${droneBg})` }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1410] via-[#1A1410]/80 to-transparent" />
                <div className="relative z-10 text-white w-full max-w-lg">
                  <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>Engineering Vanguard</span>
                  <h3 className={`${TX.xl} text-white mb-6 text-[clamp(2.5rem,4vw,3.5rem)] leading-none`}>Fly with Us</h3>
                  <p className="text-[16px] text-white/70 font-[500] mb-8 leading-relaxed max-w-md">
                    Join a team that treats delivery as an engineered instrument. We value discipline, documentation, and design intelligence.
                  </p>
                  <div className="inline-flex items-center gap-3 border-[2px] border-[#CEAA6A] text-[#CEAA6A] px-8 py-3.5 rounded-none font-[900] text-[13px] uppercase tracking-widest hover:bg-[#CEAA6A] hover:text-[#12100E] transition-all bg-[#12100E]/40 backdrop-blur-md">
                    <Rocket size={16} /> Explore
                  </div>
                </div>
             </div>
             
             <div className="md:w-1/2 relative group flex flex-col justify-end items-start text-left p-10 lg:p-16 xl:p-20 overflow-hidden cursor-pointer" onClick={() => window.location.href='/contact-us#rfq'}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${heroBg})` }} />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#4E3E2F]/10 via-[#4E3E2F]/90 to-[#4E3E2F] opacity-90" />
                <div className="relative z-10 text-white w-full max-w-lg">
                  <span className={`${TX.micro} text-[#CEAA6A] block mb-4`}>Technical Proposal</span>
                  <h3 className={`${TX.xl} text-white mb-6 uppercase tracking-tight text-[clamp(2.5rem,4vw,3.5rem)] leading-none`}>Start an RFQ</h3>
                  <p className="text-[16px] text-white/70 font-[500] mb-8 leading-relaxed max-w-md">
                    Define the intent. Validate the assumptions. Deliver with confidence through the RS Master Protocol.
                  </p>
                  <div className="inline-flex items-center gap-3 border-[2px] border-[#CEAA6A] text-[#CEAA6A] px-8 py-3.5 rounded-none font-[900] text-[13px] uppercase tracking-widest hover:bg-[#CEAA6A] hover:text-[#12100E] transition-all bg-[#12100E]/40 backdrop-blur-md">
                    Consult Engineers <ArrowRight size={16} />
                  </div>
                </div>
             </div>
          </Rev>

        </div>
      </section>

      {/* ── SHARED FOOTER ─────────── */}
      <LightFooterWithMap />

    </SiteLayout>
  );
};

export default About;
