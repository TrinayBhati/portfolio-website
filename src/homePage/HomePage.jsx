import React from "react";
import "./style.css";
import MySvg from "../assets/logo-FDOECSF6.svg";
import Details from "./details/Details";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header-image">
            <img src={MySvg} className="rotate-svg" />
          </div>
          <div className="header-heading">
            <div className="title">Trinay Bhati</div>
            <div className="sub-title">@trinay_bhati</div>
          </div>
        </header>
        <section className="content-title">
          <div className="title-heading">
            <div className="contain">
              <div className="sentence">
                Crafting
                <div className="slidingVertical">
                  <span>Web Pages.</span>
                  <span>Web Experiences.</span>
                  <span>Web Applications.</span>
                  <span>Web Delights.</span>
                  <span>Web Marvels.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="title-body">
            Crafting captivating digital experiences through front-end magic,
            one line of code at a time.
          </div>
          <div className="title-online">
            <span className="green"></span>
            <span className="title-online-description">
              Available for new opportunities
            </span>
          </div>
          <button>
            <span
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact me
            </span>
          </button>
        </section>
        <Details
          heading={"Social"}
          tag1={"LinkedIn"}
          tag2={"Github"}
          tag3={"Twitter"}
          tag1opposite={"Connect"}
          tag2opposite={"See work"}
          tag3opposite={"Follow"}
          link1={"https://www.linkedin.com/in/trinay-bhati/"}
          link2={"https://github.com/TrinayBhati"}
          link3={"https://twitter.com/clever_cactus_"}
        />
        <Details
          heading={"Work"}
          subHeading={"All"}
          tag1={"watchBox"}
          tag2={"Amazon"}
          tag1opposite={"View"}
          tag2opposite={"View"}
          link1={"https://watchbox-tv.netlify.app/"}
          link2={"https://amazon-clone-trinay.netlify.app/"}
        />
        <Details
          heading={"Skills"}
          tag1={"React.js"}
          tag2={"Javascript"}
          tag3={"Java"}
          tag1opposite={"Frontend"}
          tag2opposite={"Script"}
          tag3opposite={"Logics"}
        />
      </div>
    </>
  );
};

export default HomePage;
