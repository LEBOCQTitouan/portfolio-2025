import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useInstances } from "../utils/landing/GLTFLoadingUtils";
import { useLandingAnimation } from "../utils/landing/LandingStore";
import { PerspectiveCamera, useAnimations } from "@react-three/drei";

/**
 * ScrollCamera Component
 *
 * A scroll-controlled camera that adjusts its position based on
 * the current scroll percentage. Integrates with GLTF animations.
 *
 * @todo Move this component to a separate file for better organization.
 * @note Verified animations using https://gltf-viewer.donmccurdy.com/
 */
export function ScrollCamera() {
  const group = useRef<THREE.Group>(null!);
  const { animations } = useInstances();
  const { percentage } = useLandingAnimation();

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["CameraAction"]) {
      const action = actions["CameraAction"];
      action.paused = true;
      action.time = action.getClip().duration * percentage;
      action.play();
    }
  }, [actions, percentage]);

  return (
    <group
      ref={group}
      name="Camera"
      position={[11.645, 12.782, -11.372]}
      rotation={[-2.36, 0.628, 2.614]}
    >
      <PerspectiveCamera makeDefault={true} far={100} near={0.1} fov={61.555} />
    </group>
  );
}
