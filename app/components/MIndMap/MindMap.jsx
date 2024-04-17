"use client";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import { useState } from "react";
import dataCards from "@/app/const/dataCards";
import { nanoid } from "nanoid";
import CardMindMap from "./CardMindMap";
import { useResize } from "../Hooks/use-resize";
import BlockButtons from "../BlockButtons/BlockButtons";

import { Card0, Card1, Card2, Card3 } from "./CardsMindMap";

const MindMap = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const { isMobile } = useResize();
  const { title, info, isActive } = dataCards[currentCard];

  return (
    <section id='m-map' className={styles.container}>
      <div className={classNames(styles.title, style.titleComponent)}>
        MIND MAP
      </div>

      {isMobile && (
        <CardMindMap
          key={nanoid()}
          title={title}
          info={info}
          isActive={isActive}
        />
      )}
      {!isMobile && (
        <div className={styles.mediaQuery}>
          <Card0 />
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      )}

      {isMobile && (
        <BlockButtons
          current={currentCard}
          setCurrent={setCurrentCard}
          length={dataCards.length}
        />
      )}
    </section>
  );
};

export default MindMap;
