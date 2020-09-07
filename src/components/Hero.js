import React from 'react';

import Button from './../components/Button';

import '../styles/Hero.css';

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__message">
          <h1 className="h1--lead">
            Michée Allidjinou,<br></br>
            développeur web fullstack.
          </h1>
          <h2 className="h2--lead">basé en Côte d'Ivoire</h2>
        </div>
        <div className="call-to-actions">
          <Button linkTo="/about" linkName="En savoir plus"/>
          <Button linkTo="/contact" linkName="Travaillons ensemble"/>
        </div>
      </div>
    )
  }
}