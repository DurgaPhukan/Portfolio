import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const StyledParallax = styled("div")(({ theme }) => ({
  overflow: "hidden",
  letterSpacing: "-2px",
  lineHeight: "0.8",
  whiteSpace: "nowrap",
  display: "flex",
  flexWrap: "nowrap",
  margin: "0px",
}));

export const StyledScroller = styled(motion.div)(({ theme }) => ({
  //---------------
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "64px",
  display: "flex",
  whiteSpace: "nowrap",
  flexWrap: "nowrap",
}));

export const StyledSpanMove = styled("span")(({}) => ({
  fontFamily: "Plaster",
  fontWeight: 600,
  fontStyle: "normal",
  letterSpacing: "-1px",
  lineHeight: 1.2,
  textAlign: "center",

  display: "block",
  marginRight: "30px",
}));
