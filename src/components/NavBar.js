import React from 'react';
import { Link } from 'gatsby';

import './../styles/Nav.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav__link nav__home">Acceuil</Link>
        <Link to="/about" className="nav__link nav__me">Moi</Link>
        <Link to="/contact" className="nav__link nav__contact">Contact</Link>
      </nav>
    )
  }
}