import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Header.css";
import logo from '../assets/logo_header.svg';

const Header = () => {
  return (
    <header className="navigation">
        <Link to="/"><img className="logo" src={logo} alt="Logo Kasa"/></Link>
      <nav>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;