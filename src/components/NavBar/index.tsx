import React, { useEffect, useState } from "react";
import {
  StyledIconContainer,
  StyledNavContainer,
  StyledNavItems,
} from "./styles";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

interface sectionInterface {
  name: string;
  url: string;
  svg: () => JSX.Element;
}

const sections: sectionInterface[] = [
  {
    name: "home",
    svg: () => <HomeIcon />,
    url: "/",
  },
  {
    name: "projects",
    svg: () => <ArticleIcon />,
    url: "/projects",
  },
  {
    name: "Contact",
    svg: () => <ConnectWithoutContactIcon />,
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
      <Grid container spacing={2}>
        {sections.map((section) => (
          <Grid item sx={{ padding: "0px" }} xs={4} spacing={0}>
            <StyledNavItems role="menuitem" to={section.url}>
              <StyledIconContainer>{section.svg()}</StyledIconContainer>
              {/* {section.name.charAt(0).toUpperCase() +
                section.name.slice(1).toLowerCase()} */}
            </StyledNavItems>
          </Grid>
        ))}
      </Grid>
    </StyledNavContainer>
  );
};

export default NavBar;
