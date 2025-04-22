import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/about" className="btn">About Me</Link>
            <a href="https://github.com/httpMeet" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/gandhimeet1/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            <a href="/assets/MeetGandhiResume.pdf" className="btn" download>
              Download Resume 
            </a>
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