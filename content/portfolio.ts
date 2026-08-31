export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  product?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  honor?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface CommunityItem {
  title: string;
  image: string;
}

export interface HonorItem {
  placement: string;
  event: string;
  venue: string;
  date: string;
  description: string;
  prize: string;
  technologies: string[];
  image: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  stats: { label: string; value: string }[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  honors: HonorItem[];
  certifications: string[];
  education: EducationItem[];
  community: CommunityItem[];
}

export const portfolio: PortfolioData = {
  name: "Sergey Safaryan",
  title: "Software Engineer",
  tagline:
    "React · TypeScript · Node.js",
  summary:
    "Software Engineer with 3+ years of commercial experience building high-performance, responsive web applications. Specialized in React.js, TypeScript, JavaScript, and Node.js, with experience in reusable component architecture, state management, REST API integration, and web performance optimization. I focus on building clean, scalable interfaces and turning designs into pixel-perfect user experiences.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Core Web Vitals", value: "20%" },
    { label: "Faster Feature Delivery", value: "15%" },
    // { label: "CI/CD Speedup", value: "40%" },
  ],
  contact: {
    phone: "+374 98665430",
    email: "segosafaryan@gmail.com",
    linkedin: "https://www.linkedin.com/in/sergey-safaryan-414b00376/",
    github: "https://github.com/safaryansego-source",
    resumeUrl: "/resume.pdf",
  },
  experience: [
    {
      company: "Remote",
      role: "Digital & Research Specialist",
      period: "2025 – 2026",
      product: "Web & Digital Operations",
      highlights: [
        "Developed and maintained custom client websites using WordPress, PHP, HTML5, CSS3, and Node.js, with a focus on responsiveness and user experience.",
        "Performed technical SEO, performance optimization, and cross-browser QA testing to maintain reliable website performance.",
        "Conducted competitive market analysis and technology benchmarking, preparing technical reports to support product roadmap decisions.",
      ],
      technologies: [
        "GenAI",
        "HTML5",
        "CSS3",
        "Cursor",
        "AI Agents",
        "Node.js",
        "PostgreSQL",
        "React",
        "TypeScript",
        "JavaScript",
        "REST API",
        "PHP",
        "WordPress",
        "Semrush",
        "Ahrefs",
        "Google Analytics",
        "Google Search Console",
        "github.com",
      ],
    },
  ],
  skills: [
    {
      name: "Frontend",
      items: ["TypeScript", "JavaScript", "React", "HTML5", "CSS3"],
    },
    {
      name: "Backend",
      items: [
        "Node.js",
        "REST APIs",
        "PHP",
        "C#",
        "Autonomous AI Agents",
        "Cursor",
      ],
    },
    {
      name: "Web & Optimization",
      items: [
        "Technical SEO",
        "Performance Optimization",
        "Cross-Browser Testing",
        "Google Search Console",
        "Semrush",
        "Ahrefs",
        "Google Analytics",
      ],
    },
    {
      name: "Development",
      items: [
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "SQL Server", "Snowflake", "Looker"],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "Modern personal portfolio showcasing experience, projects, and skills with smooth animations and responsive design.",
      technologies: ["Next.js", "React Three Fiber", "GSAP", "Firebase"],
      liveUrl: "https://portfolio-safaryan.vercel.app/",
      githubUrl: "https://github.com/safaryansego-source",
      image: "/images/portfolio.svg",
    },
    {
      title: "alsatiank9training.com",
      description:
        "Alsatian K9 Training | German Shepherd & Working K9 Trainer California",
      technologies: ["HTML", "CSS", "JavaScript", "Technical SEO"],
      liveUrl: "https://safaryansego-source.github.io/alsatiank9training/",
      githubUrl: "https://github.com/safaryansego-source?tab=repositories",
      image: "/images/alsatian.jpg",
    },
    {
      title: "bestk9.com",
      description:
        "BestK9 | Professional Dog Trainer in California — Service Dog & K9 Training.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Technical SEO",
      ],
      liveUrl: "https://safaryansego-source.github.io/bestk9/",
      githubUrl: "https://github.com/safaryansego-source?tab=repositories",
      image: "/images/bestk9.png",
    },
    {
      title: "bestpuppy.com",
      description:
        "BestPuppy — Puppy Training in California",
      technologies: ["HTML", "CSS", "JavaScript", "Technical SEO"],
      liveUrl: "https://safaryansego-source.github.io/bestpuppy/",
      githubUrl: "https://github.com/safaryansego-source?tab=repositories",
      image: "/images/bestpuppy.png",
    },
  ],
  honors: [  
  ],
  certifications: [
    "Node.js Essential Training",
    "JavaScript Essential Training",
    "HTML CSS Essential Training",
  ],
  education: [
    {
      period: "2022 – 2026",
      degree: "Bachelor's Degree in Computer Engineering",
      institution:
        "National Polytechnic University of Armenia",
    },
  ],
  community: [
    {
      title: "National Polytechnic University of Armenia",
      image: "/images/Armenia.jpg",
    },
  ],
};
