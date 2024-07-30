import { styled } from "@mui/material";

export const StyledH1 = styled("h1")(({ theme }) => ({
  fontSize: "4.5rem",
  color: "#ced4da",
  padding: "0px",
  margin: "0px",
  fontFamily:
    "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: `calc(1.3625rem + 1.35vw)`,
  },
}));

export const StyledH2 = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  color: "#6c757d",
  padding: "0px",
  margin: "0px",
  fontFamily:
    "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: `calc(1.325rem + .9vw)`,
  },
}));

export const StyledH3 = styled("h3")(({ theme }) => ({
  fontSize: "1.6rem",
  color: "#6c757d",
  padding: "0px",
  margin: "0px",
  fontFamily:
    "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
}));

export const StyledH4 = styled("h4")(({ theme }) => ({
  padding: "0px",
  margin: "0px",
  fontWeight: 300,
  fontSize: "1.375rem",
  [theme.breakpoints.down("md")]: {
    fontSize: `calc(1.2625rem + .15vw)`,
  },
}));

export const StyledH5 = styled("h5")(({ theme }) => ({
  padding: "0px",
  margin: "0px",
  fontWeight: 300,
  fontSize: "1.125rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

export const StyledH6 = styled("h6")(() => ({
  fontSize: ".9375rem",
}));

export const StyledP = styled("p")(({ theme }) => ({
  wordSpacing: ".2rem",
  color: "#adb5bd",
  fontSize: "1.1rem",
  wordBreak: "inherit",
  lineHeight: "25px",
  fontWeight: 300,
  padding: "0px",
  margin: "0px",
  fontFamily:
    "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
}));
