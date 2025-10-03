import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen text-gray-100 font-sans leading-relaxed selection:bg-primary-400 selection:text-gray-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-accent-900/20 animate-gradient-xy"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Certifications setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </div>
  );
}