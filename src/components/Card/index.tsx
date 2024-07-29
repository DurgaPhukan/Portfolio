import { Card as MuiCard, styled } from "@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
  padding: "1.5rem",
  border: `1px solid ${theme.palette}`,
  borderRadius: "5px",
}));

export default Card;
