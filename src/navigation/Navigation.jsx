import React, { useState } from "react";
import {
  RiHomeLine,
  RiUserLine,
  RiBriefcaseLine,
  RiFileCopy2Line,
  RiContactsLine,
  RiMailLine,
} from "react-icons/ri";
import "./style.css";
import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("home"); // Initialize with the default selected button

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    switch (buttonId) {
      case "home":
        navigate("/");
        break;
      case "work":
        navigate("/work");
        break;
      case "about":
        navigate("/about");
        break;
      case "blogs":
        navigate("/resume");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <div className="layout">
      <div className="button-container">
        <button
          className={`button ${selectedButton === "home" ? "selected" : ""}`}
          onClick={() => handleButtonClick("home")}
        >
          <RiHomeLine />
        </button>
        <button
          className={`button ${selectedButton === "work" ? "selected" : ""}`}
          onClick={() => handleButtonClick("work")}
        >
          <RiBriefcaseLine />
        </button>
        <button
          className={`button ${selectedButton === "about" ? "selected" : ""}`}
          onClick={() => handleButtonClick("about")}
        >
          <RiUserLine />
        </button>
        <button
          className={`button ${selectedButton === "blogs" ? "selected" : ""}`}
          onClick={() => handleButtonClick("blogs")}
        >
          <RiFileCopy2Line />
        </button>
        <button
          className={`button ${selectedButton === "contact" ? "selected" : ""}`}
          onClick={() => handleButtonClick("contact")}
        >
          <RiMailLine />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
