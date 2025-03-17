import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "Ahmedabad-Live",
      description: "A complaint management system",
      tech: "PHP",
      link: "https://github.com/httpMeet/Ahmedabad-Live"
    },
    {
      name: "Portfolio Website",
      description: "My portfolio website with HTML, CSS & JS",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/httpMeet/PortfolioWebsite"
    },
    {
      name: "Black-Jack Game",
      description: "A classic Black Jack card game implementation",
      tech: "JavaScript",
      link: "https://github.com/httpMeet/Black-Jack-Game"
    },
    {
      name: "Link-Saver-Bookmark",
      description: "A tool to save and organize bookmarks",
      tech: "JavaScript",
      link: "https://github.com/httpMeet/Link-Saver-Bookmark-"
    },
    {
      name: "Passenger-Counter",
      description: "A simple passenger counting application",
      tech: "JavaScript, CSS",
      link: "https://github.com/httpMeet/Passanger-Counter-"
    },
    {
      name: "Shopping-List-App",
      description: "An app to create and manage shopping lists",
      tech: "JavaScript, CSS",
      link: "https://github.com/httpMeet/Shopping-List-App"
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">Tech: {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn project-btn">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 