import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background-color: #0f1a2b !important;
`;

const StyledTypography = styled(Typography)`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const StyledButton = styled(Button)`
  color: rgba(255, 255, 255, 0.7) !important;
  background-color: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 25px !important;
  padding: 8px 20px;
  text-transform: none !important;
  transition: background-color 0.3s !important;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3) !important;
    transition: background-color 0.3s !important;
  }
`;

const Nav = () => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <StyledTypography variant="h6">Logger App</StyledTypography>
          <div style={{ flexGrow: 1 }} />
          <StyledButton variant="outlined">Login</StyledButton>
          <StyledButton variant="outlined" style={{ marginLeft: "10px" }}>
            Sign Up
          </StyledButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Nav;
