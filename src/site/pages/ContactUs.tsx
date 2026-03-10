import React, { useState } from 'react';
import SiteLayout from '../layout/SiteLayout';
import { MapPin, Mail, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

/* ─── Sub-component: Project Location Picker ─── */
const locationData: Record<string, { label: string; regions: string[] }> = {
  sa: { label: 'Saudi Arabia', regions: ['Riyadh', 'Makkah', 'Madinah', 'Jeddah', 'Dammam', 'Khobar', 'Al Ahsa', 'Taif', 'Tabuk', 'Buraidah', 'Abha', 'Hail', 'Najran', 'Jazan', 'Al Qassim', 'Al Jouf', 'Al Baha', 'Arar', 'Sakaka', 'Yanbu', 'Other'] },
  gulf: { label: 'Arabian Gulf', regions: ['UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Yemen', 'Other'] },
  me: { label: 'Middle East', regions: ['Egypt', 'Jordan', 'Lebanon', 'Iraq', 'Syria', 'Palestine', 'Libya', 'Tunisia', 'Algeria', 'Morocco', 'Mauritania', 'Other'] },
  intl: { label: 'International', regions: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'USA', 'Canada', 'South America', 'China', 'Japan', 'South Korea', 'India', 'Singapore', 'Australia', 'Sub-Saharan Africa', 'Other'] },
  other: { label: 'Other', regions: ['Other'] }
};

const selectArrowStyle = {
  appearance: 'none' as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234E3E2F'%3E%3Cpath fill-rule='evenodd' d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1.2rem center',
  backgroundSize: '1.4em'
};

