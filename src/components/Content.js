import React from "react";
import Notifications from "react-notify-toast";
import LinkList from "./LinkList";
import Footer from "./Footer";
import { projects } from "../projects";

const Content = () => {
  return (
    <main>
      <Notifications options={{ bottom: "0" }} />
      <LinkList links={projects} />
      <Footer />
    </main>
  );
};

export default Content;
