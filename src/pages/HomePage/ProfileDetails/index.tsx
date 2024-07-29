import React, { useState } from "react";
import { StyledH1, StyledH2, StyledH3 } from "../../../components/Text/styles";
import { StyledLink } from "../../../components/SocialLinks/styles";
import { Button } from "@mui/material";
import { IDetailSections } from "..";

const ProfileDetails = ({
  activeHandler,
  detailsSections,
}: {
  activeHandler: (id: string) => void;
  detailsSections: IDetailSections[];
}) => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        width: "550px",
        marginTop: "6rem",
        margin: "auto",
        gap: 8,
        // backgroundColor: "pink",
      }}
    >
      <StyledH1
        style={{
          fontSize: "3rem",
          fontWeight: 600,
          padding: "0px",
          margin: "0px",
        }}
      >
        Durga Phukan
      </StyledH1>
      <StyledH2>Senior Frontend Engineer</StyledH2>
      <StyledH3 style={{ color: "#adb5bd" }}>
        I build pixel-perfect, engaging, and accessible digital experiences.
      </StyledH3>

      <ul
        style={{
          display: "flex",
          gap: 15,
          listStyle: "none",
          color: "#adb5bd",
          fontSize: "1.5rem",
          //   margin: "0px",
          padding: "0px",
        }}
      >
        {detailsSections.map((detail, id) => (
          <li id={detail.id}>
            <Button
              style={{
                color: detail.color,
                border: `2px solid ${detail.color}`,
                borderRadius: "25px",
                fontSize: "1.2rem",
                padding: ".2rem .5rem",
              }}
              onClick={() => activeHandler(detail.id)}
            >
              {detail.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDetails;
