import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="interactive-services">
      <div className="image-wrapper">
        <div
          className="image-item"
          style={{ backgroundImage: "url('/1.jpg')" }}
        ></div>
        <div className="service-text">Social Media</div>
      </div>

      <div className="image-wrapper">
        <div
          className="image-item"
          style={{ backgroundImage: "url('/2.jpg')" }}
        ></div>
        <div className="service-text">Videography</div>
      </div>

      <div className="image-wrapper">
        <div
          className="image-item"
          style={{ backgroundImage: "url('/3.jpg')" }}
        ></div>
        <div className="service-text">Photography</div>
      </div>

      <div className="image-wrapper">
        <div
          className="image-item"
          style={{ backgroundImage: "url('/4.jpg')" }}
        ></div>
        <div className="service-text">Editing</div>
      </div>
    </div>
  );
};

export default Services;
