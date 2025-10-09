import React from "react";
import "./SlideIntoOurInbox.css";
import { FaInstagram, FaFacebookF, FaEnvelope, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SlideIntoInbox = () => {
  return (
    <div className="inbox-section">
      <h2 className="inbox-heading">Slide into our Inbox!</h2>

      <form className="inbox-form">
        <input type="text" placeholder="Name" className="inbox-input" />
        <input type="text" placeholder="Phone No." className="inbox-input" />
        <input type="email" placeholder="Email Address" className="inbox-input" />
        <textarea placeholder="Message" className="inbox-message"></textarea>

        <button type="submit" className="inbox-send-btn">Send</button>
      </form>

      <div className="inbox-icons">
        <div className="icon-circle"><FaInstagram /></div>
        <div className="icon-circle"><FaFacebookF /></div>
        <div className="icon-circle"><FaEnvelope /></div>
        <div className="icon-circle"><FaWhatsapp /></div>
        <div className="icon-circle"><FaYoutube /></div>
      </div>

      <div className="connect-text">Connect with Us</div>
      <div className="handle-text">@fiveframes.mediaworks</div>
    </div>
  );
};

export default SlideIntoInbox;
