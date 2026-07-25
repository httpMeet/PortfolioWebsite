import { Certificate } from "@/types/certificate";

export const certificates: Certificate[] = [
  {
    id: "cert-html",
    title: "HTML5 & Web Architecture Fundamentals",
    issuer: "Verified Credential",
    issueDate: "2023",
    pdfPath: "/assets/html.pdf",
    imagePath: "/assets/Html.png",
    skills: ["HTML5", "Semantic Markup", "DOM Architecture"],
  },
  {
    id: "cert-css",
    title: "CSS3 Styling & Layout Systems",
    issuer: "Verified Credential",
    issueDate: "2023",
    pdfPath: "/assets/css.pdf",
    imagePath: "/assets/css.png",
    skills: ["CSS3", "Responsive Design", "Flexbox & Grid"],
  },
  {
    id: "cert-js",
    title: "JavaScript Programming & Async Control Flow",
    issuer: "Verified Credential",
    issueDate: "2023",
    pdfPath: "/assets/java script.pdf",
    imagePath: "/assets/Js.png",
    skills: ["JavaScript", "ES6+", "Async/Await", "DOM APIs"],
  },
  {
    id: "cert-react",
    title: "React Application Engineering",
    issuer: "Verified Credential",
    issueDate: "2024",
    pdfPath: "/assets/ReactJs.pdf",
    imagePath: "/assets/react.png",
    skills: ["React", "Component State", "Hooks", "Virtual DOM"],
  },
];
