import React from 'react';
import Navigation from '../components/Navigation';
import { useApp } from '../context/AppContext';
import { colors } from '../constants/theme';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkMode, isMenuOpen } = useApp();

  return (
    <div className={`
      min-h-screen 
      ${isDarkMode ? `bg-[${colors.primary.black}] text-white` : 'bg-white text-gray-900'}
      transition-colors duration-300
    `}>
      <Navigation />
      <main className={`
        transition-transform duration-300
        ${isMenuOpen ? 'translate-x-64' : 'translate-x-0'}
      `}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
