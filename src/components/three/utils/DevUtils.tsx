import React from "react";
import * as THREE from "three";
import { folder, useControls } from "leva";
import { Helper, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// TODO : remove SceneLightHelper and insert light to scene
function SceneLightHelper() {
  const light = React.useRef<THREE.DirectionalLight>(null);

  return (
    <directionalLight intensity={3} position={[0, 3, 2]} ref={light}>
      <meshBasicMaterial />
      <Helper type={THREE.DirectionalLightHelper} />
    </directionalLight>
  );
}

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

// NOTE : The X axis is red, the Y axis is green and the Z axis is blue.
// TODO : remove leva for prod
export function Devutils() {
  const {
    showGridHelper,
    gridDivisions,
    showAxesHelper,
    axisHelperSize,
    orbitControls,
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
        orbitControls: true,
      },
      { collapsed: true },
    ),
  });

  return (
    <>
      {showGridHelper && <gridHelper args={[gridDivisions, gridDivisions]} />}
      {showAxesHelper && <axesHelper args={[axisHelperSize]} />}
      {orbitControls && <OrbitControls makeDefault />}
      {/* <SceneCameraHelper /> */}
      <SceneLightHelper />
    </>
  );
}
