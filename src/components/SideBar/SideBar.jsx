import React, { useState } from 'react';
import './SideBar.css';
import { LuUser } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; 

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main h-full">
     
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu />
      </button>

     
      <div className={`side ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <button className={location.pathname === "/" ? "active" : ""}>
            <RxDashboard />
            Dashboard
          </button>
        </Link>

        <Link to="/users" onClick={() => setIsOpen(false)}>
          <button className={location.pathname === "/users" ? "active" : ""}>
            <LuUser />
            Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
