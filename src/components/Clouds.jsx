import React from "react";
import cl from "../assets/cloudL.png";
import cm from "../assets/cloudM.png";
import cr from "../assets/cloudR.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".CL", {
  x: "-50%", // Move left image towards left
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cloudContainer",
    start: "center center", // Animation starts when .image-container enters the viewport
    end: "bottom top", // Animation ends when .image-container leaves the viewport
    scrub: true, // Smoothly scrubs the animation
  },
});

gsap.to(".CM", {
  opacity: 0, // Move middle image upwards
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cloudContainer",
    start: "center center", // Animation starts when .image-container enters the viewport
    end: "bottom top", // Animation ends when .image-container leaves the viewport
    scrub: true, // Smoothly scrubs the animation
  },
});

gsap.to(".CR", {
  x: "50%", // Move left image towards left
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cloudContainer",
    start: "center center", // Animation starts when .image-container enters the viewport
    end: "bottom top", // Animation ends when .image-container leaves the viewport
    scrub: true, // Smoothly scrubs the animation
  },
});

function Clouds() {
  return (
    <div className="relative cloudContainer overflow-hidden">
      <img
        src={cl}
        className="CL absolute bottom-0 max-w-1/2 h-auto left-0"
        alt="Cloud Left"
      />
      <img
        src={cm}
        className="CM absolute bottom-0 max-w-1/2 h-auto left-1/5"
        alt="Cloud Middle"
      />
      <img
        src={cr}
        className="CR absolute bottom-0 max-w-1/2 h-auto right-0"
        alt="Cloud Right"
      />
    </div>
  );
}

export default Clouds;
