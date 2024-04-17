"use client";
import React from "react";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useResize } from "../Hooks/use-resize";

import { logo } from "../../image/logo/logo.jsx";
import Link from "next/link";
import styles from "./styles.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import MenuNav from "../MenuNav/MenuNav";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResize();

  return (
    <section
      id='#header'
      className={menuOn && isMobile ? styles.headerMenuOnMobile : styles.header}
    >
      <Link className={styles.logo} href='/'>
        {logo}
      </Link>
      <BurgerMenu menuOn={menuOn} setMenuOn={setMenuOn} isMobile={isMobile} />

      {menuOn && isMobile && <MobileMenu setMenuOn={setMenuOn} />}
      {menuOn && !isMobile && <MenuNav setMenuOn={setMenuOn} />}

      {menuOn && isMobile && (
        <div className={styles.footerMenuOn}>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default Header;
