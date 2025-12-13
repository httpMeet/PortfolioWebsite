import React from "react";

const Skills = () => {
  return (
    <section className="pt-20 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-16">Skills</h2>

        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-xl mb-4">Frontend</h3>
            <p className="text-inkMuted leading-relaxed">
              HTML · CSS · JavaScript · React · TypeScript
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">Backend</h3>
            <p className="text-inkMuted leading-relaxed">
              PHP · MySQL
            </p>
          </div>

          <div>
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
