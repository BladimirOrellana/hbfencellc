import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Avatar,
  Rating,
} from "@mui/material";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const placeId = "ChIJUaVkWrSmQIYRAvHwrXtZbtg"; // Replace with your Place ID

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews?placeId=${placeId}`);
        setReviews(response.data); // Set reviews data
      } catch (err) {
        setError("Failed to fetch reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, marginTop: 10 }}>
      <Typography variant="h4" gutterBottom>
        Customer Reviews
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              {/* Avatar and Author Name */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  marginBottom: 1,
                }}
              >
                <Avatar
                  src={review.profile_photo_url} // Avatar image from API
                  alt={review.author_name}
                />
                <Typography variant="h6">{review.author_name}</Typography>
              </Box>

              {/* Rating with Stars */}
              <Rating value={review.rating} readOnly precision={0.5} />

              {/* Review Text */}
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {review.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
