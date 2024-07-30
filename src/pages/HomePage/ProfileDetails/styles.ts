import { Button, styled } from "@mui/material";

export const StyledUl = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: 15,
  listStyle: "none",
  color: "#adb5bd",
  padding: "0px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  fontSize: "1.2rem",
  padding: ".2rem .5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem",
  },
}));
