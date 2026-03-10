import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const x = direction === 'left' ? -50 : direction === 'right' ? 50 : 0;
    const y = direction === 'up' ? 50 : direction === 'down' ? -50 : 0;

    gsap.fromTo(el, 
      { opacity: 0, x, y, filter: 'blur(10px)' },
      { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        filter: 'blur(0px)',
        duration, 
        delay, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
