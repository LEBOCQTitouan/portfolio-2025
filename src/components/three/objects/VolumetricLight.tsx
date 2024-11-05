import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Mesh } from "three";

export const VolumetricLightSource = () => {
  const MeshRef = useRef<Mesh>(null!);
  const colorMap = useLoader(TextureLoader, "test-texture.jpg");
  return (
    <mesh ref={MeshRef}>
      <boxGeometry />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  );
};
