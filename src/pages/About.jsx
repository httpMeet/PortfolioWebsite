import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      {/* Heading */}
      <h2 className="font-serif text-3xl mb-12">About</h2>

      {/* Content */}
      <div className="space-y-6 text-inkMuted leading-relaxed max-w-3xl">
        <p>
          Hello, I’m <span className="text-ink font-medium">Meet Gandhi</span>, a
          Full Stack Developer based in Ahmedabad. I focus on building reliable,
          scalable web applications by combining thoughtful frontend design with
          practical backend engineering.
        </p>

        <p>
          My background is rooted in frontend development using HTML, CSS,
          JavaScript, React, and Tailwind CSS, where I emphasize clarity,
          accessibility, and performance. Over time, I expanded into backend
          development with PHP, MySQL, and API-driven architectures.
        </p>

        <p>
          I enjoy working across the full development lifecycle — from shaping
          clean UI systems to implementing backend logic and database structures.
          This allows me to deliver end-to-end solutions that are both usable and
          maintainable.
        </p>

        <p>
          I am currently pursuing a B.E. in Computer Science Engineering at
          Gujarat Technological University, where I continue to refine my
          technical foundation through real-world projects and hands-on work.
        </p>

        <p>
          Outside of active development, I spend time refining UI details,
          learning modern tooling, and staying aligned with evolving best
          practices in web engineering.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-14 border-t border-paperDark" />

      {/* Links */}
      <div className="pt-10">
        <p className="text-xs uppercase tracking-widest text-inkMuted mb-6">
          Connect
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <a
            href="https://www.linkedin.com/in/gandhimeet1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-inkMuted hover:text-ink transition"
          >
            LinkedIn
            <span className="opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </a>

          <a
            href="https://github.com/httpMeet"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-inkMuted hover:text-ink transition"
          >
            GitHub
            <span className="opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </a>

          <a
            href="mailto:gandhimeet1104@gmail.com"
            className="group inline-flex items-center gap-2 text-inkMuted hover:text-ink transition"
          >
            Email
            <span className="opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </a>

          <a
            href="tel:+916351398110"
            className="group inline-flex items-center gap-2 text-inkMuted hover:text-ink transition"
          >
            Phone
            <span className="opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
