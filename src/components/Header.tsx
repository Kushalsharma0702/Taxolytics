import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { cn } from '../utils/cn';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#testimonials', label: 'Testimonials' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map(link => (
              <motion.li 
                key={link.href}
                whileHover={{ y: -2 }}
              >
                <a 
                  href={link.href} 
                  className="text-light-text-primary dark:text-dark-text-primary hover:text-brand-secondary dark:hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.a 
              href="#get-started" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-light-text-primary dark:text-dark-text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-light-bg dark:bg-dark-bg shadow-lg"
        >
          <nav className="container-custom py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-light-text-primary dark:text-dark-text-primary block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#get-started" 
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
}