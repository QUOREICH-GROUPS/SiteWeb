import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function GradientButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary'
}: GradientButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}