import { Grid, styled } from "@mui/material";

export const StyledRedSpan = styled("p")(({ theme }) => ({
  color: "#d90429",
  padding: ".4rem .8rem",
  fontSize: "1.3rem",
  border: "2px solid #d90429",
  borderRadius: "1.7rem",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem",
    padding: ".4rem",
    border: "1px solid #d90429",
  },
}));

export const StyledTagLineWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: "5rem",
  // padding: "5rem",
  display: "flex",
  paddingTop: "4.5rem",
  paddingBottom: "3.5rem",
  gap: "1rem",
  alignItems: "center",
  minHeight: "80px",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));
