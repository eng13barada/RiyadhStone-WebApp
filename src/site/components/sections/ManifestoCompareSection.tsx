import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronRight, CheckCircle2, AlertCircle, FileText, X, Plus, ShieldCheck, Layers, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createPortal } from 'react-dom';

gsap.registerPlugin(ScrollTrigger);

// --- TYPES & DATA ---
type CompareCategory = 'All' | 'Aesthetic' | 'Interfaces' | 'Quality' | 'Delivery' | 'Documentation' | 'HSE' | 'Sustainability' | 'Commercial';

interface CompareRowData {
  id: string;
  letter: string;
  topic: string;
  category: CompareCategory;
  materialFirst: string;
  engineeringFirst: string;
  whyFails: string[];
  howEngineered: string;
  outputs: string[];
}

const tableData: CompareRowData[] = [
  {
    id: 'a', letter: 'A', topic: 'Aesthetic intent definition', category: 'Aesthetic',
    materialFirst: 'Vague descriptions (e.g., "matching photo").',
    engineeringFirst: 'Define acceptance logic against control samples.',
    whyFails: ['Subjectivity leads to rejection.', 'No physical baseline set.'],
    howEngineered: 'RiyadhStone creates a sample register and range mockups to lock architectural intent.',
    outputs: ['Approved Sample Set', 'Range Guidelines']
  },
  {
    id: 'b', letter: 'B', topic: 'Boundary samples & limits', category: 'Aesthetic',
    materialFirst: 'Single "golden" sample approved verbally.',
    engineeringFirst: 'Approve extreme limits (lightest/darkest, varying veins).',
    whyFails: ['Natural stone inherently varies.', 'High rejection rates on site.'],
    howEngineered: 'RiyadhStone delivers sealed limit samples ensuring boundary transparency before mass production.',
    outputs: ['Sealed Limit Samples', 'Sample Register']
  },
  {
    id: 'c', letter: 'C', topic: 'BIM / Shop drawing coordination', category: 'Interfaces',
    materialFirst: '2D sketches disconnected from MEP/Structure.',
    engineeringFirst: 'Provide accurate LOD inputs for coordinated models.',
    whyFails: ['Stone clashes with steel or pipes.', 'Ignored fixing clearances.'],
    howEngineered: 'RiyadhStone supplies technical models and fixing clearances for seamless BIM coordination.',
    outputs: ['BIM Object Data', 'Clearance Matrix']
  },
  {
    id: 'd', letter: 'D', topic: 'Delivery phasing & site readiness', category: 'Delivery',
    materialFirst: 'All shipped at once or erratically.',
    engineeringFirst: 'Synchronize delivery with actual installation rhythm.',
    whyFails: ['Site gets clogged.', 'Materials get damaged in work zones.'],
    howEngineered: 'RiyadhStone builds delivery trackers aligned to site schedules for JIT efficiency.',
    outputs: ['Delivery Tracker', 'Phase Schedule']
  },
  {
    id: 'e', letter: 'E', topic: 'Edge & interface engineering', category: 'Interfaces',
    materialFirst: 'Left to installers to "figure out on site".',
    engineeringFirst: 'Engineer interface logic prior to shop drawings.',
    whyFails: ['Creates messy, unbuildable details.', 'Forces ad-hoc site cutting.'],
    howEngineered: 'RiyadhStone develops interface notes and standard joint assemblies for architectural purity.',
    outputs: ['Interface Notes', 'Typical Details']
  },
  {
    id: 'f', letter: 'F', topic: 'Finish perception under lighting', category: 'Aesthetic',
    materialFirst: 'Assumed identical to small hand samples.',
    engineeringFirst: 'Validate large-scale finish behavior in context.',
    whyFails: ['Lighting changes coarse textures.', 'Small samples hide macro variations.'],
    howEngineered: 'RiyadhStone executes full-scale mockup protocol under intended project lighting.',
    outputs: ['Mockup Sign-Off', 'TDS Reference']
  },
  {
    id: 'g', letter: 'G', topic: 'Gate inspections (ITP)', category: 'Quality',
    materialFirst: 'Final visual check only, often skipped.',
    engineeringFirst: 'Deploy Multi-stage Inspection and Test Plans (ITP).',
    whyFails: ['Defects discovered at site instead of factory.', 'Costly reverse logistics.'],
    howEngineered: 'RiyadhStone enforces Gate checklists at every critical production hold point.',
    outputs: ['ITP Records', 'Gate Checklists']
  },
  {
    id: 'h', letter: 'H', topic: 'HSE integration', category: 'HSE',
    materialFirst: 'Heavy lifting injuries and unsafe dry cutting.',
    engineeringFirst: 'Mandate safe handling limits and silica dust control.',
    whyFails: ['Lost time injuries disrupt project rhythm.', 'Non-compliance with safety regulations.'],
    howEngineered: 'RiyadhStone publishes project-specific weight guides and safe handling TDS documents.',
    outputs: ['Weight Limits Maps', 'Silica Control Policy']
  },
  {
    id: 'i', letter: 'I', topic: 'Interface logic & fixing', category: 'Interfaces',
    materialFirst: 'Ad-hoc fixing choices on site.',
    engineeringFirst: 'Pre-calculate fixing loads and embedment depth.',
    whyFails: ['Mechanical failure risk.', 'Clamping stresses cause cracks.'],
    howEngineered: 'RiyadhStone engineers the entire fixing system relative to material strength benchmarks.',
    outputs: ['Fixing Calcs', 'Embedded Logic']
  },
  {
    id: 'j', letter: 'J', topic: 'Joint tolerance standards', category: 'Quality',
    materialFirst: 'Assumed constant across the facade.',
    engineeringFirst: 'Define numerical tolerances for bow and thickness.',
    whyFails: ['Arguments over "acceptable" results.', 'Misaligned substructures.'],
    howEngineered: 'RiyadhStone establishes Quality gates and quantitative numerical criteria for every joint.',
    outputs: ['Quality Checklist', 'TDS Envelope']
  },
  {
    id: 'k', letter: 'K', topic: 'Kickoff alignment protocol', category: 'Documentation',
    materialFirst: 'Reactive submittals hoping for quick fixes.',
    engineeringFirst: 'Pre-align format and expectations before submitting.',
    whyFails: ['Endless Code B / Code C loops.', 'Consultant frustration.'],
    howEngineered: 'RiyadhStone hosts kickoff alignment meetings integrating our deliverables into the consultant format.',
    outputs: ['Alignment MOM', 'Approval Tracker']
  },
  {
    id: 'l', letter: 'L', topic: 'Lot/Batch traceability', category: 'Delivery',
    materialFirst: 'Unnamed pallets dumped on site.',
    engineeringFirst: 'Map specific pallets to specific elevations/zones.',
    whyFails: ['Installers waste days sorting.', 'Color blending becomes impossible.'],
    howEngineered: 'RiyadhStone applies Lot logic, labels, and dispatch reports for total traceability.',
    outputs: ['Pallet Maps', 'Barcode/QR Labels']
  },
  {
    id: 'm', letter: 'M', topic: 'Mockup validation', category: 'Quality',
    materialFirst: 'Skipped or done hastily.',
    engineeringFirst: 'Mandatory validation gate before mass production.',
    whyFails: ['Systematic errors are replicated.', 'Installers learn on the actual facade.'],
    howEngineered: 'RiyadhStone constructs and reviews full-scale performance mockups to validate shop drawing logic.',
    outputs: ['Mockup Protocol', 'ITP Approval']
  },
  {
    id: 'n', letter: 'N', topic: 'Non-Conformance management', category: 'Quality',
    materialFirst: 'Hidden defects or "patch and hide".',
    engineeringFirst: 'Transparent N-C reporting and rectification gates.',
    whyFails: ['Late rejection on site.', 'Future warranty failure risks.'],
    howEngineered: 'RiyadhStone maintains active NC logs with transparent, engineered resolution paths.',
    outputs: ['NC Register', 'Rectification Log']
  },
  {
    id: 'o', letter: 'O', topic: 'Output data pack structure', category: 'Documentation',
    materialFirst: 'Disorganized emails with fragmented attachments.',
    engineeringFirst: 'Compile structured technical and material submittals.',
    whyFails: ['Consultants cannot review efficiently.', 'Missing data stalls procurement.'],
    howEngineered: 'RiyadhStone formats standard Engineering Document Packs for efficient consultant approval.',
    outputs: ['Submittal Log', 'Material Pack']
  },
  {
    id: 'p', letter: 'P', topic: 'Packing & crating engineering', category: 'Delivery',
    materialFirst: 'Basic wooden crates with cheap foam.',
    engineeringFirst: 'Engineer crating specific to stone vulnerability.',
    whyFails: ['High percentage of edge crumbling.', 'Unsafe unloading accidents.'],
    howEngineered: 'RiyadhStone defines handling protocols and A-frame specs tailored to specific stone types.',
    outputs: ['Packing TDS', 'Handling Protocol']
  },
  {
    id: 'q', letter: 'Q', topic: 'Quality checklist metrics', category: 'Quality',
    materialFirst: 'No measurable metrics; "good practice" only.',
    engineeringFirst: 'Establish numerical criteria for every gate.',
    whyFails: ['Subjective quality arguments.', 'Inconsistent site acceptance criteria.'],
    howEngineered: 'RiyadhStone provides quantitative, measurable checklists for on-site installers.',
    outputs: ['Gate Metrics', 'QC Log']
  },
  {
    id: 'r', letter: 'R', topic: 'Revision & register management', category: 'Documentation',
    materialFirst: 'Files overwritten; no traceable history.',
    engineeringFirst: 'Maintain strict revision control and active registers.',
    whyFails: ['Fabrication uses outdated versions.', 'Arguments over "approved version".'],
    howEngineered: 'RiyadhStone implements central drawing, RFI, and sample registers for a single source of truth.',
    outputs: ['Drawing Register', 'Revision Log']
  },
  {
    id: 's', letter: 'S', topic: 'Sustainability/Sourcing tracking', category: 'Sustainability',
    materialFirst: 'No verifiable origin; massive offcut waste.',
    engineeringFirst: 'Optimize slab cutting yield and track quarry origin.',
    whyFails: ['Failure to achieve LEED/BREEAM.', 'Unnecessary environmental footprint.'],
    howEngineered: 'RiyadhStone executes Yield Optimization and origin tracking for certified green procurement.',
    outputs: ['Yield Study', 'Origin Certificate']
  },
  {
    id: 't', letter: 'T', topic: 'TDS (Technical Data Sheets) clarity', category: 'Documentation',
    materialFirst: 'Vague marketing brochures.',
    engineeringFirst: 'Issued project-specific Technical Data Sheets.',
    whyFails: ['Inaccurate data leads to failures.', 'Technical questions go unanswered.'],
    howEngineered: 'RiyadhStone issues deep-technical data sheets for every unique stonework condition.',
    outputs: ['System TDS', 'Material TDS']
  },
  {
    id: 'u', letter: 'U', topic: 'Unspecified vs Defined scope', category: 'Commercial',
    materialFirst: 'Hidden exclusions lead to massive claims.',
    engineeringFirst: 'Engineer the commercial boundary box upfront.',
    whyFails: ['Disputes over who provides fixings.', 'Project stalls due to financial standoffs.'],
    howEngineered: 'RiyadhStone clearly maps scope responsibilities and interface boundaries in the proposal.',
    outputs: ['Scope Boundary Matrix', 'Inclusions List']
  },
  {
    id: 'v', letter: 'V', topic: 'Validation of waste factors', category: 'Commercial',
    materialFirst: 'Count tiles without feasibility checks.',
    engineeringFirst: 'Validate QTO against actual shop drawings.',
    whyFails: ['Running out of stone at 95%.', 'Buying 30% more waste than needed.'],
    howEngineered: 'RiyadhStone issues validated BOQ extractions post-shop drawing approval.',
    outputs: ['Valid QTO', 'Waste Factor Study']
  },
  {
    id: 'w', letter: 'W', topic: 'Workflow synchronization', category: 'Delivery',
    materialFirst: 'Production disconnected from site progress.',
    engineeringFirst: 'Synchronize factory capacity with project rhythm.',
    whyFails: ['Crews idle waiting for stone.', 'Stock piling causes site damage.'],
    howEngineered: 'RiyadhStone maps production schedules to actual site milestones and installation rates.',
    outputs: ['Production Log', 'Expediting Plan']
  },
  {
    id: 'x', letter: 'X', topic: 'Extreme limit approval', category: 'Aesthetic',
    materialFirst: 'Assumed "average" appearance.',
    engineeringFirst: 'Mandatory approval of extreme deviations.',
    whyFails: ['Visual surprises during assembly.', 'Architect dissatisfaction.'],
    howEngineered: 'RiyadhStone identifies the extreme textural limits for client sign-off prior to production.',
    outputs: ['Extreme Range Pack', 'Limit Mockup']
  },
  {
    id: 'y', letter: 'Y', topic: 'Yield optimization', category: 'Sustainability',
    materialFirst: 'Random slab selection.',
    engineeringFirst: 'Automated nesting for maximal yield across blocks.',
    whyFails: ['Excessive waste and costs.', 'Inconsistent block utilization.'],
    howEngineered: 'RiyadhStone utilizes nesting software to minimize quarry wastage and maximize block yields.',
    outputs: ['Nesting Plan', 'Yield Report']
  },
  {
    id: 'z', letter: 'Z', topic: 'Zone-based dispatch mapping', category: 'Delivery',
    materialFirst: 'Random shipping order.',
    engineeringFirst: 'Sequential dispatch based on installation zones.',
    whyFails: ['Site chaos; re-handling damage.', 'Wrong pieces arrive for current elevation.'],
    howEngineered: 'RiyadhStone maps every pallet to a specific, GPS-logged elevation zone for zero-sorting arrival.',
    outputs: ['Zone Dispatch Map', 'Elevational Labels']
  }
];

