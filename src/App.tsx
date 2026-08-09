import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import CanvaShowcase from './components/CanvaShowcase';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { testConnection } from './lib/firebase';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    testConnection();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] dark:bg-[#0A0C10] text-gray-900 dark:text-white transition-colors duration-300 relative font-sans">
      
      {/* Custom Subtle Mouse Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Banner */}
        <Hero
          onNavigate={scrollToSection}
          darkMode={darkMode}
        />

        {/* Graphic Design Works Gallery (Primary Spotlight) */}
        <CanvaShowcase
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Created Websites (Secondary) */}
        <ProjectsSection />

        {/* Certifications & Skills */}
        <CertificationsSection />

        {/* Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
