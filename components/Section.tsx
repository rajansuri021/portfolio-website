
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl mb-8">
        <span className="text-indigo-400">{title.charAt(0)}</span>{title.slice(1)}
      </h2>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
