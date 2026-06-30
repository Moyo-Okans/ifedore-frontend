import React, { useState } from 'react';
import { NavLink } from 'react-router';
import '../styles/components.css';
import Logo from '../assets/logo.JPG';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
        { path: '/chairman', label: 'Chairman' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="first-nav">
        <p className='first-p'>
          Ifedore Local Government Area — Ondo State, Nigeria
        </p>
        <p className='emergency'>
          Emergency: 0807 999 9989
        </p>
      </div>

      <div className="second-nav">
        <div className="logo">
          <img src={Logo} alt="Ifedore LGA Logo" />
          <div className="logo-text">
            <h2>Ifedore LGA</h2>
            <p>Official Government Website</p>
          </div>
        </div>

        <div className={`nav-links ${isMobile ? "open" : ""}`}>
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={() => setIsMobile(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className='hamburger' onClick={() => setIsMobile(!isMobile)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar