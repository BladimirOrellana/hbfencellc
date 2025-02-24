import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import NavBar from "./navBar/nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <Box sx={{ margin: 0, padding: 0, width: "100vw", minHeight: "100vh" }}>
      {/* Global Navigation Bar */}
      <NavBar />

      {/* Page Content - Remove paddingTop if on homepage */}
      <Box component="main" style={{ paddingTop: isHomePage ? "0px" : "72px" }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