// --- MODAL COMPONENT ---
interface ComparisonModalProps {
  row: CompareRowData | null;
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ row, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!row) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 font-manrope">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0908]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300 cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content - Closes on click anywhere */}
      <div 
        className="relative w-full max-w-5xl glass-panel-dark border border-white/10 rounded-none overflow-hidden shadow-[0_0_50px_rgba(206,170,106,0.1)] animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute inset-0 rs-stone-grain opacity-10 pointer-events-none" />
        
        {/* Header - Pinned */}
        <div className="relative z-20 border-b border-white/10 p-6 md:p-8 flex items-center bg-[#12100E]/80 backdrop-blur-md">
          <div className="space-y-1">
            <span className="text-[#CEAA6A]/60 text-[10px] font-[900] uppercase tracking-[0.4em]">{row.category}</span>
            <h3 className="text-[#FCFBEE] text-2xl md:text-3xl font-[800] tracking-tight">{row.topic}</h3>
          </div>
        </div>

        {/* Unified Table Content */}
        <div className="flex-1 overflow-y-auto rs-scrollbar p-6 md:p-8">
          <div className="rounded-none overflow-hidden bg-transparent">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-xs font-[900] uppercase tracking-[0.3em] text-[#CEAA6A]/60 w-1/3">Validation Aspect</th>
                  <th className="px-6 py-4 text-xs font-[900] uppercase tracking-[0.3em] text-[#FCFBEE]/40 w-1/3">Traditional Impact</th>
                  <th className="px-6 py-4 text-xs font-[900] uppercase tracking-[0.3em] text-[#CEAA6A] w-1/3">RiyadhStone® Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-6 py-6 text-base font-[700] text-[#FCFBEE]/80">Definition & Intent</td>
                  <td className="px-6 py-6 text-base font-[500] text-[#FCFBEE]/60">{row.materialFirst}</td>
                  <td className="px-6 py-6 text-base font-[700] text-[#FCFBEE]">{row.engineeringFirst}</td>
                </tr>
                <tr>
                  <td className="px-6 py-6 text-base font-[700] text-[#FCFBEE]/80">Engineering Execution</td>
                  <td className="px-6 py-6 text-base font-[500] text-[#FCFBEE]/60">Subjective verbal approvals.</td>
                  <td className="px-6 py-6 text-base font-[700] text-[#CEAA6A]">{row.howEngineered}</td>
                </tr>
                <tr>
                  <td className="px-6 py-6 text-base font-[700] text-[#FCFBEE]/80">Validated Outputs</td>
                  <td className="px-6 py-6 text-base font-[500] text-[#FCFBEE]/60">No traceable artifacts.</td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-3">
                      {row.outputs.map((out, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-[#FCFBEE]/80">
                          <div className="w-1.5 h-1.5 rounded-none bg-[#CEAA6A]" />
                          {out}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button 
              onClick={onClose}
              className="px-10 py-3 rounded-none border border-white/10 text-[10px] font-[900] uppercase tracking-[0.3em] text-[#FCFBEE]/40 hover:text-[#FCFBEE] hover:bg-white/5 transition-all"
            >
              Close Protocol Details
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ManifestoCompareSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategories, setActiveCategories] = useState<CompareCategory[]>(['All']);
  const [selectedRow, setSelectedRow] = useState<CompareRowData | null>(null);
  const [isTableExpanded, setIsTableExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({ 
        x: e.clientX - rect.left,
        y: e.clientY - rect.top 
      });
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.batch('.compare-row', {
        onEnter: (elements) => {
          gsap.fromTo(elements, 
            { opacity: 0, scale: 0.98, y: 10 },
            { opacity: 1, scale: 1, y: 0, stagger: 0.05, duration: 0.6, ease: 'power2.out', clearProps: 'all' }
          );
        },
        once: true
      });

      gsap.fromTo('.manifesto-reveal',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.manifesto-content',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategories]);

  const filteredData = useMemo(() => {
    if (activeCategories.includes('All')) return tableData;
    return tableData.filter(row => activeCategories.includes(row.category));
  }, [activeCategories]);

  const displayedData = isTableExpanded ? filteredData : filteredData.slice(0, 6);

  const toggleCategory = (cat: CompareCategory) => {
    if (cat === 'All') {
      setActiveCategories(['All']);
      return;
    }
    
    setActiveCategories(prev => {
      const withoutAll = prev.filter(c => c !== 'All');
      if (withoutAll.includes(cat)) {
        const next = withoutAll.filter(c => c !== cat);
        return next.length === 0 ? ['All'] : next;
      }
      return [...withoutAll, cat];
    });
  };

  const categories: CompareCategory[] = ['All', 'Aesthetic', 'Interfaces', 'Quality', 'Delivery', 'Documentation', 'HSE', 'Sustainability', 'Commercial'];

  return (
    <section 
      ref={sectionRef}
      id="manifesto-compare"
      onMouseMove={handleMouseMove}
      className="rs-band pt-16 pb-16 md:pt-20 md:pb-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#12100E] to-[#1E1A17] font-manrope"
      data-section-name="Manifesto & Protocols"
      data-theme="dark"
    >
      {/* Background Parity */}
      <div className="absolute inset-0 rs-noise-overlay opacity-[0.03] z-0 pointer-events-none" />
      <div className="absolute inset-0 rs-stone-grain opacity-[0.4] z-0 pointer-events-none" />
      <div className="rs-grid-overlay opacity-10" />

      {/* CIRCULAR HALO MOUSE EFFECT */}
      <div 
        className="absolute pointer-events-none w-[800px] h-[800px] bg-[#CEAA6A]/10 rounded-full blur-[140px] mix-blend-screen transition-opacity duration-500 opacity-60 z-0"
        style={{ 
          left: mousePos.x - 400, 
          top: mousePos.y - 400,
          background: 'radial-gradient(circle, rgba(206,170,106,0.15) 0%, transparent 70%)'
        }}
      />

      {/* LAYER A: MANIFESTO */}
      <div className="container mx-auto relative z-10 max-w-6xl text-center mb-32 manifesto-content">
        <span className="manifesto-reveal opacity-0 text-[#CEAA6A] font-[800] tracking-[0.2em] text-sm uppercase block mb-6">
          Manifesto
        </span>
        
        <h2 className="text-H2 font-[800] tracking-tight text-[#FCFBEE] mb-8 leading-[1.1] manifesto-reveal opacity-0">
          Supply focuses on material.<br className="hidden md:block" />
          <span className="text-[#CEAA6A] drop-shadow-[0_10px_30px_rgba(206,170,106,0.2)]">We focus on engineered results.</span>
        </h2>
        
        <p className="text-[#FCFBEE]/60 text-lg leading-relaxed mb-16 font-[500] manifesto-reveal opacity-0 max-w-2xl mx-auto">
          Natural material is not the risk. Undocumented expectations are. We engineer clarity: interfaces, tolerances, validation, and disciplined delivery records.
        </p>

        {/* Micro Block: Why / How / Result */}
        <div className="manifesto-reveal opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left max-w-7xl mx-auto">
          {[
            { label: 'Why', text: "Because approvals fail when expectations aren't measurable.", Icon: ShieldCheck },
            { label: 'How', text: "By turning intent into defined interfaces, validation gates, and traceable records.", Icon: Layers },
            { label: 'Result', text: 'Faster decisions, cleaner handovers, and significantly lower rework pressure.', Icon: TrendingUp }
          ].map((block, idx) => {
            const Icon = block.Icon;
            return (
            <div key={idx} className="group perspective-[1000px] cursor-pointer h-full">
              {/* Inner wrapper for 3D flip */}
              <div className="relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] grid">
                
                {/* FRONT FACE */}
                <div className="col-start-1 row-start-1 [backface-visibility:hidden] glass-panel-dark p-10 md:p-12 rounded-none bg-[#1E1A17]/70 border border-transparent shadow-xl relative overflow-hidden flex flex-col justify-start">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#CEAA6A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="text-[#CEAA6A] text-[16px] md:text-[18px] font-[800] uppercase tracking-[0.4em] mb-6 md:mb-8">{block.label}</h4>
                  <p className="text-[#FCFBEE] text-2xl md:text-3xl font-[500] leading-snug">{block.text}</p>
                </div>
                
                {/* BACK FACE */}
                <div className="col-start-1 row-start-1 [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel-dark p-10 md:p-12 rounded-none bg-[#12100E] border border-[#CEAA6A]/20 shadow-[0_0_30px_rgba(206,170,106,0.1)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CEAA6A]/5 to-transparent pointer-events-none" />
                  <Icon size={96} className="text-[#CEAA6A] opacity-80 group-hover:animate-pulse" strokeWidth={1} />
                </div>
                
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* LAYER B: SMART COMPARISON TABLE (CENTERED) */}
      <div className="container mx-auto relative z-10 px-4 max-w-6xl">
        <div className="relative overflow-hidden">
          
          {/* Table Header Wrapper */}
          <div className="flex flex-col gap-8 mb-10 relative z-10 border-b border-white/5 pb-10 text-center">
            <h3 id="manifesto-table-title" className="text-H2 font-[800] tracking-tight text-[#FCFBEE] leading-[1.1]">
              Material-First vs <br className="hidden md:block" />
              <span className="text-[#CEAA6A] drop-shadow-[0_10px_30px_rgba(206,170,106,0.2)]">Engineering-First</span>
            </h3>
            
            <p className="text-[#CEAA6A] text-sm md:text-[18px] font-[800] tracking-[0.4em] uppercase w-full">
              Procedural Risk Reduction Table
            </p>
            
            <div className="flex items-center justify-center gap-3 mt-2 w-full">
              <FileText size={18} className="text-[#CEAA6A]" strokeWidth={2} />
              <span className="text-[#FCFBEE]/60 text-xs md:text-sm font-[600] uppercase tracking-[0.2em]">
                Smart Table representing RiyadhStone® Premium Delivery
              </span>
            </div>
          </div>

          {/* Flexible Categories */}
          <div className="flex flex-col gap-2 mb-4 relative z-10 px-4">
            <div className="flex flex-col gap-3 items-center justify-center border-b border-white/5 pb-4">
              <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.42em' }}>Filter Protocol:</span>
              {/* Two-row flex-wrap centered layout */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.35rem 1.6rem', maxWidth: '680px' }}>
                {([
                  { cat: 'All',           color: '#CEAA6A', shadow: 'rgba(206,170,106,0.9)' },
                  { cat: 'Aesthetic',     color: '#a78bfa', shadow: 'rgba(167,139,250,0.9)' },
                  { cat: 'Interfaces',    color: '#38bdf8', shadow: 'rgba(56,189,248,0.9)'  },
                  { cat: 'Quality',       color: '#4ade80', shadow: 'rgba(74,222,128,0.9)'  },
                  { cat: 'Delivery',      color: '#fb923c', shadow: 'rgba(251,146,60,0.9)'  },
                  { cat: 'Documentation', color: '#f9a8d4', shadow: 'rgba(249,168,212,0.9)' },
                  { cat: 'HSE',           color: '#f87171', shadow: 'rgba(248,113,113,0.9)' },
                  { cat: 'Sustainability',color: '#86efac', shadow: 'rgba(134,239,172,0.9)' },
                  { cat: 'Commercial',    color: '#fcd34d', shadow: 'rgba(252,211,77,0.9)'  },
                ] as { cat: CompareCategory; color: string; shadow: string }[]).map(({ cat, color, shadow }) => {
                  const isActive = activeCategories.includes(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      style={{
                        fontFamily: '"Manrope", sans-serif',
                        fontSize: '0.82rem',
                        fontWeight: isActive ? 800 : 400,
                        textTransform: 'uppercase',
                        letterSpacing: '0.22em',
                        padding: '0.28rem 0.15rem',
                        border: 'none',
                        background: 'transparent',
                        color: isActive ? color : 'rgba(255,255,255,0.22)',
                        cursor: 'pointer',
                        transition: 'all 0.22s',
                        textShadow: isActive
                          ? `0 0 8px ${shadow}, 0 0 20px ${shadow.replace('0.9','0.5')}, 0 0 40px ${shadow.replace('0.9','0.25')}`
                          : 'none',
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <style>{`
            @keyframes filterSweep {
              0%   { transform: translateX(-100%); }
              100% { transform: translateX(300%); }
            }
          `}</style>

          {/* Table Body */}
          <div className="flex flex-col gap-px bg-white/5 rounded-none overflow-hidden border border-white/5 relative">
            
            {/* Sticky Headers */}
            <div className="sticky top-0 z-20 bg-[#12100E]/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 md:px-6 md:py-4 lg:px-7 flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <div className="shrink-0 w-12 hidden md:block text-transparent">#</div>
              <div className="flex-1 min-w-[200px]">
                <span className="text-xs md:text-sm font-[900] uppercase tracking-[0.4em] text-[#CEAA6A]">Criteria</span>
              </div>
              <div className="flex items-center gap-8 shrink-0 w-full md:w-auto">
                <div className="flex-1 md:w-56 text-center">
                  <span className="text-xs md:text-sm font-[900] uppercase tracking-[0.4em] text-white/40">Old School</span>
                </div>
                <div className="w-[1px] h-4 bg-transparent" />
                <div className="flex-1 md:w-56 text-center">
                  <span className="text-xs md:text-sm font-[900] uppercase tracking-[0.4em] text-[#CEAA6A]">RiyadhStone Protocol</span>
                </div>
              </div>
              <div className="shrink-0 w-[42px] hidden md:block border border-transparent" />
            </div>

            {displayedData.map(row => (
              <div 
                key={row.id} 
                className="compare-row bg-[#12100E] group hover:bg-[#1E1A17] transition-all duration-500 cursor-pointer border-b border-white/5 last:border-0"
                onClick={() => setSelectedRow(row)}
              >
                <div className="px-4 py-5 md:px-6 md:py-5 lg:px-7 flex flex-col md:flex-row items-center gap-4 md:gap-10 relative flex-wrap md:flex-nowrap">
                  {/* Letter Pin */}
                  <div className="shrink-0 w-12 text-[#CEAA6A]/10 font-[900] text-xl group-hover:text-[#CEAA6A]/30 transition-colors italic select-none">
                    {row.letter}
                  </div>

                  <div className="flex-1 min-w-[200px]">
                    <div className="text-[12px] text-[#CEAA6A]/50 font-[900] uppercase tracking-[0.4em] mb-2">{row.category}</div>
                    <h4 className="text-lg md:text-xl text-[#FCFBEE] font-[700] tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500 italic">
                      {row.topic}
                    </h4>
                  </div>

                  {/* High-Level Comparison States */}
                  <div className="flex items-center gap-8 shrink-0 w-full md:w-auto">
                    <div className="flex-1 md:w-56 text-center opacity-55 group-hover:opacity-90 transition-opacity">
                      <div className="text-sm font-[500] text-[#FCFBEE]/60 leading-snug italic text-left">
                        {/* First item: full materialFirst text as 1-2 wrapped lines */}
                        <div className="flex items-start gap-1.5 mb-1">
                          <span className="text-red-400/50 mt-0.5 shrink-0">–</span>
                          <span className="whitespace-normal">{row.materialFirst}</span>
                        </div>
                        {/* Why fails as dimmer sub-items */}
                        {row.whyFails.slice(0, 2).map((fail, i) => (
                          <div key={`f${i}`} className="flex items-start gap-1.5">
                            <span className="text-red-400/40 mt-0.5 shrink-0">!</span>
                            <span className="text-[#FCFBEE]/35 text-xs">{fail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-[1px] h-6 bg-white/5" />

                    <div className="flex-1 md:w-56 text-center group-hover:scale-105 transition-transform">
                      <div className="text-sm font-[800] text-[#FCFBEE] leading-tight italic">{row.engineeringFirst}</div>
                    </div>
                  </div>

                  <div className="shrink-0 p-3 border border-white/5 rounded-none text-[#CEAA6A]/40 group-hover:bg-[#CEAA6A] group-hover:text-[#12100E] transition-all duration-500 shadow-xl">
                    <Plus size={18} strokeWidth={3} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Expansion Toggle */}
          {filteredData.length > 6 && (
            <div className="mt-8 flex justify-center" id="manifesto-table-expander">
              <button 
                onClick={() => {
                  if (isTableExpanded) {
                    const topEl = document.getElementById('manifesto-table-title');
                    if (topEl) {
                      topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                  setIsTableExpanded(!isTableExpanded);
                }}
                className="group flex flex-col items-center gap-2"
              >
                <p className="text-[15px] font-[800] text-[#CEAA6A] uppercase tracking-[0.3em]">
                  {isTableExpanded ? 'Show Less' : `Explore All (${filteredData.length})`}
                </p>
                <div className="w-10 h-10 rounded-none border border-[#CEAA6A]/30 flex items-center justify-center bg-[#CEAA6A]/5 group-hover:bg-[#CEAA6A] group-hover:text-[#12100E] text-[#CEAA6A] transition-all">
                  <Plus size={16} className={`transition-transform duration-500 ${isTableExpanded ? 'rotate-45' : ''}`} />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="container mx-auto max-w-4xl text-center mt-12 mb-4 relative z-10 px-8">
        <div className="flex flex-col items-center gap-8">
          <h5 className="text-[#FCFBEE]/60 text-xl md:text-2xl font-[700] italic uppercase tracking-widest leading-none">Ready to engineer your stonework?</h5>
          <a 
            href="/contact-us#rfq"
            className="group relative bg-transparent border border-[#CEAA6A]/30 text-[#CEAA6A] px-12 py-5 rounded-none font-[900] text-sm uppercase tracking-widest hover:bg-[#CEAA6A] hover:text-[#12100E] transition-all hover:scale-105 italic flex items-center gap-4"
          >
            <span>Initiate Protocol & RFQ</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* RENDER POPUP MODAL */}
      <ComparisonModal 
        row={selectedRow} 
        onClose={() => setSelectedRow(null)} 
      />
    </section>
  );
};

export default ManifestoCompareSection;
