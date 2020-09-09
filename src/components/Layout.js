import React from 'react';

import Nav from './../components/Nav';
import Footer from './../components/Footer';
import './../styles/Layout.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}