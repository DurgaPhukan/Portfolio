import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/durga-phukan-1b125a1a1/",
    icon: () => <LinkedInIcon />,
  },
  {
    name: "GitHub",
    link: "https://github.com/DurgaPhukan",
    icon: () => <GitHubIcon />,
  },
  {
    name: "Email",
    link: "",
    icon: () => (
      <address>
        Written by{" "}
        <a href="mailto:webmaster@example.com">
          <EmailIcon />
        </a>
      </address>
    ),
  },
  {
    name: "Insta",
    link: "",
    icon: () => <InstagramIcon />,
  },
];
