import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from './../components/Layout';
import Hero from './../components/Hero';
import Nav from './../components/Nav';
import Button from './../components/Button';
import { JsonLd } from './../components/JsonLd';

export default function About() {
  return (
    <Layout>
      <Helmet>
        <html lang="en" amp/>
        <meta charset="utf-8"/>
        <title>About | Michée Allidjinou</title>
        <meta name="description" content="Michée Allidjinou, fullstack web developer."/>
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
      <Nav/>
      <Hero image="./startup_life.svg">
        <div>
          <h1 className="h1--hero">
            Hi!<br></br>
            I'm Michée,<br></br>
            front-end developer.
          </h1>
          <br></br>
          <p className="p--hero">
            It takes about <strong>0.05seconds</strong> for a user to form an opinion about your website. Let me make good use of that time with pratical and simple design for your website.
          </p>
          <p className="p--hero">
            I am in love with <strong>the web</strong> and everything related to computers in general.
          </p>
          <p className="p--hero">
            Love to help other people build their <strong>dream project</strong> via the web. I build fast and responsive website with Gatsby and React.
          </p>
          <br></br>
          <Button>Contact me</Button>
        </div>
      </Hero>
    </Layout>
  )
}
