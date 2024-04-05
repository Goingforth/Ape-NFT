"use client";
import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import dataArts from "@/public/slider/data";
import { nanoid } from "nanoid";
import ItemArts from "./ItemArts";
import { useResize } from "../Hooks/use-resize";
import BlockButtons from "../BlockButtons/BlockButtons";

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
      <BlockButtons
        current={currentImage}
        setCurrent={setCurrentImage}
        length={dataArts.length}
      />
    </section>
  );
};

export default Arts;
