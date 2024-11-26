"use client";
import styles from "./Landing.module.css";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useScrollPercentage } from "@/components/utils/useScrollPercentage";
import { useLandingAnimation } from "@/components/three/utils/landing/LandingStore";

// based on https://github.com/vercel/next.js/issues/4515
// TODO : make loading screen
const HomeScene = dynamic(
  () =>
    import("@/components/three/scene/HomeScene").then(
      (importedModule) => importedModule.HomeScene,
    ),
  { ssr: false },
);

// TODO : error handling with Canvas
export function LandingLayout() {
  const { ref, percentage } = useScrollPercentage(); // eslint-disable-line
  const { setPercentage } = useLandingAnimation();

  // update store when scroll percentage value changes
  useEffect(() => {
    setPercentage(percentage); // Update Zustand store with new scroll percentage
  }, [percentage, setPercentage]);

  return (
    <div className={styles.landingScrolledWrapper}>
      <div className={styles.canvasHolder}>
        <HomeScene />
      </div>
      <div ref={ref} className={styles.scrollSpace} />
    </div>
  );
}
