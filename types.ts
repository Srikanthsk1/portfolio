
export interface Skill {
  name: string;
  category: 'Languages' | 'ML Frameworks' | 'Data Science' | 'Tools';
  proficiency: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string; data: number[] }[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  verifyLink: string;
  certId: string;
  imageUrl: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
