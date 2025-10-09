import React from "react";
import "./NavigationModal.css";

const NavigationModal = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="nav-modal">
      <div className="nav-modal-content">
        <button
          className="nav-modal-btn"
          onClick={() => {
            onNavigate("about");
            onClose();
          }}
        >
          About Us
        </button>
        <button
          className="nav-modal-btn"
          onClick={() => {
            onNavigate("services");
            onClose();
          }}
        >
          Services
        </button>
        <button
          className="nav-modal-btn"
          onClick={() => {
            onNavigate("swht");
            onClose();
          }}
        >
          Portfolio
        </button>
        <button
          className="nav-modal-btn"
          onClick={() => {
            onNavigate("contact");
            onClose();
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavigationModal;
