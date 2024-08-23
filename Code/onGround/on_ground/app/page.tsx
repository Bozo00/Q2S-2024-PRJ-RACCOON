// pages/index.tsx
"use client";


import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Rocket from "@/sections/rocket";

const Home: React.FC = () => {
  const [inclination, setInclination] = useState({ x: 0, y: 0, z: 0 });
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const updateData = () => {
      // Replace with your actual method to get data
      setInclination({ x: 0.01, y: 0.02, z: 0.03 }); // Example data
      setAcceleration({ x: 0.1, y: 0.2, z: 0.3 }); // Example data
    };

    const interval = setInterval(updateData, 100); // Update every 100ms
    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Rocket inclination={inclination} acceleration={acceleration} />
      <OrbitControls />
    </Canvas>
  );
};

export default Home;
