import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { notify } from "react-notify-toast";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <h4>Ways to contact me:</h4>
        <nav>
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
  );
};

export default Footer;
