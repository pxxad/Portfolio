export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: "education" | "coding" | "opensource" | "project";
}

export const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    title: "IIIT Lucknow",
    subtitle: "B.Tech in Information Technology",
    description: "Began my academic journey at IIIT Lucknow. Got introduced to system internals, C++ programming, and foundational computer science concepts.",
    category: "education"
  },
  {
    year: "2025 (Early)",
    title: "Web Engineering",
    subtitle: "React & Modern Ecosystems",
    description: "Fell in love with component architectures. Started building modern web experiences using React, Tailwind CSS, Node.js, and Express.",
    category: "coding"
  },
  {
    year: "2025 (Mid)",
    title: "Algorithmic Journey",
    subtitle: "Data Structures & Grinding",
    description: "Began solving problems seriously on LeetCode and Codeforces. Focused on dynamic programming, graph algorithms, and competitive coding logic.",
    category: "coding"
  },
  {
    year: "2025 (Late)",
    title: "Open Source Era",
    subtitle: "Contributing to stdlib & gprMax",
    description: "Started reading large codebases. Submitted contributions to standard math utilities in JavaScript (stdlib) and explored scientific simulations (gprMax).",
    category: "opensource"
  },
  {
    year: "2026",
    title: "Next-Gen Frameworks",
    subtitle: "Next.js & PB.DEV Portfolio Rebuild",
    description: "Designed a premium Gen-Z glassmorphism user experience from scratch. Fully adopted Next.js App Router, Framer Motion, and high-performance Web APIs.",
    category: "project"
  }
];
