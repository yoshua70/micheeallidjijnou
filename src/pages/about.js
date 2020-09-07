import React from "react"
import { Helmet } from "react-helmet";
import { JsonLd } from "./../components/JsonLd";

import NavBar from './../components/NavBar';
import Footer from './../components/Footer';

import './../styles/About.css'

export default function About() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>A propos | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/about"/>
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
      <div className="about__content">
        <h1 className="h1--lead">Passioné de technologies, de comics et de rubik's cube.</h1>
        <h2 className="h2--lead">HTML, CSS, JS, React JS</h2>
      </div>
      <Footer footerText="Made By Michée Allidjinou"/>
    </div>
  )
}
