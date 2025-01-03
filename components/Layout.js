import React from "react";
import NavBar from "./navBar/nav";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ margin: 0, padding: 0, width: "100vw", minHeight: "100vh" }}>
      {/* Global Navigation Bar */}
      <NavBar />
      {/* Page Content */}
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default Layout;
