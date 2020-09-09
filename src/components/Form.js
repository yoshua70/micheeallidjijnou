import React from 'react';

import Button from './../components/Button';
import './../styles/Form.css';

export default class Form extends React.Component {
  render() {
    return (
      <form className="form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <p>
          <label>
            Your Name: <br></br>
            <input type="text" name="name"/>
          </label>
        </p>
        <p>
          <label>
            Your Email: <br></br>
            <input type="email" name="email"/>
          </label>
        </p>
        <p>
          <label>
            Message: <br></br>
            <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <Button type="submit" name="Send"/>
        </p>
      </form>
    )
  }
}