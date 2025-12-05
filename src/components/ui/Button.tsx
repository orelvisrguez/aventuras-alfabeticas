import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseStyles = 'font-semibold rounded-soft transition-all duration-200 flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-primary-blue text-white shadow-button-3d hover:-translate-y-1 hover:shadow-strong active:translate-y-0',
    secondary: 'bg-accent-yellow text-text-primary shadow-button-3d-yellow hover:-translate-y-1 hover:shadow-strong',
    success: 'bg-accent-green text-white shadow-button-3d-green hover:-translate-y-1 hover:shadow-strong',
    ghost: 'bg-transparent text-text-primary hover:bg-gray-100',
  };
  const sizes = {
    sm: 'py-2 px-4 text-sm min-h-[48px]',
    md: 'py-3 px-6 text-base min-h-[56px]',
    lg: 'py-4 px-8 text-lg min-h-[72px]',
  };
  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}