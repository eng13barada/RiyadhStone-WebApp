export interface ProductionSummary {
  today: string;
  week: string;
  status: 'live' | 'demo';
  lastUpdated: string;
}

export interface QualitySummary {
  pass: number;
  hold: number;
  status: 'live' | 'demo';
  lastUpdated: string;
}

export interface DeliverySummary {
  dispatched: number;
  delivered: number;
  inPreparation: number;
  status: 'live' | 'demo';
  lastUpdated: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: string;
  url: string;
}
