import placeholder from '../assets/cards/card-placeholder.svg';
import rs_products_riyadex_card_v01 from '../assets/generated/rs_products_riyadex_card_v01.png';
import rs_products_riyadfloor_card_v01 from '../assets/generated/rs_products_riyadfloor_card_v01.png';
import rs_products_riyadciv_card_v01 from '../assets/generated/rs_products_riyadciv_card_v01.png';
import rs_products_riyadurb_card_v01 from '../assets/generated/rs_products_riyadurb_card_v01.png';
import rs_products_riyadstep_card_v01 from '../assets/generated/rs_products_riyadstep_card_v01.png';
import rs_products_riyadraw_card_v01 from '../assets/generated/rs_products_riyadraw_card_v01.png';
import rs_products_riyadart_card_v01 from '../assets/generated/rs_products_riyadart_card_v01.png';

export const cardAssets: Record<string, string> = {
  'riyadex': rs_products_riyadex_card_v01,
  'riyadfloor': rs_products_riyadfloor_card_v01,
  'riyadciv': rs_products_riyadciv_card_v01,
  'riyadurb': rs_products_riyadurb_card_v01,
  'riyadstep': rs_products_riyadstep_card_v01,
  'riyadraw': rs_products_riyadraw_card_v01,
  'riyadart': rs_products_riyadart_card_v01,
};

export function getCardAsset(id: string): string {
  return cardAssets[id] || placeholder;
}
