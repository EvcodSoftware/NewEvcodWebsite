import React from 'react';
import { motion } from 'framer-motion';
import BasePage from '../common/BasePage';
import Card from '../common/Card';
import GradientText from '../common/GradientText';
import Section from '../common/Section';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Satisfied Clients', value: '150+' },
    { label: 'Team Members', value: '25+' }
  ];

  const values = [
    { title: 'Innovation', description: 'We embrace cutting-edge technology and creative solutions.' },
    { title: 'Quality', description: 'We deliver excellence in every line of code we write.' },
    { title: 'Collaboration', description: 'We work closely with our clients to ensure success.' },
    { title: 'Integrity', description: 'We maintain the highest standards of professional ethics.' }
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
      title="About Us"
      description="Learn about Evcod Software - our mission, values, and the team behind our success."
      keywords={['about us', 'software company', 'tech team', 'company values']}
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
          About <GradientText>Evcod</GradientText> Software
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We're a team of passionate developers, designers, and innovators building
          the future of software solutions.
        </motion.p>
      </motion.div>

      {/* Stats Section */}
      <Section>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="h-full"
            >
              <Card className="text-center h-full">
                <div className="text-4xl font-bold mb-2">
                  <GradientText>{stat.value}</GradientText>
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section>
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our Values
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={item}
              className="h-full"
            >
              <Card withGlassMorphism className="h-full">
                <h3 className="text-xl font-bold mb-4">
                  <GradientText>{value.title}</GradientText>
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </BasePage>
  );
};

export default About;
