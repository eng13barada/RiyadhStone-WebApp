import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Reusable column heading
───────────────────────────────────────────── */
const ColHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4
    style={{
      fontSize: '0.625rem',
      fontWeight: 900,
      letterSpacing: '0.38em',
      textTransform: 'uppercase',
      color: '#CEAA6A',
      marginBottom: '1.5rem',
      lineHeight: 1,
    }}
  >
    {children}
  </h4>
);

/* ─────────────────────────────────────────────
   Reusable nav link
───────────────────────────────────────────── */
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link
      to={to}
      style={{
        display: 'inline-block',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(252,251,238,0.4)',
        textDecoration: 'none',
        transition: 'color 0.2s',
        lineHeight: 1,
      }}
      onMouseEnter={e => (e.currentTarget.style.color = '#CEAA6A')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(252,251,238,0.4)')}
    >
      {children}
    </Link>
  </li>
);

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        background: '#0E0C0A',
        color: '#FCFBEE',
        fontFamily: 'inherit',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* subtle noise */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.025,
          mixBlendMode: 'screen',
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="fn">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#fn)" />
        </svg>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem', position: 'relative', zIndex: 1 }}>

        {/* ══ TOP BRAND STRIP ══ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            paddingTop: '5rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
          className="footer-top-strip"
        >
          {/* row: logo | CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            {/* Logo block */}
            <div>
              <p
                style={{
                  fontSize: '0.5625rem',
                  fontWeight: 800,
                  letterSpacing: '0.5em',
                  textTransform: 'uppercase',
                  color: 'rgba(206,170,106,0.55)',
                  marginBottom: '0.75rem',
                }}
              >
                EST. RIYADH — KSA
              </p>
              <Link
                to="/"
                style={{
                  display: 'block',
                  fontSize: 'clamp(2.4rem,5vw,4.2rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.88,
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CEAA6A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                Riyadh<span style={{ color: '#CEAA6A' }}>Stone</span>®
              </Link>
              <p
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'rgba(252,251,238,0.22)',
                }}
              >
                Engineered Stone · Trusted Results
              </p>
            </div>

            {/* CTA — only card/button in footer */}
            <div style={{ flexShrink: 0 }}>
              <Link
                to="/contact-us#rfq"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  background: '#CEAA6A',
                  color: '#0E0C0A',
                  padding: '1.125rem 2rem',
                  borderRadius: '0.875rem',
                  fontWeight: 900,
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(206,170,106,0.22)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.boxShadow = '0 12px 42px rgba(206,170,106,0.38)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#CEAA6A';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(206,170,106,0.22)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Request Technical Proposal</span>
                <ArrowUpRight size={16} />
              </Link>
              <p
                style={{
                  marginTop: '0.6rem',
                  fontSize: '0.5625rem',
                  fontWeight: 700,
                  letterSpacing: '0.38em',
                  textTransform: 'uppercase',
                  color: 'rgba(252,251,238,0.2)',
                  textAlign: 'center',
                }}
              >
                24h Engineering Response
              </p>
            </div>
          </div>
        </div>

        {/* ══ MAIN COLUMNS ══ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: '2.5rem 3.5rem',
            padding: '4rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
          className="footer-cols"
        >

          {/* Col 1: HQ */}
          <div>
            <ColHeading>HQ Location</ColHeading>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
              <MapPin size={11} style={{ color: '#CEAA6A', marginTop: '0.12rem', flexShrink: 0 }} />
              <div>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(252,251,238,0.7)',
                    lineHeight: 1.7,
                  }}
                >
                  Riyadh Industrial City 2<br />
                  Kingdom of Saudi Arabia
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: '0.5625rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(252,251,238,0.2)',
              }}
            >
              Factory · Showroom · Lab
            </p>

            {/* Legal notice — text only, no decoration */}
            <div style={{ marginTop: '2.5rem' }}>
              <p
                style={{
                  fontSize: '0.5625rem',
                  fontWeight: 800,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'rgba(206,170,106,0.35)',
                  marginBottom: '0.4rem',
                }}
              >
                Notice
              </p>
              <p
                style={{
                  fontSize: '0.5625rem',
                  fontWeight: 400,
                  color: 'rgba(252,251,238,0.22)',
                  lineHeight: 1.85,
                }}
              >
                Information is for design and planning purposes unless stated in project agreements.
              </p>
            </div>
          </div>

          {/* Col 2: Systems */}
          <div>
            <ColHeading>Systems</ColHeading>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: 'RiyadEx™', href: '/solutions-products#riyadex' },
                { label: 'RiyadArt™', href: '/solutions-products#riyadart' },
                { label: 'RiyadFloor™', href: '/solutions-products#riyadfloor' },
                { label: 'RiyadStep™', href: '/solutions-products#riyadstep' },
                { label: 'RiyadCiv™', href: '/solutions-products#riyadciv' },
                { label: 'RiyadUrb™', href: '/solutions-products#riyadurb' },
                { label: 'RiyadRaw™', href: '/solutions-products#riyadraw' },
              ].map(item => <NavLink key={item.label} to={item.href}>{item.label}</NavLink>)}
            </ul>
          </div>

          {/* Col 3: Engineering */}
          <div>
            <ColHeading>Engineering</ColHeading>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: 'Technical Library', href: '/engineering#library' },
                { label: 'Protocol Specs', href: '/engineering#protocol' },
                { label: 'Material Governance', href: '/engineering#governance' },
                { label: 'BIM LOD-350', href: '/engineering#bim' },
                { label: 'HSE Framework', href: '/engineering#hse' },
                { label: '3D Reality Capture', href: '/engineering#scan' },
              ].map(item => <NavLink key={item.label} to={item.href}>{item.label}</NavLink>)}
            </ul>
          </div>

          {/* Col 4: Navigation */}
          <div>
            <ColHeading>Navigation</ColHeading>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Solutions', href: '/solutions-products' },
                { label: 'Engineering', href: '/engineering' },
                { label: 'Project Supports', href: '/project-supports' },
                { label: 'Contact', href: '/contact-us' },
              ].map(item => <NavLink key={item.label} to={item.href}>{item.label}</NavLink>)}
            </ul>
          </div>

        </div>

        {/* ══ BOTTOM STRIP ══ */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.75rem 0',
          }}
        >
          {/* Pulse status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#CEAA6A',
                boxShadow: '0 0 6px #CEAA6A',
                animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '0.5625rem',
                fontWeight: 800,
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'rgba(252,251,238,0.2)',
              }}
            >
              System Operational
            </span>
          </div>

          {/* Copyright */}
          <p
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: 'rgba(252,251,238,0.2)',
              margin: 0,
            }}
          >
            © {year} RiyadhStone®. All rights reserved.
          </p>

          {/* Legal links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {[
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms', to: '/terms' },
            ].map(({ label, to }, i) => (
              <React.Fragment key={label}>
                {i > 0 && (
                  <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '0.75rem' }}>·</span>
                )}
                <Link
                  to={to}
                  style={{
                    fontSize: '0.5625rem',
                    fontWeight: 800,
                    letterSpacing: '0.38em',
                    textTransform: 'uppercase',
                    color: 'rgba(252,251,238,0.2)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#CEAA6A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(252,251,238,0.2)')}
                >
                  {label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>

      {/* responsive grid override */}
      <style>{`
        @media (max-width: 900px) {
          .footer-cols { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 520px) {
          .footer-cols { grid-template-columns: 1fr !important; }
          .footer-top-strip { padding-top: 3rem !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
