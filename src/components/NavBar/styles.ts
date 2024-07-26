import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavContainer = styled("div")(({ theme }) => ({
  //   backgroundColor: "#6c757d",
  backgroundColor: "rgba(20,20,20,.5)",
  padding: ".5rem",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  top: "20px",
  //   border: `1px solid ${theme.palette.divider}`,
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&:before": {
  //     display: "none",
  //   },
}));

export const StyledNavItems = styled(NavLink)(() => ({
  //   color: "rgba(0,0,0,1)",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "1.5rem",
  padding: ".4rem 2rem",
}));
