import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="flex flex-col items-start">
        <h1 className="h-20 bg-slate-700 w-64 text-white text-center flex items-center justify-center shadow-lg">
          Admin Dashboard
        </h1>
        <ul className="w-64 bg-slate-600 text-white space-y-2 h-screen p-4">
          <li className="hover:bg-slate-500 rounded-md px-2 py-1">
            <Link to="BookList">List of Books</Link>
          </li>
          <li className="hover:bg-slate-500 rounded-md px-2 py-1">
            <Link to="AllUsers">All Users</Link>
          </li>
          <li className="hover:bg-slate-500 rounded-md px-2 py-1">
            <Link to="AddBook">Add Books</Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
