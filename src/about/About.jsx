import React from "react";
import "./style.css";
import { MdWork, MdMail } from "react-icons/md";
import MySvg from "../assets/logo-FDOECSF6.svg";
import myImage from "../assets/icons.svg";

const About = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-image">
          <img src={MySvg} className="rotate-svg" />
        </div>
        <div className="header-heading">
          <div className="title">About me</div>
        </div>
      </header>
      <section className="content-title">
        <div className="title-heading">
          <div className="contain">
            <div className="typewriter">
              Hello, I'm <span className="title-change">Trinay Bhati</span>
            </div>
          </div>
        </div>
        <div className="title-body">
          <div className="title-body">
            An aspiring front-end-web developer based in Delhi.
          </div>
          <div className="title-body">
            Dedicated to crafting pixel-perfect websites
          </div>
          <div className="title-body">
            Passionate about React and JavaScript, building projects, and
            problem-solving to create beautiful websites.
          </div>
          <div className="title-body">
            In my free time, I'm into fitness training, and I'm also a dedicated
            anime enthusiast exploring manhwa and manga.
          </div>
          <div className="title-body">
            Thanks for visiting my por tfolio! If you have any questions or need
            more info, feel free to
            <span className="title-body-sub"> contact me.</span>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bhatiji780780@gmail.com"
            target="_blank"
          >
            <MdMail className="title-heading" />
          </a>
        </div>
        <img src={myImage} height="300px" />
      </section>
    </div>
  );
};

export default About;
