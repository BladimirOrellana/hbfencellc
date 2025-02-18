import React from "react";
import NavBar from "./navBar/nav";
import { Box } from "@mui/material";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ margin: 0, padding: 0, width: "100vw", minHeight: "100vh" }}>
      {/* Global Navigation Bar */}
      <NavBar />
      {/* Page Content */}
      <Box component="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
