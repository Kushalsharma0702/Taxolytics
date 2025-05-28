import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calculator, Landmark, User } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const useCases = [
  {
    title: "Chartered Accountants",
    icon: <Calculator size={32} className="text-brand-primary" />,
    description: "Streamline client management and automate repetitive tasks with AI assistance for tax filing and financial reporting.",
    animation: "https://assets9.lottiefiles.com/packages/lf20_ksahd5gm.json"
  },
  {
    title: "Startups",
    icon: <Building size={32} className="text-brand-primary" />,
    description: "Focus on growth while our AI handles financial compliance, investor reporting, and tax optimization strategies.",
    animation: "https://assets2.lottiefiles.com/packages/lf20_cgjrfdzj.json"
  },
  {
    title: "Small & Medium Businesses",
    icon: <Landmark size={32} className="text-brand-primary" />,
    description: "Reduce accounting costs and ensure tax compliance with automated balance sheets and financial forecasting.",
    animation: "https://assets5.lottiefiles.com/packages/lf20_oyi9jyjr.json"
  },
  {
    title: "Individuals",
    icon: <User size={32} className="text-brand-primary" />,
    description: "Simplify personal tax filing and financial planning with AI-guided assistance and access to professional CA advice.",
    animation: "https://assets5.lottiefiles.com/packages/lf20_ul5qzb.json"
  }
];

export default function UseCasesSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="section bg-light-accent-muted dark:bg-dark-accent-muted" id="use-cases">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={itemVariants} className="text-brand-primary dark:text-brand-secondary font-medium mb-2">
            WHO BENEFITS
          </motion.p>
          <motion.h2 variants={itemVariants} className="mb-4">Use Cases</motion.h2>
          <motion.p variants={itemVariants} className="text-light-text-secondary dark:text-dark-text-secondary">
            Taxolytics adapts to the unique financial needs of various stakeholders, 
            providing tailored solutions for different use cases.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-light-accent-muted dark:bg-dark-accent-muted rounded-lg mb-6">
                <Player
                  autoplay
                  loop
                  src={useCase.animation}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-3">{useCase.icon}</div>
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary flex-grow">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}