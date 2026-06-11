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
}

export const projectsData: Project[] = [
  {
    id: "portfolio-v2",
    title: "PJB.DEV V2",
    description: "Next-generation software engineer portfolio with glassmorphism, parallax effects, and custom animated backgrounds.",
    longDescription: "A premium Gen-Z developer portfolio built using Next.js, Tailwind CSS, and Framer Motion. Features a customized high-performance rendering pipeline, canvas particle animations, scroll-linked vertical timelines, and real-time GitHub integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
    category: "Web Development",
    githubUrl: "https://github.com/pxxad/Portfolio",
    liveUrl: "https://pbdev.vercel.app",
    gradient: "linear-gradient(135deg, #E2E8F0 0%, #A8C5F0 100%)"
  },
  {
    id: "stdlib-contributions",
    title: "stdlib JS",
    description: "Open-source contributions to standard library for JavaScript and Node.js numerical computation.",
    longDescription: "Contributed to stdlib-js, a comprehensive suite of math and scientific utility functions for JavaScript, improving statistical computations, linear algebra, and performance benchmarks for production-grade math libraries.",
    tags: ["JavaScript", "Node.js", "Math Utilities", "Open Source", "Testing"],
    category: "Open Source",
    githubUrl: "https://github.com/pxxad/stdlib",
    liveUrl: "https://stdlib.io",
    gradient: "linear-gradient(135deg, #D4CCF0 0%, #B8A9E8 100%)"
  },
  {
    id: "gprmax-exploration",
    title: "gprMax",
    description: "Fork and exploration of electromagnetic wave simulators for Ground Penetrating Radar (GPR).",
    longDescription: "Investigated FDTD electromagnetic simulations using gprMax. Researched radar wave reflection modeling, sub-surface modeling, and algorithm implementation using Python and C++ for advanced material detection.",
    tags: ["Python", "Electromagnetics", "FDTD", "Simulation", "C++"],
    category: "Simulation & Math",
    githubUrl: "https://github.com/pxxad/gprMax",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #E8F0FE 0%, #6BA4E8 100%)"
  },
  {
    id: "dynamic-qr",
    title: "Dynamic QR Portal",
    description: "Fullstack dynamic QR code generator with real-time analytics, editability, and high-fidelity vector rendering.",
    longDescription: "Designed and built a dynamic QR portal allowing users to create QR codes that can be updated in real-time without re-printing. Integrated tracking dashboard with custom analytics logs, user agents, and geolocation records.",
    tags: ["React", "Node.js", "Express", "MongoDB", "QR Engine"],
    category: "Web Application",
    githubUrl: "https://github.com/pxxad/dynamic-qr",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #FFFFFF 0%, #D4CCF0 100%)"
  },
  {
    id: "mapinsight",
    title: "MapInsight",
    description: "Interactive geographical visualization platform analyzing urban traffic flow and density trends.",
    longDescription: "Developed MapInsight, a location analytics service that consumes public transport datasets to plot density maps. Leveraged WebGL shaders for smooth interactive rendering of millions of data points.",
    tags: ["JavaScript", "Mapbox GL", "React", "Geospatial", "GeoJSON"],
    category: "Data Visualization",
    githubUrl: "https://github.com/pxxad/MapInsight",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #A8C5F0 0%, #B8A9E8 100%)"
  },
  {
    id: "infofetch",
    title: "InfoFetch",
    description: "High-performance parallel crawler and scraper designed for structured scientific paper metadata aggregation.",
    longDescription: "A specialized scraping engine built in Python that asynchronously crawls open research repositories (like arXiv) to construct structural citation graphs, optimizing metadata fetching speeds by 4x.",
    tags: ["Python", "Asyncio", "Scrapy", "Data Mining", "SQLite"],
    category: "Systems & Crawlers",
    githubUrl: "https://github.com/pxxad/InfoFetch",
    liveUrl: null,
    gradient: "linear-gradient(135deg, #F8F9FC 0%, #A8C5F0 100%)"
  }
];
