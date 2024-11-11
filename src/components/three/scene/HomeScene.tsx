"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Computer } from "../objects/Computer";
import { folder, useControls } from "leva";
// TODO : remove leva for prod
function SceneCamera() {
  const {
    zoom,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    near,
    far,
  } = useControls("Camera", {
    zoom: { value: 60, min: 1, max: 200, step: 0.1 },
    near: { value: 0.01, min: 0.01, max: 1, step: 0.01 },
    far: { value: 100, min: 1, max: 200, step: 1 },

    position: folder(
      {
        positionX: { value: -3.7, min: -10, max: 10, step: 0.1 },
        positionY: { value: 7.4, min: -10, max: 10, step: 0.1 },
        positionZ: { value: 5.0, min: -10, max: 10, step: 0.1 },
      },
      { collapsed: true },
    ),

    rotation: folder(
      {
        rotationX: { value: -0.4, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationY: { value: -0.6, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationZ: { value: -0.25, min: -Math.PI, max: Math.PI, step: 0.01 },
      },
      { collapsed: true },
    ),
  });

  return (
    <OrthographicCamera
      makeDefault
      zoom={zoom}
      position={[positionX, positionY, positionZ]}
      rotation={[rotationX, rotationY, rotationZ]}
      near={near}
      far={far}
    />
  );
}

// TODO : remove leva for prod
function Devutils() {
  const { showGridHelper, gridDivisions, showAxesHelper, axisHelperSize } =
    useControls("Devutils", {
      grid: folder(
        {
          showGridHelper: { value: true },
          gridDivisions: { value: 10, min: 1, max: 50, step: 2 },
        },
        { collapsed: true },
      ),
      axeHelper: folder(
        {
          showAxesHelper: { value: false },
          axisHelperSize: { value: 10, min: 1, max: 50, step: 2 },
        },
        { collapsed: true },
      ),
    });

  return (
    <>
      {showGridHelper && <gridHelper args={[gridDivisions, gridDivisions]} />}
      {showAxesHelper && <axesHelper args={[axisHelperSize]} />}
    </>
  );
}

// TODO : need to import a custom and higher resolution cubebox for the drei Environment
// @see @react-three/drei/Environment
export function HomeScene() {
  return (
    <div className={styles.scene}>
      <Canvas>
        <color attach="background" args={["#f0f0f0"]} />
        <SceneCamera />
        <Devutils />
        {/* scene setup */}
        <ambientLight intensity={0.5} />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        {/* objects */}
        <Computer />
      </Canvas>
    </div>
  );
}
