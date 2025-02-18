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

const designFeatures = [
  {
    title: "Personalized Styles",
    description:
      "Tailor your fence design to match your home's architecture and landscape. Choose from modern, rustic, or classic styles to create a unique look.",
  },
  {
    title: "Material Options",
    description:
      "Select from a variety of high-quality materials such as wood, vinyl, aluminum, or composite to meet your aesthetic and durability needs.",
  },
  {
    title: "Custom Dimensions",
    description:
      "Design fences with custom heights, widths, and layouts to fit any property size and requirement.",
  },
  {
    title: "Enhanced Features",
    description:
      "Incorporate additional features like decorative tops, gates, privacy panels, or integrated lighting to enhance functionality and appeal.",
  },
];

const CustomFenceDesign = () => {
  return (
    <>
      <Head>
        <title>Custom Fence Design | HB Fence</title>
        <meta
          name="description"
          content="Create unique, personalized fences with HB Fence's custom design services. Choose your style, materials, and features for a perfect fit."
        />
        <link
          rel="canonical"
          href="https://www.hbfence.com/custom-fence-design"
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
          Custom Fence Design
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 4 }}
        >
          Design fences that reflect your style while ensuring security and
          privacy.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {designFeatures.map((feature, index) => (
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
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Why Choose Custom Fence Design?
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Unique Aesthetics: Stand out with designs that reflect your personality and complement your home." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Flexible Material Choices: Use materials that suit your preferences for durability and style." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tailored Functionality: Add gates, privacy panels, or decorative features to meet specific needs." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Expert Craftsmanship: Benefit from professional design and installation for long-lasting quality." />
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
            Start Your Custom Design
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomFenceDesign;
