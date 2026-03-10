import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronLeft, ChevronRight, X, Play, ArrowRight, Zap,
  Shield, Scan, Users, Building2, Layers, Activity, Target,
  FlaskConical, Mountain, Compass, Hexagon, CircleDot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import face1Bg from '../../assets/generated/rs_popup_about.png';
import face2Bg from '../../assets/generated/rs_popup_methodology.png';
import face3Bg from '../../assets/generated/rs_popup_drone.png';
import face4Bg from '../../assets/generated/rs_popup_why.png';

interface RiyadhStonePopupProps { isOpen: boolean; onClose: () => void; }

/* ── CTA Button ── */
const CTAButton: React.FC<{ to?: string; onClick?: () => void; onClose?: () => void; children: React.ReactNode }> = ({ to, onClick, onClose, children }) => {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '1rem',
    padding: '1.25rem 3rem', border: '1.5px solid rgba(206,170,106,0.75)',
    borderRadius: '0', color: '#CEAA6A', background: 'transparent',
    fontWeight: 900, fontSize: '1.05rem', textTransform: 'uppercase',
    letterSpacing: '0.25em', textDecoration: 'none', cursor: 'pointer',
    transition: 'all 0.25s', backdropFilter: 'blur(8px)',
  };
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, { background: '#CEAA6A', color: '#0E0C0A', transform: 'translateY(-2px)', boxShadow: '0 10px 32px rgba(206,170,106,0.4)' });
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, { background: 'transparent', color: '#CEAA6A', transform: 'translateY(0)', boxShadow: 'none' });
  };
  if (to) return <Link to={to} onClick={onClose} style={style} onMouseEnter={enter} onMouseLeave={leave}>{children}</Link>;
  return <button onClick={onClick} style={style} onMouseEnter={enter} onMouseLeave={leave}>{children}</button>;
};

/* ── Decorative transparent icon backdrop ── */
const Deco: React.FC<{ icon: React.ReactNode; style?: React.CSSProperties }> = ({ icon, style }) => (
  <div style={{ position: 'absolute', color: 'rgba(206,170,106,0.06)', pointerEvents: 'none', userSelect: 'none', ...style }}>
    {React.cloneElement(icon as React.ReactElement, { size: '100%', strokeWidth: 0.6 })}
  </div>
);

