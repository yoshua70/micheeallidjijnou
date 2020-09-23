import React from 'react';
import {Link} from 'gatsby';

import './../styles/Nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <Link to="/" className="nav__link" activeClassName="active">Home</Link>
          </li>
          <li className="nav__li">
            <Link to="/about" className="nav__link" activeClassName="active">About me</Link>
          </li>
          <li className="nav__li">
            <Link to="/contact" className="nav__link" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
} 