const ProjectLocationPicker: React.FC<{ inputCls: string }> = ({ inputCls }) => {
  const [zone, setZone] = React.useState('sa');
  const [sub, setSub] = React.useState('Riyadh');
  const [otherLocation, setOtherLocation] = React.useState('');

  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newZone = e.target.value;
    if (newZone) {
      setZone(newZone);
      setSub(locationData[newZone].regions[0]);
    } else {
      setZone(''); setSub('');
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select value={zone} onChange={handleZoneChange} className={inputCls} style={selectArrowStyle} required>
          <option value="">Which project zone? *</option>
          {Object.entries(locationData).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
        <select value={sub} onChange={e => setSub(e.target.value)} className={inputCls} style={selectArrowStyle} required>
          <option value="">Which city / region? *</option>
          {zone && locationData[zone]?.regions.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      {(zone === 'other' || sub === 'Other') && (
        <input type="text" value={otherLocation} onChange={e => setOtherLocation(e.target.value)} className={inputCls} placeholder="Please specify your location *" required />
      )}
    </div>
  );
};

/* ─── Sub-component: Supply Duration Stepper ─── */
const SupplyDurationStepper: React.FC = () => {
  const [value, setValue] = React.useState(6);
  return (
    <div className="flex items-center bg-white/40 border border-[#4E3E2F]/20 rounded-none overflow-hidden h-full w-full min-h-[56px] focus-within:border-[#CEAA6A] focus-within:ring-2 focus-within:ring-[#CEAA6A]/20 transition-all">
      <button type="button" onClick={() => setValue(v => Math.max(1, v - 1))} className="flex-none w-[64px] h-full flex items-center justify-center text-[#4E3E2F]/60 hover:bg-[#CEAA6A]/20 hover:text-[#CEAA6A] transition-colors text-2xl font-[300] border-r border-[#4E3E2F]/20 select-none">−</button>
      <span className="flex-1 text-center text-[1.1rem] font-[900] text-[#4E3E2F] tabular-nums">Duration: {value} Months</span>
      <button type="button" onClick={() => setValue(v => Math.min(60, v + 1))} className="flex-none w-[64px] h-full flex items-center justify-center text-[#4E3E2F]/60 hover:bg-[#CEAA6A]/20 hover:text-[#CEAA6A] transition-colors text-2xl font-[300] border-l border-[#4E3E2F]/20 select-none">+</button>
    </div>
  );
};

const ContactUs: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [refNumber] = React.useState(() => `RS-${Date.now().toString(36).toUpperCase().slice(-6)}`);
  const [services, setServices] = React.useState<string[]>([]);
  const [systems, setSystems] = React.useState<string[]>([]);

  const toggleService = (svc: string) => setServices(prev => prev.includes(svc) ? prev.filter(s => s !== svc) : [...prev, svc]);
  const toggleSystem = (sys: string) => setSystems(prev => prev.includes(sys) ? prev.filter(s => s !== sys) : [...prev, sys]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const inputCls = "bg-white/60 hover:bg-white border border-[#4E3E2F]/20 rounded-none px-5 py-4 text-[1.05rem] font-[900] text-[#4E3E2F] placeholder:text-[#4E3E2F]/40 placeholder:font-[700] focus:outline-none focus:border-[#CEAA6A] focus:ring-2 focus:ring-[#CEAA6A]/20 transition-all w-full min-h-[56px]";

  return (
    <SiteLayout>
      <div className="bg-[#FCFBEE] min-h-screen pt-32 pb-24 px-6 font-sans relative selection:bg-[#CEAA6A]/30">
        <div className="absolute inset-0 rs-noise-overlay opacity-30 pointer-events-none" />
        
        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md" onClick={() => setShowPopup(false)}>
            <div className="bg-[#FCFBEE] rounded-none p-12 lg:p-16 max-w-xl w-full shadow-[0_40px_100px_rgba(0,0,0,0.5)] text-center relative border border-[#CEAA6A]/30" onClick={(e) => e.stopPropagation()} style={{ animation: 'popupIn 0.35s cubic-bezier(0.22,1,0.36,1) both' }}>
              <style>{`@keyframes popupIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }`}</style>
              <div className="w-20 h-20 rounded-none border border-[#CEAA6A]/50 flex items-center justify-center mx-auto mb-8 bg-[#CEAA6A]/10">
                <span className="text-3xl text-[#CEAA6A]">✓</span>
              </div>
              <p className="text-[0.7rem] font-[900] uppercase tracking-[0.4em] text-[#CEAA6A] mb-3">Inquiry Received</p>
              <h3 className="text-3xl font-[900] text-[#4E3E2F] mb-6 tracking-tight">Welcome aboard!</h3>
              <p className="text-lg text-[#625C55] font-[500] leading-relaxed mb-10 max-w-sm mx-auto">
                Your project inquiry has been submitted to the RiyadhStone® engineering team. We'll respond within 24 business hours.
              </p>
              <div className="bg-[#4E3E2F]/5 p-8 mb-10 border border-[#4E3E2F]/10 flex flex-col items-center justify-center">
                <p className="text-[0.7rem] font-[900] uppercase tracking-[0.4em] text-[#4E3E2F]/50 mb-3">Reference Number</p>
                <p className="text-4xl font-[900] text-[#CEAA6A] tracking-widest">{refNumber}</p>
              </div>
              <button onClick={() => setShowPopup(false)} className="w-full bg-[#4E3E2F] text-[#FCFBEE] py-5 text-[0.85rem] font-[900] uppercase tracking-[0.3em] hover:bg-[#CEAA6A] hover:text-[#12100E] transition-all shadow-xl hover:shadow-[0_15px_30px_rgba(206,170,106,0.3)]">
                Close
              </button>
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-[90rem] relative z-10 w-full xl:w-[94%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-none overflow-hidden border border-[#4E3E2F]/15 bg-white/40 backdrop-blur-md shadow-[0_30px_80px_rgba(78,62,47,0.08)] min-h-[85vh]">
            
            {/* LEFT — Dark Marketing & Info Panel */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#4E3E2F] to-[#1A1410] p-10 lg:p-14 xl:p-20 flex flex-col justify-between">
              <div>
                <span className="text-[1.2rem] font-[900] tracking-[0.5em] uppercase text-[#CEAA6A] block mb-5">PROJECT INQUIRY</span>
                <h1 className="text-[clamp(3.5rem,4.5vw,4.5rem)] font-[900] text-white uppercase tracking-tighter leading-[0.85] mb-8">
                  Initialize<br />Contact<span className="text-[#CEAA6A]">.</span>
                </h1>
                <p className="text-white/60 font-[500] text-[1.1rem] leading-[1.8] mb-14">
                  Share your architectural vision and primary structural constraints. Our engineering division will compute exact parameters—including interfaces, tolerances, and compliance markers—to deliver a fully governed natural stone system tailored to your project’s technical demands.
                </p>
                
                {/* Contact Hubs */}
                <div className="space-y-10 mb-14">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#CEAA6A]/10 rounded-none border border-[#CEAA6A]/20 flex items-center justify-center shrink-0 text-[#CEAA6A]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-[900] text-white text-[0.9rem] uppercase tracking-widest mb-1.5">Riyadh HQ</h4>
                      <p className="text-[0.95rem] text-white/50 font-[500] leading-relaxed">Industrial Area, Section 4 <br />Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#CEAA6A]/10 rounded-none border border-[#CEAA6A]/20 flex items-center justify-center shrink-0 text-[#CEAA6A]">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-[900] text-white text-[0.9rem] uppercase tracking-widest mb-1.5">Engineering Intake</h4>
                      <p className="text-[0.95rem] text-white/50 font-[500]">eng@riyadhstone.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#CEAA6A]/10 rounded-none border border-[#CEAA6A]/20 flex items-center justify-center shrink-0 text-[#CEAA6A]">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-[900] text-white text-[0.9rem] uppercase tracking-widest mb-1.5">Direct Line</h4>
                      <p className="text-[0.95rem] text-white/50 font-[500]">+966 11 000 0000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-10 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#CEAA6A] shrink-0" />
                  <span className="text-[0.75rem] font-[800] text-white/50 uppercase tracking-widest">24h Engineering Response</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#CEAA6A] shrink-0" />
                  <span className="text-[0.75rem] font-[800] text-white/50 uppercase tracking-widest">Governed by Protocol v2.x</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Expanded Form Panel */}
            <div className="lg:col-span-8 bg-white/20 p-10 lg:p-14 xl:p-20 flex flex-col border-l border-[#4E3E2F]/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-[#4E3E2F]/15">
                <div>
                  <span className="text-[1.1rem] font-[900] tracking-[0.45em] uppercase text-[#4E3E2F]">RS INQUIRY DISPATCH</span>
                  <span className="text-[0.85rem] font-[700] text-[#4E3E2F]/50 uppercase tracking-widest block mt-2">Comprehensive Project Submission</span>
                </div>
                <span className="flex items-center gap-2 bg-[#CEAA6A]/10 border border-[#CEAA6A]/30 text-[#CEAA6A] px-4 py-2 text-[0.65rem] font-[900] uppercase tracking-widest">
                  <ShieldCheck size={14}/> Secure Channel
                </span>
              </div>

              <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
                
                {/* ── 01 CONTACT ── */}
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <span className="text-4xl font-[900] text-[#CEAA6A] opacity-40 leading-none">01</span>
                    <h3 className="text-2xl font-[900] uppercase tracking-[0.2em] text-[#4E3E2F]">Contact Profile</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Full Name *</label>
                       <input type="text" required className={inputCls} placeholder="Your Name (Respected)" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Company Name *</label>
                       <input type="text" required className={inputCls} placeholder="Your Organization name" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Your Role *</label>
                       <select required className={inputCls} style={selectArrowStyle}>
                         <option value="">Select your role</option>
                         <option>Owner Representative</option>
                         <option>Real Estate Developer</option>
                         <option>Architect / Designer</option>
                         <option>Consultant / PMC</option>
                         <option>Contractor / Subcontractor</option>
                         <option>Individual</option>
                       </select>
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Email Address *</label>
                       <input type="email" required className={inputCls} placeholder="Corporate email" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Direct Phone</label>
                      <input type="tel" className={inputCls} placeholder="(Phone : 05...XXX)" />
                    </div>
                    <div className="flex items-center justify-start md:pl-2 mt-2 md:mt-8">
                       <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[22px] h-[22px] rounded-none border-[#4E3E2F]/30 text-green-600 focus:ring-green-600 transition-colors cursor-pointer group-hover:border-green-600" />
                        <span className="text-[1.05rem] font-[900] text-[#4E3E2F]/90">Contacting by WhatsApp</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* ── 02 PROJECT PARAMETERS ── */}
                <div className="pt-10 border-t border-[#4E3E2F]/15">
                  <div className="flex items-center gap-5 mb-8">
                     <span className="text-4xl font-[900] text-[#CEAA6A] opacity-40 leading-none">02</span>
                     <h3 className="text-2xl font-[900] uppercase tracking-[0.2em] text-[#4E3E2F]">Project Parameters</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <div className="flex flex-col gap-2 justify-end">
                      <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Expected Total Area *</label>
                      <select required className={inputCls} style={selectArrowStyle}>
                        <option value="">Approximately Quantity *</option>
                        <option>Less than 1,000 m²</option>
                        <option>1,000 – 5,000 m²</option>
                        <option>5,000 – 10,000 m²</option>
                        <option>More than 10,000 m²</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 justify-end">
                      <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Expected Construction Duration</label>
                      <SupplyDurationStepper />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Project Location Mapping *</label>
                    <ProjectLocationPicker inputCls={inputCls} />
                  </div>
                </div>

                {/* ── 03 SERVICES ── */}
                <div className="pt-10 border-t border-[#4E3E2F]/15">
                  <div className="flex items-center gap-5 mb-8">
                     <span className="text-4xl font-[900] text-[#CEAA6A] opacity-40 leading-none">03</span>
                     <h3 className="text-2xl font-[900] uppercase tracking-[0.2em] text-[#4E3E2F]">Services Required</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-8">
                    {['Design & Engineering', '3D Reality Capture', 'Quantity Takeoff', 'Shop Drawings', 'Supply — Material Only', 'Supply & Installation', 'Other – Tell Us'].map(svc => (
                      <label key={svc} className="flex items-center gap-4 cursor-pointer hover:bg-white/60 p-3 -ml-3 transition-colors rounded-none group">
                        <div className={`w-[26px] h-[26px] rounded-none border-[2px] flex items-center justify-center transition-all ${services.includes(svc) ? 'bg-[#CEAA6A] border-[#CEAA6A]' : 'bg-white border-[#4E3E2F]/30 group-hover:border-[#CEAA6A]/60'}`}>
                          {services.includes(svc) && <span className="text-[#12100E] text-[0.9rem] font-bold leading-none">✓</span>}
                        </div>
                        <span className={`text-[1.05rem] font-[900] select-none transition-colors ${services.includes(svc) ? 'text-[#CEAA6A]' : 'text-[#4E3E2F]/80 group-hover:text-[#4E3E2F]'}`}>{svc}</span>
                        <input type="checkbox" className="hidden" checked={services.includes(svc)} onChange={() => toggleService(svc)} />
                      </label>
                    ))}
                  </div>
                  {services.includes('Other – Tell Us') && (
                    <div className="mt-6">
                      <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Please describe the other service..." />
                    </div>
                  )}
                </div>

                {/* ── 04 SCOPE ── */}
                <div className="pt-10 border-t border-[#4E3E2F]/15">
                  <div className="flex items-center gap-5 mb-8">
                     <span className="text-4xl font-[900] text-[#CEAA6A] opacity-40 leading-none">04</span>
                     <h3 className="text-2xl font-[900] uppercase tracking-[0.2em] text-[#4E3E2F]">Scope Brief</h3>
                  </div>
                  
                  <div className="mb-10">
                    <p className="text-[0.85rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/70 mb-5">Targeted Systems Selection</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 bg-white/40 p-8 border border-[#4E3E2F]/15 group-hover:bg-white/60 transition-colors">
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
                        <label key={sys.val} className="flex items-start gap-4 cursor-pointer group w-full">
                          <div className={`mt-0.5 w-[22px] h-[22px] rounded-none border-[2px] flex items-center justify-center transition-all shrink-0 ${systems.includes(sys.val) ? 'bg-[#CEAA6A] border-[#CEAA6A]' : 'bg-white border-[#4E3E2F]/40 group-hover:border-[#CEAA6A]/60'}`}>
                            {systems.includes(sys.val) && <span className="text-[#12100E] text-[0.8rem] font-bold leading-none">✓</span>}
                          </div>
                          <div className="flex flex-col flex-1">
                            <span className={`text-[1.05rem] font-[900] select-none transition-colors leading-tight ${systems.includes(sys.val) ? 'text-[#CEAA6A]' : 'text-[#4E3E2F]/80 group-hover:text-[#4E3E2F]'}`}>{sys.label}</span>
                            <span className="text-[0.8rem] font-[600] text-[#4E3E2F]/50 mt-1">{sys.desc}</span>
                          </div>
                          <input type="checkbox" className="hidden" checked={systems.includes(sys.val)} onChange={() => toggleSystem(sys.val)} />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.75rem] font-[900] uppercase tracking-widest text-[#4E3E2F]/60">Technical Constraints & Scope Details *</label>
                    <textarea rows={6} className={`${inputCls} py-5 resize-none text-[1.05rem] leading-relaxed`} placeholder="Could you describe your application, technical constraints, or special requirements?" required />
                  </div>
                </div>

                <div className="pt-10 border-t border-[#4E3E2F]/15 mt-4">
                  <button type="submit" className="w-full bg-[#4E3E2F] text-[#FCFBEE] border border-[#4E3E2F] rounded-none py-6 px-10 flex items-center justify-between font-[900] text-[1.2rem] sm:text-[1.4rem] uppercase tracking-[0.25em] hover:bg-[#CEAA6A] hover:border-[#CEAA6A] hover:text-[#12100E] transition-all group shadow-2xl hover:shadow-[0_20px_40px_rgba(206,170,106,0.3)]">
                    <span>Submit Complete Inquiry</span>
                    <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
                  </button>
                  <p className="text-center text-[0.8rem] text-[#4E3E2F]/40 font-[700] uppercase tracking-widest mt-5">
                    Your reference number will be generated securely
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default ContactUs;
