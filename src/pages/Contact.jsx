import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .send(
        "service_54721b4",
        "template_9iw524j",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        },
        "6Q1Shw2fMbxaPevQr"
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitStatus("error");
      });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pt-28 pb-28">
      {/* HEADER */}
      <div className="mb-16 opacity-0 animate-fadeInUp">
        <h2 className="font-serif text-3xl mb-4">Contact</h2>
        <p className="text-inkMuted max-w-xl leading-relaxed">
          Have a project in mind, an opportunity, or just want to say hello? I’m
          always open to meaningful conversations.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-20">
        {/* LEFT INFO */}
        <div className="space-y-10 text-sm opacity-0 animate-fadeInUp">
          <div>
            <p className="text-ink font-medium mb-1">Email</p>
            <p className="text-inkMuted">gandhimeet1104@gmail.com</p>
            <p className="text-inkMuted">gandhimeet144@gmail.com</p>
          </div>

          <div>
            <p className="text-ink font-medium mb-1">Phone</p>
            <p className="text-inkMuted">+91 63513 98110</p>
          </div>

          <div>
            <p className="text-ink font-medium mb-1">Location</p>
            <p className="text-inkMuted">Ahmedabad, Gujarat, India</p>
          </div>

          <div className="flex flex-wrap gap-6 pt-6">
            <a
              href="https://github.com/httpMeet"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center gap-2
      px-5 py-2
      border border-ink/30
      text-sm
      bg-paper
      transition-all duration-300 ease-out
      hover:bg-ink hover:text-paper
      hover:border-ink
      hover:-translate-y-[2px]
      hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
      group
    "
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/gandhimeet1/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center gap-2
      px-5 py-2
      border border-ink/30
      text-sm
      bg-paper
      transition-all duration-300 ease-out
      hover:bg-ink hover:text-paper
      hover:border-ink
      hover:-translate-y-[2px]
      hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
      group
    "
            >
              LinkedIn
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8 opacity-0 animate-fadeInUp"
        >
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 border border-ink/30 bg-paper focus:outline-none focus:border-accent transition"
          />

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="w-full px-4 py-3 border border-ink/30 bg-paper focus:outline-none focus:border-accent transition"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 border border-ink/30 bg-paper focus:outline-none focus:border-accent transition"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your message"
            className="w-full px-4 py-3 border border-ink/30 bg-paper focus:outline-none focus:border-accent transition resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              inline-flex items-center gap-3
              px-6 py-3
              border border-ink/40
              bg-paper
              text-sm
              transition-all duration-300 ease-out
              hover:bg-ink hover:text-paper
              hover:border-ink
              hover:-translate-y-[2px]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              disabled:opacity-50
              group
            "
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {submitStatus === "success" && (
            <p className="text-sm text-green-700">
              Message sent successfully. I’ll get back to you soon.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
