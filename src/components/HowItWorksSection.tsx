import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, FileText, Search, UserPlus, FileSpreadsheet } from 'lucide-react';

export default function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const steps = [
    {
      icon: <UserPlus size={32} className="text-brand-primary" />,
      title: "Sign Up",
      description: "Create your Taxolytics account in minutes. No credit card required for the beta version."
    },
    {
      icon: <Search size={32} className="text-brand-primary" />,
      title: "Find a C.A.",
      description: "Browse through our marketplace to find a Chartered Accountant who specializes in your industry."
    },
    {
      icon: <FileText size={32} className="text-brand-primary" />,
      title: "Collaborate",
      description: "Work with your C.A. through our secure platform, sharing documents and communicating in real-time."
    },
    {
      icon: <FileSpreadsheet size={32} className="text-brand-primary" />,
      title: "Automate Reports",
      description: "Let our AI generate and update balance sheets and financial reports automatically."
    },
    {
      icon: <CheckCircle size={32} className="text-brand-primary" />,
      title: "File Smart",
      description: "Submit tax filings with confidence, knowing they're optimized and compliant with the latest regulations."
    }
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={itemVariants} className="text-brand-primary dark:text-brand-secondary font-medium mb-2">
            SIMPLE PROCESS
          </motion.p>
          <motion.h2 variants={itemVariants} className="mb-4">How It Works</motion.h2>
          <motion.p variants={itemVariants} className="text-light-text-secondary dark:text-dark-text-secondary">
            Taxolytics simplifies financial management with a straightforward process
            that gets you from sign-up to tax filing in just a few steps.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative max-w-4xl mx-auto"
        >
          {/* Connector Line */}
          <div className="absolute top-0 bottom-0 left-12 md:left-1/2 w-1 bg-gradient-to-b from-brand-primary to-brand-secondary md:transform md:-translate-x-1/2 hidden sm:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}>
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center z-10 shadow-lg border-4 border-light-accent-muted dark:border-dark-accent-muted">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className={`card flex-1 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="gradient-text mr-2">{`${index + 1}.`}</span> {step.title}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}