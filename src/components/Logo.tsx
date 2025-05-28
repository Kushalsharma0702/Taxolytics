import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Logo() {
  const { theme } = useTheme();
  
  const logoColors = {
    light: {
      text: '#4A4947',
      accent: '#B17457'
    },
    dark: {
      text: '#FFFFFF',
      accent: '#6E5A8A'
    }
  };
  
  const currentColors = theme === 'light' ? logoColors.light : logoColors.dark;
  
  return (
    <motion.div 
      className="flex items-center gap-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-30 blur-sm"
        />
        <BarChart2 size={28} className="text-brand-primary relative z-10" />
      </div>
      <div className="font-bold text-xl">
        <span style={{ color: currentColors.text }}>Taxo</span>
        <span style={{ color: currentColors.accent }}>lytics</span>
      </div>
    </motion.div>
  );
}