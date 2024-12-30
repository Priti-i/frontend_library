import React, { useState } from 'react';
import axios from 'axios';

const AdminBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        if (!title || !author || !status || !publishedYear) {
            setMessage("All fields are required");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/books', {
                title,
                author,
                status,
                publishedYear: Number(publishedYear), // Ensure it's sent as a number
            });
            setMessage(response.data.message || "Book added successfully");
            setTitle('');
            setAuthor('');
            setStatus('');
            setPublishedYear('');
        } catch (error) {
            setMessage(error.response?.data?.message || "Error adding book");
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a New Book</h2>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4"
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Checked Out">Checked Out</option>
                </select>
                <input
                    type="number"
                    placeholder="Published Year"
                    value={publishedYear}
                    onChange={(e) => setPublishedYear(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Add Book
                </button>
            </form>
            {message && (
                <p
                    className={`mt-4 text-center ${
                        message.includes("Error") ? "text-red-500" : "text-green-500"
                    }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default AdminBookForm;
