
import React from 'react';
import { Achievement } from '../types';
import Section from './Section';

interface AchievementItemProps {
  achievement: Achievement;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ achievement }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-slate-100">{achievement.title}</h3>
          {achievement.organizer && <p className="text-sm text-slate-400 mt-1">{achievement.organizer}</p>}
          {achievement.description && <p className="text-slate-400 mt-2">{achievement.description}</p>}
        </div>
        <span className="text-sm text-slate-500 whitespace-nowrap pl-4">{achievement.date}</span>
      </div>
    </div>
);


interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <Section title="Achievements" id="achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <AchievementItem key={index} achievement={item} />
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
