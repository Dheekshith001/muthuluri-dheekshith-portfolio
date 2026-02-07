
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  location: string;
  result: string;
}

export interface CertificationEntry {
  name: string;
  provider: string;
  year: string;
}
