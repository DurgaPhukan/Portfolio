import { createTheme } from "@mui/material/styles";
// import { LightColors } from './constants';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
} as const;

const headingStyles = {
  margin: 0,
  fontWeight: 600,
  color: "#5d596c",
  lineHeight: 1.37,
};

export const theme = createTheme({
  breakpoints,
  typography: {
    fontFamily: ["Public Sans", "-apple-system", "sans-serif"].join(","),
    h1: {
      ...headingStyles,
      fontSize: `calc(1.3625rem + 1.35vw)`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: "2.375rem",
      },
    },
    h2: {
      ...headingStyles,
      fontSize: `calc(1.325rem + .9vw)`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: "2rem",
      },
    },
    h3: {
      ...headingStyles,
      fontSize: `calc(1.2875rem + .45vw)`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: "1.625rem",
      },
    },
    h4: {
      ...headingStyles,
      fontSize: `calc(1.2625rem + .15vw)`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: "1.375rem",
      },
    },
    h5: {
      ...headingStyles,
      fontSize: "1.125rem",
    },
    h6: {
      ...headingStyles,
      fontSize: ".9375rem",
    },
    subtitle1: {
      marginTop: 0,
      marginBottom: "1rem",
    },
    subtitle2: {
      fontSize: ".8125rem",
    },
  },
  palette: {
    // mode: themeLight ? "dark" : "light",
    // mode: "dark",
    // primary: LightColors.primary,
    // secondary: LightColors.secondary,
  },
});
