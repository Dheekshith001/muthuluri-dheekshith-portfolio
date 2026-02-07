
import { Project, SkillCategory, EducationEntry, CertificationEntry } from './types';

export const PERSONAL_INFO = {
  name: "Muthuluri Dheekshith",
  role: "Java Full-Stack Developer",
  tagline: "Computer Science Engineering Undergraduate | Machine Learning Enthusiast",
  location: "Bangalore, Karnataka, India",
  email: "dheekshithnaidu001@gmail.com",
  github: "https://github.com/Dheekshith001",
  linkedin: "https://linkedin.com/in/dheekshithm",
  phone: "9391834329"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "Python", "C", "SQL"]
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "Hibernate", "Flask", "Streamlit", "Pandas", "NumPy", "Scikit-learn"]
  },
  {
    title: "Databases",
    items: ["MySQL", "SQLite", "PostgreSQL"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Power BI"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "IPL Player Stats Web App",
    description: "Developed a full-stack web app using Flask, SQLite, and SQLAlchemy to display IPL player stats. Implemented REST APIs and optimized SQL queries to reduce load time by 35%.",
    tags: ["Flask", "SQLite", "SQLAlchemy", "REST API"],
    githubUrl: "https://github.com/Dheekshith001"
  },
  {
    title: "YouTube Transcript Summarizer",
    description: "Built a Streamlit app to summarize YouTube video transcripts using speech-to-text APIs. Processed 10+ videos and supported multilingual content.",
    tags: ["Streamlit", "Python", "NLP", "API"],
    githubUrl: "https://github.com/Dheekshith001"
  },
  {
    title: "Diabetes Prediction System",
    description: "Created a Flask-based machine learning app using Logistic Regression (86% accuracy) to assess diabetes risk via user health input and real-time prediction.",
    tags: ["Flask", "Machine Learning", "Python", "Healthcare"],
    githubUrl: "https://github.com/Dheekshith001"
  },
  {
    title: "Diet-Hack",
    description: "Collaborated in a 4-member team for a hackathon to build a dietary recommendation app using ML and Streamlit. Filtered 1,000+ food items.",
    tags: ["Hackathon", "Streamlit", "Machine Learning", "Recommendation"],
    githubUrl: "https://github.com/Dheekshith001"
  }
];

export const EDUCATION: EducationEntry[] = [
  {
    school: "K.S. School of Engineering and Management",
    degree: "B.E. in Computer Science and Engineering",
    period: "2022 – Present",
    location: "Bangalore, Karnataka",
    result: "CGPA: 7.5"
  },
  {
    school: "Sri Chaitanya Junior College",
    degree: "Board of Intermediate Education",
    period: "2020 – 2022",
    location: "Tirupati, Andhra Pradesh",
    result: "Percentage: 72%"
  },
  {
    school: "Montessori EM High School",
    degree: "SSC (Secondary School Certificate)",
    period: "2019 – 2020",
    location: "Kurnool, Andhra Pradesh",
    result: "Marks: 596/600"
  }
];

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    name: "Python Programming",
    provider: "Pygenic Arc",
    year: "2024"
  },
  {
    name: "Java + DSA + Spring Boot",
    provider: "Tap Academy",
    year: "Expected: Dec 2025"
  },
  {
    name: "AWS Cloud Computing",
    provider: "Academic Training",
    year: "2025"
  }
];
