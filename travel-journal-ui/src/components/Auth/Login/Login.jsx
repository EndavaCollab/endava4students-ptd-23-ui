import { useState, useContext } from "react";

import sha256 from "js-sha256";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";
import { API_URL } from "../../../config";

import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const hashedPassword = sha256(password);

    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: hashedPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAuthenticated(true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={submit} className="login-form">
      <div className="input-field">
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="input-field">
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button type="submit" className="submit-btn">
        Log In
      </button>
      <span onClick={() => navigate("/register")} className="register-link">
        You can create an account here{" "}
      </span>
    </form>
  );
};

export default Login;
