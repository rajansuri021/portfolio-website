
import React from 'react';
import { Education, Certificate } from '../types';
import Section from './Section';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  details: string;
  duration: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, details, duration, isLast = false }) => (
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-indigo-400 rounded-full mt-1.5 -start-1.5 border border-slate-900"></div>
    <time className="mb-1 text-sm font-normal leading-none text-slate-500">{duration}</time>
    <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
    <p className="text-base font-normal text-slate-400">{subtitle}</p>
    <p className="text-sm font-normal text-slate-400">{details}</p>
  </li>
);


interface ExperienceProps {
  education: Education[];
  certificates: Certificate[];
}

const Experience: React.FC<ExperienceProps> = ({ education, certificates }) => {
  return (
    <Section title="Experience & Education" id="experience">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Education</h3>
          <ol className="relative border-s border-slate-700">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                subtitle={edu.institution}
                details={`${edu.details} - ${edu.location}`}
                duration={edu.duration}
                isLast={index === education.length - 1}
              />
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Certificates</h3>
           <ol className="relative border-s border-slate-700">
            {certificates.map((cert, index) => (
              <TimelineItem
                key={index}
                title={cert.name}
                subtitle={cert.issuer}
                details=""
                duration={cert.date}
                isLast={index === certificates.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
