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
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Status</option>
                    <option value="Available">Available</option>
                    <option value="Checked Out">Checked Out</option>
                </select>
                <input
                    type="number"
                    placeholder="Published Year"
                    value={publishedYear}
                    onChange={(e) => setPublishedYear(e.target.value)}
                    required
                />
                <button type="submit">Add Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminBookForm;
