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
        formData,
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
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitStatus("error");
      });
  };

  return (
    <section className="pt-36 pb-32">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* Header */}
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-4xl">Contact</h1>
          <p className="text-inkMuted leading-relaxed">
            If you have a project, an opportunity, or just want to talk about
            building meaningful software, feel free to reach out. I’m always open
            to thoughtful conversations.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* Left Info */}
          <div className="space-y-12 text-sm">
            <div>
              <p className="text-ink font-medium mb-2">Email</p>
              <p className="text-inkMuted">gandhimeet1104@gmail.com</p>
              <p className="text-inkMuted">gandhimeet144@gmail.com</p>
            </div>

            <div>
              <p className="text-ink font-medium mb-2">Phone</p>
              <p className="text-inkMuted">+91 63513 98110</p>
            </div>

            <div>
              <p className="text-ink font-medium mb-2">Location</p>
              <p className="text-inkMuted">Ahmedabad, Gujarat, India</p>
            </div>

            <div className="flex gap-8 pt-4">
              <a
                href="https://github.com/httpMeet"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-paperDark hover:border-accent transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gandhimeet1/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-paperDark hover:border-accent transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="space-y-10">
            {/* Section label */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-inkMuted">
                Send a message
              </p>
              <div className="border-t border-paperDark" />
            </div>

            {/* Form Card */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="border border-paperDark bg-paperDark/50 p-14 space-y-10"
            >
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-4 bg-paper border border-paperDark focus:outline-none focus:border-accent"
              />

              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full px-4 py-4 bg-paper border border-paperDark focus:outline-none focus:border-accent"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (optional)"
                className="w-full px-4 py-4 bg-paper border border-paperDark focus:outline-none focus:border-accent"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message"
                className="w-full px-4 py-4 bg-paper border border-paperDark focus:outline-none focus:border-accent resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center border border-paperDark px-10 py-4 text-sm hover:border-accent transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send message"}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
