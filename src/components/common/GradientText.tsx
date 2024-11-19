import React from 'react';
import { colors } from '../../constants/theme';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'blue' | 'purple';
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '',
  gradient = 'blue'
}) => {
  const gradientColors = colors.gradients[gradient];
  
  return (
    <span className={`
      bg-gradient-to-r from-[${gradientColors[0]}] to-[${gradientColors[1]}]
      text-transparent bg-clip-text
      ${className}
    `}>
      {children}
    </span>
  );
};

export default GradientText;
