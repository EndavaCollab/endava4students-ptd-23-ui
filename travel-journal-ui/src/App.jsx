import { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Content from "./components/Content/Content";
import TravelDetails from "./components/TravelDetails/TravelDetails.jsx";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/travel-details" element={<TravelDetails />}></Route>
        <Route element={<Content />}>
            <Route
                path="/"
                element={
                    isAuthenticated ? <Home /> : <Navigate to="/login" />
                }
            />
        </Route>
      </Routes>
    </>
  );
}

export default App;
