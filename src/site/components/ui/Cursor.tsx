import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border-2 border-[#CEAA6A] flex items-center justify-center transition-transform duration-200 ease-out"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isClicked ? 0.8 : isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'rgba(206,170,106,0.1)' : 'transparent',
          opacity: 0.8
        }}
      >
        <div 
          className="w-1.5 h-1.5 bg-[#4E3E2F] rounded-full transition-transform duration-200"
          style={{ transform: `scale(${isPointer ? 0 : 1})` }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
