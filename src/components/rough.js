import {useState,useEffect} from "react";
import axios from "axios";
import { Outlet, Link } from 'react-router-dom';
import React from "react";
const UserBookList=()=>{
    const [books,setBook]=useState([]);
    const[error,setError]=useState();
    const[search,setSearch]=useState([]);
    const[filterData,setFilterData]=useState([]);
    useEffect(()=>{
      const fetchbook=async()=>{
        try{
          const response=await axios.get("http://localhost:3000/books");
          console.log("Books fetched:", response.data);
          setBook(response.data);
          setFilterData(response.data);
  
        }
        catch(error){
          console.error("Error fetching books:", error);
          setError("Failed to fetch books. Please try again later.");
        }
        };
      fetchbook();
    },[]);  

    const searchHandle=()=>{
        const filterbookdata=books.filter((book)=>{
            (book.title || "").toLowerCase().include(search.toLowerCase());
        })
        setFilterData(filterbookdata);
    }
  
    
  return(
      <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 w-full">
      <div>
      <input  className="w-50 p-2 bg-yellow-200 rounded-md" 
       type="text" 
       placeholder="Type here"
       value={search} 
       onChange={(e)=>{setSearch(e.target.value)}}
       />
      <input className="m-4 bg-green-200 p-2 rounded-md border border-green-500" 
      type="button" 
      value="Search"
      onClick={searchHandle}
      />
      </div>
    <h1 className="text-2xl font-bold mb-4">Books List</h1>
    {error && <p className="text-red-500">{error}</p>}
    {filterData.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterData.map((book) => (
          <div
            key={book._id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Status: {book.status}</p>
            <p className="text-gray-700">Published: {book.publishedYear}</p>
            <button className="w-max bg-green-600 p-2 rounded-lg border m-6" >Issue </button>
            
          </div>
        ))}
        
      </div>
    ) : (
      !error && <p>Loading books...</p>
    )}
  </div>
  </>
);
}
        export default UserBookList;









.........................................
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
