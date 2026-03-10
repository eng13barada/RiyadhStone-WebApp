import { ProductionSummary, QualitySummary, DeliverySummary } from './schemas';

export const MOCK_PRODUCTION: ProductionSummary = {
  today: '840 m²',
  week: '5,200 m²',
  status: 'demo',
  lastUpdated: new Date().toISOString(),
};

export const MOCK_QUALITY: QualitySummary = {
  pass: 98.4,
  hold: 1.6,
  status: 'demo',
  lastUpdated: new Date().toISOString(),
};

export const MOCK_DELIVERY: DeliverySummary = {
  dispatched: 12,
  delivered: 145,
  inPreparation: 8,
  status: 'demo',
  lastUpdated: new Date().toISOString(),
};

export const MOCK_DOWNLOADS = [
  { id: '1', title: 'Technical Data Sheet - RiyadEx™', category: 'Submittals', url: '/downloads/TDS_RiyadEx.pdf' },
  { id: '2', title: 'Sample Register Template', category: 'Quality', url: '/downloads/Sample_Register.pdf' },
  { id: '3', title: 'ITP - Façade Installation', category: 'Quality', url: '/downloads/ITP_Facade.pdf' },
  { id: '4', title: 'HSE Policy 2024', category: 'HSE', url: '/downloads/HSE_Policy.pdf' },
  { id: '5', title: 'Toolbox Talk Pack', category: 'HSE', url: '/downloads/Toolbox_Talk_Pack.pdf' },
  { id: '6', title: 'Checklist - Incoming Stone', category: 'Quality', url: '/downloads/Checklist_Incoming.pdf' },
  { id: '7', title: 'Delivery Safety Protocol', category: 'HSE', url: '/downloads/Delivery_Safety.pdf' },
  { id: '8', title: 'Material Approval Request (MAR)', category: 'Submittals', url: '/downloads/MAR_Template.pdf' },
  { id: '9', title: 'Sustainability Report Q4', category: 'Sustainability', url: '/downloads/Sustainability_Q4.pdf' },
  { id: '10', title: 'BIM Coordination Guide', category: 'Engineering', url: '/downloads/BIM_Guide.pdf' },
];
