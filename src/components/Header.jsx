import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
		<nav className="green light-green darken-3">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo left">React Eat App</Link>
      <ul id="nav-mobile" className="right hide-on-med">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export { Header };
