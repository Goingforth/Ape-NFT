import About from "./components/About/About";
import Arts from "./components/Arts/Arts";
import FAQ from "./components/FAQ/FAQ.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import MindMap from "./components/MIndMap/MindMap";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <ContactUs />
      <Footer />
    </main>
  );
}
