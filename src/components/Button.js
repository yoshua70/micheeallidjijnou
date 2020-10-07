import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import './../styles/Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className="btn" type={this.props.type}>
        <AniLink paintDrip to={this.props.link} className="btn__link">
          {this.props.children}
        </AniLink>
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string
};