import React from "react";
import Link from "./Link";

const LinkList = ({ links }) => {
  return (
    <ul className="linkList">
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            text={links[i].text}
            description={links[i].description}
            repo={links[i].repo}
            web={links[i].web}
          />
        );
      })}
    </ul>
  );
};

export default LinkList;
