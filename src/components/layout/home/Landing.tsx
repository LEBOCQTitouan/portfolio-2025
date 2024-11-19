"use client";
import styles from "./Landing.module.css";

import React from "react";
import dynamic from "next/dynamic";
import { useScrollPercentage } from "@/components/utils/useScrollPercentage";

// based on https://github.com/vercel/next.js/issues/4515
// TODO : make loading screen
const HomeScene = dynamic(
  () =>
    import("@/components/three/scene/HomeScene").then(
      (importedModule) => importedModule.HomeScene,
    ),
  { ssr: false },
);

export function LandingLayout() {
  const { ref, percentage } = useScrollPercentage(); // eslint-disable-line

  return (
    <div className={styles.landingScrolledWrapper}>
      <div className={styles.canvasHolder}>
        <HomeScene />
      </div>
      <div ref={ref} className={styles.scrollSpace} />
    </div>
  );
}
