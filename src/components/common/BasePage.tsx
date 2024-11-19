import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import Section from './Section';
import { animations } from '../../constants/theme';

interface BasePageProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string[];
}

const BasePage: React.FC<BasePageProps> = ({
  children,
  title,
  description,
  keywords
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animations.fadeIn}
      >
        <Section>
          {children}
        </Section>
      </motion.div>
    </>
  );
};

export default BasePage;
