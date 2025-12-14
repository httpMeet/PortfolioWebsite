import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-28 pb-28">
      {/* Heading */}
      <div className="mb-14 animate-fadeInUp">
        <h2 className="font-serif text-3xl mb-4">About</h2>
        <p className="text-inkMuted max-w-2xl leading-relaxed">
          A deeper look into my background, approach to development, and what
          drives my work as a developer.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-ink/10 mb-14" />

      {/* Main Content */}
      <div className="space-y-8 text-inkMuted leading-relaxed animate-fadeInUp">
        <p>
          Hello, I’m{" "}
          <span className="text-ink font-medium">Meet Gandhi</span>, a Full Stack
          Developer based in Ahmedabad, India. I enjoy building reliable,
          user-focused web applications that balance clean design with strong
          technical foundations.
        </p>

        <p>
          My journey began with frontend development, where I worked extensively
          with HTML, CSS, JavaScript, and React to create responsive and
          accessible user interfaces. Over time, I expanded into backend
          development using PHP, MySQL, and RESTful APIs, allowing me to
          understand and contribute across the entire product lifecycle.
        </p>

        <p>
          I’ve worked on real-world projects such as secure credential managers,
          finance tracking systems, and content-driven platforms. These projects
          strengthened my understanding of application architecture, data flow,
          authentication, and performance optimization.
        </p>

        <p>
          I strongly value clean architecture, readable code, and consistency.
          Rather than rushing features, I focus on building systems that are
          maintainable, scalable, and easy for other developers to understand.
        </p>

        <p>
          Outside of active development, I spend time refining UI details,
          learning modern tooling, and staying aligned with evolving best
          practices in web engineering. I believe good software is not just
          functional — it should feel thoughtful and dependable.
        </p>
      </div>

      {/* Contact Links – SAME AS HOME */}
      <div className="mt-16 flex flex-wrap gap-8 animate-fadeInUp text-sm">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/gandhimeet1/"
          target="_blank"
          rel="noopener noreferrer"
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
          LinkedIn
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:gandhimeet1104@gmail.com"
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
          Email
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default About;
