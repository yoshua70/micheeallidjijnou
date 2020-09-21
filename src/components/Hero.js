import React from 'react';

import './../styles/Hero.css';

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-content">
          {this.props.children}
        </div>
        <img src={this.props.image} alt="web developer" className="hero__svg"/>
      </section>
    )
  }
}