import React from "react";
import LinkList from "./LinkList";
import { projects } from "../projects";
import "../css/Bottom.css";

const BottomArea = () => {
  return (
    <footer>
      <ul>
        <LinkList links={projects} />
      </ul>
    </footer>
  );
};

export default BottomArea;
