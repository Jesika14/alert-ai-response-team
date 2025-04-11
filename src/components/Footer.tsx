
import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-poppins font-bold mb-4">Real-Time Disaster Detection</h2>
          
          <div className="flex space-x-4 mb-6">
            <a href="https://github.com" className="text-white hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="mb-2 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-alert-red" /> by the Lovable AI team
            </p>
            <p className="text-gray-medium/80">
              © {currentYear} Real-Time Disaster Detection. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
