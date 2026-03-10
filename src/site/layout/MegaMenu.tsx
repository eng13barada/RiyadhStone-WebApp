import React, { useEffect, useRef } from 'react';
import { NavItem } from '../manifest/navigation';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight, ArrowUpRight, Box, Layers, ShieldCheck, Map as MapIcon, Settings, Compass, Hexagon, Zap } from 'lucide-react';

import companyImg from '../assets/generated/rs_megamenu_company_v01.png';
import productsImg from '../assets/generated/rs_megamenu_products_v01.png';
import engineeringImg from '../assets/generated/rs_engineering_instruments_panel_v01.png';
import supportsImg from '../assets/generated/rs_supports_document_pack_v01.png';

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

const getIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('vision') || l.includes('strategy')) return <Compass size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('factory') || l.includes('sustainability') || l.includes('raw')) return <Hexagon size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('quality') || l.includes('warranty') || l.includes('hse')) return <ShieldCheck size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('design') || l.includes('bim') || l.includes('drawings') || l.includes('assist')) return <Layers size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('system') || l.includes('choose')) return <Box size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('capture') || l.includes('map') || l.includes('location')) return <MapIcon size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('tech') || l.includes('art') || l.includes('fly')) return <Zap size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  if (l.includes('submittals') || l.includes('boq') || l.includes('built')) return <Settings size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
  return <ChevronRight size={18} className="text-[#CEAA6A] group-hover:scale-110 transition-transform" />;
};

const getMenuImage = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('company')) return companyImg;
  if (l.includes('products') || l.includes('solutions')) return productsImg;
  if (l.includes('engineering')) return engineeringImg;
  if (l.includes('supports') || l.includes('project')) return supportsImg;
  return companyImg; // fallback
};

const MegaMenu: React.FC<MegaMenuProps> = ({ item, isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!menuRef.current) return;
    
    if (isOpen) {
      gsap.killTweensOf(menuRef.current);
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4, // Smoother intro
        display: 'block',
        ease: 'power3.out'
      });
    } else {
      gsap.killTweensOf(menuRef.current);
      gsap.to(menuRef.current, {
        y: -15,
        opacity: 0,
        duration: 0.3, // Smoother exit
        display: 'none',
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  if (!item.children || item.children.length === 0) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute top-full left-0 right-0 pt-10 -mt-2 hidden z-[9900] origin-top"
      style={{ opacity: 0, transform: 'translateY(-15px)' }}
    >
      <div className="overflow-hidden rounded-none bg-[#FCFBEE]/95 backdrop-blur-[32px] shadow-[0_20px_60px_-15px_rgba(78,62,47,0.15)] border-2 border-[#CEAA6A]/40">
        {/* 3 Column Layout, Fixed uniform height for all menus on desktop (increased by 30%) */}
        <div className="flex flex-col md:flex-row h-auto md:h-[624px] p-8 lg:p-10 gap-8 lg:gap-10">
        
        {/* Column 1: Description + Golden Icon (Left) */}
        <div className="w-full md:w-[28%] flex flex-col justify-start pr-4 md:pr-8 border-b md:border-b-0 md:border-r border-[#4E3E2F]/10 pb-6 md:pb-0 overflow-hidden">
          <div className="w-14 h-14 bg-[#CEAA6A]/10 border border-[#CEAA6A]/30 mb-6 rounded-none flex items-center justify-center text-[#CEAA6A] shadow-sm flex-shrink-0">
             {getIcon(item.label)}
          </div>
          <h3 className="text-2xl lg:text-3xl font-[800] text-[#4E3E2F] mb-4 tracking-tight leading-tight flex-shrink-0">{item.label}</h3>
          <p className="text-[#24201C] leading-relaxed text-sm lg:text-base font-[500] flex-shrink-0">
            {item.description || "Transforming architecture through validated engineering logic and aesthetic superiority."}
          </p>
        </div>

        {/* Column 2: Dynamic Image (Center) */}
        <div className="w-full md:w-[40%] rounded-none overflow-hidden relative bg-[#CEAA6A]/5 hidden md:flex items-center justify-center border border-[#CEAA6A]/20 shadow-inner group h-[250px] md:h-full">
          <img 
            src={getMenuImage(item.label)} 
            alt={item.label} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#CEAA6A]/10 mix-blend-overlay z-10 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 z-20 transition-transform duration-500 group-hover:translate-x-2">
            <span className="text-white text-xs font-[800] tracking-[0.2em] uppercase drop-shadow-md">RiyadhStone® Module</span>
          </div>
        </div>

        {/* Column 3: Deep Links with Dynamic Icons (Right) */}
        <div className="w-full md:w-[32%] flex flex-col py-1 overflow-hidden h-full">
          <h4 className="text-[12px] uppercase tracking-[0.2em] font-[800] text-[#CEAA6A] mb-3 shrink-0">Explore Sections</h4>
          <ul className="flex flex-col gap-1 overflow-hidden pr-2 h-full pb-4">
            {item.children.map((child: NavItem) => (
              <li key={child.label} className="shrink-0">
                <Link
                  to={child.href}
                  onClick={onClose}
                  className="flex flex-col items-start px-3 py-2 lg:py-2.5 -mx-3 rounded-none hover:bg-[#4E3E2F]/5 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3 pointer-events-none select-none w-full">
                    <div className="w-5 flex justify-center shrink-0">
                      {getIcon(child.label)}
                    </div>
                    <span className="text-sm font-[800] text-[#4E3E2F] truncate">
                      {child.label}
                    </span>
                  </div>
                  {child.description && (
                    <span className="text-[10px] text-[#24201C] font-[600] ml-8 opacity-60 pointer-events-none select-none line-clamp-1">
                      {child.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </div>
  );
};

export default MegaMenu;
