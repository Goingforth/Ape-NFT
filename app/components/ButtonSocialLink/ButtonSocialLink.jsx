import React from "react";
import styles from "./styles.module.css";

const ButtonSocialLink = ({ menuOn, icon, link, isMobile }) => {
  return (
    <>
      <button
        onClick={() => (location.href = `${link}`)}
        className={menuOn && isMobile ? styles.buttonMenuOn : styles.buttonMenu}
      >
        <div
          className={menuOn && isMobile ? styles.wrapperMenuOn : styles.wrapper}
        >
          {icon}
        </div>
      </button>
    </>
  );
};

export default ButtonSocialLink;
