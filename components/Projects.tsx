
import React from 'react';
import { Project } from '../types';
import Section from './Section';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02]">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-xl text-slate-100">{project.title}</h3>
        <span className="text-sm text-slate-400 whitespace-nowrap">{project.date}</span>
      </div>
      <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4">
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);


interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section title="Projects" id="projects">
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
