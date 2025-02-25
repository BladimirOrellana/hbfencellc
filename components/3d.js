import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Box } from "@mui/material";

const FenceModel = ({ path, position, scale }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={position} scale={scale} />;
};

const Room3d = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 3, 10], fov: 40 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          {/* Centered Fence Model */}
          <FenceModel
            path="/models/cedarfence.glb"
            position={[0, 0, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          target={[0, 1, 0]}
        />
      </Canvas>
    </Box>
  );
};

export default Room3d;
