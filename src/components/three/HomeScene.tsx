"use client"; // client side rendering

import { Canvas } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Mesh } from "three";

const Box = () => {
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
    console.log(Boolean(meshRef.current));
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
};

export const HomeScene = () => {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
};
