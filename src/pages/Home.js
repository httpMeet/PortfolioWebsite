import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import profilePic from '../assets/dp.jpg';
// Asset imports removed

const Home = () => {
  // Titles to display in the sequence
  const titles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer' 
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState(titles[0]);

  // Logic to rotate the title index every 3 seconds
  useEffect(() => {
    // Set the first title immediately to ensure content loads
    setDisplayedTitle(titles[0]);

    const interval = setInterval(() => {
      setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Update the displayed text whenever the index changes
  useEffect(() => {
      setDisplayedTitle(titles[currentTitleIndex]);
  }, [currentTitleIndex]);

  return (
    <>
      <header className="hero section">
        <div className="hero-content">
          <div className="profile-pic">
            <img src={profilePic} alt="Meet Gandhi" />
          </div>
          <h1>Meet Gandhi</h1>
          {/* UPDATED: Dynamic Title with a key for smooth animation re-render */}
          <p className="title animated-title" key={currentTitleIndex}>
            Passionate {displayedTitle}
          </p>
          <p className="subtitle">Crafting Beautiful & Interactive Web Experiences</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn">About Me</Link>
            <a href="https://github.com/httpMeet" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/gandhimeet1/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            <a href="/assets/MeetGandhiResume.pdf" download className='btn'>Download Resume</a>
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