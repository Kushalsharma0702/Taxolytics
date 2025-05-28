import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, Star, GitFork, Mail, Phone } from 'lucide-react';

export default function GetStartedSection() {
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
    <section className="section bg-gradient-to-br from-brand-primary to-brand-secondary text-white" id="get-started">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="mb-6">
            Ready to Transform Your Financial Management?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-10 opacity-90">
            Join our growing community of businesses and Chartered Accountants who are 
            leveraging AI to streamline financial processes.
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl mb-12"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6">
              GitHub Repository Integration
            </motion.h3>
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-black/20 rounded-lg p-4 text-left overflow-x-auto">
                <pre className="text-sm">
                  <code>npm install taxolytics && npm start</code>
                </pre>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#"
                className="btn bg-white/20 hover:bg-white/30 backdrop-blur"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon size={20} />
                Clone Now
              </motion.a>
              <motion.a
                href="#"
                className="btn bg-white/20 hover:bg-white/30 backdrop-blur"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star size={20} />
                Star on GitHub
              </motion.a>
              <motion.a
                href="#"
                className="btn bg-white/20 hover:bg-white/30 backdrop-blur"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitFork size={20} />
                Fork Repository
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact the Developer</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="mailto:aurocodeinfo@gmail.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail size={18} />
                aurocodeinfo@gmail.com
              </a>
              <a href="tel:+917417119014" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone size={18} />
                +91 7417119014
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}