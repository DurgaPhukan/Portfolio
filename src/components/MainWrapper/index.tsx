import { Card as MuiCard, styled } from "@mui/material";

const MainWrapper = styled(MuiCard)(({ theme }) => ({
  width: "90rem",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
}));

export default MainWrapper;
