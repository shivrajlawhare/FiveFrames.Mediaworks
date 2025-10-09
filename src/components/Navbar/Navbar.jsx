import React, { useState } from "react";
import "./Navbar.css";
import NavigationModal from "../NavigationModal/NavigationModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-shape">
          <div className="navbar-shape-rect1"></div>
          <div className="navbar-shape-circle"></div>
          <div className="navbar-shape-rect2"></div>
        </div>

        <div className="navbar-none"></div>

        {/* Desktop Links */}
        <div
          className="navbar-aboutUs"
          onClick={() => scrollToSection("about")}
        >
          About Us
        </div>
        <div
          className="navbar-services"
          onClick={() => scrollToSection("services")}
        >
          Services
        </div>

        <img className="navbar-logo" src="Vector.png" alt="Logo" />

        <div
          className="navbar-portfolio"
          onClick={() => scrollToSection("swht")}
        >
          Portfolio
        </div>
        <div
          className="navbar-contactUs"
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </div>

        {/* Mobile Hamburger */}
        <img
          className="navbar-menu"
          src="burger-menu-svgrepo-com.svg"
          alt="Menu"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Mobile Modal */}
      <NavigationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
};

export default Navbar;
