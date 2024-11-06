import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Group, Mesh, TextureLoader } from "three";

const Planet = () => {
  const meshRef = useRef<Mesh>(null!);
  const colorMap = useLoader(TextureLoader, "test-texture.jpg");

  useFrame(({ clock }) => {
    // meshRef.current.rotation.x = clock.getElapsedTime();
    meshRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

const Cube = () => {
  const [colorMap, normalMap] = useLoader(TextureLoader, [
    "water-color.jpg",
    "water-normal.jpg",
  ]);

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        transparent
        opacity={0.5}
        map={colorMap}
        normalMap={normalMap}
      />
    </mesh>
  );
};

export const Avatar = () => {
  const groupRef = useRef<Group>(null!);

  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x * viewport.width) / 2.5;
    const y = (pointer.y * viewport.height) / 2.5;
    groupRef.current.lookAt(x, y, 1);
  });
  return (
    <group ref={groupRef}>
      <Cube />
      <Planet />
    </group>
  );
};
