import React from "react";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-28">
        <div className="space-y-8 opacity-0 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-6xl">
            Meet Gandhi
          </h1>

          <p className="text-lg text-inkMuted">
            Frontend / Full Stack Developer
          </p>

          <p className="text-inkMuted max-w-2xl leading-relaxed">
            I build clean, scalable, and user-focused web applications with a
            strong emphasis on performance, accessibility, and real-world
            usability. I enjoy crafting thoughtful UI and building systems
            that are reliable, maintainable, and production-ready.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-8 pt-6 text-sm">
            {/* Primary */}
            <Link
              to="/projects"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                border border-ink/40
                transition-all duration-300 ease-out
                hover:bg-ink hover:text-paper
                hover:-translate-y-[2px]
                hover:shadow-md
                group
              "
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary */}
            <Link
              to="/about"
              className="
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0 after:bg-ink
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              About
            </Link>

            <a
              href="https://github.com/httpMeet"
              target="_blank"
              rel="noreferrer"
              className="
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0 after:bg-ink
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-ink/30" />
      </div>

      {/* WHAT I FOCUS ON */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl mb-14 opacity-0 animate-fadeInUp">
          What I focus on
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Clean Architecture",
              text:
                "Writing structured, readable, and maintainable code that scales as products grow and requirements evolve.",
            },
            {
              title: "Performance",
              text:
                "Optimizing UI interactions, load times, and data flow to deliver fast and smooth user experiences.",
            },
            {
              title: "Real-world Systems",
              text:
                "Building applications that solve real problems with practical features — not just demo projects.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                p-6
                border border-ink/30
                opacity-0 animate-fadeInUp
                transition-all duration-300
                hover:-translate-y-1
                hover:border-accent
                hover:shadow-lg
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-inkMuted text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <Skills />
    </>
  );
};

export default Home;