/* ── Per-slide mouse-parallax wrapper ── */
const ParallaxSlide = React.forwardRef<HTMLDivElement, {
  bg: string; children: React.ReactNode; isActive: boolean; slideKey: number;
  onClose: () => void; onNext: () => void;
}>(({ bg, children, isActive, slideKey, onClose: _onClose, onNext }, outerRef) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const nx = ((e.clientX - left) / width - 0.5) * 2;
    const ny = ((e.clientY - top) / height - 0.5) * 2;
    targetRef.current = { x: nx, y: ny };
  }, []);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.06);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.06);
      const { x, y } = currentRef.current;
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.08) translate(${x * -18}px, ${y * -18}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      ref={outerRef}
      onMouseMove={handleMouseMove}
      onClick={onNext}
      style={{ width: '25%', height: '100vh', flexShrink: 0, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      <div
        key={slideKey}
        ref={bgRef}
        style={{
          position: 'absolute', inset: '-8%',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'auto',
          animation: isActive
            ? 'bgZoomIn 5s cubic-bezier(0.22,1,0.36,1) both'
            : 'bgFadeIn 0.9s cubic-bezier(0.22,1,0.36,1) both',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, cursor: 'auto', background: 'linear-gradient(135deg, rgba(10,8,6,0.6) 0%, rgba(10,8,6,0.4) 45%, rgba(10,8,6,0.2) 100%)' }} />
      <div ref={contentRef} style={{ position: 'relative', zIndex: 10, height: '100%', cursor: 'pointer', transition: 'transform 0.1s linear' }}>
        {children}
      </div>
      <style>{`
        @keyframes bgZoomIn {
          from { opacity: 0; transform: scale(1.0); }
          to   { opacity: 1; transform: scale(1.08); }
        }
        @keyframes bgFadeIn {
          from { opacity: 0; transform: scale(1.08); }
          to   { opacity: 1; transform: scale(1.0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideFadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
});
ParallaxSlide.displayName = 'ParallaxSlide';

/* ════════════ Main Popup ════════════ */
const RiyadhStonePopup: React.FC<RiyadhStonePopupProps> = ({ isOpen, onClose }) => {
  const [currentFace, setCurrentFace] = useState(0);
  const [prevFaceVal, setPrevFace] = useState(0);

  const nextFace = () => { setPrevFace(currentFace); setCurrentFace(p => (p + 1) % 4); };
  const prevFace = () => { setPrevFace(currentFace); setCurrentFace(p => (p - 1 + 4) % 4); };
  const goTo = (i: number) => { setPrevFace(currentFace); setCurrentFace(i); };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextFace();
      if (e.key === 'ArrowLeft') prevFace();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'auto';
      setCurrentFace(0);
    } else {
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* ── Redesigned Left Panel Styles ── */
  const panelStyle: React.CSSProperties = {
    height: '100%',
    width: 'clamp(50rem, 65vw, 75rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 'clamp(3rem, 6vh, 6rem) clamp(4rem, 8vw, 8rem)',
    background: 'linear-gradient(90deg, rgba(8,6,5,0.98) 0%, rgba(8,6,5,0.95) 45%, rgba(8,6,5,0.7) 70%, transparent 100%)',
    position: 'relative',
    zIndex: 20
  };

  const eyebrow = (txt: string): React.CSSProperties => ({
    fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', fontWeight: 900,
    letterSpacing: '0.48em', textTransform: 'uppercase',
    color: 'rgba(206,170,106,0.85)', display: 'block',
    marginBottom: '1.5rem',
    animation: 'slideFadeIn 0.7s 0.15s both',
  });

  const h2style: React.CSSProperties = {
    fontFamily: 'var(--font-manrope)',
    fontSize: 'clamp(2.5rem,6.5vw,5.5rem)', fontWeight: 900,
    textTransform: 'uppercase', letterSpacing: '-0.04em',
    lineHeight: 0.9, color: '#fff', marginBottom: '2rem',
    animation: 'slideUp 0.75s 0.25s both',
  };

  const bodyStyle: React.CSSProperties = {
    fontSize: 'clamp(1.2rem,1.6vw,1.5rem)', fontWeight: 500,
    color: 'rgba(255,255,255,0.8)', lineHeight: 1.8,
    marginBottom: '3.5rem', maxWidth: '45rem',
    animation: 'slideFadeIn 0.75s 0.4s both',
  };

  /* Arrow button style */
  const arrowBtn = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'fixed', top: '50%', [side]: '2rem',
    transform: 'translateY(-50%)',
    zIndex: 99999, width: '4.5rem', height: '4.5rem',
    borderRadius: '0',
    background: 'rgba(12,10,8,0.7)',
    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
    border: '1.5px solid rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,0.95)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', transition: 'all 0.22s',
    boxShadow: '0 8px 36px rgba(0,0,0,0.5)',
  });
  const arrowHover = {
    background: '#CEAA6A', borderColor: '#CEAA6A',
    color: '#0E0C0A', transform: 'translateY(-50%) scale(1.08)',
  };
  const arrowLeave = (side: 'left' | 'right') => ({
    background: 'rgba(12,10,8,0.7)', borderColor: 'rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,0.95)', transform: 'translateY(-50%) scale(1)',
  });

  const portal = (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99990, cursor: 'auto', overflow: 'hidden' }}>

      {/* ══ SLIDE TRACK ══ */}
      <div style={{
        position: 'absolute', inset: 0,
        width: '400%', display: 'flex',
        transform: `translateX(-${currentFace * 25}%)`,
        transition: 'transform 0.72s cubic-bezier(0.75,0,0.18,1)',
      }}>

        {/* ════ FACE 1:  ABOUT ════ */}
        <ParallaxSlide bg={face1Bg} isActive={currentFace === 0} slideKey={currentFace === 0 ? currentFace : -1} onClose={onClose} onNext={nextFace}>
          <Deco icon={<Building2 />} style={{ width: '55vw', height: '55vw', right: '-12vw', top: '-8vw', transform: 'rotate(-15deg)' }} />
          <Deco icon={<Hexagon />} style={{ width: '20vw', height: '20vw', left: '3vw', top: '8vw' }} />
          <Deco icon={<Mountain />} style={{ width: '24vw', height: '24vw', left: '5vw', bottom: '6vw', transform: 'rotate(10deg)' }} />

          <div style={panelStyle}>
            <span style={eyebrow('RIYADHSTONE® — EST. IN RIYADH')}>RIYADHSTONE® — EST. IN RIYADH</span>
            <h2 style={h2style}>
              About<br /><span style={{ color: '#CEAA6A' }}>Riyadh<br />Stone</span>
            </h2>
            <p style={bodyStyle}>
              The reference for engineered luxury stone in Saudi Arabia — transforming quarried material into verified architectural outcomes through disciplined engineering and accountable delivery.
            </p>
            {/* Stats */}
            <div style={{ display: 'flex', gap: '4rem', marginBottom: '4rem', animation: 'slideFadeIn 0.8s 0.5s both' }}>
              {[{ v: '2010', l: 'Est.' }, { v: '400+', l: 'Projects' }, { v: '12', l: 'Certs' }, { v: '15+', l: 'Years' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: 'clamp(3rem,5vw,4.5rem)', fontWeight: 900, color: '#CEAA6A', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 'clamp(0.85rem,1vw,0.95rem)', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ animation: 'slideFadeIn 0.8s 0.65s both' }}>
              <CTAButton to="/" onClose={onClose}>Go To Home Page <ArrowRight size={20} /></CTAButton>
            </div>
          </div>
        </ParallaxSlide>

        {/* ════ FACE 2: METHODOLOGY ════ */}
        <ParallaxSlide bg={face2Bg} isActive={currentFace === 1} slideKey={currentFace === 1 ? currentFace : -2} onClose={onClose} onNext={nextFace}>
          <Deco icon={<Compass />} style={{ width: '52vw', height: '52vw', right: '-10vw', top: '-5vw', transform: 'rotate(20deg)' }} />
          <Deco icon={<Layers />} style={{ width: '18vw', height: '18vw', left: '4vw', bottom: '10vw' }} />
          <Deco icon={<Activity />} style={{ width: '22vw', height: '22vw', left: '2vw', top: '6vw', transform: 'rotate(-10deg)' }} />

          <div style={panelStyle}>
            <span style={eyebrow('ENGINEERING PROTOCOL')}>ENGINEERING PROTOCOL</span>
            <h2 style={h2style}>
              Metho<br />dology<br /><span style={{ color: '#CEAA6A' }}>10 Process</span>
            </h2>
            <p style={bodyStyle}>
              A structured 10-step protocol that converts architectural intent into measurable, traceable, and governed stone delivery — from brief to handover.
            </p>
            {/* Steps grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '3.5rem', rowGap: '1.25rem', marginBottom: '4rem', maxWidth: '42rem', animation: 'slideFadeIn 0.8s 0.5s both' }}>
              {['01 Project Brief', '02 Site Survey', '03 Design Alignment', '04 Material Selection', '05 Sample Sign-off', '06 Lab Testing', '07 Shop Drawings', '08 Fabrication Control', '09 QA/QC Gates', '10 Delivery & Install'].map(step => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '0', background: '#CEAA6A', flexShrink: 0 }} />
                  <span style={{ fontSize: 'clamp(1.1rem,1.4vw,1.3rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)' }}>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ animation: 'slideFadeIn 0.8s 0.65s both' }}>
              <CTAButton to="/project-supports" onClose={onClose}>Start Your Process <ArrowRight size={20} /></CTAButton>
            </div>
          </div>
        </ParallaxSlide>

        {/* ════ FACE 3: REALITY CAPTURE ════ */}
        <ParallaxSlide bg={face3Bg} isActive={currentFace === 2} slideKey={currentFace === 2 ? currentFace : -3} onClose={onClose} onNext={nextFace}>
          <Deco icon={<Scan />} style={{ width: '54vw', height: '54vw', right: '-8vw', top: '-6vw', transform: 'rotate(-8deg)' }} />
          <Deco icon={<Target />} style={{ width: '20vw', height: '20vw', left: '3vw', top: '7vw', transform: 'rotate(5deg)' }} />
          <Deco icon={<CircleDot />} style={{ width: '16vw', height: '16vw', left: '6vw', bottom: '8vw' }} />

          <div style={panelStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', animation: 'slideFadeIn 0.7s 0.15s both' }}>
              <Scan size={22} style={{ color: '#CEAA6A' }} />
              <span style={{ fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', fontWeight: 900, letterSpacing: '0.48em', textTransform: 'uppercase', color: 'rgba(206,170,106,0.85)' }}>
                REALITYCAPTURE™ TECHNOLOGY
              </span>
            </div>
            <h2 style={h2style}>
              Fly<br />With<br /><span style={{ color: '#CEAA6A' }}>Riyadh<br />Stone</span>
            </h2>
            <p style={bodyStyle}>
              LiDAR + photogrammetric drone capture converts your site into an exact 3D spatial foundation — before a single cut begins. Zero dimensional errors guaranteed.
            </p>
            {/* Feature rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', animation: 'slideFadeIn 0.8s 0.5s both' }}>
              {[
                { icon: <Zap size={22} />, title: 'Engineering', desc: 'BOQ, shop drawings & BIM deliverables' },
                { icon: <Play size={22} />, title: 'Marketing', desc: 'Cinematic HD renders & walkthroughs' },
                { icon: <Shield size={22} />, title: 'Risk Elimination', desc: 'Zero dimensional errors at fabrication' },
                { icon: <FlaskConical size={22} />, title: 'Lab Reference', desc: 'Spatial data for material certification' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <span style={{ color: '#CEAA6A', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: 'clamp(1.1rem,1.4vw,1.3rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.9)' }}>{item.title}</span>
                  <span style={{ fontSize: 'clamp(1rem,1.2vw,1.15rem)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}>— {item.desc}</span>
                </div>
              ))}
            </div>
            <div style={{ animation: 'slideFadeIn 0.8s 0.65s both' }}>
              <CTAButton onClick={onClose}><Play size={18} fill="currentColor" /> Start your Flight</CTAButton>
            </div>
          </div>
        </ParallaxSlide>

        {/* ════ FACE 4: WHY RIYADHSTONE ════ */}
        <ParallaxSlide bg={face4Bg} isActive={currentFace === 3} slideKey={currentFace === 3 ? currentFace : -4} onClose={onClose} onNext={onClose}>
          <Deco icon={<Shield />} style={{ width: '55vw', height: '55vw', right: '-10vw', top: '-5vw', transform: 'rotate(12deg)' }} />
          <Deco icon={<Users />} style={{ width: '18vw', height: '18vw', left: '3vw', bottom: '10vw' }} />
          <Deco icon={<Zap />} style={{ width: '16vw', height: '16vw', left: '5vw', top: '7vw', transform: 'rotate(-8deg)' }} />

          <div style={panelStyle}>
            <span style={eyebrow('THE ADVANTAGE')}>THE ADVANTAGE</span>
            <h2 style={h2style}>
              Why<br /><span style={{ color: '#CEAA6A' }}>Riyadh<br />Stone?</span>
            </h2>
            <p style={bodyStyle}>
              Engineering-led, not supply-driven. Every stone outcome is traceable from quarry intent to final handover documentation.
            </p>
            {/* Reasons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '4rem', maxWidth: '45rem', animation: 'slideFadeIn 0.8s 0.5s both' }}>
              {[
                { icon: <Shield size={24} />, text: 'Engineering-led, not supply-driven — we begin from your intent.' },
                { icon: <Zap size={24} />, text: 'Every outcome is traceable, documented, and validation-ready.' },
                { icon: <Users size={24} />, text: 'Director-level accountability on every project, always.' },
                { icon: <ArrowRight size={24} />, text: 'Proven in landmark Saudi developments — government to luxury.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <span style={{ color: '#CEAA6A', marginTop: '0.2rem', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: 'clamp(1.2rem,1.5vw,1.4rem)', fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ animation: 'slideFadeIn 0.8s 0.65s both' }}>
              <CTAButton to="/contact-us" onClose={onClose}>Let Us Meet NOW <ArrowRight size={20} /></CTAButton>
            </div>
          </div>
        </ParallaxSlide>

      </div>{/* end slide track */}

      {/* ── ESC button ── */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '1.5rem', right: '1.75rem', zIndex: 99999,
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          background: 'rgba(12,10,8,0.7)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '0', padding: '0.6rem 1.25rem',
          cursor: 'pointer', color: 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(14px)', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#CEAA6A'; e.currentTarget.style.borderColor = 'rgba(206,170,106,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>ESC</span>
        <X size={18} />
      </button>

      {/* ── Left arrow ── */}
      <button
        onClick={e => { e.stopPropagation(); prevFace(); }}
        style={arrowBtn('left')}
        onMouseEnter={e => Object.assign(e.currentTarget.style, arrowHover)}
        onMouseLeave={e => Object.assign(e.currentTarget.style, arrowLeave('left'))}
      >
        <ChevronLeft size={32} />
      </button>

      {/* ── Right arrow ── */}
      <button
        onClick={e => { e.stopPropagation(); nextFace(); }}
        style={arrowBtn('right')}
        onMouseEnter={e => Object.assign(e.currentTarget.style, arrowHover)}
        onMouseLeave={e => Object.assign(e.currentTarget.style, arrowLeave('right'))}
      >
        <ChevronRight size={32} />
      </button>

      {/* ── Dot indicators ── */}
      <div style={{
        position: 'fixed', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 99999, display: 'flex', gap: '0.75rem', alignItems: 'center',
      }}>
        {[0, 1, 2, 3].map(i => (
          <button key={i} onClick={() => goTo(i)} style={{
            borderRadius: '0', border: 'none', cursor: 'pointer', transition: 'all 0.3s',
            width: i === currentFace ? '3.5rem' : '0.65rem', height: '0.65rem',
            background: i === currentFace ? '#CEAA6A' : 'rgba(255,255,255,0.3)',
          }} />
        ))}
      </div>

      {/* ── Slide label (bottom-left) ── */}
      <div style={{
        position: 'fixed', bottom: '2.5rem', left: '2.5rem',
        fontSize: '0.8.5rem', fontWeight: 800, letterSpacing: '0.35em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
        zIndex: 99999,
      }}>
        {['About RiyadhStone', 'Methodology', 'Reality Capture', 'Why RiyadhStone'][currentFace]}
      </div>

      {/* ── Counter (bottom-right) ── */}
      <div style={{
        position: 'fixed', bottom: '2.5rem', right: '2.5rem',
        fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.35em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
        zIndex: 99999, whiteSpace: 'nowrap',
      }}>
        {String(currentFace + 1).padStart(2, '0')} / 04
      </div>

    </div>
  );

  return createPortal(portal, document.body);
};

export default RiyadhStonePopup;
