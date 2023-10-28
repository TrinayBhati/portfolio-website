import React from "react";
import "./style.css";
import myPdf from "../assets/latest-updated-resume.pdf";
import profile from "../assets/home-shinobi.png";

import MySvg from "../assets/logo-FDOECSF6.svg";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Import the icons you need

const Resume = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-image">
          <img src={MySvg} className="rotate-svg" alt="Logo" />
        </div>
        <div className="header-heading">
          <div className="title">Resume</div>
        </div>
      </header>
      <section className="content-title">
        <div className="title-heading-resume">
          <div className="typewriter ">
            Download <span className="title-change">Resume </span>
            here
          </div>
        </div>
      </section>
      <div className="buttons">
        <button class="btn">
          <a
            href="https://drive.google.com/file/d/1NuufWvH8FuocYm-7UjnK1_sFh9u0REiJ/view?usp=sharing"
            target="_blank"
          >
            View
          </a>
        </button>
        <button class="btn">
          <a href={myPdf} download>
            Download
          </a>
        </button>
      </div>
      <br />
      <img src={profile} height="400px" />
    </div>
  );
};

export default Resume;
