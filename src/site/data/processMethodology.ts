export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  summary: string;
  imageLabel: string;
  expandedWhatHappens: string[];
  expandedOutputs: string[];
}

export const processSteps = [
  {
    id: 'step-01',
    number: '01',
    title: 'Analyze project conditions and client needs',
    summary: 'Evaluating physical sites and strategic goals to establish a clear baseline.',
    expandedWhatHappens: [
      'Conduct site condition review and baseline measurement.',
      'Identify core aesthetic intent and structural requirements.',
      'Define preliminary budget and schedule constraints.',
    ],
    expandedOutputs: [
      'Project Baseline Document',
      'Initial Risk Register',
    ],
  },
  {
    id: 'step-02',
    number: '02',
    title: 'Study required specifications (quality + design intent)',
    summary: 'Translating visual concepts into measurable physical tolerances and material traits.',
    expandedWhatHappens: [
      'Cross-reference design intent with material parameters.',
      'Establish acceptable tolerances for color, finish, and dimension.',
      'Draft technical testing requirements.',
    ],
    expandedOutputs: [
      'Material Specification Sheet',
      'Quality Tolerance Matrix',
    ],
  },
  {
    id: 'step-03',
    number: '03',
    title: 'Quantify realistically using advanced capture tools',
    summary: 'Capturing exact physical site reality to engineer material requirements rather than relying on theoretical drawings.',
    expandedWhatHappens: [
      'Deploy 3D reality capture networks (Pointcloud).',
      'Map physical material yields to spatial variations.',
    ],
    expandedOutputs: [
      'As-Built Reality Model',
      'Spatial Deviation Report',
    ],
  },
  {
    id: 'step-04',
    number: '04',
    title: 'Execute load study & select structural fixing system',
    summary: 'Engineering the hidden structural backbone that guarantees long-term durability and safety of the final application.',
    expandedWhatHappens: [
      'Execute structural deadload and windload calculations.',
      'Select and detail the appropriate mechanical/chemical fixing system.',
      'Produce technical anchor layouts for approval.',
    ],
    expandedOutputs: [
      'Fixing System Blueprint',
      'Optimized Bill of Quantities (BoQ)',
    ],
  },
  {
    id: 'step-05',
    number: '05',
    title: 'Assess HSE requirements (Health, Safety, Environment)',
    summary: 'Ensuring operations and logistics comply with stringent safety and environmental standards.',
    expandedWhatHappens: [
      'Identify site-specific operational hazards.',
      'Review heavy-lift and material handling logistics.',
      'Evaluate environmental control frameworks.',
    ],
    expandedOutputs: [
      'HSE Risk Assessment',
      'Handling & Lifting Protocol',
    ],
  },
  {
    id: 'step-06',
    number: '06',
    title: 'Evaluate schedule constraints, material availability, and feasible manufacturing timeline',
    summary: 'Aligning production reality with project expectations to guarantee delivery dates.',
    expandedWhatHappens: [
      'Verify raw material extraction timelines.',
      'Map factory processing capacities to the sequence.',
      'Buffer logistical and transit dependencies.',
    ],
    expandedOutputs: [
      'Manufacturing Timeline',
      'Delivery Sequence Plan',
    ],
  },
  {
    id: 'step-07',
    number: '07',
    title: 'Issue the technical + commercial proposal',
    summary: 'Presenting the fully engineered solution, cost structure, and formal deliverables.',
    expandedWhatHappens: [
      'Compile technical data, plans, and schedules.',
      'Finalize commercial pricing structure based on optimized BoQ.',
      'Define the formal deliverables list required after contract.',
    ],
    expandedOutputs: [
      'Technical Proposal Pack',
      'Commercial Offer',
      'Deliverables Checklist',
    ],
  },
  {
    id: 'step-08',
    number: '08',
    title: 'Onboard the client to the system + automate the workflow + activate live manufacturing tracking',
    summary: 'Transitioning from planning to active production with full telemetry visibility.',
    expandedWhatHappens: [
      'Initiate client portal access for E-Factory.',
      'Commence automated factory processing.',
      'Deploy live tracking for quality gates and shipment.',
    ],
    expandedOutputs: [
      'E-Factory Portal Access',
      'Live Production Dashboard',
    ],
  },
  {
    id: 'step-09',
    number: '09',
    title: 'Complete on-site handover procedures per project delivery system',
    summary: 'Executing physical delivery and formal sign-offs to close the manufacturing cycle.',
    expandedWhatHappens: [
      'Perform final pre-dispatch quality checks (Gate 4).',
      'Deliver materials in sequence to the site.',
      'Execute joint inspection and site handover signatures.',
    ],
    expandedOutputs: [
      'Delivery Notes & Manifests',
      'Handover Inspection Certificates',
    ],
  },
  {
    id: 'step-10',
    number: '10',
    title: 'Provide maintenance, cleaning, and treatment guides',
    summary: 'Ensuring long-term integrity and aesthetic retention of the delivered system.',
    expandedWhatHappens: [
      'Draft specific chemical and abrasive cleaning limits.',
      'Define long-term surface treatment cycles.',
      'Transfer final documentation to facility management.',
    ],
    expandedOutputs: [
      'Maintenance Manual',
      'Treatment Guides',
      'O&M Handover Pack',
    ],
  },
];
