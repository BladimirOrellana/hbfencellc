import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Section 1: Hero */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Background Image with Opacity */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/hb-fence.webp)", // Add your image in public/images
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(40%)", // Adjust opacity by controlling brightness
            zIndex: -1,
          }}
        />
        {/* Content */}
        <Typography variant="h2" component="h1" gutterBottom>
          HB Fence
        </Typography>
        <Typography variant="h6" gutterBottom>
          The ultimate fencing solution for your property.
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

      {/* Section 2: Features */}
      <Box sx={{ py: 8, px: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose HB Fence?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box>
              <img src="/images/wood-fence.jpg" alt="Wood Fence" width="100%" />
              <Typography variant="h6">Wood Fencing</Typography>
              <Typography variant="body1">
                Elegant and durable wood fences for any property.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <img
                src="/images/metal-fence.jpg"
                alt="Metal Fence"
                width="100%"
              />
              <Typography variant="h6">Metal Fencing</Typography>
              <Typography variant="body1">
                Secure and long-lasting metal fences.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <img
                src="/images/custom-gate.jpg"
                alt="Custom Gates"
                width="100%"
              />
              <Typography variant="h6">Custom Gates</Typography>
              <Typography variant="body1">
                Designed to complement your fencing style.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Section 3: Call to Action */}
      <Box
        sx={{
          py: 8,
          px: 4,
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to elevate your property?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/contact"
        >
          Contact Us Today
        </Button>
      </Box>
    </Box>
  );
}
