import React from 'react';
import { Link } from 'gatsby';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav__link">Acceuil</Link>
        <Link to="/about" className="nav__link">Moi</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
      </nav>
    )
  }
}