import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MAIN_NAVIGATION } from '../manifest/navigation';
import MegaMenu from './MegaMenu';
import { Menu, X } from 'lucide-react';
import RiyadhStonePopup from '../components/ui/RiyadhStonePopup';

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  useEffect(() => {
    // Reactive Navbar Effect
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top top+=50',
        onUpdate: (self) => {
          setIsScrolled(self.scroll() > 50);
        }
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[9900] transition-all duration-500 rounded-none group ${
        isScrolled ? 'bg-[#FCFBEE]/80 backdrop-blur-2xl shadow-lg border-b border-[#4E3E2F]/10 py-2.5' : 'bg-[#FCFBEE] shadow-sm border-b border-[#4E3E2F]/10 py-3'
      } hover:bg-[#FCFBEE]/95 hover:backdrop-blur-3xl hover:border-[#CEAA6A]/30`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Pinned Left: Logo — click to open popup */}
        <div className="flex-shrink-0 cursor-pointer select-none" onClick={() => setIsPopupOpen(true)}>
          <div className="text-2xl text-[#24201C] tracking-tight flex items-baseline hover:opacity-70 transition-opacity">
            <span className="font-[300]">Riyadh</span>
            <span className="font-[800]">Stone</span>
            <span className="font-[300] text-sm ml-0.5">®</span>
          </div>
        </div>

        {/* Centered: Nav Links */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-10 items-stretch">
          {MAIN_NAVIGATION.map((item) => (
            <div
              key={item.label}
              className="static flex items-center"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to={item.href || '/'}
                className={`font-[600] uppercase text-[13px] tracking-[0.15em] transition-colors py-2 flex items-center gap-1 ${
                  activeMenu === item.label || (item.href && location.pathname.startsWith(item.href) && item.href !== '/')
                    ? 'text-[#CEAA6A]'
                    : location.pathname === '/' && item.href === '/'
                    ? 'text-[#CEAA6A]'
                    : 'text-[#4E3E2F] hover:text-[#CEAA6A]'
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <MegaMenu
                  item={item}
                  isOpen={activeMenu === item.label}
                  onClose={() => setActiveMenu(null)}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Pinned Right: CTA & Fullscreen Exit */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-end gap-5">
          <Link 
            to="/contact-us#rfq"
            className="bg-[#CEAA6A] px-6 py-2 rounded-none font-[700] text-xs uppercase tracking-widest transition-all duration-300 border border-[#CEAA6A] text-[#FCFBEE] hover:bg-[#4E3E2F] hover:border-[#4E3E2F] hover:shadow-[0_0_15px_rgba(206,170,106,0.2)] hover:-translate-y-[1px]"
          >
            Contact
          </Link>
          {isFullscreen && (
            <button
              onClick={exitFullscreen}
              className="text-[#CEAA6A] hover:drop-shadow-[0_0_15px_rgba(206,170,106,1)] transition-all duration-300 group flex items-center justify-center gap-3 animate-in fade-in zoom-in-95"
              aria-label="Exit fullscreen"
            >
              <span className="opacity-0 group-hover:opacity-100 duration-300 text-[11px] font-[800] uppercase tracking-wider border border-[#4E3E2F] border-b-[3px] border-b-[#24201C] rounded-md px-2 py-1 flex items-center justify-center bg-gradient-to-b from-[#302A24] to-[#1C1A17] text-[#CEAA6A] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] translate-x-2 group-hover:translate-x-0 transition-all">
                ESC
              </span>
              <X size={26} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(206,170,106,0)] group-hover:drop-shadow-[0_0_12px_rgba(206,170,106,0.8)]" />
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 text-[#24201C] flex items-center justify-center w-8 h-8"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (simplified) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-ivory z-40 pt-24 px-6 overflow-y-auto">
          {/* Mobile menu implementation... */}
        </div>
      )}

      {/* RiyadhStone Popup */}
      <RiyadhStonePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
};

export default Header;
