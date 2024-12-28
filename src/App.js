import './App.css';
//import Login from './components/Login';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Userregister from './components/Userregister';
import Home from './components/Home';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminPanel from './components/AdminPanel';
import AddBook from './components/AddBook';



function App() {
  return (
   <>
  <Header/>
  <Outlet/>
  <Footer/>
   </>
  );
}
  export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Main layout for the app
    children: [
    {
        path: "/",
        element: <Home/> 
      },
      {
        path: "/userregister",
        element: <Userregister /> // User registration page
      },
      {
        path: "/login",
        element: <Login/> 
      },
      {
      path:"/AdminLogin",
      element:<AdminLogin/>
      },
      {
      path:"/AdminPanel",
      element:<AdminPanel/>,
     
      }
    ]
  }
]);

export default App;