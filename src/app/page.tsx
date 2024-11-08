// import styles from "./page.module.css";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
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

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <HomeScene />
      </div>
      <Footer />
    </>
  );
}
