import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";

function App() {
  // const navigate = useNavigate();

  // useEffect(()=>{
  // if(localStorage.getItem("user") === null){
  // navigate("/")
  // }
  // })
  
  return (
  <>
  <Navbar />
  <Auth />
  </>
  );
}

export default App;
