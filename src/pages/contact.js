import React from "react"
import { Helmet } from "react-helmet";

import NavBar from './../components/NavBar';
import Footer from './../components/Footer';

import './../styles/Contact.css'

export default function Contact() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Contact | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/contact"/>
      </Helmet>
      <NavBar/>
      <div className="contact__content">
        <h1 className="h1--lead">
          Voulez-vous qu'on travaille ensemble? <br></br>Contactez moi!
        </h1>
      </div>
      <Footer footerText="Made By Michée Allidjinou"/>
    </div>
  )
}
