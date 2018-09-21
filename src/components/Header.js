import React from "react";

const Header = () => {
  return (
    <header className="about">
      <div className="inner clearfix">
        <div className="profile">
          <h2>Andrés Outón,</h2>
          <h2 className="cursor typewriter">Self-taught Web Developer</h2>
          <nav className="social">
            <ul className="inline">
              <li>
                <a
                  target="blank"
                  className="social-link"
                  href="https://github.com/dotmotion"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className="social-link"
                  href="https://codepen.io/dotmotion/"
                >
                  CodePen
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className="social-link"
                  href="https://twitter.com/half_liquid"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className="social-link"
                  href="http://dotmotion.outon.mx/"
                >
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
export default Header;
