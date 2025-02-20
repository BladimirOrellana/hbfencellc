import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9f9f9",
        paddingY: 4,
        paddingX: 2,
        fontSize: "14px",
        marginTop: 10,
      }}
    >
      <Container maxWidth="lg">
        {/* Links Section */}
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Services
            </Typography>
            <Button
              component={Link}
              href="/residential-fencing"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Residential
            </Button>
            <br />
            <Button
              component={Link}
              href="/comercial-fencing"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Commercial
            </Button>
            <br />
            <Button
              component={Link}
              href="/custom-fence-design"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Custom Fencing
            </Button>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Button
              component={Link}
              href="/about"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              About Us
            </Button>
            <br />
            <Button
              component={Link}
              href="/reviews"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Reviews
            </Button>
            <br />
            <Button
              component={Link}
              href="/contact"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Contact Us
            </Button>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Support
            </Typography>
            <Button
              component={Link}
              href="/faq"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              FAQs
            </Button>
            <br />
            <Button
              component={Link}
              href="/terms"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Terms of Service
            </Button>
            <br />
            <Button
              component={Link}
              href="/privacy"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Privacy Policy
            </Button>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Typography>Phone: 832-2964721</Typography>
            <Typography>Email: bladimir@hbfencecompany.com</Typography>
            <Typography>
              Address: 15608 S Brentwood St, Channelview, TX 77530
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Legal Section */}
        <Box
          sx={{
            textAlign: "center",
            color: "gray",
            fontSize: "12px",
            marginTop: 2,
          }}
        >
          <Typography>
            © {new Date().getFullYear()} HB Fence. All rights reserved.
          </Typography>
          <Button
            component={Link}
            href="/terms"
            color="inherit"
            sx={{ textTransform: "none", mx: 1 }}
          >
            Terms of Service
          </Button>
          |
          <Button
            component={Link}
            href="/privacy"
            color="inherit"
            sx={{ textTransform: "none", mx: 1 }}
          >
            Privacy Policy
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
