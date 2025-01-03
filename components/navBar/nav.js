import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  // Check if the current page is the homepage
  const isHomePage = router.pathname === "/";

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: isHomePage ? "white" : "black", // White for home, black for others
      }}
    >
      <Toolbar
        sx={{
          marginBottom: isHomePage ? 0 : 2,
          // Add bottom margin only for non-home pages
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HB Fence
        </Typography>
        <Box>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/reviews">
            Reviews
          </Button>
          <Button color="inherit" href="/services">
            Services
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
