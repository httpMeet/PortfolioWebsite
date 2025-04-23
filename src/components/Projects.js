import React from 'react';


const Projects = () => {
  const projects = [
    {
      name: "Ahmedabad-Live",
      description: "A complaint management system",
      tech: "HTML, CSS, JavaScript, PHP",
      link: "https://github.com/httpMeet/Ahmedabad-Live"
    },
    {
      name:"Fin-Flow",
      description: "A finance management application",
      tech: "HTML, CSS, JavaScript, React",
      link: "https://github.com/httpMeet/FinFlow"
    },
    {
      name:"Recyclo-cart",
      description: "An e-commerce platform for recycling products",
      tech: "HTML, CSS, JavaScript, PHP",
      link: "https://github.com/httpMeet/recyclo-cart"
    },
    {
      name:"To-Do-List",
      description: "A simple to-do list application",
      tech: "HTML, CSS, JavaScript, React",
      link: "https://github.com/httpMeet/To-Do-List"
    },
    {
      name: "Portfolio Website",
      description: "My portfolio website with HTML, CSS & JS",
      tech: "HTML, CSS, JavaScript, React",
      link: "https://github.com/httpMeet/PortfolioWebsite"
    },
    {
      name: "Black-Jack Game",
      description: "A classic Black Jack card game implementation",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/httpMeet/Black-Jack-Game"
    },
    {
      name: "Link-Saver-Bookmark",
      description: "A tool to save and organize bookmarks",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/httpMeet/Link-Saver-Bookmark-"
    },
    {
      name:"Wedding-Invite-card-Generator",
      description: "A wedding invitation card generator",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/httpMeet/invite-card-generator"
    },
    {
      name: "Shopping-List-App",
      description: "An app to create and manage shopping lists",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/httpMeet/Shopping-List-App"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className='project-h2'>My Projects</h2>
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