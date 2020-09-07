import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>{this.props.footerText}</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  footerText: PropTypes.string.isRequired
}