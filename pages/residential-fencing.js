import React from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Link from "next/link";

const fencingTypes = [
  {
    title: "Wood Fencing",
    description:
      "Wood fences offer privacy, security, and a classic aesthetic. Popular styles include privacy fences, picket fences, and shadowbox designs.",
  },
  {
    title: "Vinyl (PVC) Fencing",
    description:
      "Vinyl fences are durable, low-maintenance, and resistant to weathering. They come in various styles and colors, making them versatile for residential properties.",
  },
  {
    title: "Aluminum Fencing",
    description:
      "Lightweight, durable, and corrosion-resistant, aluminum fences are perfect for both security and decorative purposes with minimal maintenance.",
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Cost-effective and durable, chain-link fences are ideal for security and boundary definition. Privacy slats or landscaping can enhance seclusion.",
  },
];

const ResidentialFencing = () => {
  return (
    <>
      <Head>
        <title>Residential Fencing Services | HB Fence</title>
        <meta
          name="description"
          content="Explore HB Fence's residential fencing solutions, including wood, vinyl, aluminum, and chain-link fences. Enhance your home's security and aesthetics."
        />
        <link
          rel="canonical"
          href="https://www.hbfence.com/residentialfencing"
        />
      </Head>

      <Box
        sx={{ minHeight: "100vh", backgroundColor: "#f9f9f9", py: 6, px: 2 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Residential Fencing Solutions
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 4 }}
        >
          Enhance privacy, security, and curb appeal with our premium fencing
          options.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {fencingTypes.map((fence, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {fence.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                  >
                    {fence.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Factors to Consider When Choosing a Residential Fence:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Purpose: Determine if the goal is privacy, security, or aesthetic enhancement." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Material: Consider durability, maintenance requirements, and cost." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Style: Choose a design that complements your home's architecture." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Local Regulations: Be aware of building codes and HOA rules." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Climate: Select materials suitable for your region's weather conditions." />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ textAlign: "center", mt: 4 }}>
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

export default ResidentialFencing;
