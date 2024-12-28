import { Link } from "react-router-dom";
import Ract from "react";
const AdminPanel=()=>{
    return(<>
    <div className="flex flex-col items-start p-6">
  <h1 className="h-20 bg-slate-700 w-64 text-white text-center flex items-center justify-center rounded-md mb-4 shadow-lg">
    Admin Dashboard
  </h1>
  <ul className="w-64 bg-slate-600 text-white rounded-md p-4 shadow-lg space-y-2">
    <li className="hover:bg-slate-500 rounded-md px-2 py-1">List of Books</li>
    <li className="hover:bg-slate-500 rounded-md px-2 py-1">All Users</li>
    <li className="hover:bg-slate-500 rounded-md px-2 py-1">Add Books</li>
  </ul>
</div>
</>);

}
export default AdminPanel;