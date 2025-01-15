import {useState,useEffect} from "react";
import axios from "axios";
import { Outlet, Link } from 'react-router-dom';
import React from "react";
const BookList=()=>{
      const [books,setBook]=useState([]);
      const[error,setError]=useState();
      useEffect(()=>{
        const fetchbook=async()=>{
          try{
            const response=await axios.get("http://localhost:3000/books");
            console.log("Books fetched:", response.data);
            setBook(response.data);
          }
          catch(error){
            console.error("Error fetching books:", error);
            setError("Failed to fetch books. Please try again later.");
          }
          };
        fetchbook();
      },[]);  
    
      const deleteBook = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/books/${id}`);
          setBook(books.filter((book) => book._id !== id)); // Update state to remove the deleted book
          alert("Book deleted successfully!");
        } catch (error) {
          console.error("Error deleting book:", error);
          setError("Failed to delete book. Please try again later.");
        }
      };
    return(
        <>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      {error && <p className="text-red-500">{error}</p>}
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-700">Author: {book.status}</p>
              <p className="text-gray-700">Published: {book.publishedYear}</p>
              <button className="w-max bg-green-600 p-2 rounded-lg border m-6" >Update</button>
              <button className="w-max bg-red-600 p-2 rounded-lg border" onClick={()=>deleteBook(book._id)}>Delete</button>
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
        export default BookList;