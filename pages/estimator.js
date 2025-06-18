// /pages/estimator.js
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useReactToPrint } from "react-to-print";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const PRICE_PER_FOOT = 15;

const PrintableEstimate = React.forwardRef(
  ({ sections, totalLength, totalPrice }, ref) => (
    <div ref={ref}>
      <Paper elevation={3} sx={{ p: 2, backgroundColor: "#fff" }}>
        <Typography variant="h6">Fence Estimate Summary</Typography>
        {sections.map((s, i) => (
          <Typography key={s.id}>
            Section {i + 1}: {s.length.toFixed(2)} ft = ${s.price.toFixed(2)}
          </Typography>
        ))}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Total Linear Feet:</strong> {totalLength.toFixed(2)} ft
        </Typography>
        <Typography variant="subtitle1">
          <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
        </Typography>
      </Paper>
    </div>
  )
);

PrintableEstimate.displayName = "PrintableEstimate";

const Estimator = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const draw = useRef(null);
  const [sections, setSections] = useState([]);
  const printRef = useRef();

  const calculateMeasurements = () => {
    const data = draw.current.getAll();
    const newSections = data.features.map((feature) => {
      const length = turf.length(feature, { units: "feet" });
      return {
        id: feature.id,
        length,
        price: length * PRICE_PER_FOOT,
      };
    });
    setSections(newSections);
  };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-95.3698, 29.7604], // Houston, TX
      zoom: 13,
    });

    draw.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true,
      },
    });
    map.current.addControl(draw.current, "top-left");
    map.current.addControl(new mapboxgl.NavigationControl(), "top-left");
    map.current.on("draw.create", calculateMeasurements);
    map.current.on("draw.update", calculateMeasurements);
    map.current.on("draw.delete", calculateMeasurements);
  }, []);

  const totalLength = sections.reduce((sum, s) => sum + s.length, 0);
  const totalPrice = sections.reduce((sum, s) => sum + s.price, 0);

  const handleReset = () => {
    draw.current.deleteAll();
    setSections([]);
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1 }} ref={mapContainer} id="mapbox-container" />

      <PrintableEstimate
        ref={printRef}
        sections={sections}
        totalLength={totalLength}
        totalPrice={totalPrice}
      />

      <Box
        sx={{ p: 2, display: "flex", justifyContent: "space-between", gap: 2 }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={handleReset}
          fullWidth
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrint}
          fullWidth
        >
          Print Estimate
        </Button>
      </Box>

      <style jsx global>{`
        @media print {
          #mapbox-container {
            display: none !important;
          }
        }
      `}</style>
    </Box>
  );
};

export default Estimator;
