
import React from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';

interface ContactProps {
  email: string;
  linkedin: string;
  github: string;
}

const Contact: React.FC<ContactProps> = ({ email, linkedin, github }) => {
  return (
    <footer id="contact" className="bg-slate-900/50 border-t border-slate-800 mt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200">Get in Touch</h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="mt-8">
            <a href={`mailto:${email}`} className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block">
                Say Hello
            </a>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
            <GithubIcon className="h-7 w-7" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
            <LinkedinIcon className="h-7 w-7" />
          </a>
          <a href={`mailto:${email}`} className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
            <MailIcon className="h-7 w-7" />
          </a>
        </div>
        <div className="mt-12 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Rajan. All rights reserved.</p>
          <p className="mt-1">Designed & Built with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;