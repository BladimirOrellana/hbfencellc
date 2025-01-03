import React from "react";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>HB Fence | Quality Fencing Solutions in Houston, TX</title>
        <meta
          name="description"
          content="HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="Fencing, Fence Installation, Houston, HB Fence, Wood Fencing, Metal Fencing"
        />
        <meta name="author" content="HB Fence" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://hbfencellc-dcaebc9ff941.herokuapp.com/"
        />
        <meta
          property="og:title"
          content="HB Fence | Quality Fencing Solutions in Houston, TX"
        />
        <meta
          property="og:description"
          content="HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Get your free quote today!"
        />
        <meta
          property="og:url"
          content="https://hbfencellc-dcaebc9ff941.herokuapp.com/"
        />
        <meta property="og:image" content="/images/hb-fence.webp" />
        <meta property="og:type" content="website" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "HB Fence",
              address: {
                streetAddress: "123 Fence Lane",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77001",
                addressCountry: "US",
              },
              telephone: "+1-800-555-0199",
              url: "https://hbfencellc-dcaebc9ff941.herokuapp.com/",
              image:
                "https://hbfencellc-dcaebc9ff941.herokuapp.com/images/hb-fence.webp",
              description:
                "HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Get your free quote today!",
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
        {/* Background Image with Opacity */}
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
            filter: "brightness(40%)", // Adjust opacity via brightness
            zIndex: -1, // Send background behind the content
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
    </>
  );
}
