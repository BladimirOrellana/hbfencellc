import React from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import CssBaseline from "@mui/material/CssBaseline"; // Normalize CSS
import theme from "../theme/theme"; // Import custom theme
import "../styles/globals.css"; // Global styles
import { UserProvider } from "../context/userContext";
import GlobalLoadingScreen from "../components/GlobalLoginScreen";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <GlobalLoadingScreen>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalLoadingScreen>
    </UserProvider>
  );
}

export default MyApp;
