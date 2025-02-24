import { useUser } from "./../context/userContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Button,
  CircularProgress,
} from "@mui/material";

export default function Profile() {
  const { user, loading, setUser, logout } = useUser();
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  // 🔥 Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Preview before upload
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const res = await fetch(`/api/upload?uid=${user.uid}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        setPreviewUrl(null);
        setSelectedImage(null);
      } else {
        console.error("Upload error:", data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Paper
        elevation={3}
        style={{ padding: "2rem", textAlign: "center", borderRadius: "10px" }}
      >
        <Avatar
          src={previewUrl || user?.profileImage || ""}
          style={{
            width: "80px",
            height: "80px",
            margin: "auto",
            backgroundColor: "#1976d2",
            fontSize: "32px",
          }}
        >
          {!previewUrl &&
            !user?.profileImage &&
            `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}
        </Avatar>
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          {user?.firstName} {user?.lastName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {user?.email}
        </Typography>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: "1rem" }}
        />

        {previewUrl && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleImageUpload}
            style={{ marginTop: "1rem" }}
            disabled={uploading}
          >
            {uploading ? <CircularProgress size={24} /> : "Save Image"}
          </Button>
        )}

        <Button
          variant="contained"
          color="secondary"
          onClick={() => logout()}
          style={{ marginTop: "1.5rem" }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
}
