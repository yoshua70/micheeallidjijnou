import React from "react"
import { Helmet } from "react-helmet";
import { JsonLd } from "./../components/JsonLd";

import Layout from './../components/Layout';
import Form from './../components/Form';

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
      <Layout>
        <h1 className="h1--lead">Contact</h1>
        <Form/>
      </Layout>
    </div>
  )
}
