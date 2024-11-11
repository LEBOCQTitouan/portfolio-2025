import React from "react";
import dynamic from "next/dynamic";

// based on https://github.com/vercel/next.js/issues/4515
// TODO : make loading screen
const HomeScene = dynamic(
  () =>
    import("@/components/three/scene/HomeScene").then(
      (importedModule) => importedModule.HomeScene,
    ),
  { ssr: false },
);

export function LandingView() {
  return (
    <>
      <HomeScene />
    </>
  );
}
