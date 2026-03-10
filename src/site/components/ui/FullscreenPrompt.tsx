import React, { useEffect, useState } from 'react';
import { Maximize2, X, Monitor } from 'lucide-react';

/**
 * FullscreenPrompt
 * Appears once per session ~1.5s after page load,
 * suggesting the user enter fullscreen for the best experience.
 */
const FullscreenPrompt: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only show once per session
    const alreadyShown = sessionStorage.getItem('rs_fullscreen_prompt_shown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem('rs_fullscreen_prompt_shown', '1');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    setDismissed(true);
    setVisible(false);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  if (!visible || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Fullscreen suggestion"
      className="fixed bottom-6 right-6 z-[99999] max-w-md w-full pointer-events-auto"
      style={{ animation: 'slideInPrompt 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
    >
      <style>{`
        @keyframes slideInPrompt {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="relative bg-[#FCFBEE]/95 backdrop-blur-2xl border border-[#CEAA6A]/40 rounded-none p-8 shadow-[0_20px_60px_-10px_rgba(78,62,47,0.25)]">
        {/* Subtle gold top bar */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#CEAA6A]/60 to-transparent rounded-none" />

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="absolute top-4 right-4 w-8 h-8 rounded-none flex items-center justify-center text-[#4E3E2F]/40 hover:text-[#4E3E2F] hover:bg-[#4E3E2F]/10 transition-all"
        >
          <X size={16} />
        </button>

        {/* Icon + label */}
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-none bg-[#CEAA6A]/10 border border-[#CEAA6A]/30 flex items-center justify-center shrink-0 mt-0.5">
            <Monitor size={24} className="text-[#CEAA6A]" />
          </div>
          <div className="pr-4">
            <p className="text-[12px] font-[900] uppercase tracking-[0.3em] text-[#CEAA6A] mb-2">
              Optimal Experience
            </p>
            <h3 className="text-[18px] font-[800] text-[#24201C] leading-snug mb-2">
              Best viewed in fullscreen
            </h3>
            <p className="text-[14px] text-[#625C55] font-[500] leading-relaxed">
              The RiyadhStone® Protocol System is designed for full-viewport immersion. Enter fullscreen for the complete engineering experience.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handleEnterFullscreen}
            className="flex-1 flex items-center justify-center gap-2 bg-[#4E3E2F] text-[#FCFBEE] rounded-none py-3 text-[13px] font-[800] uppercase tracking-widest hover:bg-[#CEAA6A] transition-colors"
          >
            <Maximize2 size={15} />
            Enter Fullscreen
          </button>
          <button
            onClick={handleDismiss}
            className="flex-1 border border-[#4E3E2F]/20 text-[#4E3E2F] rounded-none py-3 text-[13px] font-[700] uppercase tracking-widest hover:border-[#CEAA6A] hover:text-[#CEAA6A] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenPrompt;
