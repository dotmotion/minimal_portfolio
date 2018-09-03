import React from "react";
import Eye from "../img/Eye-dark.svg";
import Code from "../img/Code-dark.svg";
import "../css/Link.css";

const Link = ({ text, description, repo, web }) => {
  return (
    <li>
      <div class="grid-container">
        <div class="text">
          <h2>{text}</h2>
        </div>
        <div class="description">
          <p>{description}</p>
        </div>
        <div class="web">
          <a href={web}>
            <img src={Eye} className="eye logo" alt="Live App" />
          </a>
        </div>
        <div class="repo">
          <a href={repo}>
            <img src={Code} className="code logo" alt="GH Repo" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default Link;
