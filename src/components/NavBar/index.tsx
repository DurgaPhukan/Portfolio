import React from "react";
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

// <NavLink
// onClick={profileDropDownMenuHandler}
// className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
// role="menuitem"
// to={item.link}
// >
