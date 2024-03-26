import About from "./components/About/About";
import Arts from "./components/Arts/Arts";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Arts />
      <ContactUs />
      <Footer />
    </main>
  );
}
