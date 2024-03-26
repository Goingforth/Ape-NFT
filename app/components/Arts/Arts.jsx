"use client";
import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import data from "@/public/slider/data";
import { nanoid } from "nanoid";
import ItemArts from "./ItemArts";
import { useResize } from "../Hooks/use-resize";

const Arts = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { isMobile, isTablet, isDesktop } = useResize();

  return (
    <section className={styles.container}>
      <div className={styles.title}>COLLECTION</div>
      {isMobile && (
        <ItemArts id={nanoid()} number={0} currentImage={currentImage} />
      )}
      {isTablet && (
        <div className={styles.mediaQuery}>
          <ItemArts id={nanoid()} number={0} currentImage={currentImage} />
          <ItemArts id={nanoid()} number={1} currentImage={currentImage} />
        </div>
      )}
      {isDesktop && (
        <div className={styles.mediaQuery}>
          <ItemArts id={nanoid()} number={0} currentImage={currentImage} />
          <ItemArts id={nanoid()} number={1} currentImage={currentImage} />
          <ItemArts id={nanoid()} number={2} currentImage={currentImage} />
          <ItemArts id={nanoid()} number={3} currentImage={currentImage} />
        </div>
      )}
      <div className={styles.blockButtoms}>
        <button
          className={styles.buttomArts}
          onClick={() => {
            if (currentImage > 0) setCurrentImage(currentImage - 1);
          }}
        >
          Prev
        </button>
        <button
          className={styles.buttomArts}
          onClick={() => {
            if (isMobile && currentImage < data.length - 1)
              setCurrentImage(currentImage + 1);
            if (isTablet && currentImage < data.length - 2)
              setCurrentImage(currentImage + 1);
            if (isDesktop && currentImage < data.length - 4)
              setCurrentImage(currentImage + 1);
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Arts;
