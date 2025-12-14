import React from "react";

const Skills = () => {
  return (
    <section className="pt-5 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-16 opacity-0 animate-fadeInUp">
          Skills
        </h2>

        <div className="space-y-12">
          {/* Frontend */}
          <div
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="font-serif text-xl mb-4">Frontend</h3>
            <p className="text-inkMuted leading-relaxed">
              HTML · CSS · JavaScript · React · TypeScript
            </p>
          </div>

          {/* Backend */}
          <div
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "220ms" }}
          >
            <h3 className="font-serif text-xl mb-4">Backend</h3>
            <p className="text-inkMuted leading-relaxed">
              PHP · MySQL
            </p>
          </div>

          {/* Tools */}
          <div
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "340ms" }}
          >
            <h3 className="font-serif text-xl mb-4">Tools & Workflow</h3>
            <p className="text-inkMuted leading-relaxed">
              Git · GitHub · REST APIs · EmailJS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
