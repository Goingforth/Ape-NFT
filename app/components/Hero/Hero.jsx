"use client";
import React from "react";

import Image from "next/image";

import styles from "./styles.module.css";
import { heroMobile, heroTablet, heroDesktop } from "../../image/hero/index";
import { useResize } from "../Hooks/use-resize";

import Header from "../Header/Header";

const Hero = () => {
  const { isMobile, isTablet, isDesktop } = useResize();

  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.heroText1}>diD yOu seE iT ?</div>
      <div className={styles.heroTitle}>
        <span>YACHT</span> <span>APES</span>
      </div>
      <div className={styles.heroText2}>Apes aRe eveRywhere</div>
      <Image
        priority
        src={isMobile ? heroMobile : isTablet ? heroTablet : heroDesktop}
        alt='heroImage'
        className={styles.imageHero}
      />
      <button
        type='button'
        onClick={() => (location.href = "#mint")}
        className={styles.heroButton}
      >
        MEET APES
      </button>
      {isMobile && (
        <div className={styles.heroText3}>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </div>
      )}
      {isTablet && (
        <div className={styles.heroText3}>
          <div style={{ textAlign: "right" }}>Yacht Ape is a</div>
          <div style={{ textAlign: "justify" }}>
            collection of unique digital apes that you can own in NFT format
          </div>
        </div>
      )}
      {isDesktop && (
        <div className={styles.heroText3}>
          <div style={{ textAlign: "right" }}>Yacht Ape is a collection</div>
          <div style={{ textAlign: "justify" }}>
            of unique digital apes that you can own in NFT format
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
