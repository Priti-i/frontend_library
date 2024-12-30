import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  return (
    <>
      <div className="bg-gray-800 text-white h-16 flex items-center justify-between px-6 shadow-lg">
        
        <div className="text-2xl font-semibold">
          <h3>Library</h3>
        </div>

        {/* Navigation Menu */}
        <ul className="list-none flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-400 transition-colors">
              User Login
            </Link>
          </li>
          <li>
            <Link
              to="/AdminLogin"
              className="hover:text-blue-400 transition-colors"
>
              Admin Login
            </Link>
          </li>
          <li>
            <Link
              to="/Userregister"
              className="hover:text-blue-400 transition-colors"
            >
              User Register
            </Link>
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default Header;
