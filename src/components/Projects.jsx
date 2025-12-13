import React, { useEffect, useState } from "react";

/* ---- Images ---- */
import locifyImg from "../assets/projects/locify.png";
import finflowImg from "../assets/projects/finflow.png";
import ahmedabadImg from "../assets/projects/ahmedabad-live.png";
import techstudyhubImg from "../assets/projects/techstudyhub.png";
import recycloImg from "../assets/projects/recyclo-cart.png";
import shoppingImg from "../assets/projects/shoppinglist.png";

/* ---- Project Data ---- */
const projects = [
  {
    title: "Locify – Password Manager",
    description:
      "A secure password manager designed with encryption-focused logic and clean UX for real-world usage.",
    tech: "React · PHP · MySQL · JavaScript",
    image: locifyImg,
    link: "https://github.com/httpMeet/Locify-A-Password-Manager",
  },
  {
    title: "FinFlow",
    description:
      "A finance management application to track income, expenses, and financial flow with a structured backend.",
    tech: "React · Django · JavaScript",
    image: finflowImg,
    link: "https://github.com/httpMeet/FinFlow",
  },
  {
    title: "Ahmedabad Live",
    description:
      "A complaint management system allowing citizens to raise and track issues with an intuitive workflow.",
    tech: "HTML · CSS · JavaScript · PHP",
    image: ahmedabadImg,
    link: "https://github.com/httpMeet/Ahmedabad-Live",
  },
  {
    title: "TechStudyHub",
    description:
      "A learning platform providing structured study materials for students.",
    tech: "HTML · CSS · JavaScript",
    image: techstudyhubImg,
    link: "https://sites.google.com/view/techstudyhub",
  },
  {
    title: "Recyclo-Cart",
    description:
      "An e-commerce platform focused on recycling and sustainability.",
    tech: "HTML · CSS · JavaScript · PHP",
    image: recycloImg,
    link: "https://github.com/httpMeet/recyclo-cart",
  },
  {
    title: "Shopping List App",
    description:
      "An application to manage and organize shopping lists.",
    tech: "HTML · CSS · JavaScript",
    image: shoppingImg,
    link: "https://github.com/httpMeet/Shopping-List-App",
  },
];

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 pt-28 pb-28">
      <h2 className="font-serif text-3xl mb-14">Projects</h2>

      {/* Grid */}
      <div className="grid gap-12 md:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <ShimmerProject key={i} />
            ))
          : projects.map((project, index) => (
              <article
                key={index}
                className="group border border-ink/20 bg-paper p-6 transition-all duration-300 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Image */}
                <div className="w-full h-56 mb-6 overflow-hidden border border-ink/20 bg-paper">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl mb-2">
                  {project.title}
                </h3>

                <p className="text-inkMuted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-inkMuted mb-5">
                  <span className="text-ink font-medium">Tech:</span>{" "}
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm border-b border-ink/40 hover:border-ink transition"
                >
                  View on GitHub →
                </a>
              </article>
            ))}
      </div>
    </section>
  );
};

/* ---------- Shimmer Card ---------- */
const ShimmerProject = () => (
  <div className="border border-ink/20 p-6 animate-pulse">
    <div className="h-56 bg-ink/10 mb-6" />
    <div className="h-5 w-2/3 bg-ink/10 mb-3" />
    <div className="h-4 w-full bg-ink/10 mb-2" />
    <div className="h-4 w-5/6 bg-ink/10 mb-4" />
    <div className="h-4 w-32 bg-ink/10" />
  </div>
);

export default Projects;
