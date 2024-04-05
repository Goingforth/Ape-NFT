import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
const CardMindMap = ({ title, info, isActive }) => {
  return (
    <>
      {!isActive ? (
        <div className={styles.cardContainer}>
          <div className={styles.cardInfo}>{info}</div>
          <div className={styles.cardTitle}>{title}</div>
        </div>
      ) : (
        <Link
          href='https://www.ukr.net/'
          target='_blank'
          className={styles.cardContainer}
          style={{ backgroundColor: "var(--color-red)" }}
        >
          <div className={styles.cardInfo}>
            <div className={styles.wrapper}>{info}</div>
          </div>
          <div className={styles.cardTitle}>{title}</div>
        </Link>
      )}
    </>
  );
};

export default CardMindMap;
