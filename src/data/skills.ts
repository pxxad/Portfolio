export interface Skill {
  name: string;
  iconType: string;
  proficiency: number;
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
      { name: "TypeScript", iconType: "ts", proficiency: 75 },
      { name: "JavaScript", iconType: "js", proficiency: 75 },
      { name: "Python", iconType: "python", proficiency: 70 }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", iconType: "react", proficiency: 70 },
      { name: "Next.js", iconType: "nextjs", proficiency: 70 },
      { name: "Tailwind CSS", iconType: "tailwind", proficiency: 80 },
      { name: "Framer Motion", iconType: "framer", proficiency: 65 }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", iconType: "git", proficiency: 80 },
      { name: "GitHub", iconType: "github", proficiency: 80 },
      { name: "VS Code", iconType: "vscode", proficiency: 90 },
      { name: "Linux", iconType: "linux", proficiency: 65 }
    ]
  },
  {
    title: "Coursework",
    skills: [
      { name: "Data Structures", iconType: "dsa", proficiency: 85 },
      { name: "Algorithms", iconType: "algo", proficiency: 80 },
      { name: "DBMS", iconType: "dbms", proficiency: 65 },
      { name: "Open Source", iconType: "oss", proficiency: 60 }
    ]
  }
];
