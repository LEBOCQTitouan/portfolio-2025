"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../objects/Avatar";

export const HomeScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        {/* dev */}
        <OrbitControls />
        <gridHelper />
        {/* scene setup */}
        <PerspectiveCamera />
        <pointLight color="#fff" intensity={1000} position={[10, 10, 10]} />
        <ambientLight />
        {/* objects */}
        <Avatar />
      </Canvas>
    </div>
  );
};
