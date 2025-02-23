"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const FenceMeasurementTool = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [draw, setDraw] = useState(null);
  const [measurements, setMeasurements] = useState([]);
  const [userAddress, setUserAddress] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [-95.3698, 29.7604],
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

    newMap.on("draw.create", () => {
      updateMeasurements(drawTool);
      // Defer changing the mode to avoid immediate recursive events
      setTimeout(() => {
        if (drawTool.getMode() !== "draw_line_string") {
          drawTool.changeMode("draw_line_string");
        }
      }, 0);
    });
    newMap.on("draw.update", () => updateMeasurements(drawTool));
    newMap.on("draw.delete", () => updateMeasurements(drawTool));

    return () => newMap.remove();
  }, []);

  // Update measurements for each drawn line separately.
  const updateMeasurements = (drawInstance) => {
    if (!drawInstance) return;
    const data = drawInstance.getAll();
    if (data.features.length > 0) {
      const newMeasurements = data.features
        .filter(
          (feature) =>
            feature.geometry &&
            feature.geometry.type === "LineString" &&
            feature.geometry.coordinates.length > 0
        )
        .map((feature) => {
          const cleanFeature = {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: feature.geometry.coordinates,
            },
            properties: {},
          };
          try {
            const measurement = turf.length(cleanFeature, { units: "feet" });
            return { id: feature.id, length: measurement.toFixed(2) };
          } catch (err) {
            console.error(
              "Error calculating length for feature id:",
              feature.id,
              err
            );
            return { id: feature.id, length: "0" };
          }
        });
      setMeasurements(newMeasurements);
    } else {
      setMeasurements([]);
    }
  };

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

  const deleteSelected = () => {
    if (!draw) return;
    const selectedFeatures = draw.getSelected();
    if (selectedFeatures.features.length > 0) {
      draw.delete(selectedFeatures.features.map((f) => f.id));
      updateMeasurements(draw);
      draw.changeMode("draw_line_string");
    }
  };

  const restartDrawing = () => {
    if (!draw) return;
    draw.deleteAll();
    setMeasurements([]);
    draw.changeMode("draw_line_string");
  };

  const totalLength = measurements
    .reduce((acc, m) => acc + parseFloat(m.length), 0)
    .toFixed(2);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <nav style={navStyle}>
        <h2>Fence Measurement Tool</h2>
      </nav>

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

      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

      <div style={infoPanelStyle}>
        <p>
          <strong>Your Address:</strong>{" "}
          {userAddress || "Enter an address to begin"}
        </p>
        <p>
          <strong>Total Length: </strong>
          {totalLength} ft
        </p>

        <div>
          <strong>Measurements:</strong>
          <ul>
            {measurements.map((m, index) => (
              <li key={m.id}>
                Measurement {index + 1}: {m.length} ft
              </li>
            ))}
          </ul>
        </div>

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
  zIndex: 10,
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
  top: "120px",
  left: "10px",
  background: "#fff",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

export default FenceMeasurementTool;
