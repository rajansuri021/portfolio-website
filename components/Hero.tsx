import React from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

interface HeroProps {
  name: string;
  linkedin: string;
  github: string;
  email: string;
  phone: string;
}

const Hero: React.FC<HeroProps> = ({ name, linkedin, github, email, phone }) => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    
    if (targetElement) {
      const headerHeight = 80; // Estimate header height to offset scroll
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-100 tracking-tight">
          {name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl">
          Aspiring Software Developer & Machine Learning Enthusiast
        </p>
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
            <GithubIcon className="h-8 w-8" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
            <LinkedinIcon className="h-8 w-8" />
          </a>
          <a href={`mailto:${email}`} className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2">
            <MailIcon className="h-6 w-6" />
            <span className="hidden sm:inline">{email}</span>
          </a>
          <div className="text-slate-400 flex items-center gap-2">
            <PhoneIcon className="h-6 w-6" />
             <span className="hidden sm:inline">{phone}</span>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" onClick={handleScrollToContact} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Get In Touch
            </a>
            {/* IMPORTANT: Place your resume file (e.g., 'rajan-suri-resume.pdf') in the root project folder */}
            <a 
              href="/rajan-suri-resume.pdf"
              download="Rajan_Suri_Resume.pdf"
              className="px-6 py-3 bg-transparent border border-indigo-400 text-indigo-300 font-semibold rounded-lg shadow-md hover:bg-indigo-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;