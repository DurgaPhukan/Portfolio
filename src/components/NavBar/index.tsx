import React, { useEffect, useState } from "react";
import { StyledNavContainer, StyledNavItems } from "./styles";
import { Grid } from "@mui/material";

interface sectionInterface {
  name: string;
  url: string;
  svg: string;
}

const sections: sectionInterface[] = [
  {
    name: "home",
    svg: "",
    url: "/",
  },
  {
    name: "projects",
    svg: "",
    url: "/projects",
  },
  {
    name: "Contact",
    svg: "",
    url: "/contact",
  },
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <StyledNavContainer>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item sx={{ padding: "0px" }} xs={4} spacing={0}>
            <StyledNavItems role="menuitem" to={section.url}>
              {section.name.charAt(0).toUpperCase() +
                section.name.slice(1).toLowerCase()}
            </StyledNavItems>
          </Grid>
        ))}
      </Grid>
    </StyledNavContainer>
  );
};

export default NavBar;
