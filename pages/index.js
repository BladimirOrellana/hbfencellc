import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Box, Typography, Button, Grid, Avatar } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const saveLocation = async (latitude, longitude) => {
    try {
      await axios.post("/api/visitors-location", { latitude, longitude });
      console.log("Location saved to database");
    } catch (err) {
      console.error("Error saving location:", err.message);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          saveLocation(latitude, longitude);
        },
        (err) => {
          console.error("Error fetching location:", err.message);
          setError("Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <Head>
        <title>HB Fence | Quality Fencing Solutions in Houston, TX</title>
        <meta
          name="description"
          content="HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Get your free quote today!"
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
          sx={{ mb: 2 }} // Add margin-bottom for spacing
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
      </Box>
    </>
  );
}
