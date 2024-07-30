import React from "react";
import { links } from "./links";
import { SxProps } from "@mui/material";

const SocialLinks = ({ socialLinks }: { socialLinks: links[] }) => {
  return (
    <div
      style={{
        // padding: ".5rem",
        borderRadius: "1rem",
        margin: "auto",
        marginTop: "2rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          //   justifyContent: "space-evenly",
          gap: 25,
          listStyle: "none",
          margin: "0px",
          padding: "0px",
        }}
      >
        {socialLinks.map((link) => (
          <li>{link.icon()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
