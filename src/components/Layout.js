import React from 'react';

import './../styles/Layout.css'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="application">
        {this.props.children}
      </div>
    )
  }
}