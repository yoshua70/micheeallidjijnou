import React from "react"
import { Helmet } from "react-helmet";
import { JsonLd } from "./../components/JsonLd";

import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Form from './../components/Form';

import './../styles/Contact.css'

export default function Contact() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Contact | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/contact"/>
        <JsonLd>
          {{
            '@context': 'https://schema.org',
            '@type': 'Person',
            url: 'https://www.micheeallidjinou.com',
            name: 'Michée Allidjinou',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+225-04-04-48-46',
              contactType: 'Customer service',
            },
          }}
        </JsonLd>
      </Helmet>
      <NavBar/>
      <div className="contact__content">
        <h1 className="h1--lead">
          Voulez-vous qu'on travaille ensemble? <br></br>Contactez moi!
        </h1>
        <Form/>
      </div>
      <Footer footerText="Made By Michée Allidjinou"/>
    </div>
  )
}
