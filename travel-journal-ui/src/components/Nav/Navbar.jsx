import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/Logo.svg";
import logoutIcon from "../../assets/Button_logout.svg";

import "./index.css";
import Home from "../Home/Home.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  return (
    <nav className="navigation">
        <Link to={Home}> <img src={logo} alt="logo" className="logo" /> </Link>
      <button
        type="button"
        onClick={() => {
          setIsAuthenticated(false);
          navigate("/login");
        }}
        className="logout"
      >
        <img src={logoutIcon} alt="logout" />
      </button>
    </nav>
  );
};

export default Navbar;
