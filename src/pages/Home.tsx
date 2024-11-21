import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatWeOffer from 'src/features/shared/sections/WhatWeOffer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative container mx-auto px-4 text-center text-white"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }
              }
            }}
          >
            Welcome to Evcod Software
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }
              }
            }}
          >
            Transforming ideas into powerful digital solutions with cutting-edge technology and innovative design.
          </motion.p>
          <motion.div
            className="space-x-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }
              }
            }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-black px-8 py-4 rounded-full font-semibold hover:from-blue-300 hover:to-purple-300 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text leading-relaxed py-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }
              }
            }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }
              }
            }}
          >
            Let's work together to create innovative solutions that drive your success
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }
              }
            }}
          >
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-black px-8 py-4 rounded-full font-semibold hover:from-blue-300 hover:to-purple-300 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
