"use client";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import { useState } from "react";
import dataArts from "@/public/slider/data";
import { nanoid } from "nanoid";
import ItemArts from "./ItemArts";
import { useResize } from "../Hooks/use-resize";
import BlockButtons from "../BlockButtons/BlockButtons";
import data from "@/public/slider/data";

const Arts = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { isTablet, isDesktop } = useResize();

  return (
    <section id='arts' className={styles.container}>
      <div className={classNames(styles.title, style.titleComponent)}>
        COLLECTION
      </div>
      <div className={styles.mediaQuery}>
        <ItemArts key={nanoid()} src={data[currentImage]} />
        {(isTablet || isDesktop) && (
          <ItemArts key={nanoid()} src={data[currentImage + 1]} />
        )}
        {isDesktop && (
          <>
            <ItemArts key={nanoid()} src={data[currentImage + 2]} />
            <ItemArts key={nanoid()} src={data[currentImage + 3]} />
          </>
        )}
      </div>
      <BlockButtons
        current={currentImage}
        setCurrent={setCurrentImage}
        length={dataArts.length}
      />
    </section>
  );
};

export default Arts;
