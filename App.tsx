
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { PERSONAL_INFO, SKILLS, PROJECTS, CERTIFICATES, ACHIEVEMENTS, EDUCATION } from './constants';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero 
          name={PERSONAL_INFO.name} 
          linkedin={PERSONAL_INFO.linkedin}
          github={PERSONAL_INFO.github}
          email={PERSONAL_INFO.email}
          phone={PERSONAL_INFO.phone}
        />
        <AnimatedSection>
          <About bio={PERSONAL_INFO.bio} />
        </AnimatedSection>
        <AnimatedSection>
          <Skills skills={SKILLS} />
        </AnimatedSection>
        <AnimatedSection>
          <Projects projects={PROJECTS} />
        </AnimatedSection>
        <AnimatedSection>
          <Experience education={EDUCATION} certificates={CERTIFICATES}/>
        </AnimatedSection>
        <AnimatedSection>
          <Achievements achievements={ACHIEVEMENTS} />
        </AnimatedSection>
      </main>
      <Contact 
        email={PERSONAL_INFO.email}
        linkedin={PERSONAL_INFO.linkedin}
        github={PERSONAL_INFO.github}
      />
    </div>
  );
};

export default App;