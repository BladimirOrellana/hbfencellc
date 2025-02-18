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
import Link from "next/link";

const coreValues = [
  {
    title: "Quality Craftsmanship",
    description:
      "We take pride in delivering fences built with precision, durability, and attention to detail, ensuring they stand the test of time.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Our clients are at the heart of everything we do. We work closely with you to understand your needs and provide tailored solutions.",
  },
  {
    title: "Integrity & Trust",
    description:
      "Honesty and transparency are the foundations of our business. We build not just fences but lasting relationships with our customers.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | HB Fence</title>
        <meta
          name="description"
          content="Learn about HB Fence, a trusted fencing company dedicated to providing top-quality fencing solutions with a focus on craftsmanship, customer satisfaction, and integrity."
        />
        <link rel="canonical" href="https://www.hbfence.com/about" />
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
          About HB Fence
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 4 }}
        >
          Providing Quality Fencing Solutions with a Commitment to Excellence
        </Typography>

        <Box
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography variant="body1" color="textSecondary">
            At HB Fence, we specialize in delivering high-quality fencing
            solutions tailored to meet the unique needs of residential and
            commercial properties. Our team of experienced professionals is
            passionate about creating secure, durable, and aesthetically
            pleasing fences that enhance the value and safety of your property.
          </Typography>
        </Box>

        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Our Core Values
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/contact"
          >
            Contact Us Today
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
