import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Box } from "@mui/material";

const FenceModel = ({ url, position, scale }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={position} scale={scale} />;
};

const FenceShowroom = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 3, 10], fov: 40 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          {/* Centered Fence Model from GitHub Releases */}
          <FenceModel
            url="https://github.com/BladimirOrellana/hb-fence-2025/releases/download/v3.0/cedarfence.glb"
            position={[0, 0, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          target={[0, 1, 0]}
        />
      </Canvas>
    </Box>
  );
};

export default FenceShowroom;
