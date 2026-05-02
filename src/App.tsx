/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';
import Loader from './components/ui/Loader';
import FloatingCV from './components/FloatingCV';
import ProjectModal from './components/ProjectModal';
import { Project } from './constants';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <Loader isLoading={isLoading} />
      <Cursor />
      
      {/* Badge Floating */}
      {/* <div id="ab">
        <div className="abd" />
        <span className="abt">Available for Projects</span>
      </div> */}

      <FloatingCV />

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects onProjectClick={setSelectedProject} />
      <Experience />
      <Contact />
      <Footer />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  );
}
