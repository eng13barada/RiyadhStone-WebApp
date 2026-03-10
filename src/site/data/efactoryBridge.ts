import { MOCK_PRODUCTION, MOCK_QUALITY, MOCK_DELIVERY } from './mockData';
import { ProductionSummary, QualitySummary, DeliverySummary } from './schemas';

const CACHE_DURATION = 60 * 1000;
const cache: Record<string, { data: any, timestamp: number }> = {};

async function fetchWithFallback<T>(endpoint: string, fallback: T): Promise<T> {
  const now = Date.now();
  if (cache[endpoint] && (now - cache[endpoint].timestamp < CACHE_DURATION)) {
    return cache[endpoint].data;
  }

  try {
    const response = await fetch(`/efactory/public${endpoint}`, { method: 'GET' });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const result = { ...data, status: 'live' as const, lastUpdated: new Date().toISOString() };
    cache[endpoint] = { data: result, timestamp: now };
    return result;
  } catch (error) {
    console.warn(`Bridge: Fallback to mock for ${endpoint}`, error);
    return fallback;
  }
}

export const efactoryApi = {
  getProductionSummary: () => fetchWithFallback<ProductionSummary>('/production-summary', MOCK_PRODUCTION),
  getQualitySummary: () => fetchWithFallback<QualitySummary>('/quality-summary', MOCK_QUALITY),
  getDeliverySummary: () => fetchWithFallback<DeliverySummary>('/delivery-summary', MOCK_DELIVERY),
};
