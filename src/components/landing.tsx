import React from "react";
import HeroSection from "./LandingPage/HeroSection";
import CardCorousel from "./LandingPage/CardCorousel";
import Cta from "./LandingPage/Cta";
import Footer from "./LandingPage/Footer";
import Header from "./LandingPage/Header";
import LycanTeam from "./LandingPage/LycanTeam";
import StatsSection from "./LandingPage/HeroStats";


export default function Landing() {
  return (
    <>
    <Header />
    <main className="relative">
      <HeroSection />
      <CardCorousel /> 
      <LycanTeam />
      {/* <Stats /> */}
      {/* <Service /> */}
      {/* <About /> */}
      <StatsSection />
      <Cta /> 

    </main>
    <Footer />
    </>
  );
}
