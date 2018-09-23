import React from "react";
import Notifications from "react-notify-toast";
import LinkList from "./LinkList";
import { projects } from "../projects";

const Content = () => {
  return (
    <main>
      <Notifications options={{ bottom: "0" }} />
      <ul>
        <LinkList links={projects} />
      </ul>
    </main>
  );
};

export default Content;
