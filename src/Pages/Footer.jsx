import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-6 relative bottom-0 -ml-10 -mr-10 left-0">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Zyra Air Perfumes</h2>
        <p className="mt-2 text-sm">Experience the essence of elegance and luxury.</p>
        <p className="mt-2 italic">"Unleash your inner fragrance."</p>

        <div className="mt-4 flex justify-center space-x-6">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a 
            href="https://wa.me/yourwhatsappphonenumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a 
            href="mailto:your-email@example.com" 
            className="text-slate-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-4">
          <p className="text-xs">© {new Date().getFullYear()} Zyra Perfumes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
