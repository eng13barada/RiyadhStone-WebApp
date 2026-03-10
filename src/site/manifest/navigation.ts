export interface NavItem {
  label: string;
  href: string;
  description?: string;
  image?: string;
  children?: NavItem[];
}

import rs_megamenu_company_v01 from '../assets/generated/rs_megamenu_company_v01.png';
import rs_megamenu_products_v01 from '../assets/generated/rs_megamenu_products_v01.png';

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'About RiyadhStone',
    href: '/about',
    description: 'Discover the heritage, values, and engineering leadership behind RiyadhStone.',
    image: rs_megamenu_company_v01,
    children: [
      { label: 'Who is RiyadhStone®', href: '/about#brand-story', description: 'Our history and foundational engineering philosophy.' },
      { label: 'Vision and Mission', href: '/about#vision-mission', description: 'The guiding principles driving our future.' },
      { label: 'Factory & Capabilities', href: '/about#capabilities', description: 'Advanced manufacturing and technological capacity.' },
      { label: 'Leadership & Partners', href: '/about#leadership-partners', description: 'The experts and alliances behind our success.' },
      { label: 'Quality, HSE & Sustainability', href: '/about#qhsse', description: 'Our commitment to safety, health, and the environment.' },
      { label: 'Why RiyadhStone®', href: '/about#why', description: 'Distinct advantages of choosing our engineered systems.' },
      { label: 'Art & Technology', href: '/about#art-technology', description: 'Where craftsmanship meets computational design.' },
      { label: 'Fly with RiyadhStone', href: '/about#fly', description: 'Explore global opportunities and careers.' },
    ]
  },
  {
    label: 'Solutions & Products',
    href: '/solutions-products',
    description: 'Engineered architectural systems tailored to urban and civil aesthetics.',
    image: rs_megamenu_products_v01,
    children: [
      { label: 'How I Choose?', href: '/solutions-products#how-i-choose', description: 'A guide to selecting the right engineered system.' },
      { label: 'RiyadEx™ – Façade System', href: '/solutions-products#riyadex', description: 'High-performance exterior cladding solutions.' },
      { label: 'RiyadFloor™ – Paving System', href: '/solutions-products#riyadfloor', description: 'Durable and aesthetic hardscaping.' },
      { label: 'RiyadCiv™ – Civil Identity', href: '/solutions-products#riyadciv', description: 'Urban monuments and civic infrastructure.' },
      { label: 'RiyadWet™ – Water System', href: '/solutions-products#riyadwet', description: 'Engineered solutions for fountains and pools.' },
      { label: 'RiyadUrb™ – Urban Furniture', href: '/solutions-products#riyadurb', description: 'Functional and resilient public furnishings.' },
      { label: 'RiyadStep™ – Stairs', href: '/solutions-products#riyadstep', description: 'Precision-cut step and riser combinations.' },
      { label: 'RiyadRaw™ – Raw Supply', href: '/solutions-products#riyadraw', description: 'Premium blocks and slabs for processing.' },
    ]
  },
  {
    label: 'Engineering',
    href: '/engineering',
    description: 'Translating design intent into validated, buildable, scalable records.',
    image: rs_megamenu_company_v01,
    children: [
      { label: 'Design Assist', href: '/engineering#design-assist', description: 'Collaborative engineering from concept to schematic.' },
      { label: 'Submittals', href: '/engineering#submittals', description: 'Comprehensive material and technical data packages.' },
      { label: 'As-Built', href: '/engineering#as-built', description: 'Accurate final documentation and drawings.' },
      { label: 'Shop Drawings & BIM', href: '/engineering#bim', description: 'LOD-compliant 3D modeling and detailing.' },
      { label: 'BOQ & Cost Control', href: '/engineering#boq', description: 'Precise quantity takeoff and budget management.' },
      { label: 'Quality & Warranty', href: '/engineering#quality-warranty', description: 'Long-term assurance and maintenance guides.' },
    ]
  },
  {
    label: 'Project Supports',
    href: '/project-supports',
    description: 'Post-award infrastructure ensuring flawless handover and lifelong quality.',
    image: rs_megamenu_products_v01,
    children: [
      { label: 'Reality Capture', href: '/project-supports#reality-capture', description: '3D laser scanning and point cloud processing.' },
      { label: 'Quality Hub', href: '/project-supports#quality', description: 'Centralized QA/QC documentation and reports.' },
      { label: 'HSE Hub', href: '/project-supports#hse', description: 'Health, safety, and environmental tracking.' },
      { label: 'Sustainability Hub', href: '/project-supports#sustainability', description: 'LEED and green building compliance data.' },
      { label: 'Downloads Center', href: '/project-supports#downloads', description: 'Access technical sheets, catalogs, and media.' },
    ]
  },
];

export const FOOTER_LINKS = {
  UTILITIES: [
    { label: 'RiyadhStone Library', href: '/solutions-products#library' },
    { label: 'Downloads Center', href: '/project-supports#downloads' },
  ],
  LEGAL: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
  ]
};
