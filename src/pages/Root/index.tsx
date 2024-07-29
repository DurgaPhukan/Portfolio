import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";
import { StyledH1 } from "../../components/Text/styles";
import BgContainer from "../../containers/BgContainer";
import { StyledRedSpan, StyledTagLineWrapper } from "./styles";

function RootLayout() {
  return (
    <BgContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavBar />
      </div>
      <StyledTagLineWrapper style={{ margin: "3.5rem 0px" }}>
        <StyledH1 style={{ fontSize: "4rem" }}>Building The Future </StyledH1>
        <StyledRedSpan>Together</StyledRedSpan>
      </StyledTagLineWrapper>
      <main className="" style={{ minHeight: "600px" }}>
        <Outlet />
      </main>
      {/* <div style={{ height: "100px" }}>Footer</div> */}
    </BgContainer>
  );
}
export default RootLayout;
