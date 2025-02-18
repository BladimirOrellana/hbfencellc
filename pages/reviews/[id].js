import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import { Box, Typography, Avatar, Rating, Button } from "@mui/material";
import Link from "next/link";

// Fetch data on the server
export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const response = await axios.get(`/api/reviews/${id}`);
    return { props: { review: response.data } };
  } catch (error) {
    return { notFound: true };
  }
}

const ReviewPage = ({ review }) => {
  const router = useRouter();

  return (
    <>
      <Seo
        title={`${review.author_name}'s Review - HB Fence`}
        description={review.text.substring(0, 150)}
        url={`https://www.hbfence.com/reviews/${review.id}`}
      />

      <Box sx={{ padding: 4, maxWidth: "600px", margin: "0 auto", mt: 10 }}>
        <Button
          variant="outlined"
          component={Link}
          href="/reviews"
          sx={{ marginBottom: 2 }}
        >
          Back to Reviews
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={review.profile_photo_url}
            alt={review.author_name}
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h4">{review.author_name}</Typography>
        </Box>

        <Rating value={review.rating} readOnly precision={0.5} sx={{ mt: 1 }} />

        <Typography variant="body1" sx={{ mt: 2 }}>
          {review.text}
        </Typography>
      </Box>
    </>
  );
};

export default ReviewPage;
