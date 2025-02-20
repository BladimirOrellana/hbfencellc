"use client"; // Ensures this runs only on the client-side

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const FenceMeasurementTool = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [draw, setDraw] = useState(null);
  const [length, setLength] = useState(0);
  const [pricePerFoot, setPricePerFoot] = useState(25);
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState("Fetching address...");

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11", // 🌍 Satellite view
      center: [-95.3698, 29.7604], // Default: Houston, TX
      zoom: 14,
    });

    const drawTool = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true,
      },
      defaultMode: "draw_line_string",
    });

    newMap.addControl(drawTool);
    setMap(newMap);
    setDraw(drawTool);

    newMap.on("draw.create", () => updateMeasurement(drawTool));
    newMap.on("draw.update", () => updateMeasurement(drawTool));
    newMap.on("draw.delete", () => setLength(0));

    // Get user's location
    getUserLocation(newMap);

    return () => newMap.remove();
  }, []);

  // Function to get user's current location
  const getUserLocation = (mapInstance) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Fly to user's location on map
          mapInstance.flyTo({
            center: [longitude, latitude],
            zoom: 18,
          });

          // Get address using reverse geocoding
          getAddressFromCoords(longitude, latitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setUserAddress("Could not retrieve location.");
        }
      );
    } else {
      setUserAddress("Geolocation not supported.");
    }
  };

  // Function to get address from coordinates
  const getAddressFromCoords = async (lon, lat) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        setUserAddress(data.features[0].place_name);
      } else {
        setUserAddress("Address not found.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setUserAddress("Error retrieving address.");
    }
  };

  // Function to update the measurement of the drawn fence
  const updateMeasurement = (drawInstance) => {
    if (!drawInstance) return;
    const data = drawInstance.getAll();

    if (data.features.length > 0) {
      let totalLength = 0;
      data.features.forEach((feature) => {
        if (feature.geometry.type === "LineString") {
          totalLength += turf.length(feature, { units: "feet" });
        }
      });
      setLength(totalLength.toFixed(2));
    } else {
      setLength(0);
    }
  };

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

      {/* Info Panel */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "#fff",
          padding: 10,
          borderRadius: "8px",
        }}
      >
        <h3>Fence Measurement Tool</h3>
        <p>
          <strong>Your Address:</strong> {userAddress}
        </p>
        <p>
          Total Length: <strong>{length} ft</strong>
        </p>
        <p>
          Estimated Cost: <strong>${(length * pricePerFoot).toFixed(2)}</strong>
        </p>
        <label>
          Price per Foot:
          <input
            type="number"
            value={pricePerFoot}
            onChange={(e) => setPricePerFoot(Number(e.target.value))}
            style={{ marginLeft: 10, width: "80px" }}
          />
        </label>
      </div>
    </div>
  );
};

export default FenceMeasurementTool;
