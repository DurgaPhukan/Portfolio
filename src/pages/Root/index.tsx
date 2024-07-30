import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";
import { StyledH1, StyledH3, StyledH4 } from "../../components/Text/styles";
import BgContainer from "../../containers/BgContainer";
import { StyledRedSpan, StyledTagLineWrapper } from "./styles";
import { Grid } from "@mui/material";

function RootLayout() {
  return (
    <BgContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavBar />
      </div>
      <StyledTagLineWrapper container style={{ marginTop: "3.5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
          }}
        >
          <StyledH1 style={{ color: "#6c757d", fontWeight: 200 }}>
            Crafting Seamless User Experiences
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
            <StyledRedSpan>Together</StyledRedSpan>
          </div>
        </div>
      </StyledTagLineWrapper>
      <main className="" style={{ minHeight: "600px" }}>
        <Outlet />
      </main>
      {/* <div style={{ height: "100px" }}>Footer</div> */}
    </BgContainer>
  );
}
export default RootLayout;
