import React from "react";
import IconSharp from "../IconSharp/IconSharp";
import styles from "./styles.module.css";

const TickerItem1 = () => {
  return <div>Destroy stereotypes</div>;
};
const TickerItem2 = () => {
  return <div>HAVE NO LIMITS</div>;
};
const TickerItem3 = () => {
  return <div>Break rules</div>;
};

const Separator = () => {
  return (
    <div className={styles.iconWrapper}>
      <IconSharp />
    </div>
  );
};

export const dataTicker = [
  TickerItem1,
  Separator,
  TickerItem2,
  Separator,
  TickerItem3,
  Separator,
];
