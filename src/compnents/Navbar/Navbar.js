import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#f7fbf6" }}>
        <div className="container-fluid">
          {/* Brand / Logo */}
          <NavLink className="navbar-brand fw-bold fs-4" to="/" style={{ color: "#14532d" }}>
            Bawat Industries
          </NavLink>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapsed ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div
            className={`collapse navbar-collapse${collapsed ? "" : " show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-md-0" style={{ gap: "1rem" }}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product-list">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/plants">
                  Plants
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  <span role="img" aria-label="user-icon"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      
    </>
  );
};

export default Navbar;
