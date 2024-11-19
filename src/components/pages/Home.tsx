import React from 'react';
import BasePage from '../common/BasePage';
import Button from '../common/Button';
import Card from '../common/Card';
import GradientText from '../common/GradientText';
import { useApp } from '../../context/AppContext';

const Home: React.FC = () => {
  const { isDarkMode } = useApp();

  return (
    <BasePage
      title="Modern Software Solutions"
      description="Evcod Software - Building innovative software solutions for tomorrow's challenges."
      keywords={['software development', 'web development', 'mobile apps', 'cloud solutions']}
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Building <GradientText>Tomorrow's</GradientText> Software Today
        </h1>
        
        <p className="text-xl mb-8 text-gray-400">
          We create innovative software solutions that help businesses thrive in the digital age.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button to="/services">Our Services</Button>
          <Button to="/contact" variant="secondary">Contact Us</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-400">Modern, responsive websites and web applications.</p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4">Mobile Apps</h3>
            <p className="text-gray-400">Native and cross-platform mobile applications.</p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
            <p className="text-gray-400">Scalable and secure cloud infrastructure.</p>
          </Card>
        </div>
      </div>
    </BasePage>
  );
};

export default Home;
