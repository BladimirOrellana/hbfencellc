"use client";
import React from "react";
import { useUser } from "../context/userContext"; // adjust the path as needed

const GlobalLoadingScreen = ({ children }) => {
  const { loading } = useUser();

  if (loading) {
    return (
      <div style={loadingContainerStyle}>
        <style jsx global>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
        <div style={spinnerStyle}></div>
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

const loadingContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const spinnerStyle = {
  border: "8px solid #f3f3f3",
  borderTop: "8px solid #007bff",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  animation: "spin 1s linear infinite",
};

export default GlobalLoadingScreen;
