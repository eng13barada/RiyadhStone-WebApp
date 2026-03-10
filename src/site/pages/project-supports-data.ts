/* ─── Project Supports — Data Layer ─── */

export interface RiskControl {
  category: string;
  risk: string;
  control: string;
}

export const RISK_CONTROLS: RiskControl[] = [
  { category: 'Scope', risk: 'Scope ambiguity & claims', control: 'Scope Clarification Notes + governed minutes' },
  { category: 'Approvals', risk: 'Approval delays', control: 'Submittal packs with controlled revisions' },
  { category: 'Aesthetics', risk: 'Shade/finish disputes', control: 'Finish & Shade Range confirmation set' },
  { category: 'Quality', risk: 'Site rework & tolerance errors', control: 'Setting-out verification + checklists' },
  { category: 'Inspection', risk: 'QA/QC rejection', control: 'Formal inspection requests & hold points' },
  { category: 'Logistics', risk: 'Delivery uncertainty & shortages', control: 'Zoned supply schedules + weekly reports' },
  { category: 'Material', risk: 'Traceability gaps', control: 'Batch-to-zone traceability logs' },
  { category: 'Safety', risk: 'HSE stoppages', control: 'HSE Plan + JSA/RAMS integration' },
  { category: 'Financial', risk: 'Handover deductions & retention delays', control: 'Zone handover sheets + snag closure logs' },
  { category: 'Lifecycle', risk: 'Warranty ambiguity', control: 'Scope-based warranty statement' },
];

export interface ProtocolStep {
  id: string;
  title: string;
  intent: string;
  outputs: string[];
  riskEliminated: string;
}

export const PROTOCOLS: ProtocolStep[] = [
  { id: 'p01', title: 'Protocol 01 — Contract & Scope Lock', intent: 'Define scope boundaries before commitments are made.', outputs: ['Kickoff Minutes', 'Base Clarification Note'], riskEliminated: 'Undiscovered scope gaps that turn into late-stage claims.' },
  { id: 'p02', title: 'Protocol 02 — Baseline Planning + Zoning', intent: 'Map the project into manageable delivery zones.', outputs: ['Zoned Delivery Plan', 'Baseline Schedule'], riskEliminated: 'Uncoordinated site deliveries and programme slippage.' },
  { id: 'p03', title: 'Protocol 03 — Lookahead & Site Readiness', intent: 'Verify site conditions before material arrives.', outputs: ['Lookahead Plan', 'Site Readiness Checklist'], riskEliminated: 'Material stacked on site unable to be installed, risking damage.' },
  { id: 'p04', title: 'Protocol 04 — HSE-by-Design Controls', intent: 'Integrate safety into the installation methodology.', outputs: ['HSE Plan', 'JSA/RAMS per task type'], riskEliminated: 'Safety incidents and resulting site stoppages or liability.' },
  { id: 'p05', title: 'Protocol 05 — Submittal Governance', intent: 'Lock technical and aesthetic expectations.', outputs: ['Material Submittal (ST-04)', 'Finish & Shade Range Set'], riskEliminated: 'Multi-cycle approval rework and consultant rejection.' },
  { id: 'p06', title: 'Protocol 06 — Method Statements + ITP Discipline', intent: 'Define "how" and "when" we check quality.', outputs: ['Method Statement', 'Inspection Test Plan (ITP)'], riskEliminated: 'Inconsistent installation quality and arbitrary rejection criteria.' },
  { id: 'p07', title: 'Protocol 07 — Supply Sequencing & Delivery Control', intent: 'Ensure right material arrives at right time.', outputs: ['Supply Schedule by Zone', 'Weekly Supply Report'], riskEliminated: 'Shortages during critical installation sequences.' },
  { id: 'p08', title: 'Protocol 08 — Batch Traceability (Lot → Zone)', intent: 'Every batch is accountable from factory exit to installed zone.', outputs: ['Batch Traceability Log', 'Delivery Notes + Packing Lists'], riskEliminated: 'Unverifiable deliveries, disputes, and replacement uncertainty.' },
  { id: 'p09', title: 'Protocol 09 — QA/QC Inspections + Acceptance Gates', intent: 'Formalize hold points before proceeding to next trades.', outputs: ['Setting-Out Verification', 'Inspection Requests'], riskEliminated: 'Reworking completed areas due to missed earlier defects.' },
  { id: 'p10', title: 'Protocol 10 — Handover, Closeout & Warranty', intent: 'Clean transfer of ownership and documentation.', outputs: ['Zone Handover Sheets', 'Closeout Dossier', 'Warranty Statement'], riskEliminated: 'Retention payment delays and undocumented warranty exposure.' }
];

export interface DeliverableRow {
  section: string;
  document: string;
  description: string;
  value: string;
}

