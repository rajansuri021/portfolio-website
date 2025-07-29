
import React from 'react';
import { Skill } from '../types';
import Section from './Section';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Skills" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="font-bold text-xl text-slate-200 mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, i) => (
                <span key={i} className="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
