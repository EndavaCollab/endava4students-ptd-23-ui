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

    fetch(`${API_URL}/api/auth/login`, {
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
      <div className="flex-wrapper">
          <div className="flex-row">
              <div className="flex-item">
                  <div className="login-description">
                          <h3>Welcome to</h3>
                          <img className="logo" src = "src/assets/TravelJournal.svg"/>
                          <ul className="description-list">
                              <li>Plan your trips easily.</li>
                              <li>Have your notes in one place.</li>
                              <li>Log your trip expenses.</li>
                          </ul>

                  </div>
              </div>
              <div className="flex-item">
                  <form onSubmit={submit} className="login-form">
                      <div className="login-info">
                          <h3>Log Into Your Account</h3>
                      </div>
                      <div className="input-field">
                          <label>Email</label>
                          <input type="email" placeholder="john.doe@domain.com"
                                 onChange={(e) => setEmail(e.target.value)}/>
                      </div>

                      <div className="input-field">
                          <label>Password</label>
                          <input type="password" placeholder="Type in your password"
                                 onChange={(e) => setPassword(e.target.value)}/>
                      </div>

                      <button type="submit" className="submit-btn">
                          Log In
                      </button>
                      <span onClick={() => navigate("/register")} className="register-link">
          <button>You can create an account here{" "}</button>
      </span>
                  </form>
              </div>

          </div>

      </div>

  );
};

export default Login;
