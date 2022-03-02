import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
            <Link to="/about" className="nav-link" aria-current="page">
              About
            </Link>
            <Link to="/login" className="nav-link" aria-current="page">
              Login
            </Link> */}
            <NavLink
              exact="true"
              to="/"
              className={`${(navData) =>
                navData.isActive ? "active" : ""} nav-link`}
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              exact="true"
              to="/about"
              className={`${(navData) =>
                navData.isActive ? "active" : ""} nav-link`}
              aria-current="page"
            >
              About
            </NavLink>
            <NavLink
              exact="true"
              to="/login"
              className={`${(navData) =>
                navData.isActive ? "active" : ""} nav-link`}
              aria-current="page"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
