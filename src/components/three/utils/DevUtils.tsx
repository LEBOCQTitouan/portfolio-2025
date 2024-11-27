import React from "react";
import * as THREE from "three";
import { folder, useControls } from "leva";
import { Helper, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

/**
 * A helper component that renders a Directional Light in the scene
 * along with its helper for visualization.
 */
function SceneLightHelper() {
  const light = React.useRef<THREE.DirectionalLight>(null);

  return (
    <directionalLight intensity={3} position={[0, 3, 2]} ref={light}>
      <meshBasicMaterial />
      <Helper type={THREE.DirectionalLightHelper} />
    </directionalLight>
  );
}

/**
 * A helper component to visualize and animate a Perspective Camera.
 *
 * This function animates the camera's position and ensures it looks
 * at the origin. It also uses a `PerspectiveCamera` helper for debugging.
 * Based on the implementation at: https://drei.pmnd.rs/?path=/story/gizmos-helper--helper-st-2
 */
function SceneCameraHelper() {
  const camera = React.useRef<THREE.PerspectiveCamera>(null);

  // Sample code to animate the camera's position around the origin
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (camera.current) {
      camera.current.lookAt(0, 0, 0);

      camera.current.position.x = Math.sin(t) * 4;
      camera.current.position.z = Math.cos(t) * 4;
    }
  });

  return (
    <>
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
    </>
  );
}

/**
 * Development utilities component for debugging the 3D scene.
 *
 * This component includes tools for visualizing the grid, axes, orbit controls,
 * and helpers for camera and lighting. Controlled via the `Leva` panel.
 */
export function Devutils() {
  const {
    showGridHelper, // Toggle visibility of the grid helper
    gridDivisions, // Number of divisions in the grid
    showAxesHelper, // Toggle visibility of the axes helper
    axisHelperSize, // Size of the axes helper
    orbitControls, // Enable or disable orbit controls
  } = useControls("Devutils", {
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
    orbitControls: folder(
      {
        orbitControls: false,
      },
      { collapsed: true },
    ),
  });

  return (
    <>
      {showGridHelper && <gridHelper args={[gridDivisions, gridDivisions]} />}
      {showAxesHelper && <axesHelper args={[axisHelperSize]} />}
      {orbitControls && <OrbitControls makeDefault />}
      <SceneCameraHelper />
      <SceneLightHelper />
    </>
  );
}
