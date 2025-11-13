import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/booking", label: "Booking" },
    { path: "/offer-ride", label: "Offer Ride" },
    { path: "/users", label: "Users" },
    { path: "/feedback", label: "Feedback" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        🚗 <span className="brand">CampusRide</span>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
