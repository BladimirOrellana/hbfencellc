import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: isHomePage ? "white" : "black",
      }}
    >
      <Toolbar sx={{ marginBottom: isHomePage ? 0 : 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HB Fence
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/reviews">
            Reviews
          </Button>
          <Button color="inherit" component={Link} href="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
