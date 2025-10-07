import React, { useEffect, useState } from "react";
import "./IntroAnimation.css";

const IntroAnimation = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 4000); // 4.5s total

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="intro-container">
      <div className="circle "></div>
      <div className="logo-text ">
        <img className="intro-logo" src="Vector.png" alt="" />
      </div>
      <div className="brand-text">FiveFrames.Mediaworks</div>
    </div>
  );
};

export default IntroAnimation;
