import React from "react";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import styles from "./styles.module.css";
const dataNav = [
  { nameButton: "ABOUT", ref: "#about" },
  { nameButton: "M-MAP", ref: "#m-map" },
  { nameButton: "FAQ", ref: "#faq" },
  { nameButton: "ARTS", ref: "#arts" },
  { nameButton: "MINT", ref: "#mint" },
];
const MenuNav = ({ setMenuOn }) => {
  return (
    <div className={styles.menuNav}>
      {dataNav.map(({ nameButton, ref }) => (
        <ButtonMenu
          nameButton={nameButton}
          onClick={() => {
            setMenuOn(false);
            location.href = `${ref}`;
          }}
        />
      ))}
    </div>
  );
};

export default MenuNav;
