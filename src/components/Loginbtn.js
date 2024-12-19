import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Loginbtn = () => {
  return (
    <>
        <button><Link to="/" className="px-2">Home</Link></button>
   
       <button><Link to="/login" className="px-2">User Login</Link></button>
       <button><Link to="/admin_login" className="px-2">Admin Login</Link></button>
       <button><Link to="/Userregister" className="px-2">User Register</Link></button>
     </>
  );
};

export default Loginbtn;
