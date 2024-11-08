"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../objects/Avatar";

// TODO : need to import a custom and higher resolution cubebox for the drei Environment
// @see @react-three/drei/Environment
export const HomeScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        {/* dev */}
        <OrbitControls />
        <gridHelper />
        {/* scene setup */}
        <PerspectiveCamera />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment files="/simple-bg.jpg" background />
        {/* objects */}
        <Avatar />
      </Canvas>
    </div>
  );
};
