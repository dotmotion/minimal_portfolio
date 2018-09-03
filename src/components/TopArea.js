import React from "react";
import "../css/Top.css";

const TopArea = () => {
  return (
    <header className="about">
      <div className="inner clearfix">
        <div className="profile">
          <h2>Andres Outon</h2>
          <h2>Self-taught front end developer</h2>
          <nav className="social">
            <ul className="inline">
              <li>
                <a
                  className="social-link"
                  href="https://twitter.com/half_liquid"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a className="social-link" href="https://codepen.io/dotmotion/">
                  CodePen
                </a>
              </li>
              <li>
                <a className="social-link" href="https://github.com/dotmotion">
                  GitHub
                </a>
              </li>
              <li>
                <a className="social-link" href="http://dotmotion.outon.mx/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopArea;
