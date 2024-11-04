"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Box = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
};

export const HomeScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        <OrbitControls />
        <PerspectiveCamera />
        <Box />
        <pointLight position={[10, 10, 10]} />
        <gridHelper />
      </Canvas>
    </div>
  );
};
