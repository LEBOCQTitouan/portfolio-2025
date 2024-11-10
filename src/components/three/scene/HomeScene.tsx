"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Avatar } from "../objects/Avatar";
import { Computer } from "../objects/Computer";

// TODO : need to import a custom and higher resolution cubebox for the drei Environment
// @see @react-three/drei/Environment
export const HomeScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        {/* dev */}
        <OrbitControls />
        <gridHelper />
        <axesHelper args={[5]} />
        {/* scene setup */}
        <PerspectiveCamera makeDefault fov={50} position={[0, 10, 10]} />
        <ambientLight intensity={1} />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        {/* objects */}
        {/* <Avatar /> */}
        <Computer />
      </Canvas>
    </div>
  );
};
