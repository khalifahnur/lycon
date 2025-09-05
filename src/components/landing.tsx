import React from "react";
import HeroSection from "./LandingPage/HeroSection";
import Spornsors from "./LandingPage/Spornsors";
import CardCorousel from "./LandingPage/CardCorousel";
import Stats from "./LandingPage/Stats";
import Cta from "./LandingPage/Cta";
import Footer from "./LandingPage/Footer";
import Header from "./LandingPage/Header";
import LycanTeam from "./LandingPage/LycanTeam";
import Service from "./LandingPage/Service";
import About from "./LandingPage/About";


export default function Landing() {
  return (
    <>
    <Header />
    <main className="relative">
      <blockquote className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
        <p></p>
      </blockquote>
      <HeroSection />
      <Spornsors />
      <CardCorousel /> 
      <LycanTeam />
      <Stats />
      <Service />
      <About />
      <Cta /> 
    </main>
    <Footer />
    </>
  );
}
