import React from "react"
import { Helmet } from "react-helmet";

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
        <link rel="canonical" href="https://micheeallidjinou.com"/>
      </Helmet>
      <NavBar/>
      <Hero/>
      <Footer footerText="Made By Michée Allidjinou"/>
    </div>
  )
}
