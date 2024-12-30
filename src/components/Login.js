import React, { useState } from "react";
import axios from "axios"; 
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(""); // Update field to email
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [success, setSuccess] = useState(""); // For success messages
  const Navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setError(""); // Clear previous error
    setSuccess(""); // Clear previous success message

    try {
     
      const response = await axios.post("http://localhost:3000/register/login", {
        email,
        password,
      });

      // If the request is successful
      if (response.status === 200) {
        setSuccess(response.data.message); // Display success message
        console.log("User Info:", response.data.user); // Log user info
        Navigate('/UserBookList');
      }
    } catch (err) {
      
      if (err.response) {
        
        setError(err.response.data.message || "An error occurred");
      } else {
        
        setError("Something went wrong. Please try again later.");// No response or network error
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="email" // Updated to email input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
