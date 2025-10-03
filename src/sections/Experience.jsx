import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data';

const Experience = ({ setActiveSection }) => {

  return (
    <AnimatedSection id="experience" setActiveSection={setActiveSection} className="bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-20 tracking-tight">{experienceData.title}</h2>
      <div className="relative border-l-4 border-cyan-800/30 ml-4 sm:ml-0">
        {experienceData.experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-5 mt-1 flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full ring-8 ring-gray-900">
              <Briefcase className="text-cyan-400" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
            <p className="text-lg font-semibold text-white mb-1">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;