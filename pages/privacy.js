import React from "react";
import Head from "next/head";
import { Box, Container, Typography, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Privacy Policy | HB Fence</title>
        <meta
          name="description"
          content="Read the Privacy Policy of HB Fence to understand how we collect, use, and protect your personal data."
        />
        <meta
          name="keywords"
          content="HB Fence Privacy Policy, Fence Installation Privacy, Data Protection, Houston Fence Services"
        />
        <meta name="author" content="HB Fence" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hbfencecompany.com/privacy" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Privacy Policy | HB Fence" />
        <meta
          property="og:description"
          content="Learn how HB Fence protects your privacy and manages your personal information securely."
        />
        <meta property="og:image" content="/images/hb-fence.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.hbfencecompany.com/privacy"
        />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy",
              description:
                "Read the Privacy Policy of HB Fence to understand how we collect, use, and protect your personal data.",
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

      {/* Privacy Policy Content */}
      <Container maxWidth="md" sx={{ paddingY: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          HB Fence - Privacy Policy
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
            Welcome to HB Fence. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your data when you visit our
            website or use our services.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Information We Collect
          </Typography>
          <Typography variant="body1">
            We only collect necessary personal information to provide and
            improve our services.
          </Typography>
          <Typography variant="body2">
            ✅ **Personal Information You Provide:**
            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your address (if provided for a service request)</li>
            </ul>
          </Typography>
          <Typography variant="body2">
            ✅ **Automatically Collected Information:**
            <ul>
              <li>Pages visited on our website</li>
              <li>Time spent on our website</li>
              <li>location if you allow location access</li>
            </ul>
          </Typography>
          <Typography variant="body2">
            ❌ **What We Do NOT Collect:**
            <ul>
              <li>We do NOT track users across different websites.</li>
              <li>
                We do NOT sell or share your personal information with third
                parties for advertising.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. How We Use Your Information
          </Typography>
          <Typography variant="body1">
            Your data is used for:
            <ul>
              <li>Providing and improving our fencing services.</li>
              <li>
                Processing service requests and communicating with customers.
              </li>
              <li>Analyzing website performance to enhance user experience.</li>
              <li>Complying with legal obligations.</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. Cookies & Tracking Technologies
          </Typography>
          <Typography variant="body1">
            We use limited cookies for:
            <ul>
              <li>Basic website functionality (session cookies).</li>
              <li>Anonymous analytics (Google Analytics).</li>
            </ul>
            You can disable cookies in your browser settings.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Data Security
          </Typography>
          <Typography variant="body1">
            We take security seriously and implement:
            <ul>
              <li>SSL Encryption to protect your data.</li>
              <li>Secure servers for storing limited user information.</li>
              <li>Restricted access to personal data.</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Your Rights
          </Typography>
          <Typography variant="body1">
            You have the right to:
            <ul>
              <li>Request access to your data.</li>
              <li>Correct any inaccurate information.</li>
              <li>Request deletion of your data.</li>
            </ul>
            📧 To exercise your rights, contact us at:
            **bladimir@hbfencecompany.com**
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            7. Changes to This Policy
          </Typography>
          <Typography variant="body1">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated effective date.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            8. Contact Us
          </Typography>
          <Typography variant="body1">
            For any questions regarding this Privacy Policy, contact us at:
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

export default PrivacyPolicy;
