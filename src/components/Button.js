import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './../styles/Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button nav__link">
        <div className="bottom"></div>
        <div className="top">
          <Link to={this.props.linkTo} className="label">
            {this.props.linkName}
          </Link>
          <div className="button-border button-border-left"></div>
        	<div className="button-border button-border-top"></div>
        	<div className="button-border button-border-right"></div>
        	<div className="button-border button-border-bottom"></div>
        </div>
      </div>
    )
  }
}

Button.propTypes = {
  linkTo: PropTypes.string,
  linkName: PropTypes.string.isRequired
}