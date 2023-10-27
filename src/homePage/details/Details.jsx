import React from "react";
import "./style.css";
import Shuffle from "../shuffle/Shuffle";
import { useNavigate } from "react-router-dom";

const Details = ({
  heading,
  subHeading,
  tag1,
  tag2,
  tag3,
  tag1opposite,
  tag2opposite,
  tag3opposite,
  link1,
  link2,
  link3,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="content-body">
        <div className="body">
          <div className="title">{heading}</div>
          {subHeading && (
            <div
              className="extra"
              onClick={() => {
                navigate("/work");
              }}
            >
              {subHeading} →
            </div>
          )}
        </div>
        <a
          href={link1}
          target="_blank"
          className="body-subtitle with-separator"
        >
          <span>
            <Shuffle text={tag1} font={"sans serif"} />
          </span>
          <span className="line">
            <hr />
          </span>
          <span className="follow-text">
            <Shuffle text={tag1opposite} font={"sans serif"} />
          </span>
        </a>
        <a
          href={link2}
          target="_blank"
          className="body-subtitle with-separator"
        >
          <span>
            <Shuffle text={tag2} font={"sans serif"} />
          </span>
          <span className="line">
            <hr />
          </span>
          <span className="follow-text">
            <Shuffle text={tag2opposite} font={"sans serif"} />
          </span>
        </a>
        {tag3 && (
          <a
            href={link3}
            target="_blank"
            className="body-subtitle with-separator"
          >
            <span>
              <Shuffle text={tag3} font={"sans serif"} />
            </span>
            <span className="line">
              <hr />
            </span>
            <span className="follow-text">
              <Shuffle text={tag3opposite} font={"sans serif"} />
            </span>
          </a>
        )}
      </section>
    </>
  );
};

export default Details;
