import React, { useEffect, useState } from 'react';

interface SectionData {
  id: string;
  name: string;
  theme: 'light' | 'dark';
  heightPercent: number;
}

const DynamicScrollbar: React.FC = () => {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [currentSection, setCurrentSection] = useState<SectionData | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(progress);

      // Find current section
      const sectionElements = Array.from(document.querySelectorAll('[data-section-name]'));
      if (sectionElements.length === 0) return;

      let current = sectionElements[0];
      const middleY = window.innerHeight / 2;
      
      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= middleY && rect.bottom >= middleY) {
          current = el;
          break;
        }
      }

      if (current) {
        setCurrentSection({
          id: current.id,
          name: current.getAttribute('data-section-name') || '',
          theme: (current.getAttribute('data-theme') as 'light' | 'dark') || 'light',
          heightPercent: 0,
        });
      }
    };

    const calculateSections = () => {
      const sectionElements = Array.from(document.querySelectorAll('[data-section-name]'));
      const docHeight = document.documentElement.scrollHeight;
      
      if (docHeight === 0) return;

      const newSections = sectionElements.map(el => {
        const h = (el as HTMLElement).offsetHeight;
        return {
          id: el.id,
          name: el.getAttribute('data-section-name') || '',
          theme: (el.getAttribute('data-theme') as 'light' | 'dark') || 'light',
          heightPercent: (h / docHeight) * 100
        };
      });
      setSections(newSections);
      handleScroll();
    };

    window.addEventListener('resize', calculateSections);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation requires a slight delay to ensure fonts/images loaded
    setTimeout(calculateSections, 500);
    setTimeout(calculateSections, 2000);

    return () => {
      window.removeEventListener('resize', calculateSections);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (sections.length === 0) return null;

  return (
    <div className="fixed right-0 top-0 bottom-0 z-[100] flex items-center pointer-events-none mix-blend-normal">
      
      {/* Vertical Text */}
      <div 
        className={`absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap transition-colors duration-1000 font-[800] uppercase tracking-[0.5em] text-5xl opacity-10 pointer-events-none origin-right -rotate-90 \${currentSection?.theme === 'dark' ? 'text-[#FCFBEE]' : 'text-[#24201C]'}`}
      >
        {currentSection?.name}
      </div>

      {/* Progress Thumb / Indicator */}
      <div 
        className="absolute right-0 w-1.5 bg-[#CEAA6A] shadow-[0_0_15px_rgba(206,170,106,1)] z-10 transition-all duration-75 rounded-l-full"
        style={{ top: `\${scrollProgress}%`, height: '60px', transform: 'translateY(-50%)' }}
      />

      {/* Segmented Background Track */}
      <div className="w-1.5 h-full flex flex-col border-l border-[#A19D94]/10">
        {sections.map((sec, i) => (
          <div 
            key={i} 
            style={{ height: `\${sec.heightPercent}%` }}
            className={`transition-colors duration-500 \${sec.theme === 'dark' ? 'bg-[#12100E]' : 'bg-[#E5DCC5]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicScrollbar;
