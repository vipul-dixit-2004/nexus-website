import React from "react";
import hero_back from "../assets/hero_back.png";
import Navbar from "./Navbar";
import "./style.css";

function Hero() {
  return (
    <div className="w-full min-h-screen hero">
      <Navbar />
    </div>
  );
}

export default Hero;
