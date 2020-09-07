import React from "react"

import NavBar from './../components/NavBar';

import Footer from './../components/Footer';
import Hero from './../components/Hero';

import './../styles/global.css';

export default function Home() {
  return (
    <div className="application">
      <NavBar/>
      <Hero/>
      <Footer footerText="Made By Michée Allidjinou"/>
    </div>
  )
}
