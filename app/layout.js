import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import "./fonts/fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ape NFT",
  description: "Тестове завдання Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className={styles.container}>{children}</section>
      </body>
    </html>
  );
}
