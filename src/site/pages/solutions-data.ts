/* ─── Solutions & Products — Data Layer ─── */
import rs_products_riyadex_card_v01 from '../assets/generated/rs_products_riyadex_card_v01.png';
import rs_products_riyadfloor_card_v01 from '../assets/generated/rs_products_riyadfloor_card_v01.png';
import rs_products_riyadciv_card_v01 from '../assets/generated/rs_products_riyadciv_card_v01.png';
import rs_products_riyadwet_card_v01 from '../assets/generated/rs_products_riyadwet_card_v01.png';
import rs_products_riyadurb_card_v01 from '../assets/generated/rs_products_riyadurb_card_v01.png';
import rs_products_riyadstep_card_v01 from '../assets/generated/rs_products_riyadstep_card_v01.png';
import rs_products_riyadraw_card_v01 from '../assets/generated/rs_products_riyadraw_card_v01.png';

// Import newly generated texture assets
import textureHoned from '../assets/generated/rs_texture_honed_v01.png';
import textureBushhammered from '../assets/generated/rs_texture_bushhammered_v01.png';
import textureSandblasted from '../assets/generated/rs_texture_sandblasted_v01.png';
import textureBrushed from '../assets/generated/rs_texture_brushed_v01.png';
import textureFlamed from '../assets/generated/rs_texture_flamed_v01.png';
import textureSawn from '../assets/generated/rs_texture_sawn_v01.png';
import textureSplitface from '../assets/generated/rs_texture_splitface_v01.png';
import textureTumbled from '../assets/generated/rs_texture_tumbled_v01.png';

export interface SubProduct { name: string; label: string; image: string; }
export interface Family {
  id: string; name: string; trademark: string; descriptor: string;
  body: string[]; constraints: string[]; useWhen: string; avoidWhen: string;
  outputs: string[]; subProducts: SubProduct[];
  image: string; color: string;
}
export interface Finish {
  id: string; name: string; image: string;
  families: string[]; exposure: string; traction: string; notes: string;
  useWhen: string; avoidWhen: string; careNotes: string;
}
export interface CompRow { criteria: string; [key: string]: string; }

