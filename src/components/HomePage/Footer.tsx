import React from "react";
import { FaLinkedinIn, FaGithub, FaHackerrank, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const links = [
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/kunal-19m276/" },
    { Icon: FaGithub, url: "https://github.com/kunalk276" },
    { Icon: FaHackerrank, url: "https://www.hackerrank.com/profile/kunalkadam276201" },
    { Icon: FaInstagram, url: "https://www.instagram.com/" } // Add your Instagram link here
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-800 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hidden dark:block"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl font-bold text-purple-300 dark:text-purple-700">ExploreEase</h3>
            <p className="text-sm text-indigo-300 dark:text-indigo-700">Discover your perfect adventure</p>
          </div>
          <div className="flex space-x-4">
            {links.map(({ Icon, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer"
                className="text-indigo-300 dark:text-indigo-700 hover:text-white dark:hover:text-gray-900 transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-indigo-800 dark:border-indigo-300 text-center">
          <p className="text-xs text-indigo-300 dark:text-indigo-700">&copy; 2025 Kunal_Kadam All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
