import React from 'react';
/*
import ReCAPTCHA from 'react-google-recaptcha';
*/

import Button from './Button';
import './../styles/Form.css';

export default class Form extends React.Component {
  render() {
    return (
      <form name="Contact form" method="POST" data-netlify="true" data-netlify-recaptcha="true" className="form">
        <input type="hidden" name="form-name" value="Contact form"/>
        <div className="formGroup">
          <label className="formLabel">Votre Email: </label>
          <br></br>
          <input type="email" name="email" className="email"/>
        </div>
        <div className="formGroup">
          <label className="formLabel">Votre message: </label>
          <br></br>
          <input type="message" className="message"/>
        </div>
        <Button onclick="javascript:this.parentNode.submit();" linkName="Envoyer"/>
      </form>
    )
  }
}