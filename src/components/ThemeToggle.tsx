import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-accent-muted dark:bg-dark-accent-muted text-light-text-primary dark:text-dark-text-primary"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-light-text-primary" />
      ) : (
        <Sun size={20} className="text-dark-text-primary" />
      )}
    </motion.button>
  );
}