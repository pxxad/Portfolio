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
      { name: "Python", iconType: "python", proficiency: 75 },
      { name: "JavaScript", iconType: "js", proficiency: 75 },
      { name: "SQL", iconType: "sql", proficiency: 70 }
    ]
  },
  {
    title: "Frameworks & Tech",
    skills: [
      { name: "ReactJS", iconType: "react", proficiency: 75 },
      { name: "NodeJS & Express", iconType: "nodejs", proficiency: 70 },
      { name: "Spring Boot", iconType: "spring", proficiency: 65 },
      { name: "MongoDB", iconType: "mongodb", proficiency: 70 }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", iconType: "git", proficiency: 80 },
      { name: "VS Code", iconType: "vscode", proficiency: 90 },
      { name: "Google Colab", iconType: "colab", proficiency: 75 }
    ]
  },
  {
    title: "Coursework",
    skills: [
      { name: "Data Structures", iconType: "dsa", proficiency: 85 },
      { name: "Algorithms", iconType: "algo", proficiency: 80 },
      { name: "OOPs", iconType: "oops", proficiency: 75 },
      { name: "DBMS", iconType: "dbms", proficiency: 70 }
    ]
  }
];
