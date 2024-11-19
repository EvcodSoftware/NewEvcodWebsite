import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { colors, borderRadius } from '../../constants/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  to, 
  onClick, 
  variant = 'primary', 
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-block px-8 py-4 font-semibold
    transform hover:scale-105 transition-all duration-300
    ${borderRadius.button}
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[${colors.gradients.blue[0]}] to-[${colors.gradients.blue[1]}]
      text-black hover:from-[${colors.gradients.blue[0]}]/90 hover:to-[${colors.gradients.blue[1]}]/90
    `,
    secondary: `
      bg-transparent border-2 border-white text-white
      hover:bg-white hover:text-black
    `
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
