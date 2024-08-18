import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import Clouds from "./Clouds";

function Hero() {
  return (
    <div className="w-full min-h-screen hero">
      <Navbar />
      <Clouds />
    </div>
  );
}

export default Hero;
