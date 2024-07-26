import { styled } from "@mui/material";

export const StyledRedSpan = styled("span")(({ theme }) => ({
  color: "#d90429",
  fontSize: "1.5rem",
  border: "2px solid #d90429",
  borderRadius: "1.7rem",
  padding: ".7rem",
  fontWeight: "600",
}));

export const StyledTagLineWrapper = styled("div")(({}) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  minHeight: "80px",
}));
