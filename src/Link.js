import React from "react";
import Eye from "./Eye.svg";
import Code from "./Code.svg";
import "./Link.css";

const Link = ({ text, description, repo, web }) => {
  return (
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
  );
};

export default Link;
