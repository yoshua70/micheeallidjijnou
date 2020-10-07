import React from 'react';
// import {Link} from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import './../styles/Nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <AniLink paintDrip hex="#FF6584" to="/" className="nav__link" activeClassName="active">Home</AniLink>
          </li>
          <li className="nav__li">
            <AniLink paintDrip hex="#FF6584" to="/about" className="nav__link" activeClassName="active">About me</AniLink>
          </li>
          <li className="nav__li">
            <AniLink paintDrip hex="#FF6584" to="/contact" className="nav__link" activeClassName="active">Contact</AniLink>
          </li>
        </ul>
      </nav>
    )
  }
} 