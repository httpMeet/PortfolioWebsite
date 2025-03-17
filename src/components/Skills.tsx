import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 90, color: '#e34c26' },
    { name: 'CSS', level: 85, color: '#264de4' },
    { name: 'JavaScript', level: 80, color: '#f0db4f' },
    { name: 'React', level: 75, color: '#61dafb' },
    { name: 'TypeScript', level: 70, color: '#007acc' },
    { name: 'Git', level: 75, color: '#f34f29' },
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
                  backgroundColor: skill.color,
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