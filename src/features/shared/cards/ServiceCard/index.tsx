import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-blue-400/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-12 h-12 mb-6 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
