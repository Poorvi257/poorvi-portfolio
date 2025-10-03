import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { aboutData } from '../data';

const About = ({ setActiveSection }) => {

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatedSection id="about" setActiveSection={setActiveSection} className="bg-gray-800">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 tracking-tight">{aboutData.title}</h2>
      <div className="grid md:grid-cols-5 gap-16 items-start">
        <motion.div
          className="md:col-span-3 text-lg text-gray-300 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {aboutData.description.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </motion.div>
        <div className="md:col-span-2">
          {Object.entries(aboutData.skills).map(([category, skillList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{category}</h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {skillList.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;