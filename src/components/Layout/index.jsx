import { Container, Box } from "@mui/material";

import LangBar from "./LangBar";
import LogoUserBar from "./LogoUserBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ backgroundColor: "#000" }}>
        <LangBar />
        <LogoUserBar />
        <NavBar />
        {children}
        <Footer/>
      </Box>
    </Container>
  );
};

export default Layout;
