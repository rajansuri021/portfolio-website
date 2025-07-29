
import { Skill, Project, Certificate, Achievement, Education } from './types';

export const PERSONAL_INFO = {
  name: 'Rajan',
  email: 'rsuri364@gmail.com',
  phone: '+91-6239806522',
  linkedin: 'https://linkedin.com/in/rajan-suri-dev',
  github: 'https://github.com/surirajan365',
  bio: "A highly motivated and skilled Master of Computer Applications student with a strong foundation in full-stack development, machine learning, and data analysis. Proficient in a range of technologies including Python, JavaScript, React, and TensorFlow. Proven ability to deliver high-quality projects, from developing intelligent systems to creating user-friendly web applications. Seeking to leverage academic knowledge and project experience to contribute to a challenging and innovative software engineering role."
};

export const SKILLS: Skill[] = [
  { category: 'Languages', technologies: ['HTML', 'CSS', 'C/C++', 'JAVA', 'Python'] },
  { category: 'Frameworks', technologies: ['Bootstrap', 'NodeJS', 'React'] },
  { category: 'Data-Analysis', technologies: ['Pandas', 'Numpy', 'Matplotlib'] },
  { category: 'Tools/Platforms', technologies: ['MySQL', 'Git', 'Github', 'Red-hat-linux'] },
  { category: 'Soft Skills', technologies: ['Problem-Solving', 'Team Player', 'Project Management', 'Adaptability'] },
];

export const PROJECTS: Project[] = [
  {
    title: 'Car Recognition and Information System',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Pandas'],
    description: [
      'Built a machine learning model to recognize car make and model from uploaded images.',
      'Used pre-trained dataset and CNN-based architecture for accurate car identification.',
      'Integrated image processing techniques using OpenCV for feature extraction.',
      'Displayed detailed specifications of identified cars (e.g., brand, model, year, type).',
      'Achieved reliable results on real-world images with high prediction accuracy.',
    ],
    date: 'July 2025',
  },
  {
    title: 'EasyService',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description: [
      'Engineered a full-stack web application for discovering professional home services.',
      'Designed an interactive front-end using HTML, CSS, and JavaScript.',
      'Developed dynamic backend functionalities with PHP.',
      'Managed and optimized database operations using MySQL.',
    ],
    date: 'April 2024',
  },
  {
    title: 'To-Do List',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'Created a user-friendly To-Do List for task management.',
      'Implemented local storage to preserve data across browser sessions.',
      'Enhanced user experience by enabling task insertion, marking, and deletion.',
    ],
    date: 'December 2023',
  },
];

export const CERTIFICATES: Certificate[] = [
    { name: 'IBM Data Analyst Professional Certificate', issuer: 'Coursera', date: 'July 2025' },
    { name: 'Complete Data-Analyst', issuer: 'FreeCode Camp', date: 'January 2024' },
    { name: 'One Week Bootcamp On Cybersecurity', issuer: 'Conducted By GNA University', date: 'October 2022' },
    { name: '100 Days of Code', issuer: 'Udemy - The Complete Python Pro Bootcamp by Dr. Angela Yu', date: 'June 2022' },
];

export const ACHIEVEMENTS: Achievement[] = [
    { title: 'Athena Short Film Making 1st Position', organizer: 'Organized By PCTE Institute', description: '', date: 'November 2023' },
    { title: 'Tech Disha Code-Golf 1st Position', organizer: 'Organized By Arya College', description: '20+ Colleges participated Secured First Position.', date: 'September 2023' },
    { title: 'SmartIndia Hackathon 9th Position', organizer: '', description: 'Student From all over India and 70+ teams participated. Created Easy Hospital Access Website with 93% success rate.', date: 'August 2022' },
    { title: "One among Dean's top 10 % students at University", organizer: '', description: 'For good academic performance and extra-curricular activities at University.', date: '' },
];

export const EDUCATION: Education[] = [
    { degree: 'MCA - Masters in Computer Application', institution: 'Lovely Professional University', details: 'CGPA: 7.8', duration: 'Since August 2024', location: 'Punjab, India' },
    { degree: 'BCA – Bachelor in Computer Application', institution: 'S.C.D Government College', details: 'CGPA: 8.0', duration: 'August 2021 - May 2024', location: 'Ludhiana, Punjab' },
    { degree: 'Intermediate', institution: 'S.D Model SEN SEC School', details: 'Percentage: 83%', duration: 'March 2019 - March 2020', location: 'Phagwara, Punjab' },
    { degree: 'Matriculation', institution: 'Brilliant Convent School', details: 'Percentage: 77%', duration: 'March 2017 - March 2018', location: 'Goraya, Punjab' },
];
