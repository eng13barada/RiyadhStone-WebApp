import React, { useState } from 'react';
import { ShieldCheck, HeartPulse, Leaf, Droplets, Trash2, MapPin, ChevronDown } from 'lucide-react';



const ClosingSustainabilityHSESection: React.FC = () => {
  return (
    <div className="relative bg-[#FCFBEE] text-[#4E3E2F] font-sans selection:bg-[#CEAA6A]/30 pt-10">
      <div className="absolute inset-0 rs-noise-overlay opacity-30 pointer-events-none" />
      
      <section className="relative pt-32 pb-24 px-6 border-t border-[#A19D94]/20 overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <span className="text-sm md:text-base font-black tracking-[0.4em] uppercase text-[#CEAA6A] block mb-4">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-[#4E3E2F]">
              Sustainability & Safety by Design
            </h2>
            <p className="text-[#625C55] text-lg font-bold leading-relaxed max-w-2xl mx-auto">
              Trusted results require a trusted process — engineered for compliance, continuity, and documented proof.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            
            {/* Column 1: HSE */}
            <div className="bg-white/40 p-10 lg:p-14 rounded-none shadow-sm border border-[#A19D94]/20 relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <ShieldCheck size={360} className="text-red-500/10 group-hover:text-red-500/20 transition-colors duration-1000" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">
                  Health &amp; <span className="text-red-500">Safety</span>
                </h3>
                <p className="text-[#625C55] font-bold leading-relaxed mb-8">
                  Our HSE management is integrated into every engineering protocol — not appended. We prioritize zero-incident performance through disciplined safety-by-design.
                </p>
                <div className="mb-0 flex-grow">
                  <ul className="list-disc pl-5 space-y-3 text-sm font-[800] text-[#4E3E2F]">
                    <li>Pre-Task Risk Controls</li>
                    <li>Permit-to-Work Alignment</li>
                    <li>Toolbox + Method Statements</li>
                    <li>Site Handover Verification</li>
                    <li>Risk Identification &amp; Pre-Action Verification</li>
                    <li>Continuous Site-Ready Safety Training</li>
                    <li>Audit Trail &amp; Incident Readiness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: Environment & Stewardship */}
            <div className="bg-white/40 p-10 lg:p-14 rounded-none shadow-sm border border-[#A19D94]/20 relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Leaf size={360} className="text-green-500/10 group-hover:text-green-500/20 transition-colors duration-1000" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">
                  <span className="text-green-600">Environment</span> &amp; Stewardship
                </h3>
                <p className="text-[#625C55] font-bold leading-relaxed mb-8">
                  Engineered to coexist. Our integration logic aligns with LEED, MOSTAMAD, and international sustainability benchmarks through traceable material lifecycles.
                </p>
                <div className="mb-0 flex-grow">
                  <ul className="list-disc pl-5 space-y-3 text-sm font-[800] text-[#4E3E2F]">
                    <li>Material Traceability</li>
                    <li>Waste Minimization</li>
                    <li>Water Recycling</li>
                    <li>Local Supply Chains</li>
                    <li>Closed-Loop Water Systems</li>
                    <li>Cutting Optimization</li>
                    <li>Localized Logistics</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Resource Responsibility — matches HSE/Env card style */}
          <div className="mt-0">
            <div className="mb-10">
              <span className="text-sm md:text-base font-[900] tracking-[0.4em] uppercase text-[#CEAA6A] block mb-4">RESOURCE RESPONSIBILITY</span>
              <h3 className="text-3xl lg:text-4xl font-black text-[#4E3E2F] uppercase tracking-tight leading-tight mb-4">Trusted Origin = <span className="text-[#A19D94] font-black">Trusted Result.</span></h3>
              <p className="text-[#625C55] font-bold text-base leading-relaxed max-w-xl">
                A trusted result begins before the first cut. Our resource protocols are embedded into operations — traceability, water efficiency, and localized sourcing are non-negotiable standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Water Recycling',
                  icon: <Droplets size={32} />,
                  color: 'text-blue-500',
                  bg: 'text-blue-500/10',
                  items: [
                    'Closed-loop filtration systems',
                    'Zero discharge in processing',
                    'Minimal fresh water draw',
                  ]
                },
                {
                  title: 'Waste Reduction',
                  icon: <Trash2 size={32} />,
                  color: 'text-amber-600',
                  bg: 'text-amber-500/10',
                  items: [
                    'BIM-optimized cutting schedules',
                    'Industrial offcut minimization',
                    'Precision limits material loss',
                  ]
                },
                {
                  title: 'Local Supply Chains',
                  icon: <MapPin size={32} />,
                  color: 'text-green-600',
                  bg: 'text-green-500/10',
                  items: [
                    'Localized material logistics',
                    'Reduced industrial footprint',
                    'Sourced close to project site',
                  ]
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/40 p-10 rounded-none shadow-sm border border-[#A19D94]/20 hover:border-[#CEAA6A]/30 transition-all relative overflow-hidden group">
                  <div className={`absolute -top-10 -right-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000 ${item.bg}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 260 })}
                  </div>
                  <div className="relative z-10">
                    <div className={`${item.color} mb-5`}>
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight text-[#4E3E2F] mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map(li => (
                        <li key={li} className="flex items-start gap-2 text-sm font-[800] text-[#4E3E2F]">
                          <span className="w-1.5 h-1.5 rounded-none bg-[#CEAA6A] mt-1.5 shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* PROJECT INQUIRY — full width with left icons + expanded form */}
          <div className="mt-24" id="rfq">
            <ProjectInquiryCard />
          </div>

        </div>
      </section>
    </div>
  );
};

/* Custom Select Dropdown Background styling */
const selectArrowStyle = {
  appearance: 'none' as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234E3E2F'%3E%3Cpath fill-rule='evenodd' d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.8rem center',
  backgroundSize: '1.2em'
};

/* ─── Sub-component: Project Location Picker ─── */
const locationData: Record<string, { label: string; regions: string[] }> = {
  sa: {
    label: 'Saudi Arabia',
    regions: [
      'Riyadh', 'Makkah', 'Madinah', 'Jeddah', 'Dammam',
      'Khobar', 'Al Ahsa', 'Taif', 'Tabuk', 'Buraidah', 'Abha',
      'Hail', 'Najran', 'Jazan', 'Al Qassim', 'Al Jouf', 'Al Baha',
      'Arar', 'Sakaka', 'Yanbu', 'Other'
    ],
  },
  gulf: {
    label: 'Arabian Gulf',
    regions: ['UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Yemen', 'Other'],
  },
  me: {
    label: 'Middle East',
    regions: [
      'Egypt', 'Jordan', 'Lebanon', 'Iraq', 'Syria', 'Palestine',
      'Libya', 'Tunisia', 'Algeria', 'Morocco', 'Mauritania', 'Other'
    ],
  },
  intl: {
    label: 'International',
    regions: [
      'United Kingdom', 'France', 'Germany', 'Italy', 'Spain',
      'USA', 'Canada', 'South America',
      'China', 'Japan', 'South Korea', 'India', 'Singapore',
      'Australia', 'Sub-Saharan Africa', 'Other'
    ],
  },
  other: {
    label: 'Other',
    regions: ['Other'],
  }
};

interface LocationPickerProps { inputCls: string; labelCls: string; }
const ProjectLocationPicker: React.FC<LocationPickerProps> = ({ inputCls, labelCls }) => {
  const [zone, setZone] = React.useState('sa');
  const [sub, setSub] = React.useState('Riyadh');
  const [otherLocation, setOtherLocation] = React.useState('');

  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newZone = e.target.value;
    if (newZone) {
      setZone(newZone);
      setSub(locationData[newZone].regions[0]);
    } else {
      setZone('');
      setSub('');
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-1.5">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <select value={zone} onChange={handleZoneChange} className={inputCls} style={selectArrowStyle} required>
            <option value="">Which project zone? *</option>
            {Object.entries(locationData).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <select value={sub} onChange={e => setSub(e.target.value)} className={inputCls} style={selectArrowStyle} required>
            <option value="">Which city / region? *</option>
            {zone && locationData[zone]?.regions.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      {(zone === 'other' || sub === 'Other') && (
        <div className="flex flex-col gap-1.5 mt-1">
          <input type="text" value={otherLocation} onChange={e => setOtherLocation(e.target.value)} className={inputCls} placeholder="Please specify your location *" required />
        </div>
      )}
    </div>
  );
};

/* ─── Sub-component: Supply Duration Stepper (light-panel variant) ─── */
const SupplyDurationStepper: React.FC<{ lightMode?: boolean }> = ({ lightMode }) => {
  const [value, setValue] = React.useState(6);
  const border = lightMode ? 'border-[#4E3E2F]/20' : 'border-white/10';
  const bg = lightMode ? 'bg-[#4E3E2F]/5' : 'bg-white/[0.07]';
  const textMuted = lightMode ? 'text-[#4E3E2F]/40' : 'text-white/50';
  const textMain = lightMode ? 'text-[#4E3E2F]' : 'text-white/80';
  const hoverBg = lightMode ? 'hover:bg-[#CEAA6A]/20' : 'hover:bg-[#CEAA6A]/15';
  return (
    <div className={`flex items-center ${bg} border ${border} rounded-none overflow-hidden h-[38px]`}>
      <button
        type="button"
        onClick={() => setValue(v => Math.max(1, v - 1))}
        className={`flex-none w-12 h-full flex items-center justify-center ${textMuted} ${hoverBg} hover:text-[#CEAA6A] transition-colors text-xl font-[300] border-r ${border} select-none`}
      >−</button>
      <span className={`flex-1 text-center text-sm font-[700] ${textMain} tabular-nums`}>Duration: {value} Months</span>
      <button
        type="button"
        onClick={() => setValue(v => Math.min(60, v + 1))}
        className={`flex-none w-12 h-full flex items-center justify-center ${textMuted} ${hoverBg} hover:text-[#CEAA6A] transition-colors text-xl font-[300] border-l ${border} select-none`}
      >+</button>
    </div>
  );
};

/* ─── Sub-component: Project Inquiry Card ─── */
const ProjectInquiryCard: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [refNumber] = React.useState(() => `RS-${Date.now().toString(36).toUpperCase().slice(-6)}`);
  const [services, setServices] = React.useState<string[]>([]);
  const [systems, setSystems] = React.useState<string[]>([]);

  const toggleService = (svc: string) => {
    setServices(prev => prev.includes(svc) ? prev.filter(s => s !== svc) : [...prev, svc]);
  };

  const toggleSystem = (sys: string) => {
    setSystems(prev => prev.includes(sys) ? prev.filter(s => s !== sys) : [...prev, sys]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  /* -- light-panel form styles -- */
  const inputCls = "bg-white/40 hover:bg-white border border-[#4E3E2F]/15 rounded-none px-3 py-2 text-[0.95rem] font-[900] text-[#4E3E2F] placeholder:text-[#4E3E2F]/40 placeholder:font-[700] focus:outline-none focus:border-[#CEAA6A] focus:ring-2 focus:ring-[#CEAA6A]/20 transition-all w-full";
  const labelCls = "text-[0.7rem] font-[900] uppercase tracking-[0.25em] text-[#4E3E2F]/70 block";

  return (
    <div className="relative">
      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm" onClick={() => setShowPopup(false)}>
          <div
            className="bg-[#FCFBEE] rounded-none p-10 max-w-md w-full shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'popupIn 0.35s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <style>{`@keyframes popupIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }`}</style>
            <div className="w-14 h-14 rounded-none border border-[#CEAA6A]/50 flex items-center justify-center mx-auto mb-5">
              <span className="text-xl text-[#CEAA6A]">✓</span>
            </div>
            <p className="text-[0.55rem] font-[900] uppercase tracking-[0.4em] text-[#CEAA6A] mb-2">Inquiry Received</p>
            <h3 className="text-xl font-[900] text-[#4E3E2F] mb-3 tracking-tight">Welcome aboard!</h3>
            <p className="text-sm text-[#625C55] font-[400] leading-relaxed mb-5">
              Your project inquiry has been submitted to the RiyadhStone® engineering team. We'll respond within 24 business hours.
            </p>
            <p className="text-[0.55rem] font-[900] uppercase tracking-[0.3em] text-[#4E3E2F]/40 mb-1">Reference Number</p>
            <p className="text-2xl font-[900] text-[#CEAA6A] tracking-widest mb-6">{refNumber}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="border border-[#CEAA6A]/60 text-[#CEAA6A] rounded-none px-8 py-2.5 text-[0.65rem] font-[900] uppercase tracking-widest hover:bg-[#CEAA6A] hover:text-[#12100E] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── CARD ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-none overflow-hidden border border-[#4E3E2F]/15 bg-white/30 backdrop-blur-md shadow-[0_20px_60px_rgba(78,62,47,0.05)]">

        {/* LEFT — Dark / marketing panel */}
        <div className="bg-gradient-to-br from-[#4E3E2F] to-[#1A1410] p-5 lg:p-7 flex flex-col justify-between min-h-[260px]">

          <div>
            <span className="text-[1.1rem] font-[900] tracking-[0.5em] uppercase text-[#CEAA6A] block mb-3">PROJECT INQUIRY</span>
            <h3 className="text-[clamp(2.6rem,4.5vw,3.75rem)] font-[900] text-white uppercase tracking-tighter leading-[0.85] mb-4">
              Request<br />Technical<br /><span className="text-[#CEAA6A]">Proposal</span>
            </h3>
            <p className="text-white/50 font-[400] text-[0.92rem] leading-[1.7] mb-6">
              Share your architectural vision and primary structural constraints. Our engineering division will compute exact parameters—including interfaces, tolerances, and compliance markers—to deliver a fully governed natural stone system tailored to your project’s technical demands.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-5">
            {[
              { num: '01', title: 'Submit Technical Brief', desc: 'Detail your scope, total quantities, and the specific engineering services required.' },
              { num: '02', title: 'Engineering Assessment', desc: 'Our team evaluates feasibility and constraints within 24 business hours.' },
              { num: '03', title: 'Receive Exact Proposal', desc: 'Obtain a comprehensive technical and commercial proposal aligned directly to your project.' },
            ].map(step => (
              <div key={step.num} className="flex items-start gap-5">
                <span className="text-[#CEAA6A]/35 font-[900] text-2xl tabular-nums shrink-0 mt-0.5 w-[30px]">{step.num}</span>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-white font-[700] text-[0.95rem] uppercase tracking-wide">{step.title}</h4>
                  <p className="text-white/35 text-[0.8rem] font-[400] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom badges */}
          <div className="flex flex-col gap-2 pt-6 mt-6 border-t border-white/[0.07]">
            {['24h Engineering Response', 'No-obligation Consultation', 'Governed by RS Master Protocol v2.x'].map(badge => (
              <div key={badge} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-none bg-[#CEAA6A] shrink-0" />
                <span className="text-[0.6rem] font-[600] text-white/40 uppercase tracking-wider">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Light form panel */}
        <div className="bg-transparent p-5 lg:p-7 flex flex-col font-manrope">

          {/* Form header */}
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[0.85rem] font-[900] tracking-[0.45em] uppercase text-[#4E3E2F]/55">RS — INQUIRY FORM</span>
            <span className="text-[0.65rem] font-[600] text-[#4E3E2F]/30 uppercase tracking-widest">v2.x Protocol</span>
          </div>

          <form className="flex flex-col gap-8 flex-1" onSubmit={handleSubmit}>

            {/* ── 01 CONTACT ── */}
            <div>
              <p className="text-[0.85rem] font-[900] uppercase tracking-[0.3em] text-[#4E3E2F] mb-1.5">01 — Contact</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                <div className="flex flex-col gap-1.5">
                  <input type="text" required className={inputCls} placeholder="Your Name (Respected) *" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <input type="text" required className={inputCls} placeholder="Company Name *" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <select required className={inputCls} style={selectArrowStyle}>
                    <option value="">The role *</option>
                    <option>Owner Representative</option>
                    <option>Real Estate Developer</option>
                    <option>Architect / Designer</option>
                    <option>Consultant / PMC</option>
                    <option>Contractor / Subcontractor</option>
                    <option>Individual</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <input type="email" required className={inputCls} placeholder="Email Address *" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <input type="tel" className={inputCls} placeholder="(Phone : 05...XXX)" />
                </div>
                <div className="flex items-center justify-start pl-1 sm:pl-2 mt-1 sm:mt-0">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-none border-[#4E3E2F]/30 text-green-600 focus:ring-green-600 transition-colors" />
                    <span className="text-[0.9rem] font-[900] text-[#4E3E2F]/90">Contacting by WhatsApp</span>
                  </label>
                </div>
              </div>
            </div>

            {/* ── 02 PROJECT PARAMETERS ── */}
            <div>
              <p className="text-[0.85rem] font-[900] uppercase tracking-[0.3em] text-[#4E3E2F] mb-1.5">02 — Project Parameters</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                <div className="flex flex-col gap-1.5">
                  <select required className={inputCls} style={selectArrowStyle}>
                    <option value="">Approximately Quantity *</option>
                    <option>Less than 1,000 m²</option>
                    <option>1,000 – 5,000 m²</option>
                    <option>5,000 – 10,000 m²</option>
                    <option>More than 10,000 m²</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <SupplyDurationStepper lightMode />
                </div>
              </div>
              <div className="mt-2">
                <ProjectLocationPicker inputCls={inputCls} labelCls={labelCls} />
              </div>
            </div>

            {/* ── 03 SERVICES ── */}
            <div>
              <p className="text-[0.85rem] font-[900] uppercase tracking-[0.3em] text-[#4E3E2F] mb-1.5">03 — Services Required</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-2.5 gap-x-4 pl-1">
                {[
                  'Design & Engineering', '3D Reality Capture', 'Quantity Takeoff',
                  'Shop Drawings', 'Supply — Material Only', 'Supply & Installation', 'Other – Tell Us',
                ].map(svc => (
                  <label key={svc} className="flex items-center gap-3 cursor-pointer group w-fit">
                    <div className={`w-5 h-5 rounded-none border-2 flex items-center justify-center transition-all ${
                      services.includes(svc) 
                        ? 'bg-[#CEAA6A] border-[#CEAA6A]' 
                        : 'bg-transparent border-[#4E3E2F]/40 group-hover:border-[#CEAA6A]/60'
                    }`}>
                      {services.includes(svc) && <span className="text-[#12100E] text-[0.7rem] font-bold leading-none select-none">✓</span>}
                    </div>
                    <span className={`text-[0.85rem] font-[700] select-none transition-colors ${
                      services.includes(svc) ? 'text-[#CEAA6A]' : 'text-[#4E3E2F]/70 group-hover:text-[#4E3E2F]'
                    }`}>{svc}</span>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={services.includes(svc)} 
                      onChange={() => toggleService(svc)} 
                    />
                  </label>
                ))}
              </div>
              {services.includes('Other – Tell Us') && (
                <div className="mt-3.5 flex flex-col gap-1.5">
                  <textarea rows={2} className={`${inputCls} resize-none`} placeholder="Please describe the other service..." />
                </div>
              )}
            </div>

            {/* ── 04 SCOPE ── */}
            <div className="flex flex-col gap-1.5">
              <p className="text-[0.85rem] font-[900] uppercase tracking-[0.3em] text-[#4E3E2F] mb-1.5">04 — Scope Brief</p>
              
              <div className="mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pl-1">
                  {[
                    { val: 'riyadex', label: 'RiyadEx™', desc: 'Exterior Facades & Cladding' },
                    { val: 'riyadfloor', label: 'RiyadFloor™', desc: 'Heavy-Duty Flooring' },
                    { val: 'riyadciv', label: 'RiyadCiv™', desc: 'Civic & Hardscape' },
                    { val: 'riyadwet', label: 'RiyadWet™', desc: 'Wet Areas & Pools' },
                    { val: 'riyadurb', label: 'RiyadUrb™', desc: 'Urban Furniture' },
                    { val: 'riyadstep', label: 'RiyadStep™', desc: 'Stairs & Risers' },
                    { val: 'riyadraw', label: 'RiyadRaw™', desc: 'Raw Blocks & Slabs' },
                    { val: 'other', label: 'Others', desc: 'Custom or Unspecified' },
                  ].map(sys => (
                    <label key={sys.val} className="flex items-start gap-3 cursor-pointer group w-fit">
                      <div className={`mt-0.5 w-4 h-4 rounded-none border-2 flex items-center justify-center transition-all shrink-0 ${
                        systems.includes(sys.val) 
                          ? 'bg-[#CEAA6A] border-[#CEAA6A]' 
                          : 'bg-transparent border-[#4E3E2F]/40 group-hover:border-[#CEAA6A]/60'
                      }`}>
                        {systems.includes(sys.val) && <span className="text-[#12100E] text-[0.6rem] font-bold leading-none select-none">✓</span>}
                      </div>
                      <div className="flex flex-col -mt-0.5">
                        <span className={`text-[0.85rem] font-[800] select-none transition-colors leading-tight ${
                          systems.includes(sys.val) ? 'text-[#CEAA6A]' : 'text-[#4E3E2F]/80 group-hover:text-[#4E3E2F]'
                        }`}>{sys.label}</span>
                        <span className="text-[0.65rem] font-[600] text-[#4E3E2F]/50 mt-0.5">{sys.desc}</span>
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={systems.includes(sys.val)} 
                        onChange={() => toggleSystem(sys.val)} 
                      />
                    </label>
                  ))}
                </div>
              </div>

              <textarea rows={2} className={`${inputCls} resize-none`} placeholder="Could you describe your application, technical constraints, or special requirements? *" required />
            </div>

            {/* ── SUBMIT ── */}
            <button
              type="submit"
              className="mt-3.5 w-full bg-[#4E3E2F] text-[#FCFBEE] border border-[#4E3E2F] rounded-none py-3 px-8 flex items-center justify-between font-[900] text-[0.8rem] uppercase tracking-[0.22em] hover:bg-[#CEAA6A] hover:border-[#CEAA6A] hover:text-[#12100E] transition-all group"
            >
              <span>Submit Inquiry</span>
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-center text-[0.62rem] text-[#4E3E2F]/35 font-[500] uppercase tracking-wide -mt-2">
              Your reference number appears upon submission
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ClosingSustainabilityHSESection;
