import React from 'react';
import libsystemImage from '../asset/libsystem.jpg'; // Ensure the path is correct

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full h-full relative">
        <img
          src={libsystemImage}
          alt="Library System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to the Library 
          </h1>
          <p className="text-lg text-gray-300">
          Manage your books, borrow with ease, and discover a world of knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
