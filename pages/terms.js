import React from "react";
import Head from "next/head";
import { Box, Container, Typography, Divider } from "@mui/material";

const TermsOfService = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Terms of Service | HB Fence</title>
        <meta
          name="description"
          content="Read the Terms of Service for HB Fence, covering services, payments, warranties, privacy, and user responsibilities."
        />
        <meta
          name="keywords"
          content="HB Fence Terms, Fencing Services, Fence Installation, Houston, Privacy Policy"
        />
        <meta name="author" content="HB Fence" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hbfencecompany.com/terms" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Terms of Service | HB Fence" />
        <meta
          property="og:description"
          content="Learn about the terms and conditions of HB Fence's services, including warranty, payments, and legal compliance."
        />
        <meta property="og:image" content="/images/hb-fence.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.hbfencecompany.com/terms"
        />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms of Service",
              description:
                "Read the Terms of Service for HB Fence, covering services, payments, warranties, privacy, and user responsibilities.",
              publisher: {
                "@type": "Organization",
                name: "HB Fence",
                url: "https://www.hbfencecompany.com/",
                logo: "https://www.hbfencecompany.com/images/hb-fence.webp",
              },
            }),
          }}
        />
      </Head>

      {/* Terms of Service Content */}
      <Container maxWidth="md" sx={{ paddingY: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          HB Fence - Terms of Service
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          Effective Date: February 19, 2025
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Introduction
          </Typography>
          <Typography variant="body1">
            Welcome to HB Fence. By accessing our website and services, you
            agree to these Terms of Service. If you do not agree, please do not
            use our services.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Services Provided
          </Typography>
          <Typography variant="body1">
            HB Fence offers professional fencing solutions, including wood
            fencing, metal fencing, custom gates, and repair services. Our
            services are available in Houston, TX, and surrounding areas.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. User Responsibilities
          </Typography>
          <Typography variant="body1">
            Users must provide accurate information when requesting services. HB
            Fence is not responsible for any issues arising from incorrect
            information provided by customers.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. Payments & Deposits
          </Typography>
          <Typography variant="body1">
            - Quotes are subject to change based on market conditions. <br />
            - Deposits may be required for custom projects. <br />- Payments are
            due as per the agreed contract terms.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Warranty & Liability
          </Typography>
          <Typography variant="body1">
            - HB Fence provides a limited warranty on fencing materials and
            installation.
            <br />- We are not liable for damage due to natural disasters or
            misuse.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Privacy & Data Collection
          </Typography>
          <Typography variant="body1">
            We collect limited user data, including location , for improving
            services. By using our site, you consent to our Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            7. Termination of Services
          </Typography>
          <Typography variant="body1">
            HB Fence reserves the right to refuse service or terminate a
            contract if the customer violates these Terms.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            8. Changes to Terms
          </Typography>
          <Typography variant="body1">
            We may update these Terms from time to time. Continued use of our
            services constitutes acceptance of the updated Terms.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            9. Contact Information
          </Typography>
          <Typography variant="body1">
            For questions regarding these Terms, contact us at:
          </Typography>
          <Typography>
            📍 **HB Fence** <br />
            📞 **832-296-4721** <br />
            📧 **bladimir@hbfencecompany.com** <br />
            🌎 **[www.hbfencecompany.com](https://www.hbfencecompany.com)**
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default TermsOfService;