export const DELIVERABLES: DeliverableRow[] = [
  { section: 'Contract Management', document: 'Kickoff Minutes', description: 'Documented scope & responsibilities', value: 'Prevents disputes' },
  { section: 'Planning', document: 'Baseline Schedule + Zoning', description: 'Time-based zoned plan', value: 'Phased handover + tracking' },
  { section: 'Planning', document: 'Lookahead Plan', description: 'Rolling short-term plan', value: 'Protects programme' },
  { section: 'HSE', document: 'HSE Plan + JSA/RAMS', description: 'Risk controls and compliance', value: 'Fewer stoppages' },
  { section: 'Submittals', document: 'Material Submittal (ST-04)', description: 'Source + datasheets + samples', value: 'Faster approvals' },
  { section: 'Submittals', document: 'Finish & Shade Range Set', description: 'Finish range confirmation', value: 'Locks expectations' },
  { section: 'Submittals', document: 'Method Statement', description: 'Full execution methodology', value: 'Fewer errors' },
  { section: 'Submittals', document: 'ITP + Checklists', description: 'Inspection points', value: 'Strong QA/QC' },
  { section: 'Submittals', document: 'Mockup (if requested)', description: 'Acceptance reference area', value: 'One acceptance standard' },
  { section: 'Scope Control', document: 'Base Clarification Note', description: 'Base scope clarification', value: 'Prevents scope creep' },
  { section: 'Supply', document: 'Supply Schedule by Zone', description: 'Delivery plan per zone', value: 'Avoids shortages' },
  { section: 'Supply', document: 'Batch Traceability Log', description: 'Batch-to-zone traceability', value: 'Better investigations' },
  { section: 'Supply', document: 'Weekly Supply Report', description: 'Weekly delivery status', value: 'Transparent control' },
  { section: 'Supply', document: 'Delivery Notes + Packing Lists', description: 'Documented deliveries', value: 'Faster acceptance' },
  { section: 'Execution', document: 'Setting-Out Verification', description: 'Levels/falls confirmation', value: 'Minimises rework' },
  { section: 'Execution', document: 'Daily Execution Logs', description: 'Daily progress records', value: 'Claims defence' },
  { section: 'QA/QC', document: 'Inspection Requests', description: 'Formal inspections', value: 'Reduces rejection' },
  { section: 'Handover', document: 'Zone Handover Sheets', description: 'Phased handover forms', value: 'Faster payments' },
  { section: 'Protection', document: 'Protection & Cleaning Plan', description: 'Protection & cleaning', value: 'Preserves finish' },
  { section: 'Closeout', document: 'Snag List & Closure Log', description: 'Snag closure evidence', value: 'Less deductions' },
  { section: 'Closeout', document: 'Closeout Dossier', description: 'Final documentation pack', value: 'Contractual protection' },
  { section: 'Closeout', document: 'Warranty Statement', description: 'Scope-based warranty', value: 'Higher confidence' },
  { section: 'Optional', document: 'RealityCapture As-Built', description: 'Post-completion capture', value: 'Better traceability' },
  { section: 'Optional', document: 'BIM + Shop Drawings', description: 'If package expands', value: 'Less clashes' }
];

export const STAKEHOLDERS = [
  { group: 'Government & Authorities', needs: 'Compliance, safety, and auditable records.', provides: ['HSE compliance evidence', 'Material provenance & traceability', 'Documented handover criteria'] },
  { group: 'Investors & Owners', needs: 'Predictable delivery, cost control, and lifecycle durability.', provides: ['Targeted phased handover', 'Reduced claims exposure', 'Clear warranty statements'] },
  { group: 'Consultants & Designers', needs: 'Aesthetic fidelity, zero surprises, and clear interfaces.', provides: ['Governed finish sets', 'High-quality submittals', 'BIM/CAD predictability'] },
  { group: 'Main Contractors', needs: 'Programme safety, sequenced supply, and zero rework.', provides: ['Zoned delivery schedules', 'Setting-out verification', 'Daily execution logs'] }
];

export const MODES = [
  { mode: 'Protocol Pack', type: 'Standard', bestFor: 'Projects with established contractors needing engineered supply.', includes: ['Basic MAR Submittals', 'TDS & Method Statements', 'Factory QA/QC Gates'], risks: 'Material rejection, basic interface clashes.' },
  { mode: 'Managed Delivery', type: 'Enhanced', bestFor: 'Mid-to-large projects needing alignment between supply and site.', includes: ['Zoned Delivery Planning', 'Site Inspections & ITP', 'Weekly Supply Reporting'], risks: 'Programme delays, out-of-sequence delivery.' },
  { mode: 'Full Governance', type: 'Strategic', bestFor: 'Mega projects where timeline, quality, and commercial risks are severe.', includes: ['Program-level dashboards', 'Full Traceability Logs', 'BIM & As-Built Capture'], risks: 'Systemic failure, massive claims, structural schedule collapse.' }
];
