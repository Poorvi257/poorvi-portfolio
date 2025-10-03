import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data';

const Projects = ({ setActiveSection }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
  };

  return (
    <AnimatedSection id="projects" setActiveSection={setActiveSection} className="bg-gray-800">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 tracking-tight">{projectsData.title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-300 font-semibold inline-flex items-center self-start transition-colors">
                View Project <ExternalLink size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;