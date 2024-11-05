"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VolumetricLightSource } from "../objects/VolumetricLight";

export const HomeScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        {/* dev */}
        <OrbitControls />
        <gridHelper />
        {/* scene setup */}
        <PerspectiveCamera />
        {/* objects */}
        <VolumetricLightSource />
      </Canvas>
    </div>
  );
};
