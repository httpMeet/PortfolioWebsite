import { TimelineItem } from "@/types/timeline";

export const timeline: TimelineItem[] = [
  {
    id: "t1",
    year: "2024 - Present",
    title: "Laravel Backend Developer & Software Engineer",
    organization: "Independent Software Projects & Systems Engineering",
    location: "Ahmedabad, India",
    description:
      "Engineered backend systems specializing in Laravel, PHP, MySQL database design, and REST APIs. Built flagship platforms like AMRV, credential vaults, and financial ledger engines.",
    achievements: [
      "Architected AMRV automated validation backend with sub-25ms endpoint responses.",
      "Designed normalized relational schemas and optimized MySQL indexing for complex joins.",
      "Implemented security standards including AES-256 encryption, Sanctum/JWT auth, and RBAC.",
    ],
    skills: ["PHP", "Laravel", "MySQL", "REST APIs", "Redis", "Git"],
    category: "Work",
  },
  {
    id: "t2",
    year: "2023 - 2024",
    title: "Full Stack & Web Developer",
    organization: "Web Applications & Open Source Development",
    location: "Ahmedabad, India",
    description:
      "Developed web applications transitioning from frontend technologies into robust backend database systems with PHP and MySQL.",
    achievements: [
      "Built Ahmedabad Live civic complaint routing backend with automated state machine status workflows.",
      "Engineered FinFlow ledger engine enforcing exact decimal monetary calculation types.",
    ],
    skills: ["PHP", "MySQL", "JavaScript", "React", "HTML/CSS"],
    category: "Work",
  },
  {
    id: "t3",
    year: "2021 - 2024",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Gujarat University / Academic Studies",
    location: "Ahmedabad, India",
    description:
      "Graduated with core computer science specialization in Database Management Systems (DBMS), Software Engineering, Object-Oriented Programming (OOP), and Web Development.",
    achievements: [
      "Certified in Web Development & Fundamental Programming.",
      "Published TechStudyHub learning platform for computer science students.",
    ],
    skills: ["DBMS", "Data Structures", "OOP", "SQL", "Software Architecture"],
    category: "Education",
  },
];
