import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";
import { StyledH1, StyledH3, StyledH4 } from "../../components/Text/styles";
import BgContainer from "../../containers/BgContainer";
import { StyledRedSpan, StyledTagLineWrapper } from "./styles";
import { Grid } from "@mui/material";
import MotionDiv from "../../components/MotionDiv";
import ScrollingScaleComponent from "../../components/ScrollingScaleComponent";
import React from "react";
import BackgroundImage from "../../assets/icons/background1.png";
import { StyledImage } from "./StyledImage";

function RootLayout() {
  return (
    <BgContainer>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <NavBar />
      </div> */}
      <Grid container style={{ margin: "0px" }}>
        <Grid item xs={12} lg={10}>
          <StyledTagLineWrapper container style={{}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "right",
              }}
            >
              <StyledH1 style={{ color: "#6c757d", fontWeight: 200 }}>
                <span style={{ color: "#d90429", fontWeight: 400 }}>C</span>
                rafting Seamless User Experiences
              </StyledH1>
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <StyledH4
                  style={{
                    textAlign: "right",
                    color: "#6c757d",
                    fontWeight: 200,
                  }}
                >
                  One Line of Code at a Time
                </StyledH4>
                {/* <StyledRedSpan>Together</StyledRedSpan> */}
              </div>
            </div>
          </StyledTagLineWrapper>
        </Grid>

        <Grid item xs={12} lg={2}>
          <ScrollingScaleComponent>
            <StyledImage
              src={BackgroundImage}
              alt=""
              width="300px"
              height="380px"
              style={{
                objectFit: "cover",
                // margin: "100px",
              }}
            />
          </ScrollingScaleComponent>
        </Grid>
      </Grid>
      <main className="" style={{ minHeight: "600px" }}>
        <Outlet />
      </main>
    </BgContainer>
  );
}
export default RootLayout;
