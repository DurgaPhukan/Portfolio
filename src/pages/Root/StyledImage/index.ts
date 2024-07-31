import { styled } from "@mui/material";

export const StyledImage = styled("img")(({ theme }) => ({
  objectFit: "cover",
  margin: "100px",
  [theme.breakpoints.down("md")]: {
    margin: "0px",
    paddingBottom: "50px",
  },
}));
