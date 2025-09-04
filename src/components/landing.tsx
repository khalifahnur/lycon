import React from "react";
import HeroSection from "./LandingPage/HeroSection";
import Spornsors from "./LandingPage/Spornsors";
import CardCorousel from "./LandingPage/CardCorousel";
import About from "./LandingPage/About";
import Stats from "./LandingPage/Stats";
import Cta from "./LandingPage/Cta";
import Services from "./LandingPage/Services";
import Footer from "./LandingPage/Footer";
import Header from "./LandingPage/Header";
import WhyChooseLycan from "./LandingPage/WhyUs";

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
      <About />
      <Stats /> 
      <Services />
      <WhyChooseLycan />
      <Cta /> 
    </main>
    <Footer />
    </>
  );
}
