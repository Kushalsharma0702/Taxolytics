import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, BookOpen, Briefcase, FileSpreadsheet, LockKeyhole, Users } from 'lucide-react';

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const features = [
    {
      icon: <FileSpreadsheet className="text-brand-primary h-10 w-10" />,
      title: "AI-Generated Balance Sheets",
      description: "Automate the creation of accurate balance sheets with our AI engine that learns from your financial data."
    },
    {
      icon: <BarChart className="text-brand-primary h-10 w-10" />,
      title: "Legal Tax-Saving Strategy",
      description: "Our AI analyzes your financial situation to suggest legal tax-saving strategies tailored to your business."
    },
    {
      icon: <Users className="text-brand-primary h-10 w-10" />,
      title: "Real-time Collaboration",
      description: "Work with your Chartered Accountant in real-time through our secure collaboration platform."
    },
    {
      icon: <Briefcase className="text-brand-primary h-10 w-10" />,
      title: "C.A. Marketplace",
      description: "Find and connect with top Chartered Accountants specialized in your industry or specific needs."
    },
    {
      icon: <LockKeyhole className="text-brand-primary h-10 w-10" />,
      title: "End-to-End Security",
      description: "Your financial data is protected with enterprise-grade security and encryption protocols."
    },
    {
      icon: <BookOpen className="text-brand-primary h-10 w-10" />,
      title: "Tax Compliance Updates",
      description: "Stay updated on the latest tax regulations and ensure your business remains fully compliant."
    }
  ];

  return (
    <section className="section" id="features">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={itemVariants} className="text-brand-primary dark:text-brand-secondary font-medium mb-2">
            POWERFUL CAPABILITIES
          </motion.p>
          <motion.h2 variants={itemVariants} className="mb-4">Key Features</motion.h2>
          <motion.p variants={itemVariants} className="text-light-text-secondary dark:text-dark-text-secondary">
            Taxolytics combines cutting-edge AI technology with financial expertise to deliver 
            a comprehensive suite of tools for modern tax management.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="card p-8 hover:border-brand-primary dark:hover:border-brand-secondary border-2 border-transparent"
            >
              <div className="mb-4 p-3 bg-light-accent-muted dark:bg-dark-accent-muted rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}