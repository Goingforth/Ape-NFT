import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const ButtonHeader = ({ onClick, name, icon, border, isMobile, menuOn }) => {
  return (
    <div className={border ? styles.border : ""}>
      <button
        onClick={onClick}
        className={classNames(styles.buttonHeader, styles.hoverClassColor)}
        style={
          isMobile && menuOn
            ? {
                backgroundColor: "var(--color-white_light)",
                "--hover-color": "var(--color-red)",
              }
            : {
                backgroundColor: "var(--color-grey)",
                "--hover-color": "var(--color-white)",
              }
        }
      >
        <div className={icon ? styles.wrapper : ""}> {name}</div>
      </button>
    </div>
  );
};

export default ButtonHeader;
