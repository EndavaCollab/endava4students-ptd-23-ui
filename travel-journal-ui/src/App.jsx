import { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Content from "./components/Content/Content";
import login_bg from "./assets/login-bg.jpg"

function App() {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div style={!isAuthenticated ? {
            backgroundImage: `url(${login_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%"
        } : {}}>
            <div className="container">
                {isAuthenticated && <Navbar/>}

                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route element={<Content/>}>
                        <Route
                            path="/"
                            element={
                                isAuthenticated ? <Home/> : <Navigate to="/login"/>
                            }
                        />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
