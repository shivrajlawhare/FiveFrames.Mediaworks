import React, { useEffect, useRef } from "react";
import "./SWHT-Desltop.css";

const SWHTDesktop = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = section.querySelectorAll(".swht-desktop-grid-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item) => {
              item.classList.add("animate-in");
              item.classList.remove("animate-out");
            });
          } else if (entry.intersectionRatio < 0.5) {
            items.forEach((item) => {
              item.classList.remove("animate-in");
              item.classList.add("animate-out");
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
    <div className="swht-desktop-main" ref={sectionRef}>
      <div className="swht-desktop-heading">Stories We've Told</div>
      <div className="swht-desktop-grid">
        <div className="swht-desktop-grid-item swht-desktop-item1">
          <img src="/1s.jpg" alt="Story 1" />
        </div>
        <div className="swht-desktop-grid-item swht-desktop-item2">
          <img src="/2s.jpg" alt="Story 2" />
        </div>
        <div className="swht-desktop-grid-item swht-desktop-item3">
          <img src="/3s.jpg" alt="Story 3" />
        </div>
        <div className="swht-desktop-grid-item swht-desktop-item4">
          <img src="/4s.jpg" alt="Story 4" />
        </div>
        <div className="swht-desktop-grid-item swht-desktop-item5">
          <img src="/5s.jpg" alt="Story 5" />
        </div>
      </div>
    </div>
  );
};

export default SWHTDesktop;
