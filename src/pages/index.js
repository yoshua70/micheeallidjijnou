import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from './../components/Layout';
import { JsonLd } from './../components/JsonLd';

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <html lang="en" amp/>
        <meta charset="utf-8"/>
        <title>Acceuil | Michée Allidjinou</title>
        <meta name="description" content="Michée Allidjinou, fullstack web developer."/>
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
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li"><a href="#">Home</a></li>
          <li className="nav__li"><a href="#">Home</a></li>
          <li className="nav__li"><a href="#">Home</a></li>
          <li className="nav__li"><a href="#">Home</a></li>
        </ul>
      </nav>
      <section className="hero"></section>
    </Layout>
  )
}
