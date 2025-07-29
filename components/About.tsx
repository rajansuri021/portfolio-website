
import React from 'react';
import Section from './Section';

interface AboutProps {
  bio: string;
}

const About: React.FC<AboutProps> = ({ bio }) => {
  return (
    <Section title="About Me" id="about">
      <p className="text-slate-400 text-lg leading-relaxed">
        {bio}
      </p>
    </Section>
  );
};

export default About;
