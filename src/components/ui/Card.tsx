import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, interactive, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'bg-bg-surface rounded-soft shadow-soft p-6',
        interactive && 'cursor-pointer hover:shadow-strong hover:-translate-y-1 transition-all duration-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}