import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Locify – Password Manager",
      description:
        "A secure password management system designed to store and organize user credentials with encryption-focused logic and clean UX.",
      tech: "React · PHP · MySQL · JavaScript",
      link: "https://github.com/httpMeet/Locify-A-Password-Manager",
    },
    {
      name: "FinFlow",
      description:
        "A finance management application built to track income, expenses, and financial flow with a structured backend and intuitive frontend.",
      tech: "React · Django · JavaScript",
      link: "https://github.com/httpMeet/FinFlow",
    },
    {
      name: "Ahmedabad Live",
      description:
        "A complaint management platform enabling citizens to submit and track complaints with focus on clarity and admin workflows.",
      tech: "PHP · JavaScript · MySQL",
      link: "https://github.com/httpMeet/Ahmedabad-Live",
    },
    {
      name: "TechStudyHub",
      description:
        "An educational resource platform built to provide students with structured, distraction-free study materials.",
      tech: "HTML · CSS · JavaScript",
      link: "https://sites.google.com/view/techstudyhub",
    },
    {
      name: "RecycloCart",
      description:
        "An e-commerce concept focused on recycling products, built with cart logic and backend processing.",
      tech: "PHP · JavaScript · MySQL",
      link: "https://github.com/httpMeet/recyclo-cart",
    },
    {
      name: "Portfolio Website",
      description:
        "My personal portfolio showcasing projects, skills, and experience with a focus on clean UI and performance.",
      tech: "React · Tailwind CSS",
      link: "https://github.com/httpMeet/PortfolioWebsite",
    },
  ];

  return (
    <section className="pt-36 pb-28">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {/* Header */}
        <div className="space-y-6 max-w-2xl">
          <h1 className="font-serif text-4xl">Projects</h1>
          <p className="text-inkMuted leading-relaxed">
            A selection of projects I’ve worked on, ranging from full-stack
            applications to focused frontend and backend systems. Each project
            reflects my approach to clean architecture and real-world usability.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-paperDark bg-paperDark/40 p-8 space-y-4"
            >
              <h2 className="font-serif text-2xl">
                {project.name}
              </h2>

              <p className="text-inkMuted leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <p className="text-sm text-inkMuted">
                <span className="text-ink font-medium">Tech:</span>{" "}
                {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm border-b border-paperDark hover:border-accent transition"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
