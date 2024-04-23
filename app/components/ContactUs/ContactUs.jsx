"use client";
import React from "react";
import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import addSharp from "../../image/icon/add-sharp.png";
import Image from "next/image";
import { discordIcon, metalMask } from "@/app/image/icon";

const ContactUs = () => {
  // async function onSubmit(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const response = await fetch("/api/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   // Handle response if necessary
  //   const data = await response.json();
  //   // ...
  // }
  const [username, setUsername] = useState();
  const [address, setAddress] = useState();
  const onSubmit = () => {
    alert("Ok");
  };
  return (
    <section id='mint' className={styles.container}>
      <div className={classNames(styles.title, style.titleComponent)}>
        Are you in?
      </div>
      <div className={styles.iconX}>
        <Image priority src={addSharp} alt='addSharp' />
      </div>
      <div className={styles.textJoin}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formItem}>
          <div className={styles.wrapperIcon}>
            <Image src={discordIcon} alt='discord' width={24} height={24} />
          </div>

          <input
            id='username'
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='@username'
            className={styles.formInput}
          />
        </div>
        <div className={styles.formItem}>
          <div className={styles.wrapperIcon}>
            <Image src={metalMask} alt='metalMask' width={24} height={24} />
          </div>
          <input
            id='address'
            type='text'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Wallet address'
            className={styles.formInput}
          />
        </div>
        <button type='submit' className={styles.buttonSubmit}>
          MINT
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
