import React, { useEffect, useState } from "react";

const LocationChecker = () => {
  const [location, setLocation] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState("prompt");

  useEffect(() => {
    // Check if permission was previously granted
    const checkPermission = async () => {
      if (typeof navigator !== "undefined" && navigator.permissions) {
        const status = await navigator.permissions.query({
          name: "geolocation",
        });
        setPermissionStatus(status.state);

        if (status.state === "granted") {
          getUserLocation();
        }

        // Listen for permission changes
        status.onchange = () => {
          setPermissionStatus(status.state);
          if (status.state === "granted") {
            getUserLocation();
          }
        };
      }
    };

    checkPermission();
  }, []);

  const getUserLocation = () => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Store location status in local storage
          localStorage.setItem("userLocationAllowed", "true");
          localStorage.setItem("userLatitude", latitude);
          localStorage.setItem("userLongitude", longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          localStorage.setItem("userLocationAllowed", "false");
        }
      );
    }
  };

  return (
    <div>
      <h2>Location Permission Status: {permissionStatus}</h2>
      {location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <button onClick={getUserLocation}>Allow Location Access</button>
      )}
    </div>
  );
};

export default LocationChecker;
