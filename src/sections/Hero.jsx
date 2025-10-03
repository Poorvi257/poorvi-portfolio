import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import resume from '../assets/Software_Engineer_Resume.pdf';
import { personalInfo } from '../data';

const Hero = ({ setActiveSection }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
  };

  return (
    <AnimatedSection id="home" setActiveSection={setActiveSection} className="relative overflow-hidden">
      <div className="text-center relative z-10">
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full text-sm font-medium text-primary-300 border border-primary-500/30 backdrop-blur-sm">
            {personalInfo.welcomeMessage}
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight mb-6 font-sans-thin"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="block">
            {personalInfo.firstName.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block hover:text-primary-400 transition-colors duration-300 cursor-pointer"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="block">
            {personalInfo.lastName.split("").map((char, index) => (
              <motion.span
                key={index + 7}
                variants={letterVariants}
                className="inline-block hover:text-primary-400 transition-colors duration-300 cursor-pointer"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          className="mb-8"
        >
          <p className="text-2xl sm:text-2xl md:text-3xl font-light text-primary-300 tracking-wide mb-4">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          <motion.a
            href={resume}
            download={personalInfo.resumeFileName}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 glass border border-white/20 text-gray-200 font-semibold rounded-full transition-all duration-300 hover:border-primary-400/50"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2">
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1"
                >
                  <div className="w-1 h-2 bg-primary-400 rounded-full" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;