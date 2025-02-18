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
    title: "Chain-Link Fencing",
    description:
      "Durable and cost-effective, chain-link fences provide clear boundaries without obstructing visibility, ideal for security purposes. They can be enhanced with privacy slats if needed.",
  },
  {
    title: "Aluminum Fencing",
    description:
      "Lightweight, corrosion-resistant, and low-maintenance, aluminum fences offer a sleek, modern look and long-lasting durability for commercial properties.",
  },
  {
    title: "Steel Palisade Fencing",
    description:
      "Designed for high-security applications, steel palisade fencing features vertical steel pales with pointed tops, acting as a strong deterrent against intruders.",
  },
  {
    title: "Vinyl (PVC) Fencing",
    description:
      "Vinyl fences are durable, low-maintenance, and weather-resistant, making them a versatile choice for commercial properties seeking both security and aesthetics.",
  },
];

const CommercialFencing = () => {
  return (
    <>
      <Head>
        <title>Commercial Fencing Services | HB Fence</title>
        <meta
          name="description"
          content="Discover HB Fence's commercial fencing solutions, including chain-link, aluminum, steel palisade, and vinyl fences. Secure your business with style and durability."
        />
        <link
          rel="canonical"
          href="https://www.hbfence.com/commercial-fencing"
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
          Commercial Fencing Solutions
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 4 }}
        >
          Secure your business premises with our range of durable and reliable
          fencing options.
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
            Benefits of Commercial Fencing:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Enhanced Security: Acts as the first line of defense against theft and unauthorized access." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Property Demarcation: Clearly defines property boundaries, preventing encroachment issues." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Controlled Access: Regulate entry points efficiently with integrated gates and fencing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Aesthetic Appeal: Enhances the professional look of your business premises." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Increased Property Value: Boosts the value of your property through improved security and appearance." />
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
            Request a Free Quote
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CommercialFencing;
