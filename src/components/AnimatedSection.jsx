import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, id, setActiveSection, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setActiveSection(id);
    }
  }, [controls, inView, id, setActiveSection]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      className={`py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center ${className}`}
    >
      <div className="max-w-5xl w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;