import React from "react";
import "./style.css";
import MySvg from "../assets/logo-FDOECSF6.svg";
import watchBox from "../assets/watchBox.png";
import amazon from "../assets/amazon.png";
import quotes from "../assets/quotes.png";

import Card from "../card/Card";

const Work = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-image">
            <img src={MySvg} className="rotate-svg" />
          </div>
          <div className="header-heading">
            <div className="title">Work</div>
            <div className="sub-title">Projects</div>
          </div>
        </header>
        <section className="content-title">
          <div className="title-heading">
            <div className="contain">
              <div className="typewriter">
                Selection of <span className="title-change">work</span>
              </div>
            </div>
          </div>
        </section>
        <Card
          title="watchBox"
          description="React.js project for a top-notch OTT experience."
          MyImage={watchBox}
          name={"watchBox"}
          type={"React application"}
          link={"https://watchbox-tv.netlify.app/"}
        />
        <Card
          title="Amazon Clone"
          description="E-commerce website made using React.js and Firebase"
          MyImage={amazon}
          name={"Amazon Clone"}
          type={"React application"}
          link={"https://amazon-clone-trinay.netlify.app/"}
        />
        <Card
          title="Random Quotes sharing"
          description="Generate new Quotes every time and share them on Twitter directly."
          MyImage={quotes}
          name={"Random Quotes sharing"}
          type={"Javascript application"}
          link={"https://quotes-generator-trinay.netlify.app/"}
        />
      </div>
    </>
  );
};

export default Work;
