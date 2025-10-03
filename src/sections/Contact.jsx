import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Github, Linkedin, Code } from 'lucide-react';
import { contactData } from '../data';

const Contact = ({ setActiveSection }) => {
  return (
    <AnimatedSection id="contact" setActiveSection={setActiveSection} className="bg-gray-800">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">{contactData.title}</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {contactData.description}
        </p>
        <motion.a
          href={`mailto:${contactData.email}`}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(56, 189, 248, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-cyan-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg mb-16 transition-all duration-300"
        >
          {contactData.buttonText}
        </motion.a>
        <div className="flex justify-center items-center space-x-8">
          {contactData.socialLinks.map((link, index) => {
            const IconComponent = link.icon === 'Github' ? Github : link.icon === 'Linkedin' ? Linkedin : Code;
            return (
              <motion.a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, y: -5, color: '#00dfd8' }} 
                className="text-gray-400 transition-colors"
              >
                <IconComponent size={36} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;