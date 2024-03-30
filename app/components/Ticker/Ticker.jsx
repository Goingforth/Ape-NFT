import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import { TickerItem1, TickerItem2, TickerItem3 } from "./TickerItems";
import IconSharp from "../IconSharp/IconSharp";

const Ticker = () => {
  return (
    <Marquee className={styles.ticker} play={false}>
      <div className={styles.tickerItem}>
        <TickerItem1 />
        <div className={styles.iconWrapper}>
          <IconSharp />
        </div>
        <TickerItem2 />
        <div className={styles.iconWrapper}>
          <IconSharp />
        </div>

        <TickerItem3 />
        <div className={styles.iconWrapper}>
          <IconSharp />
        </div>
      </div>
    </Marquee>
  );
};

export default Ticker;
