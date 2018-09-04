import React, { Component } from "react";
import LinkList from "./components/LinkList";
import { projects } from "./projects";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="about">
          <div className="inner clearfix">
            <div className="profile">
              <h2>
                Andrés Outón,
                <br />
                Self-taught Web Developer
              </h2>
              <nav className="social">
                <ul className="inline">
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
                      href="https://codepen.io/dotmotion/"
                    >
                      CodePen
                    </a>
                  </li>
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
        <footer>
          <ul>
            <LinkList links={projects} />
          </ul>
          <div className="inner contact">
            <h4>Ways to contact me:</h4>
            <nav className="social">
              <ul className="inline info">
                <li>
                  <a
                    target="blank"
                    className="contact-link"
                    href="https://twitter.com/half_liquid"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="mailto:outon.x@gmail.com">
                    Email
                  </a>
                </li>
                <li>
                  <a target="blank" className="contact-link" href="#">
                    Download CV
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
