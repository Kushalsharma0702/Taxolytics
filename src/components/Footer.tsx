import React from 'react';
import Logo from './Logo';
import { Github, Heart, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg py-12 border-t border-light-accent-muted dark:border-dark-accent-muted">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary max-w-md">
              Empowering Chartered Accountants and businesses with AI-powered financial automation, 
              tax optimization, and seamless collaboration.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:aurocodeinfo@gmail.com"
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Use Cases</a></li>
              <li><a href="#how-it-works" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Beta Feedback</a></li>
              <li><a href="mailto:aurocodeinfo@gmail.com" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-light-accent-muted dark:border-dark-accent-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Taxolytics. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm flex items-center">
              <Shield size={16} className="mr-2" /> Privacy-First Platform
            </p>
            <span className="mx-3 text-light-text-secondary dark:text-dark-text-secondary">•</span>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-brand-primary" /> by Kushal Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}