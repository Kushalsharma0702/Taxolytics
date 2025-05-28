import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import GetStartedSection from './components/GetStartedSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg relative overflow-hidden">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <UseCasesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <GetStartedSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;