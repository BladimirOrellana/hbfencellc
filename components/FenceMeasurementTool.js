"use client"; // Ensure this runs only on the client-side

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
  const [userAddress, setUserAddress] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9", // High-quality satellite view
      center: [-95.3698, 29.7604], // Default: Houston, TX
      zoom: 16,
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

    return () => newMap.remove();
  }, []);

  // Function to update the fence measurement
  const updateMeasurement = (drawInstance) => {
    if (!drawInstance) return;
    const data = drawInstance.getAll();
    let totalLength = 0;

    if (data.features.length > 0) {
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

  // Search for address and move the map to the house location
  const searchAddress = async () => {
    if (!inputAddress) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          inputAddress
        )}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();

      if (data.features.length > 0) {
        const { center, place_name } = data.features[0];

        setUserAddress(place_name);
        if (map) {
          map.flyTo({ center, zoom: 18 });
        }
      } else {
        alert("Address not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert("Error retrieving address. Please check your input.");
    }
  };

  // Undo last drawn point
  const undoLastPoint = () => {
    if (!draw) return;
    const data = draw.getAll();
    if (data.features.length > 0) {
      const lastFeature = data.features[data.features.length - 1];
      if (lastFeature.geometry.coordinates.length > 2) {
        lastFeature.geometry.coordinates.pop();
        draw.setFeature(lastFeature);
        updateMeasurement(draw);
      }
    }
  };

  // Delete the selected line
  const deleteSelected = () => {
    if (!draw) return;
    const selectedFeatures = draw.getSelected();
    if (selectedFeatures.features.length > 0) {
      draw.delete(selectedFeatures.features.map((f) => f.id));
      setLength(0);
    }
  };

  // Restart everything (clear all drawings)
  const restartDrawing = () => {
    if (!draw) return;
    draw.deleteAll();
    setLength(0);
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* Navigation Placeholder (Replace with your Nav component if needed) */}
      <nav style={navStyle}>
        <h2>Fence Measurement Tool</h2>
      </nav>

      {/* Address Search Input (Now below the navbar) */}
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Enter your address..."
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
          style={inputStyle}
        />
        <button onClick={searchAddress} style={buttonStyle}>
          Find Address
        </button>
      </div>

      {/* Map Container */}
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

      {/* Info Panel */}
      <div style={infoPanelStyle}>
        <p>
          <strong>Your Address:</strong>{" "}
          {userAddress || "Enter an address to begin"}
        </p>
        <p>
          Total Length: <strong>{length} ft</strong>
        </p>

        {/* Buttons */}
        <button onClick={undoLastPoint} style={buttonStyle}>
          Undo Last Point
        </button>
        <button onClick={deleteSelected} style={buttonStyle}>
          Delete Selected
        </button>
        <button onClick={restartDrawing} style={buttonStyle}>
          Restart
        </button>
      </div>
    </div>
  );
};

// Styles
const navStyle = {
  width: "100%",
  height: "60px",
  backgroundColor: "#007bff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
};

const searchContainerStyle = {
  position: "relative",
  width: "100%",
  background: "#fff",
  padding: "15px",
  display: "flex",
  justifyContent: "center",
  gap: "5px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  zIndex: 10, // Ensures it stays above the map
};

const inputStyle = {
  padding: "8px",
  fontSize: "14px",
  width: "250px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  padding: "8px 12px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
};

const infoPanelStyle = {
  position: "absolute",
  top: "120px", // Positioned below the search bar
  left: "10px",
  background: "#fff",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

export default FenceMeasurementTool;
