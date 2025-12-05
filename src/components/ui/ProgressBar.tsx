import React from 'react';
import { cn } from '../../lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, max, className, showLabel }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-text-secondary mb-1">
          <span>{value} / {max}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-accent-green rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}