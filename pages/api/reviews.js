import axios from "axios";

export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY; // Use environment variable for security
    const placeId = process.env.NEXT_PUBLIC_HB_FENCE_PLACE_ID; // Replace with your Place ID

    // Build Google Places API URL
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    // Fetch data from Google Places API
    const response = await axios.get(url);

    // Return reviews data to the client
    if (response.data && response.data.result && response.data.result.reviews) {
      res.status(200).json(response.data.result.reviews);
    } else {
      res.status(404).json({ error: "No reviews found." });
    }
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: "Failed to fetch reviews." });
  }
}
