import React, { useEffect, useRef } from "react";
import "./SWHT-Mobile.css";

const SWHTMobile = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const images = section.querySelectorAll(".swht-mobile-grid-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            images.forEach((img) => {
              img.classList.add("animate-in");
              img.classList.remove("animate-out");
            });
          } else if (entry.intersectionRatio < 0.5) {
            images.forEach((img) => {
              img.classList.remove("animate-in");
              img.classList.add("animate-out");
            });
          }
        });
      },
      { threshold: [0.5] }
    );

    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <div className="swht-mobile-main" ref={sectionRef}>
      <div className="swht-mobile-heading">Stories We've Told</div>
      <div className="swht-mobile-grid">
        <div className="swht-mobile-grid-item swht-mobile-item1">
          <img src="/1s.jpg" alt="Story 1" />
        </div>
        <div className="swht-mobile-grid-item swht-mobile-item2">
          <img src="/2s.jpg" alt="Story 2" />
        </div>
        <div className="swht-mobile-grid-item swht-mobile-item3">
          <img src="/3s.jpg" alt="Story 3" />
        </div>
        <div className="swht-mobile-grid-item swht-mobile-item4">
          <img src="/4s.jpg" alt="Story 4" />
        </div>
        <div className="swht-mobile-grid-item swht-mobile-item5">
          <img src="/5s.jpg" alt="Story 5" />
        </div>
      </div>
    </div>
  );
};

export default SWHTMobile;
