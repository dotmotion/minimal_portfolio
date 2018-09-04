import React from "react";
import Eye from "../img/Eye-dark.svg";
import Code from "../img/Code-dark.svg";
import "../css/Link.css";

const Link = ({ text, description, repo, web }) => {
  return (
    <li>
      <div className="grid-container">
        <div className="text">
          <h2>{text}</h2>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="web">
          <a target="blank" href={web}>
            <img src={Eye} className="eye logo" alt="Live App" />
          </a>
        </div>
        <div className="repo">
          <a target="blank" href={repo}>
            <img src={Code} className="code logo" alt="GH Repo" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default Link;
