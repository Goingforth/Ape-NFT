import React from "react";
import styles from "./styles.module.css";
import { useResize } from "../Hooks/use-resize";

const BlockButtons = ({ current, setCurrent, length }) => {
  const { isMobile, isTablet, isDesktop } = useResize();

  return (
    <div className={styles.blockButtoms}>
      <button
        className={styles.buttomArts}
        onClick={() => {
          if (current > 0) setCurrent(current - 1);
        }}
      >
        Prev
      </button>
      <button
        className={styles.buttomArts}
        onClick={() => {
          if (isMobile && current < length - 1) setCurrent(current + 1);
          if (isTablet && current < length - 2) setCurrent(current + 1);
          if (isDesktop && current < length - 4) setCurrent(current + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default BlockButtons;
