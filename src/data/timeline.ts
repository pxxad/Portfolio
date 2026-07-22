export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: "education" | "coding" | "opensource" | "project";
}

export const timelineData: TimelineEvent[] = [
  {
    year: "2024 - Present",
    title: "IIIT Lucknow",
    subtitle: "B.Tech in Information Technology",
    description: "Began my academic journey pursuing Information Technology. Got introduced to system internals, C++ programming, and foundational computer science concepts.",
    category: "education"
  },
  {
    year: "2025",
    title: "Smart India Hackathon",
    subtitle: "College Representative",
    description: "Selected as the official College Representative for the national-level hackathon platform.",
    category: "coding"
  },
  {
    year: "2025",
    title: "GirlScript Summer of Code",
    subtitle: "Open Source Contributor",
    description: "Successfully contributed to open-source software repositories over a multi-month period during GSSoC'25.",
    category: "opensource"
  },
  {
    year: "2025",
    title: "Google Cloud Arcade",
    subtitle: "Arcade Legend Tier",
    description: "Achieved Arcade Legend Tier status through cloud infrastructure and baseline labs execution.",
    category: "project"
  },
  {
    year: "2025",
    title: "Gen AI Exchange Hackathon",
    subtitle: "Participant",
    description: "Successfully participated and collaborated within a project submission environment.",
    category: "coding"
  }
];
