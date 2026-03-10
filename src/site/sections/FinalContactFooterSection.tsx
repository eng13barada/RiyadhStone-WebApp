import { useRef, useState } from 'react';
import Reveal from '../components/motion/Reveal';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, Linkedin, Twitter, Instagram, ChevronRight,
  CheckCircle2, ShieldCheck, HeartPulse, Leaf, Droplets, Trash2, ArrowRight, MapPin
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Local Assets
import sustainabilitySvg from '../assets/sustainability.svg';

gsap.registerPlugin(ScrollTrigger);

const FinalContactFooterSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [receipt, setReceipt] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      const newReceipt = {
        id: `RQ-${Math.floor(Math.random() * 90000) + 10000}`,
        timestamp: new Date().toLocaleString(),
        status: 'INDEXED'
      };
      setReceipt(newReceipt);
      setFormState('success');
      localStorage.setItem('last_technical_request', JSON.stringify(newReceipt));
    }, 1500);
  };

  return (
    <div ref={containerRef} className="relative bg-[#12100E] text-[#FCFBEE] selection:bg-[#CEAA6A]/30 font-sans border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* SECTION 1: Operational Excellence (HSE) */}
      <section className="relative py-40 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CEAA6A]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <Reveal>
              <div className="inline-flex items-center gap-4 mb-6 px-6 py-2 rounded-full border border-[#CEAA6A]/20 bg-[#CEAA6A]/5">
                <HeartPulse size={16} className="text-[#CEAA6A]" />
                <span className="text-[13px] font-[900] tracking-[0.4em] uppercase text-[#CEAA6A]">Operational Excellence</span>
              </div>
              <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-[900] mb-8 leading-[0.85] tracking-tighter uppercase text-white">
                Health & <span className="text-[#CEAA6A]">Safety</span>
              </h2>
              <p className="text-white/40 text-lg md:text-2xl font-[600] leading-relaxed max-w-3xl mx-auto">
                Our HSE management is integrated into every engineering protocol. We prioritize zero-incident site performance through disciplined safety-by-design principles.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal delay={0.1}>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-[#CEAA6A]/30 transition-all duration-700 group h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CEAA6A]/10 rounded-full blur-[40px] group-hover:bg-[#CEAA6A]/20 transition-all" />
                <h4 className="font-[900] text-[#CEAA6A] mb-4 uppercase text-[13px] tracking-[0.3em] flex items-center gap-3">
                  <span className="w-8 h-px bg-[#CEAA6A]/50" /> Protocol 1
                </h4>
                <p className="text-2xl font-[800] text-white tracking-tight">Risk Identification & Pre-Action Verification</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-[#CEAA6A]/30 transition-all duration-700 group h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CEAA6A]/10 rounded-full blur-[40px] group-hover:bg-[#CEAA6A]/20 transition-all" />
                <h4 className="font-[900] text-[#CEAA6A] mb-4 uppercase text-[13px] tracking-[0.3em] flex items-center gap-3">
                  <span className="w-8 h-px bg-[#CEAA6A]/50" /> Protocol 2
                </h4>
                <p className="text-2xl font-[800] text-white tracking-tight">Continuous Site-Ready Safety Training</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Environment & Stewardship */}
      <section className="relative py-40 px-6 border-t border-white/5 bg-[#0A0908]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative group">
              <Reveal>
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#12100E]">
                  <img src={sustainabilitySvg} alt="Sustainability Matrix" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/20 to-transparent" />
                  
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#CEAA6A] animate-pulse" />
                      <span className="text-[13px] tracking-[0.3em] uppercase font-[900] text-[#CEAA6A]">System Integration</span>
                    </div>
                    <p className="text-sm font-[800] text-white">Full compatibility with project environmental oversight</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#CEAA6A]/10 flex items-center justify-center text-[#CEAA6A]">
                    <Leaf size={24} />
                  </div>
                  <span className="text-[13px] font-[900] tracking-[0.4em] uppercase text-[#CEAA6A]">Resource Responsibility</span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-[900] mb-8 leading-[0.9] tracking-tighter uppercase text-white">
                  Environment & <span className="text-[#CEAA6A]">Stewardship</span>
                </h2>
                <p className="text-white/40 text-xl font-[600] leading-relaxed mb-16">
                  Engineered to coexist. Our integration logic aligns with LEED, MOSTAMAD, and international sustainability benchmarks through traceable material lifecycles. We believe a trusted result includes a trusted origin.
                </p>

                <div className="space-y-4">
                  {[
                    { title: 'WATER RECYCLING', desc: 'Closed-loop primary filtration systems in all active processing centers.', icon: <Droplets size={20} /> },
                    { title: 'WASTE REDUCTION', desc: 'BIM-optimized cutting schedules to minimize industrial offcuts.', icon: <Trash2 size={20} /> },
                    { title: 'LOCAL CHAINS', desc: 'Reducing industrial footprint through localized material logistics.', icon: <MapPin size={20} /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-[#CEAA6A]/30 transition-colors group">
                      <div className="w-16 h-16 rounded-2xl bg-[#12100E] border border-white/10 flex items-center justify-center text-[#CEAA6A] group-hover:scale-110 transition-transform flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[12px] font-[900] text-white mb-2 tracking-[0.4em] uppercase group-hover:text-[#CEAA6A] transition-colors">{item.title}</h4>
                        <p className="text-sm text-white/50 font-[600] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Marketing Quick Strip (Minimal Dark Version) */}
      <div className="bg-[#12100E] py-6 px-6 overflow-hidden border-y border-white/5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {['METHODOLOGY', 'WHY US', 'ENGINEERING', 'SYSTEMS', 'LIBRARY', 'HSE PROTOCOL'].map((text, i) => (
            <span key={i} className="text-[14px] font-[900] text-white/20 uppercase tracking-[0.5em] flex items-center gap-16">
              {text} <span className="w-1.5 h-1.5 rounded-full bg-[#CEAA6A]/40" />
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {['METHODOLOGY', 'WHY US', 'ENGINEERING', 'SYSTEMS', 'LIBRARY', 'HSE PROTOCOL'].map((text, i) => (
            <span key={`dup-${i}`} className="text-[11px] font-[900] text-white/20 uppercase tracking-[0.5em] flex items-center gap-16">
              {text} <span className="w-1.5 h-1.5 rounded-full bg-[#CEAA6A]/40" />
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 4: Technical Request Form & Engineering Support */}
      <section className="relative py-40 px-6 bg-[#0A0908]">
        {/* Glow effect mapped to bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#CEAA6A]/5 to-transparent pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-[#12100E] rounded-[4rem] p-10 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 text-[#CEAA6A]/5 pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000">
                    <ShieldCheck size={280} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="w-3 h-3 rounded-full bg-[#CEAA6A] animate-ping opacity-75 absolute" />
                      <span className="w-3 h-3 rounded-full bg-[#CEAA6A] relative z-10" />
                      <span className="text-[13px] font-[900] tracking-[0.4em] uppercase text-[#CEAA6A]">Open Channel</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-[900] text-white mb-6 tracking-tighter uppercase">Technical Request</h2>
                    <p className="text-white/40 font-[600] mb-12 max-w-md uppercase text-[14px] tracking-widest leading-relaxed">
                      Direct line to our engineering department. Submit your scope to receive an engineered path to trusted results.
                    </p>

                    {formState !== 'success' ? (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <label className="text-[12px] uppercase font-[900] tracking-[0.3em] text-[#CEAA6A]/70 ml-4">Name</label>
                            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-[#CEAA6A]/50 focus:bg-white/10 transition-all font-[700] text-white placeholder:text-white/20" placeholder="Full Name" />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[12px] uppercase font-[900] tracking-[0.3em] text-[#CEAA6A]/70 ml-4">Company</label>
                            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-[#CEAA6A]/50 focus:bg-white/10 transition-all font-[700] text-white placeholder:text-white/20" placeholder="Organization" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[9px] uppercase font-[900] tracking-[0.3em] text-[#CEAA6A]/70 ml-4">Inquiry Type</label>
                          <div className="relative">
                            <select required className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-[#CEAA6A]/50 focus:bg-white/10 transition-all font-[700] text-white appearance-none cursor-pointer">
                              <option value="Technical Specification" className="bg-[#12100E]">Technical Specification</option>
                              <option value="Submittals & Samples" className="bg-[#12100E]">Submittals & Samples</option>
                              <option value="BOQ / Quantity Support" className="bg-[#12100E]">BOQ / Quantity Support</option>
                              <option value="BIM / CAD Details" className="bg-[#12100E]">BIM / CAD Details</option>
                              <option value="Delivery & Inspections" className="bg-[#12100E]">Delivery & Inspections</option>
                              <option value="Other" className="bg-[#12100E]">Other</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                              <ChevronRight className="rotate-90" size={20} />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[9px] uppercase font-[900] tracking-[0.3em] text-[#CEAA6A]/70 ml-4">Message</label>
                          <textarea required className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-8 py-6 outline-none focus:border-[#CEAA6A]/50 focus:bg-white/10 transition-all font-[700] text-white h-40 resize-none placeholder:text-white/20" placeholder="Describe your project requirements..." />
                        </div>

                        <button 
                          disabled={formState === 'submitting'}
                          type="submit" 
                          className="w-full bg-[#CEAA6A] hover:bg-white text-[#12100E] h-20 rounded-3xl font-[900] text-[15px] uppercase tracking-[0.4em] transition-all duration-500 shadow-[0_0_30px_rgba(206,170,106,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-4 group"
                        >
                          {formState === 'submitting' ? (
                            <span className="animate-pulse">TRANSMITTING...</span>
                          ) : (
                            <>
                              SUBMIT REQUEST
                              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      <div className="py-16 text-center bg-[#12100E] rounded-[3rem] border border-[#CEAA6A]/30 shadow-[0_0_50px_rgba(206,170,106,0.1)]">
                        <div className="w-24 h-24 bg-[#CEAA6A]/10 text-[#CEAA6A] rounded-full flex items-center justify-center mx-auto mb-8 scale-up-center ring-4 ring-[#CEAA6A]/20">
                          <CheckCircle2 size={48} />
                        </div>
                        <h3 className="text-3xl font-[900] text-white mb-4 uppercase tracking-tighter">Transmission Complete</h3>
                        <p className="text-white/40 font-[700] mb-12 uppercase text-[13px] tracking-widest">Your technical data is being processed.</p>
                        
                        <div className="bg-black/40 rounded-3xl p-8 mb-12 text-left border border-white/5 max-w-sm mx-auto shadow-inner">
                          <div className="flex justify-between mb-4 border-b border-white/5 pb-4">
                            <span className="text-[9px] font-[900] uppercase tracking-widest text-[#CEAA6A]">Protocol ID</span>
                            <span className="text-[14px] font-[900] text-white">{receipt?.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[9px] font-[900] uppercase tracking-widest text-[#CEAA6A]">Status</span>
                            <span className="text-[12px] font-[900] text-white uppercase bg-[#CEAA6A]/30 px-3 py-1 rounded-full border border-[#CEAA6A]">INDEXED</span>
                          </div>
                        </div>

                        <button onClick={() => setFormState('idle')} className="text-[#CEAA6A] uppercase text-[13px] font-[900] tracking-[0.3em] hover:text-white transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-[#CEAA6A]">
                          Generate New Protocol
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Content Sidebar */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-10">
              <Reveal>
                <div className="mb-16">
                  <h3 className="text-4xl font-[900] text-white mb-6 tracking-tighter uppercase">Engineering <span className="text-[#CEAA6A]">Support</span></h3>
                  <p className="text-white/50 font-[600] leading-relaxed text-lg">
                    Our technical team is available to assist with comprehensive structural calculations, material compliance submittals, and specialized installation protocols. Partner with us for engineered certainty.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 mb-16">
                  <div>
                    <h4 className="text-[13px] font-[900] uppercase tracking-[0.4em] text-[#CEAA6A] mb-8">Expertise Focus</h4>
                    <ul className="space-y-6">
                      {['Structural Validation', 'Material Conformity', 'Value Engineering', 'Custom Detailing'].map(link => (
                        <li key={link} className="flex items-center gap-4 group cursor-default">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-[#CEAA6A] group-hover:bg-[#CEAA6A]/20 group-hover:border-[#CEAA6A]/40 transition-all duration-300">
                            <CheckCircle2 size={12} />
                          </div>
                          <span className="text-sm font-[800] text-white leading-none tracking-wide group-hover:text-[#CEAA6A] transition-colors">{link}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[13px] font-[900] uppercase tracking-[0.4em] text-[#CEAA6A] mb-8">Contact</h4>
                    <ul className="space-y-6">
                      <li className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#CEAA6A] group-hover:scale-110 transition-transform duration-500">
                          <Mail size={20} />
                        </div>
                        <span className="text-sm font-[800] text-white tracking-widest">info@riyadhstone.sa</span>
                      </li>
                      <li className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#CEAA6A] group-hover:scale-110 transition-transform duration-500">
                          <Phone size={20} />
                        </div>
                        <span className="text-sm font-[800] text-white tracking-widest">+966 11 000 0000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 rounded-[1.5rem] bg-[#12100E] border border-white/10 flex items-center justify-center text-white/50 hover:border-[#CEAA6A]/50 hover:text-[#CEAA6A] transition-all transform hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(206,170,106,0.1)]">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Global CSS for utilities used in this component */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes scaleUpCenter {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .scale-up-center {
          animation: scaleUpCenter 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }
      `}} />
    </div>
  );
};

export default FinalContactFooterSection;
