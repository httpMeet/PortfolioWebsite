import React from 'react';
import htmlCert from '../assets/Html.png';
import cssCert from '../assets/css.png';
import jsCert from '../assets/Js.png';
import reactCert from '../assets/react.png';

const Certificates = () => {
  const certificates = [
    { 
      image: htmlCert, 
      pdfName: 'html.pdf', 
      title: 'HTML' 
    },
    { 
      image: cssCert, 
      pdfName: 'css.pdf', 
      title: 'CSS' 
    },
    { 
      image: jsCert, 
      pdfName: 'java script.pdf', 
      title: 'JavaScript' 
    },
    { 
      image: reactCert, 
      pdfName: 'ReactJs.pdf', 
      title: 'React' 
    },
  ];

  return (
    <section className="certificates section">
      <h2>Certificates</h2>
      {certificates.map((cert, index) => (
        <div className="certificate" key={index}>
          <img src={cert.image} alt={`${cert.title} Certificate`} />
          <p>
            <a href={`/assets/${cert.pdfName}`} download>
              Download Certificate Of {cert.title}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
};

export default Certificates; 