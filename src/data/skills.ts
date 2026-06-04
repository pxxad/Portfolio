export interface Skill {
  name: string;
  iconType: string; // Used to render corresponding Lucide icon or custom SVG
  proficiency: number; // 0 to 100 for visualization (no fake statistics, just visual bars)
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", iconType: "cpp", proficiency: 85 },
      { name: "TypeScript", iconType: "ts", proficiency: 80 },
      { name: "JavaScript", iconType: "js", proficiency: 88 },
      { name: "Python", iconType: "python", proficiency: 75 },
      { name: "HTML/CSS", iconType: "htmlcss", proficiency: 90 }
    ]
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "React", iconType: "react", proficiency: 85 },
      { name: "Next.js", iconType: "nextjs", proficiency: 80 },
      { name: "Tailwind CSS", iconType: "tailwind", proficiency: 90 },
      { name: "Framer Motion", iconType: "framer", proficiency: 75 }
    ]
  },
  {
    title: "Tools & OS",
    skills: [
      { name: "Git", iconType: "git", proficiency: 85 },
      { name: "GitHub", iconType: "github", proficiency: 85 },
      { name: "VS Code", iconType: "vscode", proficiency: 90 },
      { name: "Linux", iconType: "linux", proficiency: 70 }
    ]
  },
  {
    title: "Core & Focus",
    skills: [
      { name: "Data Structures", iconType: "dsa", proficiency: 80 },
      { name: "Algorithms", iconType: "algo", proficiency: 80 },
      { name: "DBMS", iconType: "dbms", proficiency: 75 },
      { name: "Open Source", iconType: "oss", proficiency: 70 }
    ]
  }
];
