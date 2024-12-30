import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const UserBookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]); // For displaying filtered results
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [error, setError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        console.log("Books fetched:", response.data);
        setBooks(response.data);
        setFilteredBooks(response.data); // Initialize filtered books
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 w-full">
        <div>
          <input
            className="w-50 p-2 bg-yellow-200 rounded-md"
            type="text"
            placeholder="Type book title here"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="m-4 bg-green-200 p-2 rounded-md border border-green-500"
            onClick={handleSearch} 
          >
            Search
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Books List</h1>
        {error && <p className="text-red-500">{error}</p>}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
              >
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-700">Author: {book.author}</p>
                <p className="text-gray-700">Status: {book.status}</p>
                <p className="text-gray-700">Published: {book.publishedYear}</p>
                <button className="w-max bg-green-600 p-2 rounded-lg border m-6">
                  Issue
                </button>
              </div>
            ))}
          </div>
        ) : (
          !error && <p>No books found.</p>
        )}
      </div>
    </>
  );
};

export default UserBookList;
