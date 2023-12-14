import React from "react";
import { HeroContent, Navbar, Footer } from "../../components";
import "./style.css";
function Hero() {
  return (
    <div className="img ">
      <Navbar />
      <HeroContent />
      <Footer />
    </div>
  );
}

export default Hero;
