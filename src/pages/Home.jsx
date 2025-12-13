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
      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Meet Gandhi</h1>

        <p className="text-lg text-inkMuted mb-6">
          {titles[currentTitleIndex]}
        </p>

        <p className="text-inkMuted max-w-xl leading-relaxed mb-10">
          Focused on performance, clarity, and real-world usability — not just
          writing code, but building reliable products.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-8 text-sm">
          <Link
            to="/projects"
            className="border border-paperDark px-6 py-3 hover:border-accent transition"
          >
            View Projects
          </Link>

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
      </section>

      {/* ============== DIVIDER ============== */}
      {/* Section Divider */}
      <div className="my-8 flex justify-center">
        <span className="block w-full max-w-4xl border-t border-ink/30" />
      </div>

      {/* ============ WHAT I FOCUS ON ============ */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="font-serif text-3xl mb-12">What I focus on</h2>

        <div className="grid md:grid-cols-3 gap-12 text-sm text-inkMuted">
          <div>
            <h3 className="font-medium text-ink mb-2">Clean Architecture</h3>
            <p>
              Writing structured, maintainable code that scales as products
              grow.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-ink mb-2">Performance</h3>
            <p>
              Optimizing UI and backend interactions for speed and reliability.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-ink mb-2">Real-world Systems</h3>
            <p>Building features that solve actual problems — not demos.</p>
          </div>
        </div>
      </section>

      {/* ============== DIVIDER ============== */}
      {/* Section Divider */}
      <div className="my-8 flex justify-center">
        <span className="block w-full max-w-4xl border-t border-ink/30" />
      </div>

      {/* ================= SKILLS ================= */}
      <Skills />
    </>
  );
};

export default Home;
