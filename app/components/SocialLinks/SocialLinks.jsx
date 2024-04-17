import React from "react";
import ButtonSocialLink from "../ButtonSocialLink/ButtonSocialLink";
import { discord, logoMarkBlue, logoX } from "../../image/burgerMenu/index";
import styles from "./styles.module.css";

const SocialLinks = ({ menuOn, isMobile }) => {
  return (
    <div className={styles.container}>
      <ButtonSocialLink
        menuOn={menuOn}
        isMobile={isMobile}
        icon={discord}
        link='https://discord.com/'
      />
      <ButtonSocialLink
        menuOn={menuOn}
        isMobile={isMobile}
        icon={logoMarkBlue}
        link='https://youtube.com/'
      />
      <ButtonSocialLink
        menuOn={menuOn}
        isMobile={isMobile}
        icon={logoX}
        link='https://twitter.com/'
      />
    </div>
  );
};

export default SocialLinks;
