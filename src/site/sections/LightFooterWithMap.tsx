import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, ArrowRight, Mail, Phone, Linkedin, Twitter,
  Instagram, Youtube, MessageSquare, Shield, Zap
} from 'lucide-react';
import opsMapDarkSvg from '../assets/generated/rs_footer_map_dark_v01.png';
import heroBg from '../assets/generated/RiyadhStone-Home-HERO.png';

/* ─────────────────────────────────────────────────────────────
   LightFooterWithMap — redesigned layout:
   1. Light strip  : Project inquiry / newsletter CTA
   2. Dark banner  : Hero block with background image (right)
   3. Dark footer  : Logo + address (left) | 4 nav columns (right)
   4. Bar          : Copyright + legal links
───────────────────────────────────────────────────────────── */
const LightFooterWithMap: React.FC = () => {
  const navSections = [
    {
      heading: 'Products',
      links: [
        ['RiyadEx™ — Façade', '/solutions-products#riyadex'],
        ['RiyadFloor™ — Paving', '/solutions-products#riyadfloor'],
        ['RiyadCiv™ — Civil', '/solutions-products#riyadciv'],
        ['RiyadUrb™ — Urban', '/solutions-products#riyadurb'],
        ['RiyadStep™ — Stairs', '/solutions-products#riyadstep'],
        ['RiyadRaw™ — Raw Supply', '/solutions-products#riyadraw'],
      ],
    },
    {
      heading: 'Engineering',
      links: [
        ['Design Assist', '/engineering#design-assist'],
        ['Shop Drawings & BIM', '/engineering#bim'],
        ['Submittals & MAR', '/engineering#submittals'],
        ['As-Built Records', '/engineering#as-built'],
        ['BOQ & Cost Control', '/engineering#boq'],
        ['Reality Capture', '/project-supports#reality-capture'],
      ],
    },
    {
      heading: 'Company',
      links: [
        ['About RiyadhStone®', '/about'],
        ['Vision & Mission', '/about#vision-mission'],
        ['Factory & Capabilities', '/about#capabilities'],
        ['HSE Framework', '/project-supports#hse'],
        ['Sustainability', '/project-supports#sustainability'],
        ['Careers', '#'],
      ],
    },
    {
      heading: 'Resources',
      links: [
        ['TDS & Spec Sheets', '/project-supports#downloads'],
        ['CAD Detail Library', '/project-supports#downloads'],
        ['BIM LOD-350 Objects', '/project-supports#downloads'],
        ['Quality ITP Packs', '/project-supports#quality'],
        ['Downloads Center', '/project-supports#downloads'],
        ['Contact & RFQ', '/contact-us'],
      ],
    },
  ];

  return (
    <footer className="font-sans w-full">

      {/* ── Unified Full-Height Dark Footer (hero CTA + nav grid) ── */}
      <div
        className="relative text-white/80 flex flex-col"
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Brown-toned overlay (warm sepia, not grey) */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(160deg, rgba(30,18,8,0.92) 0%, rgba(78,62,47,0.65) 50%, rgba(12,8,4,0.96) 100%)',
        }} />
        {/* Subtle vignette from bottom */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent" />
        {/* Warm brown tint on the image */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'rgba(140,90,40,0.18)',
          mixBlendMode: 'multiply',
        }} />

        <div className="relative z-10 flex flex-col flex-1 container mx-auto max-w-7xl px-6 pt-40 pb-16">

          {/* ── Hero CTA block (formerly separate card) ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 pb-12 border-b border-white/10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-5">
                <Zap size={16} className="text-[#CEAA6A]" />
                <span className="text-[11px] font-[900] uppercase tracking-[0.45em] text-[#CEAA6A]/70">
                  RS Master Protocol v2.x — Active
                </span>
              </div>
              <h3 className="text-[clamp(2.2rem,5vw,4.5rem)] font-[900] tracking-tighter text-white leading-[0.9] mb-5">
                Engineered stone.<br />
                <span className="text-[#CEAA6A]">Verified delivery.</span>
              </h3>
              <p className="text-white/50 text-base font-[500] leading-relaxed max-w-md">
                Translate architectural intent into measurable, governed outcomes across the Kingdom.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-white text-[#12100E] font-[800] text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-[#CEAA6A] transition-colors shadow-xl"
              >
                Contact Engineering
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* ── Main nav grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 mb-9">

            {/* Brand block */}
            <div className="lg:col-span-4 flex flex-col gap-6">

              {/* System Operational (Moved above logo, 2 lines, large glow) */}
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_36px_rgba(34,197,94,1)] mt-[0.35rem] shrink-0" />
                <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#A19D94] leading-relaxed text-left">
                  System<br />Operational
                </span>
              </div>

              {/* Logo */}
              <Link to="/" className="text-3xl font-black tracking-tighter uppercase text-white leading-none">
                Riyadh<span className="text-[#CEAA6A]">Stone</span>®
              </Link>

              {/* Address */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start gap-2 text-white/45 text-sm font-[500]">
                  <MapPin size={13} className="text-[#CEAA6A]/60 mt-0.5 shrink-0" />
                  <div>
                    <p>Phase 2 Industrial Precinct</p>
                    <p>Riyadh, Kingdom of Saudi Arabia</p>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Phone number', value: '+966 11 000 0000', href: 'tel:+966110000000', Icon: Phone },
                  { label: 'Email', value: 'info@riyadhstone.sa', href: 'mailto:info@riyadhstone.sa', Icon: Mail },
                ].map(({ label, value, href, Icon }) => (
                  <div key={label}>
                    <p className="text-[11px] font-[700] uppercase tracking-[0.3em] text-white/25 mb-1">{label}</p>
                    <a href={href} className="flex items-center gap-1.5 text-sm font-[700] text-white/70 hover:text-[#CEAA6A] transition-colors">
                      <Icon size={12} className="text-[#CEAA6A]/50 shrink-0" />
                      {value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Certifications (10 Brand items) */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'ISO 9001', 'SASO', 'LEED', 'MOSTAMAD', 'EPC Compliant', 
                  'ASTM Tested', 'Zero-Accident', 'Traceable Source', 'Q-Mark', 'BIM Ready'
                ].map(c => (
                  <span key={c} className="text-[10px] font-[800] uppercase tracking-widest text-[#CEAA6A]/80 border border-[#CEAA6A]/30 px-2 py-1 rounded-none bg-[#CEAA6A]/5">
                    {c}
                  </span>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Youtube, href: '#', label: 'YouTube' },
                  { Icon: Twitter, href: '#', label: 'X' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-none border border-white/10 flex items-center justify-center text-white/35 hover:text-[#CEAA6A] hover:border-[#CEAA6A]/35 transition-all duration-250"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {navSections.map(section => (
                <div key={section.heading}>
                  <h4 className="font-[900] mb-5 uppercase text-[11px] tracking-[0.42em] text-[#CEAA6A]">
                    {section.heading}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {section.links.map(([label, href]) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="text-sm font-[500] text-white/45 hover:text-white transition-colors"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] font-[700] text-[#CEAA6A] tracking-[0.25em] uppercase">
              © 2026 RiyadhStone®. All rights reserved. Kingdom of Saudi Arabia.
            </p>
            <div className="flex gap-5">
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] font-[600] uppercase tracking-[0.2em] text-white/22 hover:text-[#CEAA6A] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default LightFooterWithMap;
