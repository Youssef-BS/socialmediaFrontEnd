import React from "react";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <Auth />,
      },
      {
        path: "/home",
        element: <Home />,
      },

    ])}>
      <div className="App">
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </div>
    </RouterProvider>
  );
}

export default App;
