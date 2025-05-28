import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { ChevronRight, FileText, LineChart, ShieldCheck } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTheme } from '../contexts/ThemeContext';

export default function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary blob-background animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary blob-background animate-blob animation-delay-2000" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="gradient-text">AI-Powered</span> Financial
              <br />Transformation
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light-text-secondary dark:text-dark-text-secondary max-w-lg">
              Empowering Chartered Accountants and businesses with intelligent automation for balance sheets, tax management, and financial compliance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#get-started"
                className={cn(
                  "btn btn-primary",
                  "group"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Beta
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#use-cases"
                className={cn(
                  "btn btn-outline",
                  theme === 'light' ? 'text-brand-primary' : 'text-brand-secondary'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find a C.A.
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <FileText className="text-brand-primary" size={20} />
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Automated Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="text-brand-primary" size={20} />
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Smart Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-primary" size={20} />
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">100% Compliant</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-full max-w-lg mx-auto">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_xvrofzfk.json"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}