import React from 'react'
import { Helmet } from 'react-helmet';

import { JsonLd } from './../components/JsonLd';
import Layout from './../components/Layout';
import Button from './../components/Button';

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
      <Layout>
        <h1 className="h1--lead">Michée Allidjinou,</h1>
        <p className="p--lead">fullstack webdeveloper.</p>
        <Button name="let's rock!" href="/contact"/>
      </Layout>
    </div>
  )
}
