import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  // getting user data from context api
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand">
          <img src="/logo.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="active-nav"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-nav"
              >
                About
              </NavLink>
            </li>
            {user.email && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/myBookings"
                    className="nav-link"
                    activeClassName="active-nav"
                  >
                    My Bookings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle admin-panel-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admin Panel
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <NavLink className="dropdown-item" to="/addService">
                          Add Offer
                        </NavLink>
                      </li>
                      {user.email === "rahatkhanpathan99@gmail.com" && (
                        <li>
                          <NavLink to="/allOffers" className="dropdown-item">
                            Manage All Offers
                          </NavLink>
                        </li>
                      )}
                      <li>
                        <NavLink to="/allBookings" className="dropdown-item">
                          Manage All Bookings
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            )}
          </ul>
          {user.email ? (
            <div className="d-flex user">
              <li className="nav-item">
                <p className="user-name text-white">{user.displayName}</p>
              </li>
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn btn-outline-danger logout-btn"
                >
                  Log Out
                </button>
              </li>
            </div>
          ) : (
            <div className="user d-flex">
              <li className="nav-item">
                <NavLink to="/login">
                  <button className="btn btn-outline-danger logout-btn">
                    Log In
                  </button>
                </NavLink>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
