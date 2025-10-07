import React, { useEffect, useRef, useState } from "react";
import "./OurServices.css";

const OurServices = () => {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState("idle"); 
  // "idle" → "in" → "out"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;

          // Entering (scrolling into view)
          if (entry.isIntersecting && rect.top < windowHeight * 0.5) {
            setPhase("in");
          }

          // Scrolling out (past bottom half)
          if (rect.top < -entry.target.offsetHeight * 0.3) {
            setPhase("out");
          }

          // Reset if scrolled back above
          if (rect.top > windowHeight) {
            setPhase("idle");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
