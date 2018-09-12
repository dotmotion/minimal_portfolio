import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";
import LinkList from "./components/LinkList";
import { projects } from "./projects";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "outon.x@gmail.com",
      copied: false
    };
  }

  render() {
    return (
      <div className="App">
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
        <footer>
          <Notifications options={{ bottom: "0" }} />
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
                  <CopyToClipboard
                    text="outon.x@gmail.com"
                    onCopy={() => {
                      let myColor = {
                        background: "#16191b",
                        text: "#e2e6e8"
                      };
                      notify.show(
                        "Email copied to clipboard!",
                        "custom",
                        3000,
                        myColor
                      );
                    }}
                  >
                    <span className="email">Email</span>
                  </CopyToClipboard>
                </li>
                <li>
                  <a
                    target="blank"
                    className="contact-link"
                    href="http://outon.mx/CV_ENG.pdf"
                  >
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
