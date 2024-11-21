import React from 'react';
import { motion } from 'framer-motion';
import WhatWeOffer from 'src/components/WhatWeOffer';

const Services: React.FC = () => {
  const features = [
    {
      title: 'Agile Development',
      description: 'Iterative approach with continuous feedback and improvement'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    },
    {
      title: 'Scalable Solutions',
      description: 'Future-proof architecture that grows with your business'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive software solutions tailored to your business needs
          </motion.p>
        </div>
      </div>

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience excellence in software development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-lg border border-gray-800 rounded-xl p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-lg border border-gray-800 rounded-xl p-8 md:p-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-purple-400 text-black px-8 py-4 rounded-full font-semibold hover:from-blue-300 hover:to-purple-300 transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
