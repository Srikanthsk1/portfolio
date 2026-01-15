
import { Skill, Project, Experience, Certification } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Languages', proficiency: 90, icon: '🐍' },
  { name: 'PyTorch', category: 'ML Frameworks', proficiency: 75, icon: '🔥' },
  { name: 'Scikit-learn', category: 'ML Frameworks', proficiency: 85, icon: '📊' },
  { name: 'SQL', category: 'Languages', proficiency: 80, icon: '🗄️' },
  { name: 'Pandas', category: 'Data Science', proficiency: 90, icon: '🐼' },
  { name: 'Matplotlib', category: 'Data Science', proficiency: 85, icon: '📈' },
  { name: 'GitHub', category: 'Tools', proficiency: 85, icon: '🐙' },
  { name: 'Jupyter', category: 'Tools', proficiency: 95, icon: '📓' },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Data Analytics',
    issuer: 'Google (Coursera)',
    date: 'March 2024',
    link: 'https://coursera.org/verify/google-data-analytics',
    verifyLink: 'https://coursera.org/verify/google-data-analytics',
    certId: 'GDA-2024-8892',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=500&auto=format&fit=crop',
    icon: '🌐'
  },
  {
    title: 'AI Fundamentals',
    issuer: 'Microsoft',
    date: 'December 2023',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    verifyLink: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    certId: 'MSFT-AI-4402',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format&fit=crop',
    icon: '🤖'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'January 2024',
    link: 'https://coursera.org/verify/specialization/ML',
    verifyLink: 'https://coursera.org/verify/specialization/ML',
    certId: 'DLAI-ML-9910',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=500&auto=format&fit=crop',
    icon: '🧠'
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'November 2023',
    link: 'https://www.credly.com/org/ibm',
    verifyLink: 'https://www.credly.com/org/ibm',
    certId: 'IBM-PYDS-2231',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop',
    icon: '🐍'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Chatbot for Students',
    description: 'A friendly AI assistant built to help students find campus resources and answer FAQs using natural language processing.',
    tags: ['Python', 'NLP', 'Gemini API'],
    metrics: [
      { label: 'Accuracy', value: '88%', data: [50, 60, 75, 82, 85, 88] },
      { label: 'Response Time', value: '0.8s', data: [200, 150, 100, 90, 85, 80] }
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://gemini.google.com',
    imageUrl: 'https://picsum.photos/seed/ai1/800/450'
  },
  {
    id: '2',
    title: 'House Price Predictor',
    description: 'My first machine learning project using regression to predict real estate prices based on area and amenities.',
    tags: ['Scikit-learn', 'Pandas', 'Data Analysis'],
    metrics: [
      { label: 'R2 Score', value: '0.82', data: [0.4, 0.55, 0.65, 0.75, 0.8, 0.82] },
      { label: 'MSE', value: 'Low', data: [100, 80, 60, 40, 30, 25] }
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://colab.research.google.com',
    imageUrl: 'https://picsum.photos/seed/ds2/800/450'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Data Science Intern',
    period: 'Summer 2024',
    description: [
      'Assisted in cleaning and preprocessing large datasets for the analytics team.',
      'Built basic visualization dashboards using Streamlit and Matplotlib.',
      'Learned to deploy simple ML models into a testing environment.'
    ]
  },
  {
    company: 'University of Technology',
    role: 'Computer Science Graduate',
    period: '2020 - 2024',
    description: [
      'Focused on Machine Learning and Data Structures.',
      'Completed a capstone project on AI-driven image classification.',
      'Active member of the Data Science Student Club.'
    ]
  }
];

export const SYSTEM_PROMPT = `
You are the AI Assistant for Alex, a fresh graduate and aspiring Data Scientist.
Answer questions about Alex's educational background, his projects (like the Student Chatbot), and his internship experience.
Be encouraging, professional, and highlight his passion for learning and growing in the AI field.
`;
