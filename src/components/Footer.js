import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="footer-content max-w-6xl mx-auto text-center space-y-4">
        {/* Copyright Section */}
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Library Management System. All Rights Reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-2 md:space-y-0">
          <p>
            Email: <a href="mailto:pritiy049@gmail.com" className="text-blue-400">pritiy049@gmail.com</a>
          </p>
          <p>Phone: +123-456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
