import React from 'react';
import image1 from '../assets/1.jpg';
// Removed image2 import for simplified layout

const About = () => {
  return (
    <section className="about-me section">
      <h2>About Me</h2>

      <div className="about-me-content">
        <div className="image-container">
          {/* Changed class to image-large for a prominent visual */}
          <img className="image-large" src={image1} alt="Meet Gandhi coding" />
        </div>

        <div className="text-container">
          <p>Hello! I'm Meet Gandhi, a creative and detail-oriented frontend developer based in Ahmedabad. With a deep passion for crafting delightful user experiences, I specialize in translating design concepts into responsive and interactive web applications.</p>

          <p>My journey in web development began several years ago when I discovered the power of code to bring ideas to life. Over time, I have gained expertise in HTML, CSS, and JavaScript, and I love exploring new technologies to enhance my skill set.</p>

          <p>As a continuous learner, I stay updated with the latest trends in frontend development, and I am particularly enthusiastic about building user interfaces with React.js. The ability to create dynamic and efficient UIs excites me, and I am always ready for new challenges that push the boundaries of what I can achieve.</p>

          <p>Currently, I'm studying at Gujarat Technological University pursuing B.E. in Computer Science Engineering, where I continue to expand my knowledge and skills in software development.</p>

          <p>When I'm not coding, you can find me exploring the latest design trends, experimenting with new recipes in the kitchen, or enjoying a good book. I believe that diverse experiences outside of coding contribute to a well-rounded and creative approach to problem-solving.</p>

          <p>Let's collaborate and create something amazing together! Whether you have a project in mind or just want to connect, feel free to reach out. I'm always open to new opportunities and exciting collaborations.</p>

          {/* Simplified the embedded contact section */}
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