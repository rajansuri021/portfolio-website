
export interface Skill {
  category: string;
  technologies: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  description: string[];
  date: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  title: string;
  organizer: string;
  description: string;
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
  duration: string;
  location: string;
}
