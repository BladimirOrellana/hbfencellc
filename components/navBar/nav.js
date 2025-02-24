import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "./../../context/userContext";

const NavBar = () => {
  const { user, loading, logout } = useUser();
  const router = useRouter();

  // Hide NavBar on specific pages
  if (router.pathname === "/Fence-measurement-page") {
    return null;
  }

  const isHomePage = router.pathname === "/";

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white
        backdropFilter: "blur(10px)", // Blur effect for glassmorphism
        WebkitBackdropFilter: "blur(10px)", // Safari support
        boxShadow: "none",
        color: isHomePage ? "white" : "black",
        zIndex: 1000, // Ensure Navbar stays on top
      }}
    >
      <Toolbar>
        {/* Clickable HB Fence Typography */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          component={Link}
          href="/"
          passHref
          style={{
            textDecoration: "none",
            color: isHomePage ? "white" : "black",
          }}
        >
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

          {user ? (
            <Button color="inherit" component={Link} href="/profile">
              Profile
            </Button>
          ) : (
            <Button color="inherit" component={Link} href="/login">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
