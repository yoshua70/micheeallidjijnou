import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './../styles/Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button type={this.props.type} className="button">
        <Link to={this.props.href} className="button__link">
          {this.props.name}
        </Link>
      </button>
    )
  }
};

Button.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};