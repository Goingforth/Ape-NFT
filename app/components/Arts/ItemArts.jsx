import React from "react";
import styles from "./styles.module.css";
import data from "@/public/slider/data";

const ItemArts = ({ number, currentImage }) => {
  return (
    <div className={styles.itemArts}>
      <img
        className={styles.imgArts}
        src={data[currentImage + number]}
        alt='Picture of the NFT'
      />
    </div>
  );
};

export default ItemArts;
