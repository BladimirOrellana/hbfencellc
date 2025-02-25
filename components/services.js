import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF, OrbitControls } from "@react-three/drei";
import { Card, CardContent, Typography, Box } from "@mui/material";

const ServiceCard = ({ modelPath, title, description }) => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  const { scene } = useGLTF(modelPath);

  return (
    <Box sx={{ width: 300, height: 400, display: "inline-block", margin: 2 }}>
      <Canvas style={{ height: 300 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <primitive ref={ref} object={scene} scale={1.5} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card
        sx={{
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const ServiceCards = ({ services }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 4,
      }}
    >
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </Box>
  );
};

export default ServiceCards;
