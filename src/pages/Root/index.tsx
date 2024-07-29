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
      <StyledTagLineWrapper>
        <StyledH1 style={{ fontSize: "5rem" }}>Building The Future </StyledH1>
        <StyledRedSpan>Together</StyledRedSpan>
      </StyledTagLineWrapper>
      <main className="" style={{ minHeight: "700px" }}>
        <Outlet />
      </main>
      <div style={{ height: "100px" }}>Footer</div>
    </BgContainer>
  );
}
export default RootLayout;
