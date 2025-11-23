import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'Git', level: 75 },
  ];

  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar" 
                style={{
                  width: `${skill.level}%`,
                  // Individual color removed, using CSS gradient
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;