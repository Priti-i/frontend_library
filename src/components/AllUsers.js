import { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
    const [users, setUsers] = useState([]); // State to store user data
    const [error, setError] = useState(""); // State to handle errors

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/register");
                setUsers(response.data); // Save the fetched users to state
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Failed to fetch users.");
            }
        };

        fetchUsers(); // Call the function inside useEffect
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Users</h1>
            
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            
            <ul >
                {users.map((user) => (
                    <li key={user._id} className="p-4 m-2 border rounded shadow bg-orange-200">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllUsers;
