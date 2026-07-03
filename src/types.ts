export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  year: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}
