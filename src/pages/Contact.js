import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .send(
        "service_54721b4",       // ✅ Your Service ID
        "template_9iw524j",      // ✅ Your Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message
        },
        "6Q1Shw2fMbxaPevQr"        // ❗ Replace with EmailJS Public Key
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");

        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: ""
        });

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        setSubmitStatus("error");
      });
  };

  return (
    <section className="contact-page section">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>gandhimeet1104@gmail.com</p>
                <p>gandhimeet144@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91 6351398110</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/httpMeet"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gandhimeet1/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Me a Message</h3>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <div className="success-message">
                Your message has been sent successfully! I’ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="error-message">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