export const FAMILIES: Family[] = [
  {
    id: 'riyadex', name: 'RiyadEx', trademark: 'RiyadEx™', descriptor: 'Facade System',
    body: [
      'High-exposure cladding engineered for interface discipline and approval readiness. Designed around anchors, joints, tolerances, and documented installation logic.',
      'Every RiyadEx™ solution starts with the substructure interface — we define how stone meets structure before the first cut.'
    ],
    constraints: ['Define substructure and fixing strategy early', 'Control joint layout + edge conditions', 'Mockups recommended for finish perception'],
    useWhen: 'Architectural facades with strict geometry and approvals',
    avoidWhen: 'Scope is undefined or structure/fixings are unknown',
    outputs: ['TDS', 'Method Statement', 'CAD Details', 'BIM Objects', 'Submittal Pack'],
    subProducts: [
      { name: 'Ventilated Cladding Panels', label: 'Primary', image: '' },
      { name: 'Direct Adhered Facades', label: 'Variant', image: '' },
      { name: 'Framed Opening Kits', label: 'Interface', image: '' },
      { name: 'Sill & Reveal Modules', label: 'Detail', image: '' },
      { name: 'Corner & Return Modules', label: 'Edge', image: '' },
      { name: 'Coping & Parapet Caps', label: 'Crown', image: '' },
      { name: 'Curtain Wall Inserts', label: 'Integration', image: '' },
      { name: 'Soffit Returns', label: 'Overhead', image: '' },
    ],
    image: rs_products_riyadex_card_v01, color: '#CEAA6A',
  },
  {
    id: 'riyadfloor', name: 'RiyadFloor', trademark: 'RiyadFloor™', descriptor: 'Paving System',
    body: [
      'Validated for pedestrian and vehicular loads with engineered bedding logic and slip discipline. Built for maintainability and predictable performance.',
      'Slip rating is governed by finish type and exposure — selected before production, not after installation.'
    ],
    constraints: ['Base preparation + compaction spec', 'Slip rating by finish + exposure', 'Drainage and slope logic'],
    useWhen: 'External hardscape, plazas, access roads, and covered paving',
    avoidWhen: 'Base conditions are undefined or drainage is unresolved',
    outputs: ['TDS', 'Laying Pattern PDF', 'Bedding Spec', 'CAD Details'],
    subProducts: [
      { name: 'Interlock Modules', label: 'Primary', image: '' },
      { name: 'Large Format Pavers', label: 'Feature', image: '' },
      { name: 'Vehicular Cobbles', label: 'Heavy Load', image: '' },
      { name: 'Permeable Paving', label: 'Drainage', image: '' },
      { name: 'Tactile / Guidance Units', label: 'Safety', image: '' },
      { name: 'Curbs & Edging', label: 'Edge', image: '' },
      { name: 'Expansion Joint Sets', label: 'Control', image: '' },
      { name: 'Gutter Profiles', label: 'Water', image: '' },
    ],
    image: rs_products_riyadfloor_card_v01, color: '#B8956A',
  },
  {
    id: 'riyadciv', name: 'RiyadCiv', trademark: 'RiyadCiv™', descriptor: 'Civil Identity',
    body: [
      'Urban monuments and civic infrastructure elements designed for public durability and visual identity. Engineered for impact, vandal resistance, and long-term readability.',
      'Civic stone is held to consistent batch standards and finish governance across long project timelines.'
    ],
    constraints: ['Public exposure + maintenance strategy', 'Edge protection + anchoring logic', 'Finish consistency across batches'],
    useWhen: 'Public realm identity, branded civic environments, monument zones',
    avoidWhen: 'No maintenance plan or unconfirmed anchorage',
    outputs: ['TDS', 'Method Statement', 'BIM Objects', 'CAD Details'],
    subProducts: [
      { name: 'Signage Plinths', label: 'Identity', image: '' },
      { name: 'Monument Bases', label: 'Structure', image: '' },
      { name: 'Wayfinding Totems', label: 'Navigation', image: '' },
      { name: 'Civic Wall Panels', label: 'Surface', image: '' },
      { name: 'Engraved Feature Walls', label: 'Bespoke', image: '' },
      { name: 'Border Demarcations', label: 'Boundary', image: '' },
      { name: 'Flagpole Pedestals', label: 'Anchor', image: '' },
      { name: 'Gateway Columns', label: 'Entrance', image: '' },
    ],
    image: rs_products_riyadciv_card_v01, color: '#8C7A6A',
  },
  {
    id: 'riyadwet', name: 'RiyadWet', trademark: 'RiyadWet™', descriptor: 'Water System',
    body: [
      'Engineered stone solutions for fountains, pools, and wet zones. Focused on absorption control, edge detailing, and safe traction.',
      'Chemical compatibility and cleaning protocols are documented before supply to prevent durability failures.'
    ],
    constraints: ['Absorption/porosity governance', 'Anti-slip finish selection', 'Chemical exposure & cleaning methods'],
    useWhen: 'Pools, fountains, wet zones, water-feature surrounds',
    avoidWhen: 'No chemical exposure plan or no slip-rating requirement defined',
    outputs: ['TDS', 'Absorption Report', 'Anti-slip Certification Reference', 'Method Statement'],
    subProducts: [
      { name: 'Pool Coping', label: 'Edge', image: '' },
      { name: 'Fountain Liners', label: 'Surface', image: '' },
      { name: 'Overflow Edge Kits', label: 'Control', image: '' },
      { name: 'Wet Stair Nosing', label: 'Safety', image: '' },
      { name: 'Scuppers & Spouts', label: 'Flow', image: '' },
      { name: 'Drainage Grates', label: 'Cover', image: '' },
      { name: 'Shower Trays (Exterior)', label: 'Base', image: '' },
      { name: 'Submerged Plinths', label: 'Feature', image: '' },
    ],
    image: rs_products_riyadwet_card_v01, color: '#6A8A8C',
  },
  {
    id: 'riyadurb', name: 'RiyadUrb', trademark: 'RiyadUrb™', descriptor: 'Urban Furniture',
    body: [
      'Functional public furnishings engineered for comfort, durability, and replaceable modules. Designed around human use and civil maintenance.',
      'Edge geometry and seating surfaces are governed for ergonomic safety and long-term service.'
    ],
    constraints: ['Ergonomics + touch surfaces', 'Impact resistance on edges', 'Modularity for replacement'],
    useWhen: 'Public plazas, parks, transit zones, and outdoor programming areas',
    avoidWhen: 'No replacement/maintenance plan for high-traffic zones',
    outputs: ['TDS', 'Installation Method', 'CAD Details'],
    subProducts: [
      { name: 'Bench Modules', label: 'Seating', image: '' },
      { name: 'Modular Planters', label: 'Landscape', image: '' },
      { name: 'Integrated Seat Walls', label: 'Edge', image: '' },
      { name: 'Bollards & Barriers', label: 'Safety', image: '' },
      { name: 'Waste Receptacle Enclosures', label: 'Utility', image: '' },
      { name: 'Drinking Fountain Pedestals', label: 'Station', image: '' },
      { name: 'Bicycle Stands', label: 'Transit', image: '' },
      { name: 'Tree Grates (Stone Set)', label: 'Flora', image: '' },
    ],
    image: rs_products_riyadurb_card_v01, color: '#7A8C6A',
  },
  {
    id: 'riyadstep', name: 'RiyadStep', trademark: 'RiyadStep™', descriptor: 'Stairs',
    body: [
      'Precision-cut step and riser combinations engineered for safe movement and consistent rhythm. Focused on tolerances, nosing details, and slip control.',
      'Step geometry and nosing profiles are governed to regulatory rhythm requirements and anti-slip standards.'
    ],
    constraints: ['Riser/going dimensional consistency', 'Nosing detail and edge protection', 'Anti-slip finish for exposure'],
    useWhen: 'External and internal stairs, terracing, and landscaped level changes',
    avoidWhen: 'Stair geometry is unresolved or structural substrate is unconfirmed',
    outputs: ['TDS', 'Step Detail Drawings', 'Anti-slip Spec', 'Method Statement'],
    subProducts: [
      { name: 'Exterior Stair Kits', label: 'Primary', image: '' },
      { name: 'Riser + Tread Sets', label: 'Component', image: '' },
      { name: 'Integrated Nosing Profiles', label: 'Safety', image: '' },
      { name: 'Landing Pavers', label: 'Transition', image: '' },
      { name: 'Stringer Cladding', label: 'Edge', image: '' },
      { name: 'Tactile Warning Inserts', label: 'Code', image: '' },
      { name: 'Floating Step Blocks', label: 'Feature', image: '' },
      { name: 'Curved Stair Modules', label: 'Bespoke', image: '' },
    ],
    image: rs_products_riyadstep_card_v01, color: '#9A8A6A',
  },
  {
    id: 'riyadraw', name: 'RiyadRaw', trademark: 'RiyadRaw™', descriptor: 'Raw Supply',
    body: [
      'Premium blocks and slabs governed for traceability-ready processing. Intended for controlled downstream manufacturing or specialized applications.',
      'Batch documentation and labeling are included by default — not as an optional add-on.'
    ],
    constraints: ['Selection criteria by intended cut plan', 'Batch documentation and labeling', 'Finish/vein governance where applicable'],
    useWhen: 'Secondary processors, bespoke fabrication, or specialized quarry stock',
    avoidWhen: 'Unknown downstream cut plan or no batch tracking requirement',
    outputs: ['TDS', 'Batch Records', 'Quarry Origin Certificate'],
    subProducts: [
      { name: 'Raw Blocks', label: 'Structural', image: '' },
      { name: 'Unfinished Slabs', label: 'Surface', image: '' },
      { name: 'Calibrated Blanks', label: 'Precision', image: '' },
      { name: 'Cut-to-Size Basics', label: 'Prep', image: '' },
      { name: 'Rubble / Landscape Boulders', label: 'Natural', image: '' },
      { name: 'Off-cut Pallets', label: 'Recycle', image: '' },
      { name: 'Cleft Sheets', label: 'Raw', image: '' },
      { name: 'Special Selection (by request)', label: 'Bespoke', image: '' },
    ],
    image: rs_products_riyadraw_card_v01, color: '#CEAA6A',
  },
];

