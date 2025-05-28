import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Lock } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="section bg-light-accent-muted dark:bg-dark-accent-muted relative overflow-hidden" id="about">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            Reimagining Financial Management with <span className="gradient-text">AI</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
            Taxolytics combines the power of artificial intelligence with financial expertise to 
            revolutionize how businesses and Chartered Accountants handle tax management and legal compliance.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Brain size={40} className="text-brand-primary" />,
              title: "AI-Powered Intelligence",
              description: "Our advanced algorithms learn from financial data to provide smart insights and automate complex tax calculations."
            },
            {
              icon: <Code size={40} className="text-brand-primary" />,
              title: "Continuous Development",
              description: "Our backend services are under active development with regular updates to enhance capabilities and performance."
            },
            {
              icon: <Lock size={40} className="text-brand-primary" />,
              title: "Secure & Compliant",
              description: "Built with end-to-end privacy and security in mind, ensuring your financial data remains protected and compliant."
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="card hover:shadow-xl text-center p-8"
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}