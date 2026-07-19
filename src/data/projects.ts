export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string | null;
  gradient: string;
  banner?: string;
}

export const projectsData: Project[] = [
  {
    id: "un-law",
    title: "Un-Law – AI Legal Document Analyzer",
    description: "AI-powered web application that analyzes legal documents and provides simplified insights for users.",
    longDescription: "Developed an AI-powered web application that analyzes legal documents and provides simplified insights for users. Implemented features such as PDF upload, document summarization, risk analysis, and clause explanation through an interactive dashboard.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Python", "Flask", "Gemini API", "PyPDF2"],
    category: "Web Application",
    githubUrl: "https://github.com/pxxad",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #E2E8F0 0%, #A8C5F0 100%)",
    banner: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "smart-farming",
    title: "Smart Farming",
    description: "IoT integration platform for agricultural monitoring and data analysis.",
    longDescription: "Built an interface to aggregate and visualize data from agricultural IoT sensors. Focused on providing real-time insights into soil moisture, temperature, and crop health to optimize farming yields.",
    tags: ["React", "Node.js", "IoT", "Data Visualization"],
    category: "IoT & Analytics",
    githubUrl: "https://github.com/pxxad",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #D4CCF0 0%, #B8A9E8 100%)",
    banner: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dynamic-qr",
    title: "Dynamic QR Portal",
    description: "Fullstack dynamic QR code generator with real-time analytics and editability.",
    longDescription: "Designed and built a dynamic QR portal allowing users to create QR codes that can be updated in real-time without re-printing. Integrated tracking dashboard with custom analytics logs.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "Web Application",
    githubUrl: "https://github.com/pxxad/dynamic-qr",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #FFFFFF 0%, #D4CCF0 100%)",
    banner: "/images/pokemon/pokeball-blueprint.jfif"
  },
  {
    id: "portfolio-v2",
    title: "Developer Portfolio Website",
    description: "Modern, responsive portfolio website to showcase projects, technical skills, achievements, and CP profiles.",
    longDescription: "Designed and developed a modern, responsive portfolio website to showcase projects, technical skills, achievements, and competitive programming profiles. Built reusable UI components with smooth animations, responsive layouts, dark/light theme support, and optimized performance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    githubUrl: "https://github.com/pxxad/Portfolio",
    liveUrl: "https://prasadjb.me",
    gradient: "linear-gradient(135deg, #E2E8F0 0%, #A8C5F0 100%)",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "falcon",
    title: "Falcon",
    description: "High-performance data processing tool or system utility.",
    longDescription: "An ongoing project focused on building a mature, optimized utility for handling intensive data processing tasks with minimal latency and high throughput.",
    tags: ["Python", "Data Processing", "Optimization", "CLI"],
    category: "Systems & Utilities",
    githubUrl: "https://github.com/pxxad",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #E8F0FE 0%, #6BA4E8 100%)",
    banner: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "open-source",
    title: "Open Source Contributions",
    description: "Contributions to the standard library for JavaScript (stdlib-js) and other ecosystem projects.",
    longDescription: "Active contributor to open-source infrastructure. Submitted patches to stdlib-js addressing runtime execution bugs and file system lint failures. Focused on code quality and testing.",
    tags: ["JavaScript", "Node.js", "Testing", "CI/CD"],
    category: "Open Source",
    githubUrl: "https://github.com/pxxad",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #F8F9FC 0%, #A8C5F0 100%)",
    banner: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
  }
];
