import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Chartered Accountant",
    text: "Taxolytics has revolutionized how I handle client tax documentation. The AI-powered analysis saves me hours of work and helps me deliver better service to my clients.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Rahul Mehta",
    title: "Startup Founder",
    text: "As a tech startup founder, I needed a solution that could grow with my business. Taxolytics not only simplified our tax filings but also provided valuable insights for financial planning.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Anika Patel",
    title: "SMB Owner",
    text: "The automated balance sheets and tax compliance features have saved my small business thousands in accounting fees. The platform is intuitive and the CA marketplace connected me with the perfect professional for my needs.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="section bg-light-accent-muted dark:bg-dark-accent-muted" id="testimonials">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-primary dark:text-brand-secondary font-medium mb-2">
            SUCCESS STORIES
          </p>
          <h2 className="mb-4">What Our Users Say</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary">
            Discover how Taxolytics is transforming financial management for professionals and businesses alike.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden py-10">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="card p-8 md:p-12 relative"
              >
                <Quote className="text-brand-primary opacity-20 absolute top-6 left-6 h-16 w-16" />
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-light-bg dark:border-dark-bg"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-lg md:text-xl mb-6 italic relative z-10">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-light-bg dark:bg-dark-bg shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-brand-primary" />
            </motion.button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-brand-primary scale-125' 
                    : 'bg-light-accent-secondary dark:bg-dark-accent-secondary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-light-bg dark:bg-dark-bg shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-brand-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}