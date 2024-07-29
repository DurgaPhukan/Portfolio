import React, { useEffect, useState } from "react";
import { StyledNavContainer, StyledNavItems } from "./styles";

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
    name: "about",
    svg: "",
    url: "/about",
  },
  {
    name: "projects",
    svg: "",
    url: "/projects",
  },
  {
    name: "activities",
    svg: "",
    url: "/activities",
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
      {sections.map((section) => (
        <StyledNavItems role="menuitem" to={section.url}>
          {section.name.charAt(0).toUpperCase() +
            section.name.slice(1).toLowerCase()}
        </StyledNavItems>
      ))}
    </StyledNavContainer>
  );
};

export default NavBar;
