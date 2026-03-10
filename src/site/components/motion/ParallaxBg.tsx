import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ParallaxBgProps {
  src: string;
  strength?: number;
  className?: string;
  overlayClassName?: string;
}

const ParallaxBg: React.FC<ParallaxBgProps> = ({ 
  src, 
  strength = 100, 
  className = '', 
  overlayClassName = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;
    
    gsap.fromTo(imageRef.current, 
      { y: -strength },
      {
        y: strength,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }, [strength]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img 
        ref={imageRef}
        src={src} 
        alt="Parallax background"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ top: '-10%' }}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
};

export default ParallaxBg;
