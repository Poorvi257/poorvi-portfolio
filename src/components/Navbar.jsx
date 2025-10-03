import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Lightbulb, Award, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationData } from '../data';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map icon names to components
  const iconMap = {
    Home: <Home size={20} />,
    User: <User size={20} />,
    Briefcase: <Briefcase size={20} />,
    Lightbulb: <Lightbulb size={20} />,
    Award: <Award size={20} />,
    Mail: <Mail size={20} />
  };

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="glass fixed w-full z-50 top-0 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="text-3xl font-bold font-serif bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent hover:from-primary-300 hover:to-accent-300 transition-all duration-300 tracking-wider transform hover:scale-105"
            >
              {navigationData.logo}
            </a>
            <div className="hidden md:flex items-center space-x-1">
              {navigationData.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === section.id
                      ? 'text-primary-300 bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {iconMap[section.icon]}
                    {section.name}
                  </span>
                  {activeSection === section.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg animate-pulse-glow"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 rounded-lg transition-all duration-300"></div>
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-16"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed w-full top-16 left-0 z-50 glass border-b border-white/10 shadow-xl"
          >
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationData.sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-primary-300 bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {iconMap[section.icon]}
                  <span>{section.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;