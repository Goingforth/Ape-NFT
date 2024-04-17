import React from "react";
import ButtonSocialLink from "../ButtonSocialLink/ButtonSocialLink";
import { discord, logoMarkBlue, logoX } from "../../image/burgerMenu/index";
import styles from "./styles.module.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import SocialLinks from "../SocialLinks/SocialLinks";

const BurgerMenu = ({ menuOn, setMenuOn, isMobile }) => {
  return (
    <div className={styles.container}>
      <div className={!menuOn ? styles.wrapper : styles.wrapperMenuOn}>
        <ButtonMenu
          menuOn={menuOn}
          isMobile={isMobile}
          onClick={() => {
            menuOn ? setMenuOn(false) : setMenuOn(true);
          }}
          nameButton={menuOn ? "CLOSE" : "MENU"}
        />
      </div>
      <SocialLinks menuOn={menuOn} isMobile={isMobile} />
    </div>
  );
};

export default BurgerMenu;
