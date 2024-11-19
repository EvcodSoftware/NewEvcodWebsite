import React from 'react';
import { motion } from 'framer-motion';
import BasePage from '../common/BasePage';
import Button from '../common/Button';
import Card from '../common/Card';
import GradientText from '../common/GradientText';
import Section from '../common/Section';
import { Service } from '../../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React & TypeScript Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Custom Web Applications'
      ]
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'React Native Development',
        'Native iOS & Android Apps',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ]
    },
    {
      name: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your applications.',
      features: [
        'AWS & Azure Solutions',
        'Cloud Migration',
        'DevOps Services',
        'Serverless Architecture'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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
  };

  return (
    <BasePage
      title="Our Services"
      description="Explore our comprehensive range of software development services."
      keywords={['web development', 'mobile apps', 'cloud solutions', 'software services']}
    >
      {/* Hero Section */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our <GradientText>Services</GradientText>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We offer comprehensive software solutions tailored to your needs.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <Section>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={item}
              className="h-full"
            >
              <Card withGlassMorphism className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">
                  <GradientText>{service.name}</GradientText>
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" variant="secondary" className="mt-auto">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut"
          }}
        >
          <Card withGlassMorphism className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8">
              Contact us today to discuss how we can help bring your ideas to life.
            </p>
            <Button to="/contact">Get in Touch</Button>
          </Card>
        </motion.div>
      </Section>
    </BasePage>
  );
};

export default Services;