export const FINISHES: Finish[] = [
  {
    id: 'honed', name: 'Honed', image: textureHoned,
    families: ['riyadex', 'riyadwet', 'riyadstep'],
    exposure: 'Interior / Covered Exterior', traction: 'Medium',
    notes: 'Smooth matte surface; shows veining clearly.',
    useWhen: 'Areas with controlled exposure, polished appearance desired without gloss.',
    avoidWhen: 'Wet zones with no slip mitigation planned.',
    careNotes: 'Sealing recommended in wet or high-soiling environments.',
  },
  {
    id: 'bushhammered', name: 'Bush Hammered', image: textureBushhammered,
    families: ['riyadfloor', 'riyadciv', 'riyadurb'],
    exposure: 'Exterior / Public', traction: 'High',
    notes: 'Mechanical texture for maximum traction and durability.',
    useWhen: 'High-traffic pedestrian zones, civic plazas, public access.',
    avoidWhen: 'Delicate aesthetic environments or interior feature walls.',
    careNotes: 'Pressure wash compatible; deep cleaning periodically.',
  },
  {
    id: 'sandblasted', name: 'Sandblasted', image: textureSandblasted,
    families: ['riyadfloor', 'riyadciv', 'riyadstep'],
    exposure: 'Exterior / Public', traction: 'High',
    notes: 'Uniform grainy texture; hides minor surface variation.',
    useWhen: 'Exterior paving, civic identity elements, anti-slip stairs.',
    avoidWhen: 'Indoor spaces where fine texture is excessive.',
    careNotes: 'Avoid high-pressure cleaning with salts; reseal annually in arid climates.',
  },
  {
    id: 'brushed', name: 'Brushed / Antique', image: textureBrushed,
    families: ['riyadfloor', 'riyadurb', 'riyadstep'],
    exposure: 'Interior / Light Exterior', traction: 'Medium',
    notes: 'Softened texture with aged look; reveals colour depth.',
    useWhen: 'Period-inspired design, boutique hospitality, soft-use paving.',
    avoidWhen: 'Heavy vehicular loading or persistent wet exposure.',
    careNotes: 'pH-neutral cleaners only; avoid acidic solutions.',
  },
  {
    id: 'flamed', name: 'Flamed', image: textureFlamed,
    families: ['riyadfloor', 'riyadciv', 'riyadstep'],
    exposure: 'Exterior / Heavy Public', traction: 'High',
    notes: 'Thermally stressed surface; highly durable and slip-resistant.',
    useWhen: 'External paving where maximum durability and traction are required.',
    avoidWhen: 'Interior environments; stones sensitive to thermal change.',
    careNotes: 'Highly resistant; standard cleaning protocol applies.',
  },
  {
    id: 'sawn', name: 'Sawn / As-Cut', image: textureSawn,
    families: ['riyadraw', 'riyadciv', 'riyadex'],
    exposure: 'Variable', traction: 'Low–Medium',
    notes: 'Machine-cut face; clean and consistent for downstream finishing.',
    useWhen: 'Raw supply, further finishing, or contemporary architectural expression.',
    avoidWhen: 'Wet zones without slip treatment; unprotected exterior paving.',
    careNotes: 'Seal if used in exposed conditions; finish as required.',
  },
  {
    id: 'splitface', name: 'Split-Face', image: textureSplitface,
    families: ['riyadex', 'riyadciv'],
    exposure: 'Exterior Feature', traction: 'Medium',
    notes: 'Natural cleft texture for feature facades and accent walls.',
    useWhen: 'Feature panels, cultural identity facades, textured accent zones.',
    avoidWhen: 'Floor or paving applications; heavy foot traffic.',
    careNotes: 'Use dry-brush cleaning; avoid water saturation.',
  },
  {
    id: 'tumbled', name: 'Tumbled', image: textureTumbled,
    families: ['riyadfloor', 'riyadurb'],
    exposure: 'Light Exterior / Landscape', traction: 'Medium',
    notes: 'Softened edges and worn texture; heritage and landscape appeal.',
    useWhen: 'Landscape paths, garden paving, boutique outdoor settings.',
    avoidWhen: 'High-traffic public plazas or chemically active environments.',
    careNotes: 'Seal in wet climates; pH-neutral maintenance products.',
  },
];

