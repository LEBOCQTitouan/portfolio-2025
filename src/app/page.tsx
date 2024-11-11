// import styles from "./page.module.css";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { LandingView } from "@/components/layout/home/Landing";

export default function Home() {
  return (
    <>
      <Header />
      <LandingView />
      <Footer />
    </>
  );
}
