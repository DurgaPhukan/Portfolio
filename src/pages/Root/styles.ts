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
  display: "flex",
  padding: "0px 5rem",
  gap: "1rem",
  alignItems: "center",
  minHeight: "80px",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));
