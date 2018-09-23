import React from "react";

const Canvas = () => {
  return (
    <div className="wrapper">
      <h2>Canvas Experiments</h2>
      <iframe
        title="Canvas"
        id="canvas"
        name="frame"
        src="http://outon.mx/canvas1.html"
        height="500"
        frameborder="0"
        scrolling="no"
      />
      <ul>
        <li>
          <a href="http://outon.mx/canvas1.html" target="frame">
            Bouncing Circles
          </a>
        </li>
        <li>
          <a href="http://outon.mx/canvas2.html" target="frame">
            Circular Motion
          </a>
        </li>
        <li>
          <a href="http://outon.mx/canvas3.html" target="frame">
            Particle Gravity
          </a>
        </li>
        <li>
          <a href="http://outon.mx/canvas4.html" target="frame">
            Particle Interaction
          </a>
        </li>
        <li>
          <a href="http://outon.mx/canvas5.html" target="frame">
            Connecting Lines
          </a>
        </li>
        <li>
          <a href="http://outon.mx/canvas6.html" target="frame">
            Fireworks
          </a>
        </li>
        <li>
          <a href="http://outon.mx/canvas7.html" target="frame">
            Particle Generator
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Canvas;
