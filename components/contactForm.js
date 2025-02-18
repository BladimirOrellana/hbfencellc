import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import Head from "next/head";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | HB Fence</title>
        <meta
          name="description"
          content="Get in touch with HB Fence for all your fencing needs. Fill out the form, and we'll get back to you shortly!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hbfence.com/contact" />
      </Head>

      <Container maxWidth="sm">
        <Box
          component="section"
          sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2 }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Contact Us
          </Typography>

          {success && (
            <Alert severity="success" role="alert">
              Message sent successfully!
            </Alert>
          )}
          {error && (
            <Alert severity="error" role="alert">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit} aria-label="Contact Form">
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <Box textAlign="center" mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ContactForm;
