import React from "react";
import "./style.css";

import MySvg from "../assets/logo-FDOECSF6.svg";
import connection from "../assets/6310a4518beef1d8f521fd6a_mechaWEBbaja.gif";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Import the icons you need

const Contact = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-image">
          <img src={MySvg} className="rotate-svg" alt="Logo" />
        </div>
        <div className="header-heading">
          <div className="title">Contact me</div>
        </div>
      </header>
      <section className="content-title">
        <div className="title-heading">
          <div className="contain">
            <div className="typewriter">
              Say <span className="title-change">Hello.</span>
            </div>
          </div>
        </div>
        <div className="title-online">
          <span className="green"></span>
          <span className="title-online-description">
            Available for new opportunities
          </span>
        </div>
      </section>
      <section>
        <div className="card-social">
          <a
            className="social-link social-link1"
            href="https://www.linkedin.com/in/trinay-bhati/"
            target="_blank"
          >
            <FaLinkedin /> {/* LinkedIn icon */}
          </a>
          <a
            className="social-link social-link2"
            href="https://github.com/TrinayBhati"
            target="_blank"
          >
            <FaGithub /> {/* GitHub icon */}
          </a>
          <a
            className="social-link social-link3"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bhatiji780780@gmail.com"
            target="_blank"
          >
            <FaEnvelope /> {/* Email icon */}
          </a>
          <a className="social-link social-link4" href="tel:+917982083042">
            <FaPhone /> {/* Phone icon */}
          </a>
        </div>
      </section>
      <br />
      <img src={connection} height="350px" />
    </div>
  );
};

export default Contact;
