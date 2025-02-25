import React, { useRef } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "./../../context/userContext";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";

const RotatingText = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <Text3D
      ref={ref}
      font="/fonts/helvetiker_regular.typeface.json"
      size={2}
      height={0.3}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
    >
      HB Fence
      <meshStandardMaterial attach="material" color="limegreen" />
    </Text3D>
  );
};

const NavBar = () => {
  const { user } = useUser();
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  if (router.pathname === "/Fence-measurement-page") {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "none",
        color: isHomePage ? "white" : "black", // Change text color based on page
        zIndex: 1000,
      }}
    >
      <Toolbar>
        <Canvas style={{ width: 150, height: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingText />
          <OrbitControls />
        </Canvas>
        <Box>
          {["Home", "Reviews", "Services", "Contact", "3d-fence-panel"].map(
            (label, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                sx={{ color: isHomePage ? "white" : "black" }} // Apply color dynamically
              >
                {label}
              </Button>
            )
          )}
          {user ? (
            <Button
              color="inherit"
              component={Link}
              href="/profile"
              sx={{ color: isHomePage ? "white" : "black" }}
            >
              Profile
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              href="/login"
              sx={{ color: isHomePage ? "white" : "black" }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
