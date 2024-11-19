import React from 'react';
import { motion } from 'framer-motion';
import { animations, borderRadius, glassMorphism } from '../../constants/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  withGlassMorphism?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  withGlassMorphism = false 
}) => {
  const baseStyles = `
    ${borderRadius.card}
    p-8 transition-all duration-300
    hover:border-blue-400/50
  `;

  const styles = `
    ${baseStyles}
    ${withGlassMorphism ? `${glassMorphism.background} ${glassMorphism.border}` : 'bg-gray-900 border border-gray-800'}
    ${className}
  `;

  return (
    <motion.div
      className={styles}
      {...animations.fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default Card;
