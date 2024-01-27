import React, { useEffect , useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext";

import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";

function App() {
  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <Router>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Auth />} />
      <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
    </Routes>
  </Router>
  );
}

export default App;
