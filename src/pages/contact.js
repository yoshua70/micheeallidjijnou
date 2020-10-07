import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from './../components/Layout';
import Hero from './../components/Hero';
import Nav from './../components/Nav';
// import Button from './../components/Button';
import Form from './../components/Form';
import { JsonLd } from './../components/JsonLd';

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <html lang="en" amp/>
        <meta charset="utf-8"/>
        <title>Contact | Michée Allidjinou</title>
        <meta name="description" content="Michée Allidjinou, fullstack web developer."/>
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
      <Nav/>
      <Hero image="./message_sent.svg">
        <h1 className="h1--hero">
          Contact me.
        </h1>
        <br></br>
        <br></br>
        <Form/>
      </Hero>
    </Layout>
  )
}
