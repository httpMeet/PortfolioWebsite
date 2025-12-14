import React, { useEffect, useState } from "react";

/* ---------- Images ---------- */
import htmlCert from "../assets/Html.png";
import cssCert from "../assets/css.png";
import jsCert from "../assets/Js.png";
import reactCert from "../assets/react.png";

import html from "../assets/html.pdf";
import css from "../assets/css.pdf";
import js from "../assets/java script.pdf";
import react from "../assets/ReactJs.pdf";

/* ---------- Data ---------- */
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
    <section className="max-w-5xl mx-auto px-6 pt-28 pb-28">
      <h2 className="font-serif text-3xl mb-14">Certificates</h2>

      {/* GRID */}
      <div className="grid gap-14 sm:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <ShimmerCertificate key={i} />
            ))
          : certificates.map((cert, index) => (
              <article
                key={index}
                className="group opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* IMAGE */}
                <div className="w-full aspect-[4/3] overflow-hidden border border-ink/30 bg-paper">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="pt-5 flex items-center justify-between">
                  <span className="font-medium text-ink">
                    {cert.title}
                  </span>

                  {/* BUTTON */}
                  <a
                    href={cert.pdf}
                    download
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      text-sm
                      border border-ink/30
                      bg-paper
                      transition-all duration-300 ease-out
                      hover:bg-ink hover:text-paper
                      hover:border-ink
                      hover:-translate-y-[2px]
                      hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                      group
                    "
                  >
                    Download
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

/* ---------- SHIMMER ---------- */
const ShimmerCertificate = () => (
  <div className="animate-pulse">
    <div className="w-full aspect-[4/3] bg-ink/15 mb-5" />
    <div className="flex justify-between items-center">
      <div className="h-4 w-24 bg-ink/15" />
      <div className="h-8 w-28 bg-ink/15" />
    </div>
  </div>
);

export default Certificates;
