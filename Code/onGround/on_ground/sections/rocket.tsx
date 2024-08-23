// components/Rocket.tsx
"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface RocketProps {
  inclination: Vector3;
  acceleration: Vector3;
}

const Rocket: React.FC<RocketProps> = ({ inclination, acceleration }) => {
  const rocketRef = useRef<THREE.Mesh>(null);

  // Update the rocket's rotation and position based on inclination and acceleration
  useFrame(() => {
    if (rocketRef.current) {
      rocketRef.current.rotation.x = inclination.x;
      rocketRef.current.rotation.y = inclination.y;
      rocketRef.current.rotation.z = inclination.z;

      // Optionally update position based on acceleration
      rocketRef.current.position.x += acceleration.x * 0.01;
      rocketRef.current.position.y += acceleration.y * 0.01;
      rocketRef.current.position.z += acceleration.z * 0.01;
    }
  });

  return (
    <mesh ref={rocketRef}>
      <cylinderGeometry args={[0.5, 0.5, 5, 32]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Rocket;
