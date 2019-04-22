import React from "react";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <h2>Andrés Outón,</h2>
        <div className="typewriter">
          <h2>Self-taught Web Developer</h2>
        </div>
        <nav className="social">
          <ul className="inline">
            <li>
              <a target="blank" href="https://github.com/dotmotion">
                GitHub
              </a>
            </li>
            <li>
              <a target="blank" href="https://codepen.io/dotmotion/">
                CodePen
              </a>
            </li>
            <li>
              <a target="blank" href="https://twitter.com/half_liquid">
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
