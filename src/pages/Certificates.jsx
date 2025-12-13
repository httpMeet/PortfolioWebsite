import React from "react";
import htmlCert from "../assets/Html.png";
import cssCert from "../assets/css.png";
import jsCert from "../assets/Js.png";
import reactCert from "../assets/react.png";

import html from "../assets/html.pdf";
import css from "../assets/css.pdf";
import js from "../assets/java script.pdf";
import react from "../assets/ReactJs.pdf";

const Certificates = () => {
  const certificates = [
    {
      image: htmlCert,
      pdf: html,
      title: "HTML",
    },
    {
      image: cssCert,
      pdf: css,
      title: "CSS",
    },
    {
      image: jsCert,
      pdf: js,
      title: "JavaScript",
    },
    {
      image: reactCert,
      pdf: react,
      title: "React",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-28">
      <h2 className="font-serif text-3xl mb-16">Certificates</h2>

      <div className="grid sm:grid-cols-2 gap-12">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group border border-paperDark bg-paper p-6 rounded-lg transition hover:-translate-y-1 hover:shadow-sm"
          >
            <div className="bg-paperDark p-3 rounded-md mb-6">
              <img
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="w-full rounded-sm"
              />
            </div>

            <p className="text-sm flex items-center justify-between">
              <span className="font-medium text-ink">
                {cert.title}
              </span>

              <a
                href={cert.pdf}
                download
                className="border-b border-paperDark group-hover:border-accent transition text-inkMuted"
              >
                Download PDF
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
