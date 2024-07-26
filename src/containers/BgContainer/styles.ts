import { styled } from "@mui/material";

export const StyledBgContainer = styled("div")(({ theme }) => ({
  backgroundColor: "rgb(0,0,0)",
  color: "#ffffff",
  padding: "50px",
  //   border: `1px solid ${theme.palette.divider}`,
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&:before": {
  //     display: "none",
  //   },
  opacity: ".9999",
}));

export const MovableContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "-100px",
  top: "-100px",
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background: "white",
  bordeRadius: "50%",
  pointerEvents: "none",
  transition: "transform 0.1s ease-out",
  mixBlendMode: "difference",
  boxShadow: "0 0 20px 20px rgba(255, 255, 255, 0.2)",
  opacity: ".9",
  zIndex: "9999",
}));
