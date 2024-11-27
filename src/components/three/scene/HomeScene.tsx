"use client"; // client side rendering

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Computer } from "../objects/Computer";
import { useInView } from "react-intersection-observer";
import { ScrollCamera, Instances } from "../utils/landing/GLTFLoadingUtils";

/**
 * HomeScene Component
 *
 * This component represents the main 3D scene for the home page. It uses the
 * `@react-three/fiber` library for rendering the scene and the `react-intersection-observer`
 * to control the rendering lifecycle based on the visibility of the container in the viewport.
 *
 * Features:
 * - Dynamically starts/stops the render loop based on visibility (`frameloop` optimization).
 * - Displays a 3D computer model and a custom scroll-controlled camera.
 *
 * @todo Optimize performance further by creating a custom `inView` hook
 * based on the discussion at https://github.com/pmndrs/react-three-fiber/discussions/769.
 *
 * @todo Add a higher-resolution cube map for the environment background or find
 * an alternative method to enhance the environment's quality.
 */
export function HomeScene() {
  // Track whether the component is in view using the Intersection Observer API
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ height: "100%", width: "100%", background: "#ADD8E6" }}
    >
      <Canvas frameloop={inView ? "always" : "never"}>
        <Instances>
          <Computer />
          <ScrollCamera />
        </Instances>
        {/* <Devutils /> */}
      </Canvas>
    </div>
  );
}
