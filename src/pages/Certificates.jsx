import React, { useEffect, useState } from "react";

import htmlCert from "../assets/Html.png";
import cssCert from "../assets/css.png";
import jsCert from "../assets/Js.png";
import reactCert from "../assets/react.png";

import html from "../assets/html.pdf";
import css from "../assets/css.pdf";
import js from "../assets/java script.pdf";
import react from "../assets/ReactJs.pdf";

const certificates = [
  { image: htmlCert, pdf: html, title: "HTML" },
  { image: cssCert, pdf: css, title: "CSS" },
  { image: jsCert, pdf: js, title: "JavaScript" },
  { image: reactCert, pdf: react, title: "React" },
];

const Certificates = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <h2 className="font-serif text-3xl mb-12">Certificates</h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-10">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : certificates.map((cert, index) => (
              <div
                key={index}
                className="border border-paperDark bg-paper p-6"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full mb-6 border border-paperDark"
                />

                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">
                    {cert.title}
                  </span>

                  <a
                    href={cert.pdf}
                    download
                    className="border-b border-paperDark hover:border-accent transition text-inkMuted"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

/* ---------- Shimmer Card ---------- */
const ShimmerCard = () => {
  return (
    <div className="border border-paperDark p-6 animate-pulse">
      <div className="h-48 bg-paperDark/40 mb-6" />
      <div className="flex justify-between items-center">
        <div className="h-4 w-24 bg-paperDark/40" />
        <div className="h-4 w-20 bg-paperDark/40" />
      </div>
    </div>
  );
};

export default Certificates;
