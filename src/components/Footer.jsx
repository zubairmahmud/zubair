import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">© 2025 Zubair Mahmud. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com/me.zubairmahmud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com/in/zubairmahmud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/me_zubairmahmud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/me_ZubairMahmud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
