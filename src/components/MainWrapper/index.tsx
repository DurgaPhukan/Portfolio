import { Card as MuiCard, styled } from "@mui/material";

const MainWrapper = styled("div")(({ theme }) => ({
  width: "70vw",
  height: "auto",
  margin: "auto",
  backgroundColor: "#000000",
  [theme.breakpoints.down("lg")]: {
    width: "80vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

export default MainWrapper;
