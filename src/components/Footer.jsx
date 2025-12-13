import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-paperDark mt-32">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-sm text-inkMuted">
          © {new Date().getFullYear()} Meet Gandhi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
