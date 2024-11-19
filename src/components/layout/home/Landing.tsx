import React from "react";
import dynamic from "next/dynamic";
import styles from "./Landing.module.css";

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
  return (
    <div className={styles.landingScrolledWrapper}>
      <div className={styles.canvasHolder}>
        some content
        <HomeScene />
      </div>
      <div>other element</div>
    </div>
  );
}
