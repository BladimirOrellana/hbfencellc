import React from "react";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>404 - Page Not Found | HB Fence</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to HB Fence and explore our quality fencing solutions."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* Content */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "black",
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/"
          sx={{ mt: 2 }}
        >
          Go Back Home
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
