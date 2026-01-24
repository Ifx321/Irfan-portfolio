import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ParticleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ParticleButton: React.FC<ParticleButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-colors relative overflow-hidden",
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
