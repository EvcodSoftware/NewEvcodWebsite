import React from 'react';
import { motion } from 'framer-motion';
import { animations, spacing } from '../../constants/theme';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withContainer?: boolean;
  withAnimation?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  withContainer = true,
  withAnimation = true
}) => {
  const baseStyles = `
    ${spacing.section.py}
    ${className}
  `;

  const content = withContainer ? (
    <div className={`${spacing.container} ${spacing.section.px}`}>
      {children}
    </div>
  ) : children;

  if (!withAnimation) {
    return (
      <section className={baseStyles}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      className={baseStyles}
      {...animations.fadeIn}
    >
      {content}
    </motion.section>
  );
};

export default Section;