export const COMP_ROWS: CompRow[] = [
  { criteria: 'Primary Use-Case', riyadex: 'Exterior facade & cladding', riyadfloor: 'Paving & hardscape', riyadciv: 'Civic identity', riyadwet: 'Wet & water zones', riyadurb: 'Urban furniture', riyadstep: 'Stairs & level changes', riyadraw: 'Raw material supply' },
  { criteria: 'Exposure Tolerance', riyadex: 'High exterior', riyadfloor: 'High exterior', riyadciv: 'High public', riyadwet: 'Wet / chemical', riyadurb: 'Public / impact', riyadstep: 'Mixed exposure', riyadraw: 'Varies by end-use' },
  { criteria: 'Load Profile', riyadex: 'Wind / thermal', riyadfloor: 'Pedestrian / vehicular', riyadciv: 'Impact resistance', riyadwet: 'Wet load', riyadurb: 'Human impact', riyadstep: 'Dynamic / foot', riyadraw: 'N/A — supply only' },
  { criteria: 'Interface Complexity', riyadex: 'High (substructure)', riyadfloor: 'Medium (bedding)', riyadciv: 'Medium', riyadwet: 'High (sealing)', riyadurb: 'Low–Medium', riyadstep: 'Medium (nosing)', riyadraw: 'Low' },
  { criteria: 'Finish Sensitivity', riyadex: 'High (mockups rec.)', riyadfloor: 'Medium', riyadciv: 'Medium–High', riyadwet: 'High (slip/absorption)', riyadurb: 'Low–Medium', riyadstep: 'High (slip)', riyadraw: 'Varies' },
  { criteria: 'Traction Priority', riyadex: 'Low', riyadfloor: 'High', riyadciv: 'High', riyadwet: 'Very High', riyadurb: 'Medium', riyadstep: 'Very High', riyadraw: 'N/A' },
  { criteria: 'Validation Intensity', riyadex: 'High (mockup)', riyadfloor: 'Medium', riyadciv: 'Medium', riyadwet: 'High', riyadurb: 'Low', riyadstep: 'Medium', riyadraw: 'Low' },
  { criteria: 'Typical Deliverables', riyadex: 'TDS, CAD, BIM, MAR', riyadfloor: 'TDS, CAD, Bedding', riyadciv: 'TDS, BIM, MAR', riyadwet: 'TDS, Absorption, MS', riyadurb: 'TDS, CAD, Install', riyadstep: 'TDS, Detail, MS', riyadraw: 'TDS, Batch Rec.' },
  { criteria: 'Installation Discipline', riyadex: 'Specialist required', riyadfloor: 'Standard + QA', riyadciv: 'Standard + QA', riyadwet: 'Specialist + seal', riyadurb: 'Standard', riyadstep: 'Standard + QA', riyadraw: 'Downstream only' },
  { criteria: 'Maintenance Expectations', riyadex: 'Low (exterior govnr.)', riyadfloor: 'Low–Medium', riyadciv: 'Low', riyadwet: 'Medium (seal cycle)', riyadurb: 'Low', riyadstep: 'Low–Medium', riyadraw: 'N/A' },
];
