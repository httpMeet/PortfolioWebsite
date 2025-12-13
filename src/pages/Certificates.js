import React from 'react';
import htmlCert from '../assets/Html.png';
import cssCert from '../assets/css.png';
import jsCert from '../assets/Js.png';
import reactCert from '../assets/react.png';
import html from '../assets/html.pdf';
import css from '../assets/css.pdf';
import js from '../assets/java script.pdf';
import react from '../assets/ReactJs.pdf';

const Certificates = () => {
  const certificates = [
    { 
      image: htmlCert, 
      pdfName: { html }, 
      title: 'HTML' 
    },
    { 
      image: cssCert, 
      pdfName: { css }, 
      title: 'CSS' 
    },
    { 
      image: jsCert, 
      pdfName: { js }, 
      title: 'JavaScript' 
    },
    { 
      image: reactCert, 
      pdfName: { react }, 
      title: 'React' 
    },
  ];

  return (
    <section className="certificates section">
      <h2>Certificates</h2>
      {/* ADDED: New grid container */}
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate" key={index}>
            <img src={cert.image} alt={`${cert.title} Certificate`} />
            <p>
              <a href={Object.values(cert.pdfName)[0]} download>
                Download Certificate Of {cert.title}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;