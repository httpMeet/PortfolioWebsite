import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import MeetGandhiResume from "../assets/MeetGandhiResume.pdf";

const Home = () => {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-28">
        <h1 className="font-serif text-5xl mb-6">
          Meet Gandhi
        </h1>

        <p className="text-lg text-inkMuted mb-6">
          {titles[currentTitleIndex]}
        </p>

        <p className="text-inkMuted max-w-xl leading-relaxed mb-12">
          Focused on performance, clarity, and real-world usability —
          not just writing code, but building reliable products.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-8 text-sm">
          {/* Primary */}
          <Link
            to="/projects"
            className="border border-paperDark px-7 py-3 hover:border-accent transition"
          >
            View Projects
          </Link>

          {/* Secondary */}
          <div className="flex gap-6">
            <Link
              to="/about"
              className="border-b border-paperDark hover:border-accent transition"
            >
              About
            </Link>

            <a
              href="https://github.com/httpMeet"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-paperDark hover:border-accent transition"
            >
              GitHub
            </a>

            <a
              href={MeetGandhiResume}
              download
              className="border-b border-paperDark hover:border-accent transition"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* WHAT I FOCUS ON */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <h2 className="font-serif text-3xl mb-12">
          What I focus on
        </h2>

        <div className="grid sm:grid-cols-3 gap-12 text-sm text-inkMuted leading-relaxed">
          <div>
            <p className="text-ink mb-2">Clean Architecture</p>
            <p>
              Writing structured, maintainable code that scales as products grow.
            </p>
          </div>

          <div>
            <p className="text-ink mb-2">Performance</p>
            <p>
              Optimizing UI and backend interactions for speed and reliability.
            </p>
          </div>

          <div>
            <p className="text-ink mb-2">Real-world Systems</p>
            <p>
              Building features that solve actual problems — not demos.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <Skills />
    </>
  );
};

export default Home;
