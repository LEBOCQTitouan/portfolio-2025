"use client"; // client side rendering

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Computer } from "../objects/Computer";
import { useInView } from "react-intersection-observer";
import { ScrollCamera, Instances } from "../utils/landing/GLTFLoadingUtils";

// NOTE : TODOS performances
// TODO : dev my own inView component based on https://github.com/pmndrs/react-three-fiber/discussions/769 @see react-intersection-observer
// NOTE : 3D scene
// TODO : need to import a custom and higher resolution cubebox for the drei Environment or find a way to setup a background env

export function HomeScene() {
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
