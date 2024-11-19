// import styles from "./page.module.css";
import { Footer } from "@/components/layout/footer/Footer";
import { LandingLayout } from "@/components/layout/home/Landing";

export default function Home() {
  return (
    <>
      <LandingLayout /> {/* Landing layout contains the header */}
      <div style={{ height: "100vh", background: "blue" }}>
        here goes the content
      </div>
      <Footer />
    </>
  );
}
