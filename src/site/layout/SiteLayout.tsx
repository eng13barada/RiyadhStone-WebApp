import React, { useState, useEffect } from 'react';
import Header from './Header';
import CustomCursor from '../components/ui/Cursor';
import FullscreenPrompt from '../components/ui/FullscreenPrompt';
import { ArrowUp, Maximize2, Minimize2, X } from 'lucide-react';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const handleLinkClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && window.innerWidth >= 768 && !document.fullscreenElement) {
        // Attempt to go fullscreen on any link click for desktop
        document.documentElement.requestFullscreen().catch(() => {
          console.log("Fullscreen auto-trigger required direct interaction context.");
        });
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleLinkClick, { capture: true });
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleLinkClick, { capture: true });
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  const enterFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        console.log("Fullscreen request failed.");
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-clip cursor-none">
      <CustomCursor />
      <Header />
      <main className="grow">
        {children}
      </main>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-end gap-3 pointer-events-none">
        {/* Floating Enter Fullscreen Button */}
        {!isFullscreen && (
          <button
            onClick={enterFullscreen}
            className="p-[0.65rem] rounded-full bg-transparent backdrop-blur-[2px] border border-[#CEAA6A] text-[#CEAA6A] shadow-[0_0_15px_rgba(206,170,106,0.35)] hover:bg-[#CEAA6A] hover:text-[#12100E] hover:shadow-[0_0_20px_rgba(206,170,106,0.6)] transition-all duration-300 transform flex items-center justify-center pointer-events-auto"
            aria-label="Enter fullscreen"
          >
            <Maximize2 size={19} className="stroke-[2px]" />
          </button>
        )}

        {/* Global Scroll-to-Top FAB */}
        <button
          onClick={scrollToTop}
          className={`p-3.5 rounded-full bg-[#CEAA6A] text-[#FCFBEE] shadow-[0_4px_20px_rgba(206,170,106,0.5)] hover:bg-[#4E3E2F] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform pointer-events-auto ${
            showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="stroke-[2.5px]" />
        </button>
      </div>

      {/* Fullscreen prompt — shows once per session */}
      <FullscreenPrompt />
    </div>
  );
};

export default SiteLayout;
