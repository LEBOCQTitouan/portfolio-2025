"use client"; // client side rendering

import styles from "./HomeScene.module.css";

import React from "react";
import * as THREE from "three";
import {
  Helper,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Computer } from "../objects/Computer";
import { folder, useControls } from "leva";

// NOTE : based on https://codesandbox.io/p/sandbox/multiple-views-with-uniform-controls-r9w2ob?file=/src/App.js
// TODO : remove leva for prod
function SceneCamera() {
  const {
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    orthographic,
  } = useControls("Camera", {
    orthographic: true,

    position: folder(
      {
        positionX: { value: 0, min: -10, max: 10, step: 0.1 },
        positionY: { value: 0, min: -10, max: 10, step: 0.1 },
        positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
      },
      { collapsed: true },
    ),

    rotation: folder(
      {
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      },
      { collapsed: true },
    ),
  });

  return !orthographic ? (
    <PerspectiveCamera
      makeDefault
      position={[positionX, positionY, positionZ]}
      rotation={[rotationX, rotationY, rotationZ]}
      fov={25}
    />
  ) : (
    <OrthographicCamera
      makeDefault
      position={[positionX, positionY, positionZ]}
      rotation={[rotationX, rotationY, rotationZ]}
    />
  );
}

SceneCamera.displayName = "SceneCamera";

// NOTE : CameraHelper is a dev function used to preview the final camera animation and based on https://drei.pmnd.rs/?path=/story/gizmos-helper--helper-st-2
// TODO : remove Camera helper and bake in animations in the SceneCamera Component
function SceneCameraHelper() {
  const camera = React.useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (camera.current) {
      camera.current.lookAt(0, 0, 0);

      camera.current.position.x = Math.sin(t) * 4;
      camera.current.position.z = Math.cos(t) * 4;
    }
  });

  return (
    <PerspectiveCamera
      makeDefault={false}
      position={[0, 3, 3]}
      near={1}
      far={4}
      ref={camera}
    >
      <meshBasicMaterial />

      <Helper type={THREE.CameraHelper} />
    </PerspectiveCamera>
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
      <SceneCameraHelper />
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
