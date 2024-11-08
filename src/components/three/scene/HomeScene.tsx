"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
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
        <Environment preset="studio" />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        {/* objects */}
        <Avatar />
      </Canvas>
    </div>
  );
};
