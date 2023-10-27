import React from "react";
import "./style.css";

const Card = ({ title, description, MyImage, name, type, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="text">{type}</div>
      <div className="card">
        <img src={MyImage} alt="Background Image" />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
      <div className="name">{name}</div>
      <br />
    </a>
  );
};

export default Card;
