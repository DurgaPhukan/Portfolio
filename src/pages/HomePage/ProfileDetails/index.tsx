import React, { useState } from "react";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
} from "../../../components/Text/styles";
import { StyledLink } from "../../../components/SocialLinks/styles";
import { Button } from "@mui/material";
import { IDetailSections } from "..";
import { StyledButton, StyledUl } from "./styles";

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
        marginTop: "6rem",
        margin: "auto",
        gap: 8,
      }}
    >
      <StyledH1
        style={{
          // fontSize: "3rem",
          fontWeight: 600,
          padding: "0px",
          margin: "0px",
        }}
      >
        Durga Phukan
      </StyledH1>
      <StyledH2>Senior Frontend Engineer</StyledH2>
      <StyledH5 style={{ color: "#adb5bd", wordBreak: "break-word" }}>
        I build pixel-perfect, engaging, and accessible digital experiences.
      </StyledH5>

      <StyledUl>
        {detailsSections.map((detail, id) => (
          <li id={detail.id}>
            <StyledButton
              style={{
                color: detail.color,
                border: `2px solid ${detail.color}`,
              }}
              onClick={() => activeHandler(detail.id)}
            >
              {detail.title}
            </StyledButton>
          </li>
        ))}
      </StyledUl>
    </div>
  );
};

export default ProfileDetails;
