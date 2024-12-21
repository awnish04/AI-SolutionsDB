import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinkStyles = (isActive) => ({
    // fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#40c9ff" : "#000",
  });

  return (
    <section className="menu menu2 cid-uuGhZ4YMwj">
      <nav className="navbar navbar-dropdown bg-body-tertiary navbar-fixed-top navbar-expand-lg bg-white opacity-100 justify-between">
        <div className="mob_nav container mt-0  ">
          <div>
            <a href="/">
              <div class="flex items-center flex-shrink-0 text-black mr-6">
                <img src={logo} alt="logo" className="max-h-20 max-w-20 p-4" />
                <span class="font-semibold text-xl tracking-tight ">
                  AI Solution
                </span>
              </div>
            </a>
          </div>

          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown"
                data-app-modern-menu="true"
              >
                {["/services", "/gallery", "/product"].map((path) => (
                  <li key={path} className="nav-item">
                    <NavLink
                      to={path}
                      className="nav-link link display-4"
                      style={({ isActive }) => navLinkStyles(isActive)}
                    >
                      {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* <ul
                className="navbar-nav nav-dropdown"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="/gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="/projectlist"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                </li>
              </ul> */}
              <div className="navbar-buttons mbr-section-btn">
                <a className="btn btn-primary display-4" href="/contact-us">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
