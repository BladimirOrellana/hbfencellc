import { createTheme } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors"; // Import lightGreen color

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#43a047", // Green
    },
    secondary: lightGreen, // Material UI lightGreen
    background: {
      default: "#f4f6f8", // Light gray
      paper: "#ffffff", // White
    },
    text: {
      primary: "#333333", // Dark gray
      secondary: "#666666", // Light gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
    },
    button: {
      textTransform: "none", // No uppercase for buttons
    },
  },
});

export default theme;
