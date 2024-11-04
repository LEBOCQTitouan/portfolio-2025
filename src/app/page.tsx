// import styles from "./page.module.css";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { HomeScene } from "@/components/three/HomeScene";

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
