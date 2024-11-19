"use client"; // client side rendering

import React, { useEffect } from "react";
import * as THREE from "three";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Computer } from "../objects/Computer";
import { useControls } from "leva";
import { Devutils } from "../utils/DevUtils";
import { useInView } from "react-intersection-observer";

// NOTE : based on https://codesandbox.io/p/sandbox/multiple-views-with-uniform-controls-r9w2ob?file=/src/App.js
// TODO : remove leva for prod
function SceneCamera() {
  const coords = new THREE.Vector3(0, 0, 4);
  const { orthographic } = useControls("Camera", {
    orthographic: true,
  });

  useThree((state) => {
    state.camera?.lookAt(new THREE.Vector3(0, 0));
    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      {!orthographic ? (
        <PerspectiveCamera makeDefault fov={25} position={coords} />
      ) : (
        <OrthographicCamera makeDefault zoom={280} position={coords} />
      )}
    </>
  );
}

SceneCamera.displayName = "SceneCamera";

// TODO : dev my own in view component based on https://github.com/pmndrs/react-three-fiber/discussions/769
// TODO : need to import a custom and higher resolution cubebox for the drei Environment or find a way to setup a background env
// @see @react-three/drei/Environment
export function HomeScene() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} style={{ height: "100%", width: "100%" }}>
      <Canvas frameloop={inView ? "always" : "never"}>
        <color attach="background" args={["#f0f0f0"]} />
        <SceneCamera />
        <Devutils />
        {/* scene setup */}
        <ambientLight intensity={0.5} />
        {/* objects */}
        <Computer scale={0.25} rotation={[0, -Math.PI / 2, 0]} />
      </Canvas>
    </div>
  );
}
