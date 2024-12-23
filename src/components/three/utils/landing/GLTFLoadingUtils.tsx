/*
Based on code generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

/**
 * Type definition for the loaded GLTF model.
 *
 * @property {Object} nodes - Individual 3D objects (meshes) in the GLTF model.
 * @property {Object} materials - Materials used in the GLTF model.
 */
type GLTFResult = GLTF & {
  nodes: {
    coffeMug: THREE.Mesh;
    mouse: THREE.Mesh;
    keyboard: THREE.Mesh;
    lamp: THREE.Mesh;
    computerBase: THREE.Mesh;
    computerScreen: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.000"]: THREE.MeshStandardMaterial;
  };
};

/**
 * Type for the context storing instances, materials, and animations.
 *
 * @property {Object} instances - Mapped instanced meshes for optimization.
 * @property {Object} materials - GLTF materials for the scene.
 * @property {Array} animations - GLTF animation clips.
 */
type ModelContextType = {
  instances: Record<
    string,
    React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
  >;
  materials: GLTFResult["materials"];
  animations: THREE.AnimationClip[];
};

/**
 * Context for sharing model instances and materials across the scene.
 */
const context = createContext<ModelContextType | null>(null);
/**
 * Instances Component
 *
 * A provider component for managing 3D instances and materials.
 * It creates instanced meshes for optimization and shares these via context.
 *
 * @param {PropsWithChildren} props - React children to be rendered inside the scene.
 * @todo Decouple the scene and Instances provider for more versatile use cases.
 */
export function Instances(props: PropsWithChildren) {
  const group = useRef<THREE.Group>(null!);

  const { nodes, materials, animations } = useGLTF(
    "/computer.glb",
  ) as GLTFResult;

  const instances = useMemo(
    () => ({
      coffeMug: nodes.coffeMug,
      mouse: nodes.mouse,
      keyboard: nodes.keyboard,
      lamp: nodes.lamp,
      computerBase: nodes.computerBase,
      computerScreen: nodes.computerScreen,
    }),
    [nodes],
  );

  const memoizedMaterials = useMemo<GLTFResult["materials"]>(
    () => materials,
    [materials],
  );

  return (
    <Merged meshes={instances}>
      {(
        instancedMeshes: Record<
          string,
          React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
        >,
      ) => (
        <context.Provider
          value={{
            instances: instancedMeshes,
            materials: memoizedMaterials,
            animations: animations,
          }}
        >
          <group ref={group} {...props} dispose={null}>
            <group name="Scene">{props.children}</group>
          </group>
        </context.Provider>
      )}
    </Merged>
  );
}
/**
 * Hook to access instances, materials, and animations from the context.
 *
 * @returns {ModelContextType} The context value with instances, materials, and animations.
 * @throws Error if the context is not properly initialized.
 */
export function useInstances(): ModelContextType {
  const instances = useContext(context);
  if (!instances) throw new Error("Instances context not properly initialized");
  return instances;
}
