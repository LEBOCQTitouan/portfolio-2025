"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const VolumetricLightSource = () => {
  return (
    <mesh>
      <sphereGeometry />
    </mesh>
  );
};

export const HomeScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        {/* dev */}
        <OrbitControls />
        <gridHelper />
        {/* scene setup */}
        <PerspectiveCamera />
        <pointLight position={[10, 10, 10]} />
        {/* objects */}
        <VolumetricLightSource />
      </Canvas>
    </div>
  );
};
