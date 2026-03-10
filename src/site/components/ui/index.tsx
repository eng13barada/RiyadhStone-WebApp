import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  asChild = false,
  ...props 
}) => {
  const Comp = asChild ? 'span' : 'button';
  const variants = {
    primary: 'bg-rs-gold text-rs-ink hover:bg-rs-gold/90 shadow-lg shadow-rs-gold/20',
    secondary: 'bg-rs-ink text-rs-ivory hover:bg-rs-ink/90',
    outline: 'border-2 border-rs-gold text-rs-gold hover:bg-rs-gold hover:text-rs-ink',
    ghost: 'hover:bg-rs-gold/10 text-rs-muted'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px] tracking-[0.2em]',
    md: 'px-6 py-3 text-xs tracking-[0.15em]',
    lg: 'px-10 py-5 text-sm tracking-[0.2em]'
  };

  return (
    <Comp 
      className={cn(
        'rounded-full font-bold uppercase transition-all active:scale-95 flex items-center justify-center gap-3',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement> & { glass?: boolean }> = ({ 
  className, 
  glass = true,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'p-8 relative overflow-hidden',
        glass ? 'rs-glass' : 'rs-card',
        className
      )}
      {...props}
    />
  );
};

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement> & { variant?: 'live' | 'demo' }> = ({ 
  className, 
  variant = 'live',
  ...props 
}) => {
  return (
    <span 
      className={cn(
        'px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 backdrop-blur-sm',
        variant === 'live' ? 'bg-rs-gold/15 text-rs-gold border border-rs-gold/20' : 'bg-rs-ink/10 text-rs-muted border border-rs-ink/5',
        className
      )}
      {...props}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(206,170,106,1)]', variant === 'live' ? 'bg-rs-gold animate-pulse' : 'bg-rs-muted')} />
      {props.children || variant}
    </span>
  );
};
