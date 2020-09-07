import React from "react"
import { Helmet } from "react-helmet";
import { JsonLd } from "./../components/JsonLd";

import NavBar from './../components/NavBar';

import Footer from './../components/Footer';
import Hero from './../components/Hero';

import './../styles/global.css';

export default function Home() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Acceuil | Michée Allidjinou</title>
        <description>Michée Allidjinou, développeur fullstack basé en Côte d'Ivoire.</description>
        <link rel="canonical" href="https://micheeallidjinou.com"/>
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
      <Hero/>
      <Footer footerText="Made By Michée Allidjinou"/>
    </div>
  )
}
