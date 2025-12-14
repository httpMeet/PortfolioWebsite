import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 mt-32">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
        {/* Left */}
        <p className="text-inkMuted">
          © {new Date().getFullYear()} Meet Gandhi. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="https://github.com/httpMeet"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent hover:border-accent transition text-inkMuted hover:text-ink"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gandhimeet1/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent hover:border-accent transition text-inkMuted hover:text-ink"
          >
            LinkedIn
          </a>

          <a
            href="mailto:gandhimeet1104@gmail.com"
            className="border-b border-transparent hover:border-accent transition text-inkMuted hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
