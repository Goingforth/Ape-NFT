import React from "react";
import styles from "./styles.module.css";

const MobileMenu = ({ setMenuOn }) => {
  const onClick = () => {
    setMenuOn(false);
  };
  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href='#about' onClick={onClick}>
            ABOUT
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#m-map' onClick={onClick}>
            M-MAP
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#faq' onClick={onClick}>
            FAQ
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#arts' onClick={onClick}>
            ARTS
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href='#mint' onClick={onClick}>
            MINT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
