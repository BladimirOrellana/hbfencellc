import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Box, Typography, Button, Grid, Avatar } from "@mui/material";
import Link from "next/link";
import EnhancifyWidget from "../components/EnhancifyWidget";
import FinancingBanner from "../components/financingBanner";
import EnhancifyPaymentCalculator from "../components/EnhancifyPaymentCalculator";
import FenceMeasurementTool from "../components/FenceMeasurementTool";

export default function Home() {
  const [error, setError] = useState(null);
  const [locationAllowed, setLocationAllowed] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasAllowedLocation = localStorage.getItem("userLocationAllowed");

      if (hasAllowedLocation === "true") {
        setLocationAllowed(true);
        console.log("User has previously allowed location access.");
      } else {
        setLocationAllowed(false);
      }
    }
  }, []);

  const requestLocationAccess = () => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationAllowed(true);
          localStorage.setItem("userLocationAllowed", "true");
          localStorage.setItem("userLatitude", latitude);
          localStorage.setItem("userLongitude", longitude);
          console.log(
            `User Location: Latitude ${latitude}, Longitude ${longitude}`
          );

          // Send location to backend (optional)
          axios
            .post("/api/visitor-location", { latitude, longitude })
            .then((res) => console.log("Location saved:", res.data))
            .catch((err) => console.error("Error saving location:", err));
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationAllowed(false);
          localStorage.setItem("userLocationAllowed", "false");
        }
      );
    }
  };

  return (
    <>
      <Head>
        <title>HB Fence | Quality Fencing Solutions in Houston, TX</title>
        <meta
          name="description"
          content="HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="Fence financing, HB Fence financing, fence loans, Houston fencing solutions, fencing payment plans"
        />
        <meta
          property="og:title"
          content="HB Fence | Quality Fencing Solutions in Houston, TX"
        />
        <meta
          property="og:description"
          content="HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Explore our financing options!"
        />
        <meta property="og:image" content="/images/hb-fence.webp" />
        <meta
          property="og:url"
          content="https://www.hbfencecompany.com/financing"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              name: "HB Fence Financing",
              description:
                "HB Fence provides flexible financing options for your fencing project in Houston, TX.",
              provider: {
                "@type": "Organization",
                name: "HB Fence",
                url: "https://www.hbfencecompany.com/financing",
              },
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
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
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/hb-fence.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(40%)",
            zIndex: -1,
          }}
          role="img"
          aria-label="A high-quality fence installation by HB Fence"
        />
        <Typography variant="h2" component="h1" gutterBottom>
          HB Fence
        </Typography>
        <Typography variant="h6" gutterBottom>
          The ultimate fencing solution for your property.
        </Typography>

        {/* Get a Free Quote Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          href="/contact"
          sx={{ mb: 2 }}
        >
          Get a Free Quote
        </Button>

        {/* Call Us Button */}
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="tel:8322964721"
        >
          Call Us Now
        </Button>

        {/* Location Access */}
        {!locationAllowed && (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
            onClick={requestLocationAccess}
          >
            Allow Location Access
          </Button>
        )}
      </Box>

      {/* Financing Section */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#f4f4f4",
          py: 6,
          mt: 6,
        }}
      >
        {/* Get a Free Quote Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          href="/Fence-measurement-page"
          sx={{ mb: 2 }}
        >
          Online estimate
        </Button>
        <Typography
          variant="h4"
          color="textSecondary"
          sx={{
            mb: 3,
            maxWidth: "80%",
            width: "100%",
          }}
        >
          Don't let budget constraints hold you back from securing your property
          with a high-quality fence. Our financing options make it easy to get
          started today!!
        </Typography>

        <FinancingBanner />
      </Box>
    </>
  );
}
