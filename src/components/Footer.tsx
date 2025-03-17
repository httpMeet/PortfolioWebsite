import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="section">
      <p>&copy; {new Date().getFullYear()} Gandhi Meet. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 