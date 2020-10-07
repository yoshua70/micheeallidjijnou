import React from 'react';
// import PropTypes from 'prop-types';

import Button from './../components/Button';

import './../styles/Form.css';

export default class Form extends React.Component {
    render() {
      return (
        <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you" className="form">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="inputGroup">
                <label className="p--hero">Your Email:</label>
                <br></br>
                <input type="email" name="email" />
            </div>
            <div className="inputGroup">
                <label className="p--hero">Message:</label>
                <br></br>
                <textarea name="message" />
            </div>
            <Button type="submit">Send</Button>
        </form>
      )
    }
  }
  