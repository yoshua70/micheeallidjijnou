import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';

import './../styles/Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className="btn" type={this.props.type}>
        <Link to="contact" className="btn__link">
          {this.props.children}
        </Link>
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string
};