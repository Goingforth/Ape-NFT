import React from "react";
import { nanoid } from "nanoid";
import styles from "./styles.module.css";

const ButtonMenu = ({ menuOn, onClick, nameButton, isMobile }) => {
  return (
    <div>
      <button
        key={nanoid()}
        onClick={onClick}
        className={menuOn && isMobile ? styles.buttonMenuOn : styles.buttonMenu}
      >
        {nameButton}
      </button>
    </div>
  );
};

export default ButtonMenu;
