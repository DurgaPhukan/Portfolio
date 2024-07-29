import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { StyledLink } from "./styles";

export interface links {
  name: string;
  link: string;
  icon: () => ReactNode;
}

const iconStyle = { fontSize: "3rem", color: "#FFFFFF" };

export const socialLinks: links[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/durga-phukan-1b125a1a1/",
    icon: () => (
      <StyledLink to="https://www.linkedin.com/in/durga-phukan-1b125a1a1/">
        <LinkedInIcon style={iconStyle} />
      </StyledLink>
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com/DurgaPhukan",
    icon: () => (
      <StyledLink to={"https://github.com/DurgaPhukan"}>
        <GitHubIcon style={iconStyle} />
      </StyledLink>
    ),
  },
  {
    name: "Email",
    link: "",
    icon: () => (
      //   <address>
      <StyledLink to="mailto:webmaster@example.com">
        <EmailIcon style={iconStyle} />
      </StyledLink>
      //   </address>
    ),
  },
  {
    name: "Insta",
    link: "https://www.instagram.com/explorer_404_",
    icon: () => (
      <StyledLink
        // style={{ textDecoration: "none" }}
        to="https://www.instagram.com/explorer_404_"
      >
        <InstagramIcon style={iconStyle} />
      </StyledLink>
    ),
  },
];
