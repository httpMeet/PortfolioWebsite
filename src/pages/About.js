import React from 'react';
import image1 from '../assets/1.jpg';

const About = () => {
  return (
    <section className="about-me section">
      <h2>About Me</h2>

      <div className="about-me-content">
        <div className="image-container">
          <img className="image-large" src={image1} alt="Meet Gandhi coding" />
        </div>

        <div className="text-container">
          <p>
            Hello! I'm Meet Gandhi, a passionate and detail-oriented Full Stack Developer based in Ahmedabad. I specialize in building complete, scalable, and high-performance web applications by seamlessly integrating modern frontend interfaces with powerful backend systems.
          </p>

          <p>
            My development journey started with frontend technologies where I mastered HTML, CSS, JavaScript, and React.js to create responsive and engaging user experiences. Over time, I expanded my expertise into backend development, working with PHP, MySQL, and RESTful APIs to develop secure and efficient server-side solutions.
          </p>

          <p>
            I enjoy working across the entire development lifecycle — from designing intuitive UI components to implementing robust backend logic and database architectures. This full stack approach allows me to deliver end-to-end solutions that are both visually appealing and technically strong.
          </p>

          <p>
            Currently, I am pursuing my B.E. in Computer Science Engineering at Gujarat Technological University, where I continuously enhance my technical knowledge and problem-solving abilities through real-world projects and hands-on development.
          </p>

          <p>
            Beyond coding, I love exploring new technologies, experimenting with UI designs, and keeping myself updated with evolving development trends. I strongly believe that learning never stops in tech, and I’m always excited to take on new challenges that push my creativity and technical limits.
          </p>

          <p>
            Let’s collaborate and build impactful digital experiences together! Whether you need a complete web solution or want to discuss innovative ideas, feel free to connect with me.
          </p>

          <div className="contact-buttons contact-about-page">
            <a href="https://www.linkedin.com/in/gandhimeet1/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            <a href="https://github.com/httpMeet" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="mailto:gandhimeet1104@gmail.com" className="btn">Gmail</a>
            <a href="tel:+916351398110" className="btn">Contact Number</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
