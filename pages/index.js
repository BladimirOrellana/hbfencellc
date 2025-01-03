import React from "react";
import {
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "../components/navBar/nav";

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: "url(images/hb-fence.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          HB Fence - Quality Fencing Solutions
        </Typography>
        <Typography variant="h6" gutterBottom>
          We provide the best fencing options for residential and commercial
          properties in Houston, TX.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
        >
          Get a Free Quote
        </Button>
      </Box>
    </Box>
  );
}
