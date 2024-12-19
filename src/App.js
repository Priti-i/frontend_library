import './App.css';
//import Login from './components/Login';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Userregister from './components/Userregister';
import Loginbtn from './components/Loginbtn'



function App() {
  return (
   <>
  <Loginbtn/>
  <Outlet/>
  
   </>
  );
}
  export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout for the app
    
    children: [
      {
        path: "/userregister",
        element: <Userregister /> // User registration page
      },
      
    ]
  }
]);

export default App;
