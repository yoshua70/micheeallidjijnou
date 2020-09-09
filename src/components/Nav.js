import React from 'react';
//import { Link } from 'gatsby';

import Button from './../components/Button';
import './../styles/Nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Button href="/" name="home"/>
        <Button href="/contact" name="Contact"/>
      </nav>
    )
  }
}