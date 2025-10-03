import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Award } from 'lucide-react';
import { certificationsData } from '../data';

const Certifications = ({ setActiveSection }) => {

  const listVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <AnimatedSection id="certifications" setActiveSection={setActiveSection} className="bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 tracking-tight">{certificationsData.title}</h2>
      <motion.div
        className="max-w-3xl mx-auto"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ul className="space-y-4">
          {certificationsData.certifications.map((cert, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-5 rounded-lg flex items-center space-x-4 shadow-md"
            >
              <Award className="text-cyan-400 flex-shrink-0" size={28} />
              <span className="text-lg text-gray-200">{cert}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatedSection>
  );
};

export default Certifications;