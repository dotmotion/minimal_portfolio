import React from "react";

const Canvas = () => {
  return (
    <div className="wrapper">
      <iframe
        id="canvas"
        name="frame"
        src="http://outon.mx/canvas1.html"
        width="600"
        height="400"
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
      </ul>
    </div>
  );
};

export default Canvas;
