import { Link, NavLink } from "react-router-dom";

const MobileNav = ({ user, logoutUser, mobileMenuActive, toggleMenu }) => {
  return (
    <div className={`mobile-nav ${mobileMenuActive ? "active" : ""}`}>
      <NavLink className="mobile-link" to="/about" onClick={toggleMenu}>
        About
      </NavLink>
      <NavLink className="mobile-link" to="/why-feed-raw" onClick={toggleMenu}>
        Why Feed Raw?
      </NavLink>
      <NavLink className="mobile-link" to="/calculator" onClick={toggleMenu}>
        Calculator
      </NavLink>
      <NavLink className="mobile-link" to="/guidelines" onClick={toggleMenu}>
        Guidelines
      </NavLink>

      {!user ? (
        <>
          <Link to="/login" className="mobile-link" onClick={toggleMenu}>
            Login
          </Link>
          <Link to="/signup" className="mobile-link btn" onClick={toggleMenu}>
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link to="/dashboard" className="mobile-link" onClick={toggleMenu}>
            Your Pets
          </Link>
          <button
            type="button"
            className="mobile-link btn"
            onClick={logoutUser}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default MobileNav;
