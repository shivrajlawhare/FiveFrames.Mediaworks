import React, { useEffect, useRef, useState } from "react";
import "./OurServices.css";

const OurServices = () => {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState("idle"); // "idle" → "in" → "out"

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionMidpoint = rect.top + rect.height / 2;

      // 1️⃣ Trigger INTRO when section midpoint enters viewport
      if (sectionMidpoint >= 0 && sectionMidpoint <= windowHeight) {
        if (phase !== "in") setPhase("in");
      }

      // 2️⃣ Trigger OUTRO when section midpoint moves above viewport (out of view)
      if (sectionMidpoint < 0) {
        if (phase !== "out") setPhase("out");
      }

      // 3️⃣ Reset when section is fully below viewport
      if (rect.top > windowHeight) {
        if (phase !== "idle") setPhase("idle");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [phase]);

  const images = [
    { src: "/3.jpg", text: "Photography" },
    { src: "/4.jpg", text: "Video Editing" },
    { src: "/2.jpg", text: "Videography" },
    { src: "/1.jpg", text: "Social Media" },
  ];

  return (
    <section ref={sectionRef} className="ourservices-section">
      <h2 className="ourservices-title">Our Services</h2>

      <div className={`ourservices-images phase-${phase}`}>
        {images.map((item, index) => (
          <div key={index} className={`service-image-wrapper delay-${index}`}>
            <img src={item.src} alt={item.text} className="service-image" />
            <span className="service-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
