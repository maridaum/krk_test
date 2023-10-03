import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/images/logo.png";

import customFetch from "../utils/customFetch";
import MobileNav from "./MobileNav";

const Navbar = ({ user, updateUser }) => {
  const navigate = useNavigate();

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    updateUser(null);
    setMobileMenuActive(false);
  };

  const toggleMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={logo} />
      </Link>

      <div
        className={`toggle ${mobileMenuActive ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      <div className="nav-links">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/why-feed-raw">
          Why Feed Raw?
        </NavLink>
        <NavLink className="nav-link" to="/calculator">
          Calculator
        </NavLink>
        <NavLink className="nav-link" to="/guidelines">
          Guidelines
        </NavLink>
      </div>

      {!user ? (
        <div className="auth-links">
          <Link to="/login" className=" auth-link">
            Login
          </Link>
          <Link to="/signup" className=" auth-link btn">
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/dashboard" className="auth-link">
            Your Pets
          </Link>
          <button type="button" className="auth-link btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}

      <MobileNav
        user={user}
        logoutUser={logoutUser}
        toggleMenu={toggleMenu}
        mobileMenuActive={mobileMenuActive}
      />
    </Wrapper>
  );
};

export default Navbar;
