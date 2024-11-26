"use client"; // client side rendering

// TODO : remove eslint-disable-line

import React from "react";
import * as THREE from "three"; // eslint-disable-line
import { Canvas } from "@react-three/fiber";
import { Computer } from "../objects/Computer";
import { Devutils } from "../utils/DevUtils";
import { useInView } from "react-intersection-observer";
import { Camera, Instances } from "../utils/landing/GLTFLoadingUtils";

// TODO : dev my own in view component based on https://github.com/pmndrs/react-three-fiber/discussions/769
// TODO : need to import a custom and higher resolution cubebox for the drei Environment or find a way to setup a background env
// @see @react-three/drei/Environment
export function HomeScene() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} style={{ height: "100%", width: "100%" }}>
      <Canvas frameloop={inView ? "always" : "never"}>
        <color attach="background" args={["#f0f0f0"]} />
        <Instances>
          <Computer />
          <Camera />
        </Instances>
        <Devutils />
      </Canvas>
    </div>
  );
}
