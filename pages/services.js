import React from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import LandscapeIcon from "@mui/icons-material/Landscape";
import Link from "next/link";

const services = [
  {
    title: "Residential Fencing",
    link: "/residential-fencing",
    description:
      "Enhance your home's privacy and security with stylish, durable fencing solutions.",
    icon: (
      <SecurityIcon
        sx={{ fontSize: 50, color: "primary.main" }}
        aria-label="Residential Fencing Icon"
      />
    ),
  },
  {
    title: "Commercial Fencing",
    link: "/comercial-fencing",
    description:
      "Secure your business premises with strong, professional-grade fencing.",
    icon: (
      <BuildIcon
        sx={{ fontSize: 50, color: "primary.main" }}
        aria-label="Commercial Fencing Icon"
      />
    ),
  },
  {
    title: "Custom Fence Design",
    link: "/custom-fence-design",
    description:
      "Get custom-designed fences that perfectly fit your property’s aesthetics and needs.",
    icon: (
      <LandscapeIcon
        sx={{ fontSize: 50, color: "primary.main" }}
        aria-label="Custom Fence Design Icon"
      />
    ),
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Fencing Services in Houston | HB Fence</title>
        <meta
          name="description"
          content="Discover HB Fence's premium fencing services in Houston, TX. We specialize in residential, commercial, and custom fencing solutions."
        />
        <meta
          name="keywords"
          content="Houston fencing, residential fences, commercial fences, custom fencing solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hbfence.com/services" />
      </Head>

      <Box
        component="main"
        sx={{ minHeight: "100vh", backgroundColor: "#f9f9f9", py: 6 }}
      >
        <header>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Our Fencing Services in Houston
          </Typography>
          <Typography
            variant="h2"
            align="center"
            color="textSecondary"
            sx={{ mb: 4, fontSize: "1.2rem" }}
          >
            High-Quality Solutions for Residential, Commercial, and Custom
            Projects
          </Typography>
        </header>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ px: 4 }}
          component="section"
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} component="article">
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
                elevation={3}
              >
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  {service.icon}
                  <Typography
                    variant="h3"
                    sx={{ mt: 2, fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                  >
                    {service.description}
                  </Typography>
                  <Button component={Link} href={service.link}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/contact"
          >
            Get a Free Quote
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Services;
