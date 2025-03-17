import React from 'react';
import Skills from '../components/Skills';
import profilePic from '../assets/dp.jpg';

const Home = () => {
  return (
    <>
      <header className="hero section">
        <div className="hero-content">
          <div className="profile-pic">
            <img src={profilePic} alt="Meet Gandhi" />
          </div>
          <h1>Meet Gandhi</h1>
          <p className="title">Passionate Frontend Developer</p>
          <p className="subtitle">Crafting Beautiful & Interactive Web Experiences</p>
          <div className="hero-buttons">
            <a href="/about" className="btn">About Me</a>
            <a href="https://github.com/httpMeet" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/gandhimeet1/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
          </div>
        </div>
      </header>
      <section className="section">
        <Skills />
      </section>
    </>
  );
};

export default Home; 