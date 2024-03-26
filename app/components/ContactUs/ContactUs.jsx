"use client";
import React from "react";
import styles from "./styles.module.css";
import addSharp from "../../image/icon/add-sharp.svg";
import Image from "next/image";

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
  const onSubmit = () => {
    alert("Ok");
  };
  return (
    <section className={styles.container}>
      <div className={styles.title}>Are you in?</div>
      <div className={styles.iconX}>
        <Image priority src={addSharp} alt='addSharp' />
      </div>
      <div className={styles.textJoin}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <input id='username' type='text' name='username' />
        <input id='address' type='text' name='address' />
        <button type='submit' className={styles.buttonSubmit}>
          MINT
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
